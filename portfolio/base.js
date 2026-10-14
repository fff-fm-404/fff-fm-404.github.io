/* folio helpers. Load AFTER data.js:  <script src="data.js"></script><script src="base.js"></script>
 * window.FFFP = {
 *   data            the FFF_DATA object
 *   lang()          'en' | 'th'            setLang(l)
 *   t(o)            current-language string of a {en,th} object
 *   L(o)            HTML: <span data-l="en">..</span><span data-l="th">..</span> (escaped). CSS in base.css shows the right one.
 *   esc(s)          HTML-escape
 *   years()         years since data.person.since
 *   onLang(fn)      call fn(lang) now and whenever the language changes (use to re-render non-[data-l] text, e.g. alt/aria-label)
 *   reveal(root)    observe [data-reveal] inside root (call after injecting HTML). Adds class "in" when visible. --i stagger index is set per parent.
 *   modal.open(el, opener, onClose)   open a role=dialog element: un-hides it, makes everything else inert, locks scroll, traps Tab,
 *                                      Esc closes, focus -> [data-autofocus] or first focusable, restores focus to opener on close.
 *   modal.close()
 * }
 * Hooks handled automatically:
 *   [data-lang-set="th|en"] buttons, [data-w="lang-switch"] toggle button  -> language (persisted 'fff-lang'), html[lang]
 *   [data-w="theme-toggle"] button -> html[data-theme="light|dark"] (persisted 'fff-theme'; default = <html data-theme> or 'light')
 *   a[data-spy] with href="#id" -> aria-current="true" while that section is in view
 *   [data-count="42"] (+ data-suffix) -> counts up when visible
 *   [data-menu-toggle] -> toggles html[data-menu="open"]; clicking a link inside [data-menu-panel] closes it
 *   CSS vars on <html>: --mx --my (pointer -1..1), --px --py (px), --sp (page scroll progress 0..1)
 */
