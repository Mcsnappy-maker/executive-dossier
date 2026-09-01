"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ExecutiveDossier.module.css";

const metrics = [
  { value: "25+", label: "Years across people, services & community delivery" },
  { value: "£850k+", label: "Continuation funding contributed to across three years" },
  { value: "379", label: "Participants supported annually by the scaled CERT model" },
  { value: "9", label: "Partner organisations in the original multi-agency pilot" },
];

const leadershipAreas = [
  "Service operations",
  "People leadership",
  "Workforce development",
  "Partnerships",
  "Governance reporting",
  "Safeguarding & risk",
  "Funding & sustainability",
  "Digital improvement",
];

const boardEvidence = [
  "Reported directly to Chairs, boards and trustees on safeguarding, risk, performance and delivery.",
  "Took a paper concept through pilot, implementation and scaled regional service delivery.",
  "Built working relationships across councils, NHS bodies, schools, police, prisons and third-sector partners.",
  "Promoted into senior operational roles within one year at both CERT and Lifelink.",
];

const roles = [
  {
    period: "2024 — PRESENT",
    title: "Founder & Lead",
    organisation: "Kelloch",
    summary:
      "Built a practical third-sector workforce and leadership initiative supporting charities, CICs and social enterprises with hiring, people development, service improvement and clearer decision-making, alongside employment.",
    evidence: [
      "Created sector-facing recruitment, workforce-planning and leadership resources.",
      "Advised organisations on role design, candidate experience and people decisions.",
      "Built and operated the website, communications, stakeholder relationships and day-to-day business systems independently.",
    ],
  },
  {
    period: "2024 — PRESENT",
    title: "Lead Clinical Logistics Driver",
    organisation: "Sciensus",
    summary:
      "Regulated healthcare logistics role combining time-critical delivery, compliance, route coordination, patient-facing professionalism and practical colleague support.",
    evidence: [
      "Maintain reliable service delivery in a tightly controlled healthcare environment.",
      "Support route cover, shift coordination, compliance checks and defect reporting.",
      "Bring current frontline insight into operational pressure, judgement and service discipline.",
    ],
  },
  {
    period: "2022 — 2024",
    title: "Operations Manager",
    organisation: "CERT · Clackmannanshire Economic Regeneration Trust",
    summary:
      "Promoted from Project Manager within one year. Reported directly to the Chair and Board while redesigning and implementing CERT’s employability and wellbeing programme from paper concept into a scaled regional service.",
    evidence: [
      "Led the original nine-partner pilot and converted learning into full operational delivery.",
      "Built the model to support 379 participants annually.",
      "Contributed to more than £850k in continuation funding across three years.",
      "Led safeguarding, risk governance, trustee reporting, budgets, performance and service improvement.",
    ],
  },
  {
    period: "2020 — 2022",
    title: "Service Manager",
    organisation: "Lifelink",
    summary:
      "Promoted from Assistant Manager within one year and joined a four-person Senior Management Team, with responsibility for a defined Glasgow service area covering school-based and therapeutic wellbeing services.",
    evidence: [
      "Oversaw commissioned service performance, practitioner coordination, safeguarding and quality standards.",
      "Designed and rolled out the wellbeing portfolio and trained the wider delivery team.",
      "Led the move to online wellbeing delivery during COVID-19 using Teams and Zoom.",
      "Supported a therapeutic workforce ranging from 15 to 100 practitioners as demand changed.",
    ],
  },
  {
    period: "2000 — 2020",
    title: "Earlier leadership, employability & community delivery",
    organisation: "Scotland",
    summary:
      "Founder, adviser, facilitator and delivery roles across community development, employability, volunteering, Citizens Advice, justice, advice and youth programmes.",
    evidence: [
      "Founded Holistic Enterprises Scotland and designed training, employability, wellbeing and youth-development programmes.",
      "Managed the Citizens Advice Bureau Youth Reachout Project for 14–25 year olds, combining advice, advocacy, outreach, workshops and staff and volunteer coordination.",
      "Worked as Regional Support Manager & Training Officer across Citizens Advice bureaux, providing second-tier support on complex advice, adviser training, service development and partnership work.",
      "Delivered prison-based employability, mentoring and personal-development programmes including HM Polmont.",
      "Supported governance, safeguarding, volunteering, advice and employability work across community organisations.",
      "Built long-term partnerships with schools, councils, police, prisons, social services and local organisations.",
    ],
  },
];

