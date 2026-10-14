/* fff bunker — shared behaviour. Put <script src="shared.js"></script> at the END of <body>.
 * Pages are ONE html file with TWO views: <section data-view="home"> and <section data-view="portfolio">.
 * Routes are hash based: "#/" (home) and "#/portfolio". Nav links: <a data-nav="home" href="#/">  <a data-nav="portfolio" href="#/portfolio">
 *
 * ROUTER   html[data-route="home|portfolio"]; html[data-nav-state="leaving|entering"] during a transition (duration = CSS var --route-ms
 *          on :root, default 500ms; the OLD view stays visible while "leaving", the NEW view is shown when "entering" starts).
 *          Events on document: 'route:before' {from,to}, 'route:after' {route}. Use them or pure CSS (html[data-nav-state]…).
 *          Views get the [hidden] attribute when inactive. window scrolls to top on route change. document.title <- view's data-title.
 * NAV      a[data-nav] gets aria-current="page" when active.  [data-menu-toggle] button toggles html[data-menu="open"] (mobile menu); links close it.
 * LANG     [data-l="th"] / [data-l="en"] spans (CSS in shared.css). Buttons: [data-lang-set="th|en"] or [data-w="lang-switch"] (toggle).
 *          Persisted 'fff-lang'. Event 'fff:lang'.
 * THEME    [data-w="theme-toggle"] toggles html[data-theme="dark|light"] (default from <html data-theme> or "dark"); persisted 'fff-theme'.
 * REVEAL   [data-reveal] gets class "in" when scrolled into view (stagger: set --i or it is set per parent). Style .in yourself (shared.css has a default).
 * SPLIT    [data-split="chars|words"] splits text into <span class="sp" style="--i:n"> (aria-label keeps the real text, spans aria-hidden);
 *          the parent gets --n. Use for staggered headline animation. Re-split on language change is handled (put data-split on the data-l spans).
 * COUNT    [data-count="42"] counts up from 0 when visible (optional data-suffix="%").
 * MAGNET   [data-magnet] nudges toward the pointer.
 * TIME     [data-w="time"] HH:MM   [data-w="seconds"] SS   [data-w="date"] YYYY/MM/DD   [data-w="year"] YYYY   (live)
 * VARS     --mx --my (pointer -1..1)   --px --py (pointer px)   --sp (page scroll progress 0..1)   updated on html.
 */
