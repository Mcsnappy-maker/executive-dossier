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
      "Founder, adviser, facilitator and delivery roles across community development, employability, volunteering, justice, advice and youth programmes.",
    evidence: [
      "Founded Holistic Enterprises Scotland and designed training, employability, wellbeing and youth-development programmes.",
      "Delivered prison-based employability, mentoring and personal-development programmes including HM Polmont.",
      "Supported governance, safeguarding, volunteering, advice and employability work across community organisations.",
      "Built long-term partnerships with schools, councils, police, prisons, social services and local organisations.",
    ],
  },
];

const qualifications = [
  { name: "SVQ Level 5 Learning & Development", level: "SCQF 11" },
  { name: "SVQ Level 4 Mentoring & Leadership", level: "SCQF 10" },
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
  return (
    <main className={styles.page}>
      <div className={styles.topline}>
        <a href="#top" className={styles.wordmark} aria-label="Mark O’Hare executive dossier home">
          <span>MO</span>
          <strong>Executive Dossier</strong>
        </a>
        <nav className={styles.nav} aria-label="Dossier sections">
          {nav.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <a className={styles.downloadTop} href="/Mark_OHare_CV_2026_V1.docx" download>
          Download CV
        </a>
      </div>

      <section id="top" className={styles.hero}>
        <div className={styles.heroPortrait}>
          <img src="/mark-ohare-headshot.png" alt="Mark O’Hare" />
          <div className={styles.portraitCaption}>
            <span>North Lanarkshire · Scotland</span>
            <span>Available for senior third-sector leadership</span>
          </div>
        </div>

        <div className={styles.heroCopy}>
          <div className={styles.documentMeta}>
            <span>Leadership profile / 2026</span>
            <span>Ref. MO-EXEC-01</span>
          </div>
          <p className={styles.eyebrow}>Third-sector operations · people · service delivery</p>
          <h1>Mark<br />O’Hare</h1>
          <p className={styles.heroTitle}>Operations & People Leader</p>
          <p className={styles.heroStatement}>
            I build services that work in the real world: clearer operations, stronger teams,
            safer delivery, better partnerships and practical systems that hold up under pressure.
          </p>
          <div className={styles.contactLine}>
            <a href="mailto:m.ohare@hotmail.co.uk">m.ohare@hotmail.co.uk</a>
            <a href="tel:07861701490">07861 701490</a>
            <a href="https://www.linkedin.com/in/mark-o-hare-970433b0" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </section>

      <section className={styles.metricRail} aria-label="Selected career evidence">
        {metrics.map((metric, index) => (
          <article key={metric.value} className={styles.metric}>
            <span className={styles.metricIndex}>0{index + 1}</span>
            <strong>{metric.value}</strong>
            <p>{metric.label}</p>
          </article>
        ))}
      </section>

      <section id="brief" className={styles.section}>
        <div className={styles.sectionLabel}>
          <span>01</span>
          <p>Executive brief</p>
        </div>
        <div className={styles.sectionBody}>
          <div className={styles.briefGrid}>
            <div className={styles.briefLead}>
              <h2>Operator first.<br />Strategic when it matters.</h2>
              <p className={styles.largeCopy}>
                More than 25 years across community services, employability, wellbeing,
                volunteering, justice and organisational development. Experience spans frontline
                delivery, service management, workforce development, board reporting, safeguarding,
                programme design, partnerships and digital improvement.
              </p>
              <p>
                The consistent thread is implementation: turning ideas, policies and organisational
                intent into something staff, partners and communities can actually use.
              </p>
            </div>

            <aside className={styles.mandate} aria-label="Leadership range">
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
        <div className={styles.sectionLabel}>
          <span>02</span>
          <p>Board-level evidence</p>
        </div>
        <div className={styles.sectionBody}>
          <div className={styles.evidenceHeader}>
            <p className={styles.microLabel}>Selected proof points</p>
            <h2>Not leadership by adjective.<br />Leadership by evidence.</h2>
          </div>
          <div className={styles.evidenceGrid}>
            {boardEvidence.map((item, index) => (
              <article key={item} className={styles.evidenceItem}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
          <div className={styles.pullQuote}>
            <span>Leadership approach</span>
            <blockquote>
              Calm under pressure. Clear with expectations. Strong on relationships.
              Focused on turning complex people and delivery issues into workable action.
            </blockquote>
          </div>
        </div>
      </section>

      <section id="career" className={styles.section}>
        <div className={styles.sectionLabel}>
          <span>03</span>
          <p>Career trajectory</p>
        </div>
        <div className={styles.sectionBody}>
          <div className={styles.careerHead}>
            <div>
              <p className={styles.microLabel}>Selected experience</p>
              <h2>Built from delivery<br />upwards.</h2>
            </div>
            <p>
              A career spanning frontline practice, programme development, senior service management,
              board accountability and independent third-sector workforce work.
            </p>
          </div>

          <div className={styles.timeline}>
            {roles.map((role, index) => (
              <article className={styles.role} key={`${role.title}-${role.period}`}>
                <div className={styles.roleRail}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <i />
                </div>
                <div className={styles.rolePeriod}>{role.period}</div>
                <div className={styles.roleMain}>
                  <p className={styles.roleOrg}>{role.organisation}</p>
                  <h3>{role.title}</h3>
                  <p className={styles.roleSummary}>{role.summary}</p>
                  <details className={styles.details}>
                    <summary>View evidence</summary>
                    <ul>
                      {role.evidence.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </details>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="credentials" className={`${styles.section} ${styles.credentialsSection}`}>
        <div className={styles.sectionLabel}>
          <span>04</span>
          <p>Credentials & capability</p>
        </div>
        <div className={styles.sectionBody}>
          <div className={styles.credentialsGrid}>
            <div>
              <p className={styles.microLabel}>Qualifications</p>
              <h2>Formal learning,<br />practical application.</h2>
              <div className={styles.credentialLedger}>
                {qualifications.map((item) => (
                  <div className={styles.credentialRow} key={item.name}>
                    <span>{item.name}</span>
                    <strong>{item.level}</strong>
                  </div>
                ))}
                <div className={styles.credentialRow}>
                  <span>Additional CPD & professional development</span>
                  <strong>On request</strong>
                </div>
              </div>
            </div>

            <aside className={styles.digitalPanel}>
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
        <div>
          <span className={styles.footerKicker}>Open to conversation</span>
          <h2>Senior operations, people,<br />service or programme leadership.</h2>
        </div>
        <div className={styles.footerActions}>
          <a href="mailto:m.ohare@hotmail.co.uk">Email Mark</a>
          <a href="/Mark_OHare_CV_2026_V1.docx" download>Download full CV</a>
        </div>
        <p className={styles.footerMeta}>Mark O’Hare · North Lanarkshire, Scotland · 2026</p>
      </footer>
    </main>
  );
}
