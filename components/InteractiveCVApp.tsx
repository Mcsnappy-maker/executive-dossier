"use client";

const profile = {
  name: "Mark O’Hare",
  title: "Third Sector Operations & People Leader",
  strap: "Service Design & Delivery | Workforce Development | Facilitation | Partnerships | Governance | Digital Improvement",
  contact: "m.ohare@hotmail.co.uk | 07861 701490 | North Lanarkshire / Scotland |",
  email: "m.ohare@hotmail.co.uk",
  phone: "07861 701490",
  location: "North Lanarkshire / Scotland",
  linkedIn: "https://www.linkedin.com/in/mark-o-hare-970433b0",
};

const profileParagraphs = [
  "Experienced third-sector operations and people leader with over 25 years’ experience across community services, employability, wellbeing, volunteering, justice and organisational development. I have taken services from concept into delivery, led multi-partner pilots, managed staff and practitioners, supported boards, developed partnerships and helped organisations improve delivery under real-world pressure.",
  "My strengths sit across service operations, workforce development, design and facilitation, governance reporting, safeguarding, partnership building, digital service improvement and community engagement. I have worked with councils, NHS bodies, schools, police, prisons, funders, trustees and local organisations, always with a focus on practical delivery and people-centred outcomes.",
  "I bring a grounded leadership style: calm under pressure, clear with expectations, strong on relationships and able to turn complex people, service or delivery issues into workable action.",
];

const selectedImpact = [
  "Redesigned and implemented CERT’s employability and wellbeing programme, turning it from paper concept into the area’s largest integrated service of its kind.",
  "Led the original CERT pilot with nine local partner organisations, building the foundations for wider delivery.",
  "Built the delivery model that scaled to support 379 participants annually.",
  "Contributed to over £850k in continuation funding across three years.",
  "Managed a defined Glasgow service area at Lifelink, overseeing school-based and therapeutic wellbeing services delivered through major commissioned contracts.",
  "Designed and rolled out the wellbeing portfolio at Lifelink, trained the wider team, and enabled the team to deliver the core wellbeing sessions.",
  "Promoted into senior operational roles within one year at both CERT and Lifelink.",
  "Reported directly to boards and trustees on safeguarding, risk, performance and delivery.",
  "Built partnerships across councils, NHS, schools, police, prisons and third-sector organisations.",
];

const strengths = [
  "Service leadership and operations: running busy community-facing services & buildings, programmes and teams.",
  "People management and workforce development: supporting staff, volunteers and practitioners to work with clarity and confidence.",
  "Partnership development: building productive relationships with councils, NHS bodies, third-sector organisations and local stakeholders.",
  "Governance and board reporting: preparing clear updates on performance, risk, safeguarding, delivery and funding.",
  "Safeguarding, compliance and risk: maintaining safe, accountable services in complex environments.",
  "Funding and sustainability: contributing to continuation funding, income generation and service development.",
  "Digital service improvement: introducing practical tools, systems and online delivery models during periods of change.",
  "Community engagement: working with people, places and partners to design practical local responses.",
];

