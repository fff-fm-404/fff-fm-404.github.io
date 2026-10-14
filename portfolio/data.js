/* Portfolio data for Saranyaphong Metkaruchit. Profile, experience, education and skills come from the owner's CV (Saranyaphong_Metkaruchit_CV_2024_11_04);
   projects + screenshots come from the owner's Portfolio repo. Bilingual objects are {en, th}. Do NOT invent facts: only use what is here.
   Phone number, birth date, age, address and the CV's reference contacts are intentionally NOT published.
   One short role in the CV (Trienpont International) is omitted on purpose: its dates contradict the others.
   The years of MSC Sittipol and Zortout are corrected from the CV's typos (2024 -> 2023) and need the owner's confirmation. */
window.FFF_DATA={
  person:{
    name:"Saranyaphong Metkaruchit",
    first:"Saranyaphong",
    handle:"fff-fm-404",
    role:{en:"Senior Developer / Squad Lead",th:"Senior Developer / Squad Lead"},
    company:"Terra Digital Ventures",
    since:2016,
    email:"farlenz@outlook.com",
    github:"https://github.com/fff-fm-404",
    linkedin:"https://www.linkedin.com/in/saranyaphong-metkaruchit-0a413b171",
    photo:"assets/avatar.jpg",
    tagline:{en:"Backend and frontend systems, from workflow automation to the cloud.",th:"ระบบ backend และ frontend ตั้งแต่ workflow automation ไปจนถึง cloud"},
    about:{
      en:"Senior software engineer and squad lead with 8+ years of C# and .NET experience, building backend and frontend systems across industries. I led the team behind IPOP, HPIMS and a single-sign-on user management system at Fusion Solution, then moved into workflow-automation R&D at Lightwork AI. Today I lead a squad at Terra Digital Ventures, delivering an NLP skills-assessment platform on Angular, NestJS, Kafka and Azure.",
      th:"Senior software engineer และ squad lead ประสบการณ์ C# และ .NET กว่า 8 ปี สร้างระบบทั้ง backend และ frontend ในหลายอุตสาหกรรม เคยนำทีมทำ IPOP, HPIMS และระบบ user management แบบ single sign-on ที่ Fusion Solution ก่อนขยับมาทำ R&D ด้าน workflow automation ที่ Lightwork AI ปัจจุบันนำ squad ที่ Terra Digital Ventures ส่งมอบแพลตฟอร์มประเมินทักษะด้วย NLP บน Angular, NestJS, Kafka และ Azure"
    },
    services:[
      {en:"Full-stack development",th:"พัฒนา Full-stack"},
      {en:"Workflow automation",th:"Workflow automation"},
      {en:"Cloud & CI/CD",th:"Cloud และ CI/CD"}
    ]
  },
  /* tags: web | mobile | product ; brand = the client's brand colour; tint = soft pastel for backgrounds */
  projects:[
    {id:"ipop",n:"iPop",client:"CP-Meiji",tags:["mobile","web"],types:[{en:"Mobile app",th:"Mobile app"},{en:"Web app",th:"Web app"}],brand:"#e53935",tint:"#fbe4e1",
     desc:{en:"A field-team app for CP-Meiji: work schedules, map check-ins and reports, with a web companion.",th:"Mobile app สำหรับทีมภาคสนามของ CP-Meiji มีตารางงาน เช็กอินบนแผนที่ และรายงาน พร้อม web app คู่กัน"},
     shots:[{src:"assets/IPOP2.png",cap:{en:"Mobile app",th:"Mobile app"}},{src:"assets/IPOP1.png",cap:{en:"Web app",th:"Web app"}}]},
    {id:"gds",n:"GDS",client:"SAT",clientFull:{en:"Sports Authority of Thailand",th:"การกีฬาแห่งประเทศไทย"},tags:["web","mobile"],types:[{en:"Web app",th:"Web app"},{en:"Mobile",th:"Mobile"}],brand:"#2f5bb7",tint:"#e1ecfa",
     desc:{en:"A games results site for the Sports Authority of Thailand: schedules, medal tables, athlete lists and brackets.",th:"เว็บผลการแข่งขันกีฬาของการกีฬาแห่งประเทศไทย ทั้งตารางแข่ง ตารางเหรียญ รายชื่อนักกีฬา และผังการแข่งขัน"},
     shots:[{src:"assets/SAT1.png",cap:{en:"Web app",th:"Web app"}},{src:"assets/SAT2.png",cap:{en:"Games results site",th:"เว็บผลการแข่งขัน"}}]},
    {id:"sms",n:"SMS",client:"SAT",clientFull:{en:"Sports Authority of Thailand",th:"การกีฬาแห่งประเทศไทย"},tags:["web"],types:[{en:"Web app",th:"Web app"}],brand:"#2a8ba8",tint:"#e1f1f5",
     desc:{en:"A competition-management system for the Sports Authority of Thailand, including athlete and official roster checks.",th:"ระบบบริหารจัดการการแข่งขันของการกีฬาแห่งประเทศไทย รวมถึงการตรวจสอบรายชื่อนักกีฬาและเจ้าหน้าที่"},
     shots:[{src:"assets/SAT3.png",cap:{en:"Competition management",th:"ระบบบริหารจัดการการแข่งขัน"}}]},
    {id:"fnet4",n:"FNet4",client:"Office of Police Forensic Science",clientFull:{en:"Office of Police Forensic Science",th:"สำนักงานพิสูจน์หลักฐานตำรวจ"},tags:["web"],types:[{en:"Web app",th:"Web app"}],brand:"#7a0000",tint:"#f3e3e6",
     desc:{en:"The network and information system of the Office of Police Forensic Science.",th:"ระบบเครือข่ายและงานสารสนเทศของสำนักงานพิสูจน์หลักฐานตำรวจ"},
     shots:[{src:"assets/FNET4.png",cap:{en:"Sign-in",th:"หน้าเข้าสู่ระบบ"}}]},
    {id:"cpbi",n:"BI",client:"CP-Meiji",tags:["web"],types:[{en:"Web app",th:"Web app"},{en:"Business intelligence",th:"Business intelligence"}],brand:"#ef5350",tint:"#fbe4e1",
     desc:{en:"A business-intelligence web app for CP-Meiji.",th:"Web app ด้าน Business intelligence สำหรับ CP-Meiji"},
     shots:[{src:"assets/CP_BI.png",cap:{en:"Sign-in",th:"หน้าเข้าสู่ระบบ"}}]},
    {id:"cai",n:"Instruction Media",client:"My own product",clientFull:{en:"My own product",th:"ผลงานของฉันเอง"},tags:["product"],types:[{en:"Product",th:"ผลิตภัณฑ์"},{en:"Education",th:"การศึกษา"}],brand:"#5aa84a",tint:"#e3f2e1",
     desc:{en:"Interactive primary-school lessons for Thai and English, with pre-tests, content and post-tests — built as teaching media.",th:"บทเรียนโต้ตอบระดับประถมวิชาภาษาไทยและอังกฤษ มีแบบทดสอบก่อนเรียน เนื้อหา และแบบทดสอบหลังเรียน สร้างเป็นสื่อการสอน"},
     shots:[{src:"assets/CAI_P_THAI_6.png",cap:{en:"Thai-subject lesson",th:"บทเรียนวิชาภาษาไทย"}},{src:"assets/CAI_P_ENG_1.png",cap:{en:"English-subject lesson",th:"บทเรียนวิชาภาษาอังกฤษ"}}]},
    {id:"aji",n:"BI & UMS",client:"Ajinomoto",clientFull:{en:"Ajinomoto Sales (Thailand)",th:"Ajinomoto Sales (Thailand)"},tags:["web"],types:[{en:"Web app",th:"Web app"},{en:"User management",th:"User management"}],brand:"#e60012",tint:"#fbe3e6",
     desc:{en:"A portal and User Management System for Ajinomoto Sales (Thailand): reports, external links and access control.",th:"Portal และ User Management System ของ Ajinomoto Sales (Thailand) รวมรายงาน ลิงก์ภายนอก และการควบคุมสิทธิ์"},
     shots:[{src:"assets/AJI_BI_2.png",cap:{en:"Portal",th:"Portal"}},{src:"assets/AJI_BI.png",cap:{en:"Sign-in",th:"หน้าเข้าสู่ระบบ"}}]},
    {id:"hpims",n:"HPIMS",client:"DTAM",clientFull:{en:"Department of Thai Traditional and Alternative Medicine",th:"กรมการแพทย์แผนไทยและการแพทย์ทางเลือก"},tags:["web"],types:[{en:"Web app",th:"Web app"}],brand:"#1a8f9b",tint:"#dcf0ee",
     desc:{en:"A herbal-product database system for the Department of Thai Traditional and Alternative Medicine.",th:"ระบบฐานข้อมูลผลิตภัณฑ์ยาสมุนไพร กรมการแพทย์แผนไทยและการแพทย์ทางเลือก"},
     shots:[{src:"assets/HPIMS.png",cap:{en:"Sign-in",th:"หน้าเข้าสู่ระบบ"}}]}
    ,{id:"aims",n:"Aims Clinic",client:"Aims Clinic",clientFull:{en:"Aims Clinic (beauty clinic, Rama 3, Bangkok)",th:"เอมส์คลินิก (คลินิกความงาม พระราม 3 กรุงเทพฯ)"},tags:["web"],types:[{en:"Website",th:"Website"},{en:"Freelance",th:"งานฟรีแลนซ์"}],brand:"#3f5f46",tint:"#e3ece3",url:"https://aimsclinicth.com/",
     desc:{en:"Website for Aims Clinic, a beauty clinic in Rama 3, Bangkok: a skin-analysis questionnaire as the starting point for a consultation, and pages for its 5 service categories and 16 programs.",th:"เว็บไซต์ของเอมส์คลินิก คลินิกความงามที่พระราม 3 กรุงเทพฯ มีแบบประเมินผิวเป็นจุดเริ่มต้นของการปรึกษา และหน้าบริการ 5 หมวด 16 โปรแกรม"},
     shots:[{src:"assets/AIMS1.png",cap:{en:"Home",th:"หน้าแรก"}},{src:"assets/AIMS2.png",cap:{en:"Skin analysis",th:"แบบประเมินผิว"}},{src:"assets/AIMS3.png",cap:{en:"Services",th:"บริการ"}}]}
  ],
  experience:[
    {role:{en:"Senior Developer / Squad Lead",th:"Senior Developer / Squad Lead"},company:"Terra Digital Ventures Co., Ltd.",kind:{en:"Full-time",th:"Full-time"},when:{en:"Jan 2024 — now",th:"ม.ค. 2024 — ปัจจุบัน"},stack:["Angular","NestJS","Kafka","MongoDB","Azure","Argo"],
     points:[{en:"Senior Developer and Squad Lead on the NLP system (Back office AIS), leading the squad while building features hands-on.",th:"Senior Developer และ Squad Lead ของระบบ NLP (Back office AIS) นำ squad พร้อมลงมือพัฒนา feature เอง"},{en:"Designed and built new features for the NLP system (Back office AIS): a platform that assesses individual skills, highlights strengths and gaps, and tracks progress by version.",th:"ออกแบบและพัฒนา feature ใหม่ของระบบ NLP (Back office AIS) แพลตฟอร์มประเมินทักษะรายบุคคล ชี้จุดแข็งและช่องว่าง (gap) และติดตามความก้าวหน้าตามเวอร์ชัน"},{en:"Built the frontend in Angular on a NestJS REST API, with Kafka, TMF, Azure Storage and MongoDB.",th:"พัฒนา frontend ด้วย Angular เชื่อมกับ NestJS REST API ร่วมกับ Kafka, TMF, Azure Storage และ MongoDB"},{en:"Managed CI/CD with GitHub Actions and Argo, deployed on Azure Cloud.",th:"ดูแล CI/CD ด้วย GitHub Actions และ Argo deploy บน Azure Cloud"}]},
    {role:{en:"Senior Developer",th:"Senior Developer"},company:"MSC Sittipol Co., Ltd.",when:{en:"Oct 2023 — Jan 2024",th:"ต.ค. 2023 — ม.ค. 2024"},stack:[],
     points:[{en:"Loyalty system: worked on Maxcard for PT, the petrol-station chain.",th:"ระบบสะสมแต้ม: พัฒนา Maxcard ให้ PT (ปั๊มน้ำมัน)"}]},
    {role:{en:"Senior Developer",th:"Senior Developer"},company:"Zortout Co., Ltd.",when:{en:"Oct — Dec 2023",th:"ต.ค. — ธ.ค. 2023"},stack:["Shopee","TikTok","Lazada"],
     points:[{en:"E-commerce library: built a central API that pulls data from Shopee, TikTok and Lazada.",th:"E-commerce library: สร้าง API กลางสำหรับดึงข้อมูลจาก Shopee, TikTok และ Lazada"}]},
    {role:{en:"Senior Developer / R&D",th:"Senior Developer / R&D"},company:"Lightwork AI Co., Ltd.",kind:{en:"Full-time",th:"Full-time"},when:{en:"Apr 2019 — Jul 2023",th:"เม.ย. 2019 — ก.ค. 2023"},stack:["WPF","WWF","NuGet","Vue.js","Nest.js","MySQL","Azure"],
     points:[{en:"R&D on the company's internal systems, focused on workflow automation that supports the RPA team in delivering client solutions.",th:"งาน R&D ระบบภายในบริษัท เน้น workflow automation เพื่อสนับสนุนทีม RPA ในการส่งมอบโซลูชันให้ลูกค้า"},{en:"Led R&D on workflow-automation products: designed the core of a WPF / C# app on Windows Workflow Foundation, published a library to a private NuGet feed, and built Windows Services that monitor licensing and permissions with Application Insights logging.",th:"นำงาน R&D ผลิตภัณฑ์ workflow automation ออกแบบ core ของแอป WPF / C# บน Windows Workflow Foundation publish library ลง NuGet feed ส่วนตัว และสร้าง Windows Services ตรวจสอบ license และ permission พร้อมบันทึก log ด้วย Application Insights"},{en:"Built an automated bank-statement system on that platform: Vue.js frontend, Nest.js microservices, MySQL, Azure Key Vault, with CI/CD on Bitbucket Pipelines and Azure App Services.",th:"สร้างระบบ bank statement อัตโนมัติบนแพลตฟอร์มดังกล่าว frontend Vue.js, backend Nest.js แบบ microservices, ฐานข้อมูล MySQL, เก็บ secret ด้วย Azure Key Vault และทำ CI/CD ด้วย Bitbucket Pipelines บน Azure App Services"}]},
    {role:{en:"Development Lead",th:"Development Lead"},company:"Fusion Solution Co., Ltd.",kind:{en:"Full-time",th:"Full-time"},when:{en:"Sep 2017 — Apr 2019",th:"ก.ย. 2017 — เม.ย. 2019"},stack:["Vue.js","ASP.NET MVC","SQL Server","React Native","ADFS / LDAP","Power BI"],
     points:[{en:"Led the team and gathered requirements with clients including CP-Meiji, Ajinomoto and the Department of Thai Traditional and Alternative Medicine, working in Agile.",th:"นำทีมและรวบรวมความต้องการร่วมกับลูกค้า เช่น CP-Meiji, Ajinomoto และกรมการแพทย์แผนไทยและการแพทย์ทางเลือก ทำงานแบบ Agile"},{en:"Data analysis and reporting system, with Power BI reports.",th:"ระบบ data analysis และ reporting พร้อมรายงาน Power BI"},{en:"IPOP: employee system for leave reports, motivation and supervisor tasks, with a React Native check-in app on the App Store and Play Store.",th:"IPOP ระบบพนักงาน (รายงานการลา แรงจูงใจ งานของหัวหน้า) พร้อมแอป React Native เช็กอินบน App Store และ Play Store"},{en:"User management system: central site with SSO through ADFS and LDAP, plus SMS / OTP and daily data migration with SSIS.",th:"ระบบ user management เว็บกลางที่ทำ SSO ผ่าน ADFS และ LDAP พร้อม SMS / OTP และ migrate ข้อมูลรายวันด้วย SSIS"},{en:"HPIMS: central database of herbal products.",th:"HPIMS ฐานข้อมูลกลางผลิตภัณฑ์สมุนไพร"}]},
    {role:{en:"Application Technologist",th:"Application Technologist"},company:"Fusion Solution Co., Ltd.",kind:{en:"Full-time",th:"Full-time"},when:{en:"Nov 2016 — Aug 2017",th:"พ.ย. 2016 — ส.ค. 2017"},stack:["ASP.NET","PhoneGap / Cordova","WCF","SSRS","SSIS","DevExpress"],
     points:[{en:"SAT: website and mobile app for sports competitions (boxing, karate, wushu) covering schedules, competition types and results.",th:"SAT เว็บไซต์และ mobile app สำหรับการแข่งขันกีฬา (มวย คาราเต้ วูซู) ครอบคลุมตารางแข่ง ประเภทการแข่ง และผลการแข่งขัน"},{en:"F-NET: website, reports and migration of legacy data for the Office of Police Forensic Science.",th:"F-NET เว็บไซต์ รายงาน และการ migrate ข้อมูลจากระบบเดิมของสำนักงานพิสูจน์หลักฐานตำรวจ"}]},
    {role:{en:"Programmer",th:"Programmer"},company:"SME Bank Thailand",kind:{en:"Internship",th:"Internship"},when:{en:"Jan — Apr 2015",th:"ม.ค. — เม.ย. 2015"},stack:["PHP","MySQL","Crystal Reports"],
     points:[{en:"Designed and built a leave and reporting system, working with users and drawing ERD, class, sequence and user-story diagrams.",th:"ออกแบบและพัฒนาระบบลางานและรายงาน ทำงานร่วมกับผู้ใช้ และเขียนแผนภาพ ERD, class, sequence และ user story"}]},
    {role:{en:"Flash Developer",th:"Flash Developer"},company:"KR Instruction Media",kind:{en:"Part-time",th:"Part-time"},when:{en:"Sep 2013 — Aug 2016",th:"ก.ย. 2013 — ส.ค. 2016"},stack:["ActionScript"],
     points:[{en:"Designed and built animation projects for customers in ActionScript, and gathered user requirements.",th:"ออกแบบและพัฒนางานแอนิเมชันให้ลูกค้าด้วย ActionScript และรวบรวมความต้องการของผู้ใช้"}]}
  ],
  education:{degree:{en:"B.Eng. Computer Engineering",th:"วิศวกรรมศาสตรบัณฑิต สาขาวิศวกรรมคอมพิวเตอร์"},school:{en:"Suan Sunandha Rajabhat University",th:"มหาวิทยาลัยราชภัฏสวนสุนันทา"},years:{en:"Completed 2016",th:"จบการศึกษา 2559"},thesis:{en:"Thesis: Room Reservation System for the Faculty of Industrial Technology (Raspberry Pi access control, C++ and C#).",th:"วิทยานิพนธ์: ระบบจองห้องเรียน คณะเทคโนโลยีอุตสาหกรรม (ควบคุมการเข้าถึงด้วย Raspberry Pi, C++ และ C#)"}},
  /* skills from the CV (no ratings given) */
  skills:[
    {group:{en:"Technical",th:"เทคนิค"},items:[{n:"C# / .NET / JavaScript / TypeScript",level:null},{n:"Vue / React / React Native / Node.js / NestJS",level:null},{n:"WPF / WCF / WF / RPA",level:null},{n:"REST API / Microservices / Test Automation (Playwright)",level:null},{n:"CI/CD / Database / SQL / Power BI",level:null}]},
    {group:{en:"Other",th:"อื่นๆ"},items:[{n:"Web Design / Design Thinking / Research",level:null},{n:"SA / OOAD / OOP",level:null},{n:"Critical Thinking / Problem-Solving",level:null},{n:"Communication / Team Leadership",level:null}]}
  ]
};
