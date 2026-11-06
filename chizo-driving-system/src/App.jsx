import React, { useState } from "react";

const copy = {
  en: {
    home:"Home", about:"About us", programs:"Programs", theory:"Theory", contact:"Contact", admin:"Admin",
    badge:"YOUR JOURNEY STARTS HERE", title:"Learn to drive. Drive with confidence.",
    intro:"Build safe driving skills with patient instructors, practical lessons and clear guidance at every step.",
    enroll:"Enroll now", explore:"Explore programs", learners:"Successful learners", instructors:"Qualified instructors",
    courses:"Driving programs", coursesIntro:"Choose a learning path that matches your goals.",
    practical:"Practical driving", practicalText:"Learn vehicle control, road awareness, parking and safe driving with an instructor.",
    theoryText:"Understand road signs, traffic rules, road safety and responsible driving.",
    refresher:"Refresher lessons", refresherText:"Refresh your driving skills and build confidence on different roads.",
    aboutTitle:"A better way to learn driving", aboutText:"CHIZO Driving System is designed to make driver training clear, supportive and focused on road safety. Our goal is to help learners become responsible and confident road users.",
    steps:"How to get started", step1:"Choose a program", step2:"Send your registration", step3:"Our team contacts you", step4:"Start your lessons",
    register:"Register for lessons", name:"Full name", phone:"Phone number", email:"Email address", program:"Select a program", message:"Message (optional)", send:"Submit registration",
    contactTitle:"Talk to our team", contactText:"Have a question about lessons or registration? Send us a message.",
    adminTitle:"Admin overview", students:"Registered learners", programsCount:"Programs", pending:"Pending requests", recent:"Recent registrations",
    student:"Learner", course:"Program", status:"Status", date:"Date", pendingStatus:"Pending",
    footer:"Learn safely. Drive confidently.", rights:"All rights reserved.",
    formSuccess:"Your registration has been saved in this demo. Connect a backend to store it permanently.",
    choose:"Choose a program"
  },
  rw: {
    home:"Ahabanza", about:"Abo turibo", programs:"Amasomo", theory:"Theory", contact:"Twandikire", admin:"Ubuyobozi",
    badge:"URUGENDO RWAWE RUHEREYE HANO", title:"Iga gutwara. Utware ufite icyizere.",
    intro:"Wunguka ubumenyi bwo gutwara neza binyuze mu barimu bihangana, imyitozo n'ubuyobozi bwiza.",
    enroll:"Iyandikishe", explore:"Reba amasomo", learners:"Abanyeshuri batsinze", instructors:"Abigisha babifitiye ubumenyi",
    courses:"Amasomo yo gutwara", coursesIntro:"Hitamo isomo rijyanye n'intego zawe.",
    practical:"Imyitozo yo gutwara", practicalText:"Iga kugenzura imodoka, kumenya umuhanda, guhagarara neza no gutwara witonze.",
    theoryText:"Menya ibyapa, amategeko y'umuhanda, umutekano n'inshingano z'umutwara.",
    refresher:"Kongera ubumenyi", refresherText:"Ongera witoze gutwara kandi wiyongere icyizere mu mihanda itandukanye.",
    aboutTitle:"Uburyo bwiza bwo kwiga gutwara", aboutText:"CHIZO Driving System igamije gutuma imyigishirize yo gutwara ibinyabiziga yoroshye, itanga ubufasha kandi ishingiye ku mutekano wo mu muhanda. Intego ni ugutoza abatwara bafite inshingano n'icyizere.",
    steps:"Uko watangira", step1:"Hitamo isomo", step2:"Ohereza ubusabe bwo kwiyandikisha", step3:"Abakozi bacu baraguhamagara", step4:"Tangira amasomo",
    register:"Iyandikishe mu masomo", name:"Amazina yuzuye", phone:"Telefoni", email:"Imeyili", program:"Hitamo isomo", message:"Ubutumwa (si ngombwa)", send:"Ohereza ubusabe",
    contactTitle:"Vugana natwe", contactText:"Ufite ikibazo ku masomo cyangwa kwiyandikisha? Twoherereze ubutumwa.",
    adminTitle:"Incamake y'ubuyobozi", students:"Abiyandikishije", programsCount:"Amasomo", pending:"Ubusabe butegereje", recent:"Abiyandikishije vuba",
    student:"Umunyeshuri", course:"Isomo", status:"Imiterere", date:"Itariki", pendingStatus:"Birategereje",
    footer:"Iga gutwara neza. Utware ufite icyizere.", rights:"Uburenganzira bwose burabitswe.",
    formSuccess:"Ubusabe bwawe bwakiriwe muri iyi demo. Huza backend kugira ngo bubikwe burundu.",
    choose:"Hitamo isomo"
  }
};