const experience = [
  {
    title: "Founder & Lead | Kelloch",
    dates: "July 2024 – Present",
    intro:
      "Developed Kelloch as a practical third-sector workforce and leadership initiative supporting charities, CICs and social enterprises with hiring, people development, service improvement and clearer decision-making. Developed alongside employment.",
    bullets: [
      "Built and managed a values-led platform focused on better hiring, stronger managers and clearer organisational decisions.",
      "Developed tools and resources to support third-sector recruitment, workforce planning, leadership confidence and service sustainability.",
      "Supported organisations to improve role design, candidate experience, team clarity and people-related decision-making.",
      "Created sector-facing resources including funding information, hiring insight and local support signposting.",
      "Managed website development, communications, stakeholder relationships, finance and day-to-day operations independently.",
      "Maintained a practical, ethical approach focused on trust, transparency and useful support for stretched organisations.",
    ],
  },
  {
    title: "Lead Clinical Logistics Driver | Sciensus",
    dates: "July 2024 – Present",
    intro:
      "Regulated healthcare logistics role requiring reliability, compliance, route coordination, patient-facing professionalism and colleague support, alongside day-to-day responsibility for maintaining a factory unit.",
    bullets: [
      "Maintain high-standard service delivery in a time-critical healthcare environment.",
      "Support route cover, shift coordination, compliance checks and defect reporting.",
      "Work within strict compliance expectations where accuracy, judgement and consistency are essential.",
      "Bring practical insight into frontline service pressure, regulated delivery and operational discipline.",
    ],
  },
  {
    title: "Operations Manager | CERT – Clackmannanshire Economic Regeneration Trust",
    dates: "January 2022 – July 2024",
    intro:
      "Promoted from Project Manager to Operations Manager within one year, reporting directly to the Chair and Board. Redesigned and implemented CERT’s employability and wellbeing programme, taking it from a paper concept into the area’s largest integrated service of its kind, leading the original pilot with a cohort of nine local partners and driving its growth into full operational delivery.",
    bullets: [
      "Redesigned and implemented the original pilot across nine local partner organisations, coordinating delivery, relationships, reporting and shared learning.",
      "Built the programme from early-stage concept into a regional employability and wellbeing service supporting 379 participants annually.",
      "Developed and maintained key partnerships with Clackmannanshire Council, NHS Forth Valley and third-sector delivery partners.",
      "Contributed to over £850k in continuation funding across three years.",
      "Led safeguarding, risk governance, trustee reporting, compliance and delivery assurance.",
      "Managed programme budgets, staff supervision, performance reporting and service improvement.",
      "Translated frontline delivery insight into practical improvements for partners, funders and trustees.",
    ],
  },
  {
    title: "Service Manager | Lifelink",
    dates: "March 2020 – January 2022",
    intro:
      "Promoted from Assistant Manager to Service Manager within one year. Member of a four-person Senior Management Team, with responsibility for managing a defined Glasgow service area covering school-based and therapeutic wellbeing services delivered through significant public and commissioned contracts.",
    bullets: [
      "Managed delivery across an allocated area of Glasgow, including school-based wellbeing support and therapeutic services.",
      "Oversaw service performance, practitioner coordination, safeguarding, quality standards and contract expectations.",
      "Supported delivery of large-scale commissioned wellbeing contracts during a period of high demand and pandemic disruption.",
      "Designed and rolled out the wellbeing portfolio, trained the wider team, and enabled the team to deliver the core wellbeing sessions.",
      "Designed and implemented the move to online wellbeing delivery during COVID-19, introducing Microsoft Teams and Zoom across staff and practitioner teams.",
      "Trained staff and practitioners to use new digital systems confidently, enabling continuity of support for schools, clients and communities during lockdown.",
      "Supported a therapeutic workforce ranging from 15 to 100 practitioners across changing service demands.",
      "Strengthened safeguarding processes, risk registers and governance reporting.",
      "Worked within delegated financial authority and senior management accountability structures.",
      "Supported workforce wellbeing, communication and operational resilience during sustained pressure.",
    ],
  },
  {
    title: "Earlier Third-Sector, Employability, Community & Business Development Experience",
    dates: "2000 – 2020",
    intro:
      "Held founder, adviser, facilitator and delivery roles across community development, employability, volunteering, justice, advice and youth programmes. Built and delivered issue-based workshops, training programmes and community interventions focused on employability, wellbeing, confidence, resilience, social inclusion, youth development and practical life skills.",
    bullets: [
      "Founded and led Holistic Enterprises Scotland, designing and delivering training, employability, wellbeing and youth development programmes across Scotland.",
      "Designed and facilitated issue-based workshops and group programmes for young people, vulnerable adults, jobseekers, community groups and justice-sector participants.",
      "Supported volunteer development, governance and safeguarding improvement with Voluntary Action North Lanarkshire.",
      "Delivered prison-based employability, mentoring and personal development programmes within HM Polmont and other justice settings.",
      "Provided advice, advocacy and employability support to vulnerable individuals through Citizens Advice Bureau and Routes to Work.",
      "Built long-term partnerships with schools, police, social services, councils, prisons and community organisations.",
      "Turned complex social issues into structured, accessible learning experiences that helped participants build confidence, make decisions and move towards positive outcomes.",
    ],
  },
];

const qualifications = [
  "SVQ Level 5 Learning & Development — SCQF Level 11",
  "SVQ Level 4 Mentoring & Leadership — SCQF Level 10",
  "HND Community Arts",
  "Trauma-Informed Practice Facilitator",
  "Mental Health First Aid Instructor",
  "Additional CPD and professional development available on request",
];

const digitalSkills = [
  "Website development, digital content and online service design.",
  "Social media management, community engagement and audience communication.",
  "Adobe Creative Suite, professional photography, visual storytelling and brand presentation.",
  "Working knowledge of React and TypeScript, supporting practical digital delivery and automation.",
  "AI and automation expert.",
];

const navItems = [
  { href: "#profile", label: "Profile" },
  { href: "#impact", label: "Impact" },
  { href: "#strengths", label: "Strengths" },
  { href: "#experience", label: "Experience" },
  { href: "#qualifications", label: "Qualifications" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const downloadHref = "/Mark_OHare_CV_2026_V1.docx";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="exec-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function InteractiveCVApp() {
  return (
    <main className="exec-page">
      <aside className="exec-sidebar" aria-label="CV navigation and contact">
        <img className="exec-sidebar-photo" src="/mark-ohare-headshot.png" alt="Mark O’Hare" />
        <nav aria-label="CV sections">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <a className="exec-download" href={downloadHref} download>Download Profile</a>
      </aside>

      <article className="exec-sheet">
        <header id="contact" className="exec-header">
          <div>
            <h1>{profile.name}</h1>
            <p className="exec-title">{profile.title}</p>
            <p className="exec-strap">{profile.strap}</p>
          </div>
          <address className="exec-contact">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>{profile.phone}</a>
            <span>{profile.location}</span>
            <a href={profile.linkedIn} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="exec-contact-download" href={downloadHref} download>Download Profile</a>
          </address>
        </header>

        <section id="profile" className="exec-section">
          <h2>Profile</h2>
          {profileParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section id="impact" className="exec-section">
          <h2>Selected Impact</h2>
          <BulletList items={selectedImpact} />
        </section>

        <section id="strengths" className="exec-section">
          <h2>Core Leadership Strengths</h2>
          <BulletList items={strengths} />
        </section>

        <section id="experience" className="exec-section">
          <h2>Experience</h2>
          <div className="exec-experience">
            {experience.map((role) => (
              <section key={`${role.title}-${role.dates}`} className="exec-role">
                <header>
                  <div>
                    <h3>{role.title}</h3>
                    <p>{role.dates}</p>
                  </div>
                </header>
                <p>{role.intro}</p>
                <BulletList items={role.bullets} />
              </section>
            ))}
          </div>
        </section>

        <section id="qualifications" className="exec-section">
          <h2>Qualifications & Professional Development</h2>
          <BulletList items={qualifications} />
        </section>

        <section id="skills" className="exec-section">
          <h2>Digital, Creative & Communication Skills</h2>
          <BulletList items={digitalSkills} />
        </section>
      </article>
    </main>
  );
}