const qualifications = [
  { name: "SVQ Level 5 Learning & Development", level: "SCQF 11" },
  { name: "SVQ Level 4 Mentoring & Leadership", level: "SCQF 10" },
  { name: "SVQ Level 4 Advice & Guidance", level: "Citizens Advice Bureau" },
  { name: "Complex & Specialist Adviser Training", level: "Citizens Advice Bureau" },
  { name: "CAS Specialist Management Training", level: "Citizens Advice Scotland" },
  { name: "HND Community Arts", level: "HND" },
  { name: "Trauma-Informed Practice Facilitator", level: "Professional" },
  { name: "Mental Health First Aid Instructor", level: "Instructor" },
];

const digitalSkills = [
  "Website development & online service design",
  "React & TypeScript working knowledge",
  "AI & automation",
  "Adobe Creative Suite",
  "Professional photography & visual storytelling",
  "Digital content & audience communication",
];

const nav = [
  ["#brief", "Brief"],
  ["#evidence", "Evidence"],
  ["#career", "Career"],
  ["#credentials", "Credentials"],
] as const;

export function ExecutiveDossierApp() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pageRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.visible = "true";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
        const progress = Math.min(Math.max(y / max, 0), 1);
        const heroProgress = Math.min(Math.max(y / Math.max(window.innerHeight, 1), 0), 1);
        pageRef.current?.style.setProperty("--scroll-y", `${Math.min(y, 1400)}px`);
        pageRef.current?.style.setProperty("--page-progress", `${progress}`);
        pageRef.current?.style.setProperty("--hero-progress", `${heroProgress}`);
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <main ref={pageRef} className={styles.page}>
      <div className={styles.progressBar} aria-hidden="true" />

      <div className={styles.topline}>
        <a href="#top" className={styles.wordmark} aria-label="Mark O’Hare Digital CV home">
          <strong>Digital CV</strong>
        </a>

        <button
          className={styles.menuButton}
          type="button"
          aria-label="Open navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`${styles.menuOverlay} ${menuOpen ? styles.menuOverlayOpen : ""}`} aria-hidden={!menuOpen}>
        <button className={styles.menuClose} type="button" aria-label="Close navigation" onClick={() => setMenuOpen(false)}>
          <span />
          <span />
        </button>
        <nav className={styles.overlayNav} aria-label="Digital CV sections">
          {nav.map(([href, label], index) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>
              <strong>{label}</strong>
            </a>
          ))}
        </nav>
        <a className={styles.overlayDownload} href="/Mark_OHare_CV_2026_V1.docx" download onClick={() => setMenuOpen(false)}>
          Download CV
        </a>
      </div>

      <section id="top" className={styles.hero}>
        <div className={styles.heroMeta} data-reveal>
          <span>Leadership profile / 2026</span>
          <span>Ref. MO-EXEC-01</span>
        </div>

        <div className={styles.heroCanvas}>
          <div className={styles.heroIntro}>
            <p className={styles.eyebrow} data-reveal>Third-sector operations · people · service delivery</p>

            <h1 className={styles.heroName} aria-label="Mark O’Hare">
              <span className={styles.heroLine} data-reveal>Mark</span>
              <span className={`${styles.heroLine} ${styles.heroLineSecond}`} data-reveal>O’Hare</span>
            </h1>
          </div>

          <figure className={styles.heroPortrait}>
            <div className={styles.heroPortraitFrame}>
              <img src="/mark-ohare-headshot.png" alt="Mark O’Hare" />
            </div>
            <figcaption>
              <span>North Lanarkshire · Scotland</span>
              <span>2026</span>
            </figcaption>
          </figure>

          <div className={styles.heroLower}>
            <div data-reveal>
              <p className={styles.heroTitle}>Operations & People Leader</p>
              <p className={styles.heroStatement}>
                I build services that work in the real world: clearer operations, stronger teams,
                safer delivery, better partnerships and practical systems that hold up under pressure.
              </p>
            </div>

            <div className={styles.heroContact} data-reveal>
              <a href="mailto:m.ohare@hotmail.co.uk">m.ohare@hotmail.co.uk</a>
              <a href="tel:07861701490">07861 701490</a>
              <a href="https://www.linkedin.com/in/mark-o-hare-970433b0" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a className={styles.primaryAction} href="/Mark_OHare_CV_2026_V1.docx" download>Download CV</a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.metricRail} aria-label="Selected career evidence">
        {metrics.map((metric, index) => (
          <article key={metric.value} className={styles.metric} data-reveal>
            <span className={styles.metricIndex}>0{index + 1}</span>
            <strong>{metric.value}</strong>
            <p>{metric.label}</p>
          </article>
        ))}
      </section>

      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.tickerTrack}>
          {[...leadershipAreas, ...leadershipAreas].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>

      <section id="brief" className={styles.section}>
        <div className={styles.sectionLabel} data-reveal>
          <span>01</span>
          <p>Executive brief</p>
        </div>
        <div className={styles.sectionBody}>
          <div className={styles.briefGrid}>
            <div className={styles.briefLead}>
              <h2 data-reveal>Operator first.<br />Strategic when it matters.</h2>
              <p className={styles.largeCopy} data-reveal>
                More than 25 years across community services, employability, wellbeing,
                volunteering, justice and organisational development. Experience spans frontline
                delivery, service management, workforce development, board reporting, safeguarding,
                programme design, partnerships and digital improvement.
              </p>
              <p data-reveal>
                The consistent thread is implementation: turning ideas, policies and organisational
                intent into something staff, partners and communities can actually use.
              </p>
            </div>

            <aside className={styles.mandate} aria-label="Leadership range" data-reveal>
              <p className={styles.microLabel}>Leadership range</p>
              <ul>
                {leadershipAreas.map((item, index) => (
                  <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section id="evidence" className={`${styles.section} ${styles.darkSection}`}>
        <div className={styles.sectionLabel} data-reveal>
          <span>02</span>
          <p>Board-level evidence</p>
        </div>
        <div className={styles.sectionBody}>
          <div className={styles.evidenceHeader}>
            <p className={styles.microLabel} data-reveal>Selected proof points</p>
            <h2 data-reveal>Not leadership by adjective.<br />Leadership by evidence.</h2>
          </div>

          <div className={styles.evidenceGrid}>
            {boardEvidence.map((item, index) => (
              <article key={item} className={styles.evidenceItem} data-reveal>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>

          <div className={styles.pullQuote} data-reveal>
            <span>Leadership approach</span>
            <blockquote>
              Calm under pressure. Clear with expectations. Strong on relationships.
              Focused on turning complex people and delivery issues into workable action.
            </blockquote>
          </div>
        </div>
      </section>

      <section id="career" className={styles.section}>
        <div className={styles.sectionLabel} data-reveal>
          <span>03</span>
          <p>Career trajectory</p>
        </div>
        <div className={styles.sectionBody}>
          <div className={styles.careerHead}>
            <div>
              <p className={styles.microLabel} data-reveal>Selected experience</p>
              <h2 data-reveal>Built from delivery<br />upwards.</h2>
            </div>
            <p data-reveal>
              A career spanning frontline practice, programme development, senior service management,
              board accountability and independent third-sector workforce work.
            </p>
          </div>

          <div className={styles.timeline}>
            {roles.map((role, index) => (
              <article className={styles.role} key={`${role.title}-${role.period}`} data-reveal>
                <div className={styles.roleIndex}>{String(index + 1).padStart(2, "0")}</div>
                <div className={styles.rolePeriod}>{role.period}</div>
                <div className={styles.roleMain}>
                  <p className={styles.roleOrg}>{role.organisation}</p>
                  <h3>{role.title}</h3>
                  <p className={styles.roleSummary}>{role.summary}</p>
                  <details className={styles.details}>
                    <summary>View evidence</summary>
                    <div className={styles.detailsBody}>
                      <ul>
                        {role.evidence.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  </details>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="credentials" className={`${styles.section} ${styles.credentialsSection}`}>
        <div className={styles.sectionLabel} data-reveal>
          <span>04</span>
          <p>Credentials & capability</p>
        </div>
        <div className={styles.sectionBody}>
          <div className={styles.credentialsGrid}>
            <div>
              <p className={styles.microLabel} data-reveal>Qualifications</p>
              <h2 data-reveal>Formal learning,<br />practical application.</h2>
              <div className={styles.credentialLedger}>
                {qualifications.map((item) => (
                  <div className={styles.credentialRow} key={item.name} data-reveal>
                    <span>{item.name}</span>
                    <strong>{item.level}</strong>
                  </div>
                ))}
                <div className={styles.credentialRow} data-reveal>
                  <span>Additional CPD & professional development</span>
                  <strong>On request</strong>
                </div>
              </div>
            </div>

            <aside className={styles.digitalPanel} data-reveal>
              <p className={styles.microLabel}>Digital + creative capability</p>
              <h3>Useful technology.<br />No theatre.</h3>
              <p>
                Comfortable translating operational needs into practical digital tools, content,
                automation and service improvements.
              </p>
              <div className={styles.skillList}>
                {digitalSkills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div data-reveal>
          <span className={styles.footerKicker}>Open to conversation</span>
          <h2>Senior operations, people,<br />service or programme leadership.</h2>
        </div>
        <div className={styles.footerActions} data-reveal>
          <a href="mailto:m.ohare@hotmail.co.uk">Email Mark</a>
          <a href="/Mark_OHare_CV_2026_V1.docx" download>Download full CV</a>
        </div>
        <p className={styles.footerMeta}>Mark O’Hare · North Lanarkshire, Scotland · 2026</p>
      </footer>

      <div className={styles.accentBand} aria-hidden="true">
        <span>MO</span>
      </div>
    </main>
  );
}