const initialRows = [
  {name:"Aline M.", course:"Practical driving", status:"Pending", date:"06 Nov 2026"},
  {name:"Eric N.", course:"Theory lessons", status:"Approved", date:"05 Nov 2026"},
  {name:"Diane U.", course:"Refresher lessons", status:"Pending", date:"04 Nov 2026"}
];

function App() {
  const [lang, setLang] = useState("en");
  const [page, setPage] = useState("home");
  const [rows, setRows] = useState(initialRows);
  const [notice, setNotice] = useState("");
  const t = copy[lang];

  const go = (target) => {
    setPage(target);
    setNotice("");
    window.scrollTo({top:0, behavior:"smooth"});
  };

  function submitForm(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const course = data.get("program");
    const phone = data.get("phone");
    if (!name || !course || !phone) return;
    setRows([{name, course, status:"Pending", date:new Date().toLocaleDateString()}, ...rows]);
    setNotice(t.formSuccess);
    e.currentTarget.reset();
  }

  const nav = [
    ["home", t.home], ["about", t.about], ["programs", t.programs],
    ["theory", t.theory], ["contact", t.contact]
  ];

  return <div className="app">
    <header className="topbar">
      <button className="brand" onClick={() => go("home")} aria-label="HAVUGIMANA CHIZO FELEX DEV Driving System home">
        <span className="brand-mark">H</span><span className="brand-name">HAVUGIMANA CHIZO FELEX DEV <small>DRIVING SYSTEM</small></span>
      </button>
      <nav>{nav.map(([key,label]) => <button key={key} className={page===key?"active":""} onClick={()=>go(key)}>{label}</button>)}</nav>
      <div className="top-actions">
        <button className="lang" onClick={()=>setLang(lang==="en"?"rw":"en")}>{lang==="en"?"Kinyarwanda":"English"}</button>
        <button className="admin-link" onClick={()=>go("admin")}>▦ {t.admin}</button>
        <button className="menu-btn" onClick={()=>go("contact")}>☰</button>
      </div>
    </header>

    {page==="home" && <>
      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span></span>{t.badge}</div>
            <h1>{t.title}</h1>
            <p>{t.intro}</p>
            <div className="hero-buttons">
              <button className="primary" onClick={()=>go("contact")}>{t.enroll} <b>↗</b></button>
              <button className="secondary" onClick={()=>go("programs")}>{t.explore} <b>→</b></button>
            </div>
            <div className="hero-stats">
              <div><strong>500+</strong><span>{t.learners}</span></div>
              <div><strong>12+</strong><span>{t.instructors}</span></div>
              <div><strong>100%</strong><span>Safety focused</span></div>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=85" alt="Car driving on a road" />
            <div className="image-note"><span className="note-icon">✓</span><div><b>Drive smart. Stay safe.</b><small>Skills for a lifetime</small></div></div>
            <div className="image-number">01 <span>/ 03</span></div>
          </div>
        </section>

        <section className="trust-strip">
          <span>LEARN WITH CONFIDENCE</span><b>SAFE DRIVING</b><b>SKILLED INSTRUCTORS</b><b>REAL ROAD PRACTICE</b>
        </section>
        <section className="section" id="programs">
          <div className="section-heading"><div><div className="eyebrow">WHAT WE OFFER</div><h2>{t.courses}</h2><p>{t.coursesIntro}</p></div><button className="text-button" onClick={()=>go("programs")}>View all programs ↗</button></div>
          <div className="course-grid">
            <Course number="01" icon="🚘" title={t.practical} text={t.practicalText} onClick={()=>go("contact")}/>
            <Course number="02" icon="📘" title="Theory lessons" text={t.theoryText} onClick={()=>go("theory")}/>
            <Course number="03" icon="🛣️" title={t.refresher} text={t.refresherText} onClick={()=>go("contact")}/>
          </div>
        </section>
        <section className="about-band">
          <div className="about-visual"><img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=85" alt="Modern car" /><span>CHIZO<br/>DRIVING</span></div>
          <div className="about-content"><div className="eyebrow">ABOUT CHIZO</div><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p><button className="primary" onClick={()=>go("about")}>{t.about} <b>↗</b></button></div>
        </section>
        <section className="section steps-section"><div className="eyebrow">SIMPLE PROCESS</div><h2>{t.steps}</h2><div className="steps">{[t.step1,t.step2,t.step3,t.step4].map((s,i)=><div className="step" key={s}><span>0{i+1}</span><b>{s}</b></div>)}</div></section>
      </main>
    </>}

    {page==="about" && <InnerPage eyebrow="OUR STORY" title={t.aboutTitle} text={t.aboutText} image="https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1200&q=85" onAction={()=>go("contact")} action={t.enroll}/>}
    {page==="programs" && <section className="inner-section"><div className="eyebrow">LEARNING PATHS</div><h1>{t.courses}</h1><p>{t.coursesIntro}</p><div className="course-grid"><Course number="01" icon="🚘" title={t.practical} text={t.practicalText} onClick={()=>go("contact")}/><Course number="02" icon="📘" title="Theory lessons" text={t.theoryText} onClick={()=>go("theory")}/><Course number="03" icon="🛣️" title={t.refresher} text={t.refresherText} onClick={()=>go("contact")}/></div></section>}
    {page==="theory" && <InnerPage eyebrow="ROAD KNOWLEDGE" title="Understand the road before you drive." text="Learn traffic signs, road markings, right of way, safe distances, defensive driving and responsible road behaviour. Theory lessons prepare learners to make safer decisions on the road." image="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=85" onAction={()=>go("contact")} action={t.enroll}/>}
    {page==="contact" && <section className="form-section"><div className="form-info"><div className="eyebrow">GET STARTED</div><h1>{t.register}</h1><p>{t.contactText}</p><div className="contact-line">✉ <span>chizodriving@example.com</span></div><div className="contact-line">☎ <span>+250 7XX XXX XXX</span></div><small className="demo-note">Demo contact details — replace with the school's real contacts.</small></div><form className="register-form" onSubmit={submitForm}><label>{t.name}<input name="name" placeholder="e.g. Jean Doe" required/></label><label>{t.phone}<input name="phone" type="tel" placeholder="+250..." required/></label><label>{t.email}<input name="email" type="email" placeholder="you@example.com"/></label><label>{t.program}<select name="program" required><option value="">{t.choose}</option><option>Practical driving</option><option>Theory lessons</option><option>Refresher lessons</option></select></label><label className="full">{t.message}<textarea name="message" rows="3" placeholder="Write your message..."/></label><button className="primary full" type="submit">{t.send} <b>↗</b></button>{notice && <p className="success full">{notice}</p>}</form></section>}
    {page==="admin" && <section className="admin-page"><div className="section-heading"><div><div className="eyebrow">MANAGEMENT AREA · DEMO</div><h1>{t.adminTitle}</h1><p>Sample dashboard preview. Authentication and database are not connected yet.</p></div><button className="secondary" onClick={()=>go("contact")}>＋ Add learner</button></div><div className="metric-grid"><Metric label={t.students} value={rows.length}/><Metric label={t.programsCount} value="03"/><Metric label={t.pending} value={rows.filter(r=>r.status==="Pending").length}/></div><div className="table-wrap"><h3>{t.recent}</h3><table><thead><tr><th>{t.student}</th><th>{t.course}</th><th>{t.status}</th><th>{t.date}</th></tr></thead><tbody>{rows.map((r,i)=><tr key={i}><td>{r.name}</td><td>{r.course}</td><td><span className={"status "+r.status.toLowerCase()}>{r.status}</span></td><td>{r.date}</td></tr>)}</tbody></table></div></section>}

    <footer className="footer"><div className="footer-top"><div className="footer-brand"><div className="brand-inverse"><span className="brand-mark">H</span><b className="brand-name">HAVUGIMANA CHIZO FELEX DEV <small>DRIVING SYSTEM</small></b></div><p>{t.footer}</p></div><div><b>Explore</b><button onClick={()=>go("about")}>{t.about}</button><button onClick={()=>go("programs")}>{t.programs}</button><button onClick={()=>go("contact")}>{t.contact}</button></div><div><b>Contact</b><span>chizodriving@example.com</span><span>+250 7XX XXX XXX</span><span>Rwanda</span></div><div><b>Follow us</b><div className="socials"><a href="https://www.facebook.com/" target="_blank" rel="noreferrer">f</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">◎</a><a href="https://www.youtube.com/" target="_blank" rel="noreferrer">▶</a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} HAVUGIMANA CHIZO FELEX DEV Driving System. {t.rights}</span><span>Designed for safer roads in Rwanda.</span></div></footer>
  </div>;
}

function Course({number,icon,title,text,onClick}) {
  return <article className="course-card"><div className="course-top"><span>{number}</span><span className="course-icon">{icon}</span></div><h3>{title}</h3><p>{text}</p><button onClick={onClick} aria-label={"Learn more about "+title}>Explore program <b>↗</b></button></article>;
}
function Metric({label,value}) { return <div className="metric"><span>{label}</span><strong>{value}</strong><small>Updated in this demo</small></div>; }
function InnerPage({eyebrow,title,text,image,onAction,action}) {
  return <section className="inner-hero"><div><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{text}</p><button className="primary" onClick={onAction}>{action} <b>↗</b></button></div><img src={image} alt="Driving school vehicle"/></section>;
}

export default App;