(function(){
  "use strict";
  var root=document.documentElement, store=null;
  try{store=window.localStorage}catch(e){}
  function get(k){try{return store&&store.getItem(k)}catch(e){return null}}
  function put(k,v){try{store&&store.setItem(k,v)}catch(e){}}
  function $$(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))}
  function ev(n,d){document.dispatchEvent(new CustomEvent(n,{detail:d}))}
  function pad(n){return n<10?"0"+n:""+n}
  var reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- language ---------- */
  function lang(){return root.lang==="th"?"th":"en"}
  function setLang(l,silent){
    root.lang=l;if(!silent)put("fff-lang",l);
    $$("[data-lang-set]").forEach(function(b){b.setAttribute("aria-pressed",String(b.dataset.langSet===l))});
    $$('[data-w="lang-switch"]').forEach(function(b){b.setAttribute("aria-checked",String(l==="en"));b.setAttribute("aria-pressed",String(l==="en"))});
    splitAll();ev("fff:lang",{lang:l});
  }
  $$("[data-lang-set]").forEach(function(b){b.addEventListener("click",function(){setLang(b.dataset.langSet)})});
  $$('[data-w="lang-switch"]').forEach(function(b){b.addEventListener("click",function(){setLang(lang()==="th"?"en":"th")})});

  /* ---------- theme ---------- */
  function setTheme(t,silent){
    root.setAttribute("data-theme",t);if(!silent)put("fff-theme",t);
    $$('[data-w="theme-toggle"]').forEach(function(b){b.setAttribute("aria-checked",String(t==="dark"));b.setAttribute("aria-pressed",String(t==="dark"))});
    ev("fff:theme",{theme:t});
  }
  var themeDefault=root.getAttribute("data-theme")||"dark";
  $$('[data-w="theme-toggle"]').forEach(function(b){b.addEventListener("click",function(){setTheme(root.getAttribute("data-theme")==="dark"?"light":"dark")})});

  /* ---------- split text ---------- */
  function splitEl(el){
    var text=el.getAttribute("data-split-src");
    if(text===null){text=el.textContent;el.setAttribute("data-split-src",text)}
    var mode=el.dataset.split==="words"?"words":"chars",parts=[],i;
    var L=el.closest("[data-l]");var lg=L?L.getAttribute("data-l"):lang();
    if(window.Intl&&Intl.Segmenter){
      var seg=new Intl.Segmenter(lg==="th"?"th":"en",{granularity:mode==="words"?"word":"grapheme"});
      parts=Array.from(seg.segment(text),function(s){return s.segment});
    }else parts=mode==="words"?text.split(/(\s+)/):Array.from(text);
    el.setAttribute("aria-label",text);el.textContent="";
    var n=0,frag=document.createDocumentFragment();
    parts.forEach(function(p){
      if(/^\s+$/.test(p)){frag.appendChild(document.createTextNode(p));return}
      var s=document.createElement("span");s.className="sp";s.setAttribute("aria-hidden","true");s.style.setProperty("--i",n++);s.textContent=p;frag.appendChild(s);
    });
    el.appendChild(frag);el.style.setProperty("--n",n);
  }
  function splitAll(){$$("[data-split]").forEach(splitEl)}

  /* ---------- reveal + count ---------- */
  var io=null;
  function countUp(el){
    var to=parseFloat(el.dataset.count),suf=el.dataset.suffix||"";
    if(isNaN(to))return;
    if(reduce){el.textContent=to+suf;return}
    var t0=null;function step(t){if(t0===null)t0=t;var k=Math.min(1,(t-t0)/1400),e=1-Math.pow(1-k,3);el.textContent=Math.round(to*e)+suf;if(k<1)requestAnimationFrame(step)}
    requestAnimationFrame(step);
  }
  function setupIO(){
    if(!("IntersectionObserver" in window)){$$("[data-reveal]").forEach(function(e){e.classList.add("in")});$$("[data-count]").forEach(countUp);return}
    io=new IntersectionObserver(function(es){es.forEach(function(e){
      if(!e.isIntersecting)return;
      var t=e.target;
      if(t.hasAttribute("data-reveal"))t.classList.add("in");
      if(t.hasAttribute("data-count")&&!t._counted){t._counted=1;countUp(t)}
      io.unobserve(t);
    })},{threshold:.15});
    $$("[data-reveal],[data-count]").forEach(function(e,i){
      if(e.hasAttribute("data-reveal")&&!e.style.getPropertyValue("--i")){
        var sibs=e.parentNode?Array.prototype.filter.call(e.parentNode.children,function(c){return c.hasAttribute("data-reveal")}):[e];
        e.style.setProperty("--i",sibs.indexOf(e));
      }
      io.observe(e);
    });
  }

  /* ---------- router ---------- */
  var views=$$("[data-view]"),current=null,busy=false,pending=null;
  function fromHash(){var h=location.hash.replace(/^#\/?/,"").split(/[?\/]/)[0];return h==="portfolio"?"portfolio":"home"}
  function ms(){var v=parseFloat(getComputedStyle(root).getPropertyValue("--route-ms"));return isNaN(v)?500:v}
  function show(name){
    views.forEach(function(v){v.hidden=v.dataset.view!==name});
    current=name;root.setAttribute("data-route",name);
    $$("[data-nav]").forEach(function(a){if(a.dataset.nav===name)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")});
    var v=views.filter(function(x){return x.dataset.view===name})[0];if(v&&v.dataset.title)document.title=v.dataset.title;
    root.removeAttribute("data-menu");window.scrollTo(0,0);
    ev("route:after",{route:name});
  }
  function go(name){
    if(busy){pending=name;return}
    if(name===current)return;
    if(current===null||reduce){show(name);return}
    busy=true;root.setAttribute("data-nav-state","leaving");ev("route:before",{from:current,to:name});
    setTimeout(function(){
      show(name);root.setAttribute("data-nav-state","entering");
      setTimeout(function(){
        root.removeAttribute("data-nav-state");busy=false;
        if(pending&&pending!==current){var p=pending;pending=null;go(p)}else pending=null;
      },ms());
    },ms());
  }
  addEventListener("hashchange",function(){go(fromHash())});
  $$("[data-menu-toggle]").forEach(function(b){b.setAttribute("aria-expanded","false");b.addEventListener("click",function(){
    var open=root.getAttribute("data-menu")==="open";if(open)root.removeAttribute("data-menu");else root.setAttribute("data-menu","open");b.setAttribute("aria-expanded",String(!open));
  })});

  /* ---------- magnet ---------- */
  var mags=$$("[data-magnet]");
  addEventListener("pointermove",function(e){
    mags.forEach(function(m){
      var r=m.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,dx=e.clientX-cx,dy=e.clientY-cy,d=Math.hypot(dx,dy),R=Math.max(r.width,r.height)*.9;
      if(d<R&&!reduce){m.style.transform="translate("+(dx*.22).toFixed(1)+"px,"+(dy*.22).toFixed(1)+"px)"}else if(m.style.transform){m.style.transform=""}
    });
  },{passive:true});

  /* ---------- pointer + scroll vars ---------- */
  var raf=0,px=innerWidth/2,py=innerHeight/2;
  function vars(){
    raf=0;
    root.style.setProperty("--mx",((px/innerWidth)*2-1).toFixed(3));root.style.setProperty("--my",((py/innerHeight)*2-1).toFixed(3));
    root.style.setProperty("--px",px+"px");root.style.setProperty("--py",py+"px");
    var max=root.scrollHeight-innerHeight;root.style.setProperty("--sp",max>0?Math.min(1,Math.max(0,scrollY/max)).toFixed(4):"0");
  }
  function sched(){if(!raf)raf=requestAnimationFrame(vars)}
  addEventListener("pointermove",function(e){px=e.clientX;py=e.clientY;sched()},{passive:true});
  addEventListener("scroll",sched,{passive:true});addEventListener("resize",sched);

  /* ---------- live time ---------- */
  function tick(){
    var d=new Date();
    $$('[data-w="time"]').forEach(function(e){e.textContent=pad(d.getHours())+":"+pad(d.getMinutes())});
    $$('[data-w="seconds"]').forEach(function(e){e.textContent=pad(d.getSeconds())});
    $$('[data-w="date"]').forEach(function(e){e.textContent=d.getFullYear()+"/"+pad(d.getMonth()+1)+"/"+pad(d.getDate())});
    $$('[data-w="year"]').forEach(function(e){e.textContent=d.getFullYear()});
  }

  /* ---------- go ---------- */
  var saved=get("fff-lang");
  setLang(saved||((navigator.language||"").toLowerCase().indexOf("th")===0?"th":"en"),true);
  setTheme(get("fff-theme")||themeDefault,true);
  tick();setInterval(tick,1000);
  vars();
  show(fromHash());
  setupIO();
  root.setAttribute("data-ready","1");
  window.FFFB={go:function(n){location.hash=n==="portfolio"?"#/portfolio":"#/"},lang:lang,setLang:setLang,setTheme:setTheme,route:function(){return current}};
})();