(function(){
  "use strict";
  var R=document.documentElement,D=window.FFF_DATA||{},store=null;
  try{store=window.localStorage}catch(e){}
  function get(k){try{return store&&store.getItem(k)}catch(e){return null}}
  function put(k,v){try{store&&store.setItem(k,v)}catch(e){}}
  function $$(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))}
  var reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
  function esc(s){return String(s).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
  function lang(){return R.lang==="th"?"th":"en"}
  function t(o){return o?o[lang()]:""}
  function L(o){return '<span data-l="en">'+esc(o.en)+'</span><span data-l="th">'+esc(o.th)+'</span>'}
  var langFns=[];
  function setLang(l,silent){
    R.lang=l;if(!silent)put("fff-lang",l);
    $$("[data-lang-set]").forEach(function(b){b.setAttribute("aria-pressed",String(b.dataset.langSet===l))});
    $$('[data-w="lang-switch"]').forEach(function(b){b.setAttribute("aria-pressed",String(l==="en"));b.setAttribute("aria-label",l==="th"?"Switch to English":"เปลี่ยนเป็นภาษาไทย")});
    langFns.forEach(function(f){f(l)});
    document.dispatchEvent(new CustomEvent("fff:lang",{detail:{lang:l}}));
  }
  function onLang(fn){langFns.push(fn);fn(lang())}
  $$("[data-lang-set]").forEach(function(b){b.addEventListener("click",function(){setLang(b.dataset.langSet)})});
  $$('[data-w="lang-switch"]').forEach(function(b){b.addEventListener("click",function(){setLang(lang()==="th"?"en":"th")})});

  /* theme */
  function setTheme(v,silent){R.setAttribute("data-theme",v);if(!silent)put("fff-theme",v);$$('[data-w="theme-toggle"]').forEach(function(b){b.setAttribute("aria-pressed",String(v==="dark"))})}
  var themeDefault=R.getAttribute("data-theme")||"light";
  $$('[data-w="theme-toggle"]').forEach(function(b){b.addEventListener("click",function(){setTheme(R.getAttribute("data-theme")==="dark"?"light":"dark")})});

  /* reveal + count */
  var io=null;
  function countUp(el){var to=parseFloat(el.dataset.count),suf=el.dataset.suffix||"";if(isNaN(to))return;if(reduce){el.textContent=to+suf;return}
    var t0=null;(function step(ts){if(t0===null)t0=ts;var k=Math.min(1,(ts-t0)/1300),e=1-Math.pow(1-k,3);el.textContent=Math.round(to*e)+suf;if(k<1)requestAnimationFrame(step)})(performance.now?performance.now():0)}
  function watch(root){
    var els=$$("[data-reveal],[data-count]",root);
    if(!("IntersectionObserver" in window)){els.forEach(function(e){e.classList.add("in");if(e.hasAttribute("data-count"))countUp(e)});return}
    if(!io)io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var n=e.target;n.classList.add("in");if(n.hasAttribute("data-count")&&!n._c){n._c=1;countUp(n)}io.unobserve(n)})},{threshold:.12,rootMargin:"0px 0px -4% 0px"});
    els.forEach(function(e){
      if(e.hasAttribute("data-reveal")&&e.style.getPropertyValue("--i")===""&&e.parentNode){var sib=Array.prototype.filter.call(e.parentNode.children,function(c){return c.hasAttribute("data-reveal")});e.style.setProperty("--i",sib.indexOf(e))}
      io.observe(e)});
  }

  /* modal */
  var active=null;
  function focusables(el){return $$('a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])',el).filter(function(x){return x.getClientRects().length})}
  function onKey(e){
    if(!active)return;
    if(e.key==="Escape"){e.preventDefault();close();return}
    if(e.key==="Tab"){var f=focusables(active.el);if(!f.length){e.preventDefault();return}
      var a=f[0],z=f[f.length-1];
      if(e.shiftKey&&(document.activeElement===a||!active.el.contains(document.activeElement))){e.preventDefault();z.focus()}
      else if(!e.shiftKey&&(document.activeElement===z||!active.el.contains(document.activeElement))){e.preventDefault();a.focus()}}
  }
  function open(el,opener,onClose){
    close();
    var others=Array.prototype.filter.call(document.body.children,function(c){return c!==el&&c.tagName!=="SCRIPT"&&!c.inert});
    others.forEach(function(c){c.inert=true});
    active={el:el,opener:opener||document.activeElement,onClose:onClose,others:others};
    el.hidden=false;el.setAttribute("aria-modal","true");if(!el.hasAttribute("role"))el.setAttribute("role","dialog");
    R.style.overflow="hidden";
    var f=el.querySelector("[data-autofocus]")||focusables(el)[0];if(f)f.focus();
  }
  function close(){
    if(!active)return;var a=active;active=null;
    a.others.forEach(function(c){c.inert=false});
    a.el.hidden=true;R.style.overflow="";
    if(a.onClose)a.onClose();
    if(a.opener&&a.opener.focus)a.opener.focus();
  }
  document.addEventListener("keydown",onKey);

  /* menu */
  $$("[data-menu-toggle]").forEach(function(b){b.setAttribute("aria-expanded","false");b.addEventListener("click",function(){var o=R.getAttribute("data-menu")==="open";if(o)R.removeAttribute("data-menu");else R.setAttribute("data-menu","open");b.setAttribute("aria-expanded",String(!o))})});
  $$("[data-menu-panel] a").forEach(function(a){a.addEventListener("click",function(){R.removeAttribute("data-menu");$$("[data-menu-toggle]").forEach(function(b){b.setAttribute("aria-expanded","false")})})});

  /* scroll spy */
  var spy=$$("a[data-spy]");
  if(spy.length&&"IntersectionObserver" in window){
    var map={};spy.forEach(function(a){var id=(a.getAttribute("href")||"").replace("#","");var s=id&&document.getElementById(id);if(s)map[id]={a:a,s:s}});
    var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){spy.forEach(function(a){a.removeAttribute("aria-current")});var m=map[e.target.id];if(m)m.a.setAttribute("aria-current","true")}})},{rootMargin:"-40% 0px -55% 0px"});
    Object.keys(map).forEach(function(k){so.observe(map[k].s)});
  }

  /* pointer + scroll vars */
  var raf=0,px=innerWidth/2,py=innerHeight/2;
  function vars(){raf=0;R.style.setProperty("--mx",((px/innerWidth)*2-1).toFixed(3));R.style.setProperty("--my",((py/innerHeight)*2-1).toFixed(3));R.style.setProperty("--px",px+"px");R.style.setProperty("--py",py+"px");var m=R.scrollHeight-innerHeight;R.style.setProperty("--sp",m>0?Math.min(1,Math.max(0,scrollY/m)).toFixed(4):"0")}
  function sched(){if(!raf)raf=requestAnimationFrame(vars)}
  addEventListener("pointermove",function(e){px=e.clientX;py=e.clientY;sched()},{passive:true});addEventListener("scroll",sched,{passive:true});addEventListener("resize",sched);

  /* go */
  setLang(get("fff-lang")||((navigator.language||"").toLowerCase().indexOf("th")===0?"th":"en"),true);
  setTheme(get("fff-theme")||themeDefault,true);
  vars();
  document.addEventListener("DOMContentLoaded",function(){watch(document)});
  if(document.readyState!=="loading")watch(document);
  window.FFFP={data:D,lang:lang,setLang:setLang,t:t,L:L,esc:esc,years:function(){return new Date().getFullYear()-(D.person?D.person.since:2016)},onLang:onLang,reveal:watch,modal:{open:open,close:close}};
})();
