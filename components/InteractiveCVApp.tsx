"use client";

import { type CSSProperties, useEffect, useState } from "react";

const profile = {
  name: "Mark O'Hare",
  title: "Third Sector Operations & People Leader",
  strap:
    "Service Design & Delivery | Workforce Development | Facilitation | Partnerships | Governance | Digital Improvement",
  summary:
    "Experienced third-sector operations and people leader with over 25 years of experience across community services, employability, wellbeing, volunteering, justice and organisational development. I have taken services from concept into delivery, led multi-partner pilots, managed staff and practitioners, supported boards, developed partnerships and helped organisations improve delivery under real-world pressure.",
  supporting:
    "My strengths sit across service operations, workforce development, design and facilitation, governance reporting, safeguarding, partnership building, digital service improvement and community engagement. I bring a grounded leadership style: calm under pressure, clear with expectations, strong on relationships and able to turn complex people, service or delivery issues into workable action.",
  location: "North Lanarkshire / Scotland",
  email: "m.ohare@hotmail.co.uk",
  phone: "07861 701490",
  linkedIn: "https://www.linkedin.com/in/mark-o-hare-970433b0",
};

const proofPoints = [
  { value: "25+", label: "Years across third-sector leadership and delivery" },
  { value: "379", label: "Participants supported annually through CERT delivery" },
  { value: "£850k+", label: "Continuation funding supported across three years" },
  { value: "2x", label: "Promoted into senior operational roles within one year" },
];

const impactStories = [
  {
    title: "Built a regional employability and wellbeing service from concept",
    body:
      "At CERT, I redesigned and implemented the original pilot with nine partner organisations, turning a paper concept into the area's largest integrated employability and wellbeing service of its kind.",
    result: "Built the delivery model that scaled to support 379 participants annually with stronger partner coordination and operational clarity.",
  },
  {
    title: "Supported continuity, confidence and service sustainability",
    body:
      "I contributed to over £850k in continuation funding across three years, combining delivery credibility with reporting, governance and practical organisational confidence.",
    result: "Helped protect service continuity, staff confidence and longer-term community value.",
  },
  {
    title: "Moved wellbeing delivery online during COVID-19",
    body:
      "At Lifelink, I designed and rolled out a successful wellbeing portfolio, trained the wider team to deliver the core wellbeing sessions, and managed several high-profile Glasgow school therapeutic contracts.",
    result: "Introduced Teams and Zoom delivery processes that enabled therapeutic services to continue during a period of sustained disruption.",
  },
  {
    title: "Built trust across complex partnership environments",
    body:
      "I have worked with councils, NHS bodies, schools, police, prisons, funders, trustees and local organisations, always with a focus on practical delivery and people-centred outcomes.",
    result: "Strong partnership credibility across public, health, justice and community settings.",
  },
];

const strengths = [
  {
    title: "Service leadership and operations",
    text: "Running busy services, programmes and teams with calm oversight, dependable standards and practical delivery focus.",
  },
  {
    title: "People management and workforce development",
    text: "Supporting staff, volunteers and practitioners to work with clarity, confidence and consistent expectations.",
  },
  {
    title: "Partnership development",
    text: "Building productive relationships with councils, NHS bodies, third-sector organisations and local stakeholders.",
  },
  {
    title: "Governance and board reporting",
    text: "Preparing clear updates on performance, risk, safeguarding, delivery and funding for boards and trustees.",
  },
  {
    title: "Safeguarding, compliance and risk",
    text: "Maintaining safe, accountable services in complex environments where operational discipline matters.",
  },
  {
    title: "Funding and sustainability",
    text: "Contributing to continuation funding, income generation and service development with practical delivery credibility.",
  },
  {
    title: "Digital service improvement",
    text: "Introducing practical tools, systems and online delivery models during periods of change and operational pressure.",
  },
  {
    title: "Community engagement",
    text: "Working with people, places and partners to design responses that are practical, local and usable.",
  },
];

const digitalSkills = [
  "Website development, digital content and online service design.",
  "Social media management, community engagement and audience communication.",
  "Professionally trained and award-winning photographer, Adobe Creative Suite, visual storytelling and brand presentation.",
  "Expert in AI and automation, using practical systems thinking to improve services, workflows and decision-making.",
  "Successfully built and managed my own websites, including complex database and interactive website work for local social enterprises.",
  "Working knowledge of React and TypeScript, supporting practical digital delivery and smarter operational systems.",
];

const navItems = [
  { href: "#overview", label: "Overview" },
  { href: "#impact", label: "Evidence" },
  { href: "#experience", label: "Journey" },
  { href: "#capability", label: "Capability" },
  { href: "#edge", label: "Edge" },
  { href: "#contact", label: "Contact" },
];

const sectionFrames = {
  profile: "A practical operator who turns community strategy into delivery.",
  impact: "Proof across growth, funding, partnerships and digital change.",
  journey: "Twenty-five years across frontline, management, founder and regulated delivery roles.",
  capability: "Strongest where people, systems and operational pressure meet.",
  edge: "A rare mix of service leadership, creative communication and practical digital build ability.",
};

const capabilityMap = [
  {
    axis: "People",
    items: ["Workforce development", "Facilitation", "Community engagement", "Partnership building"],
  },
  {
    axis: "Systems",
    items: ["Digital improvement", "Reporting", "Automation", "Online service design"],
  },
  {
    axis: "Delivery",
    items: ["Service operations", "Safeguarding", "Compliance", "Risk governance"],
  },
  {
    axis: "Strategy",
    items: ["Funding", "Board reporting", "Programme redesign", "Service sustainability"],
  },
];

const digitalEdge = [
  {
    title: "Operational leadership",
    text: "Service delivery, safeguarding, compliance, governance reporting and practical decision-making under pressure.",
  },
  {
    title: "Creative communication",
    text: "Award-winning photography, Adobe Creative Suite, visual storytelling, audience engagement and brand presentation.",
  },
  {
    title: "Digital systems",
    text: "AI, automation, React, TypeScript, websites, databases, online systems and digital service improvement.",
  },
];

const currentPractice = [
  {
    title: "Founder & Lead | Kelloch",
    dates: "July 2024 - Present",
    emphasis: "Current venture and ongoing leadership work",
    text:
      "Developed Kelloch as a practical third-sector workforce and leadership initiative supporting charities, CICs and social enterprises with hiring, people development, service improvement and clearer decision-making.",
    bullets: [
      "Built a values-led platform focused on better hiring, stronger managers and clearer organisational decisions.",
      "Created resources supporting recruitment, workforce planning, leadership confidence and service sustainability.",
      "Built and managed the digital presence independently, including website development, structured content and practical automation.",
      "Managed communications, stakeholder relationships, finance and day-to-day operations independently.",
    ],
  },
  {
    title: "Lead Clinical Logistics Driver | Sciensus",
    dates: "July 2024 - Present",
    emphasis: "Current full-time regulated healthcare logistics role",
    text:
      "Regulated healthcare logistics role requiring reliability, compliance, route coordination, patient-facing professionalism and colleague support, alongside day-to-day responsibility for maintaining a factory unit.",
    bullets: [
      "Maintain high-standard service delivery in a time-critical healthcare environment.",
      "Support route cover, shift coordination, compliance checks and defect reporting.",
      "Bring practical insight into frontline service pressure, regulated delivery and operational discipline.",
    ],
  },
];

const experience = [
  {
    year: "2022 - 2024",
    role: "Operations Manager",
    organisation: "CERT - Clackmannanshire Economic Regeneration Trust",
    intro:
      "Promoted from Project Manager to Operations Manager within one year, reporting directly to the Chair and Board.",
    bullets: [
      "Project-managed the original pilot across nine local partner organisations, coordinating delivery, relationships, reporting and shared learning.",
      "Built the programme from early-stage concept into a regional employability and wellbeing service supporting 379 participants annually.",
      "Developed and maintained key partnerships with Clackmannanshire Council, NHS Forth Valley and third-sector delivery partners.",
      "Led safeguarding, risk governance, trustee reporting, compliance and delivery assurance.",
      "Managed programme budgets, staff supervision, performance reporting and service improvement.",
    ],
  },
  {
    year: "2020 - 2022",
    role: "Service Manager",
    organisation: "Lifelink",
    intro:
      "Promoted from Assistant Manager to Service Manager within one year and became part of a four-person Senior Management Team.",
    bullets: [
      "Managed several high-profile Glasgow school therapeutic contracts alongside wider wellbeing service delivery.",
      "Supported delivery of large-scale commissioned wellbeing contracts during high demand and pandemic disruption.",
      "Designed and rolled out a successful wellbeing portfolio, then trained the wider team to deliver the core wellbeing sessions.",
      "Introduced Microsoft Teams and Zoom delivery processes, enabling therapeutic services to continue during lockdown.",
      "Strengthened safeguarding processes, risk registers and governance reporting.",
    ],
  },
  {
    year: "2000 - 2020",
    role: "Earlier Third-Sector, Employability & Community Development Experience",
    organisation: "Founder, adviser, facilitator and delivery roles across Scotland",
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
  { title: "SVQ Level 5 Learning & Development", detail: "SCQF Level 11", type: "Senior development" },
  { title: "SVQ Level 4 Mentoring & Leadership", detail: "SCQF Level 10", type: "Leadership practice" },
  { title: "HND Community Arts", detail: "Community development foundation", type: "Formal qualification" },
  {
    title: "Trauma-Informed Practice Facilitator",
    detail: "Practice-led facilitation and safer service delivery",
    type: "Specialist practice",
  },
  {
    title: "Mental Health First Aid Instructor",
    detail: "Workforce confidence, awareness and early support",
    type: "Instructor credential",
  },
  { title: "Additional CPD", detail: "Available on request", type: "Continuing development" },
];

const iconSet = ["", "", "", "", "", "", "", ""];

function parseCounter(value: string) {
  const match = value.match(/(\d+)/);
  return {
    end: match ? Number(match[1]) : 0,
    prefix: value.slice(0, match?.index ?? 0),
    suffix: match ? value.slice((match.index ?? 0) + match[1].length) : value,
  };
}

function formatCounter(value: string, count: number) {
  const parsed = parseCounter(value);
  return `${parsed.prefix}${Math.round(count)}${parsed.suffix}`;
}

export function InteractiveCVApp() {
  const [visibleStats, setVisibleStats] = useState(false);
  const [statValues, setStatValues] = useState(() => proofPoints.map(() => 0));
  const tags = profile.strap.split(" | ");

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const statsElement = document.getElementById("exec-proof");
    if (!statsElement) {
      return;
    }

    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisibleStats(true);
          statsObserver.disconnect();
        }
      },
      { threshold: 0.32 }
    );

    statsObserver.observe(statsElement);
    return () => statsObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!visibleStats) {
      return;
    }

    const targets = proofPoints.map((item) => parseCounter(item.value).end);
    const duration = 1400;
    let frameId = 0;
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 2);
      setStatValues(targets.map((target) => target * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [visibleStats]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <main className="exec-page">
      <nav className="exec-command-rail" aria-label="Dossier sections">
        <span>Executive Dossier</span>
        {navItems.map((item, index) => (
          <a key={item.href} href={item.href}>
            <small>{String(index + 1).padStart(2, "0")}</small>
            {item.label}
          </a>
        ))}
        <button type="button" onClick={() => window.print()}>Download Profile</button>
      </nav>

      <div className="exec-sheet">
        <section id="overview" className="exec-hero" data-reveal>
          <div className="exec-photo-wrap">
            <img className="exec-photo" src="/mark-ohare-headshot.png" alt="Mark O'Hare" />
            <div className="exec-photo-stamp">Verified Impact</div>
          </div>

          <div className="exec-hero-content">
            <p className="exec-dossier-label">Leadership Dossier / 2026</p>
            <h1>{profile.name}</h1>
            <p className="exec-title">{profile.title}</p>
            <p className="exec-positioning">{sectionFrames.profile}</p>

            <div className="exec-tagline" aria-label="Core disciplines">
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="exec-hero-actions">
              <button type="button" onClick={() => window.print()}>Download profile</button>
              <a href="#impact">View evidence</a>
            </div>

            <div className="exec-proof-strip" aria-label="Headline proof">
              {proofPoints.slice(0, 3).map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="exec-contact-strip" aria-label="Contact details">
              <button type="button" onClick={copyEmail}>{profile.email}</button>
              <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>{profile.phone}</a>
              <span>{profile.location}</span>
              <a className="exec-linkedin-link" href={profile.linkedIn} target="_blank" rel="noreferrer">
                <span className="exec-linkedin-badge" aria-hidden="true">in</span>
                LinkedIn Profile
              </a>
            </div>

            <div className="exec-profile">
              <h2>Executive Profile</h2>
              <strong>{sectionFrames.profile}</strong>
              <p>{profile.summary}</p>
            </div>
          </div>
        </section>

        <section id="strengths" className="exec-section exec-strengths-band" data-reveal>
          <div className="exec-section-label">Core Strengths</div>
          <div className="exec-strength-pills">
            {strengths.map((item, index) => (
              <article key={item.title} className="exec-pill" style={{ "--i": index } as CSSProperties}>
                <span>{iconSet[index]}</span>
                {item.title}
              </article>
            ))}
          </div>
        </section>

        <section id="impact" className="exec-section" data-reveal>
          <div className="exec-section-head">
            <span>01 / Operational Evidence</span>
            <h2 className="exec-section-title">Selected Impact</h2>
            <p>{sectionFrames.impact}</p>
          </div>
          <div className="exec-impact-grid">
            {impactStories.map((item, index) => (
              <article key={item.title} className="exec-impact-card" style={{ "--i": index } as CSSProperties}>
                <div className="exec-impact-head">
                  <span>{index + 1}</span>
                  <strong>{item.title}</strong>
                </div>
                <div className="exec-impact-icon" aria-hidden="true">{iconSet[index + 2]}</div>
                <b>Context / action</b>
                <p>{item.body}</p>
                <small>{item.result}</small>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="exec-section" data-reveal>
          <div className="exec-section-head">
            <span>02 / Authority Arc</span>
            <h2 className="exec-section-title">Career Journey</h2>
            <p>{sectionFrames.journey}</p>
          </div>
          <div className="exec-journey">
            {currentPractice.map((item, index) => (
              <article key={item.title} className="exec-journey-row exec-current-row" style={{ "--i": index } as CSSProperties}>
                <div className="exec-year">{item.dates}</div>
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.emphasis}</span>
                </div>
                <p>{item.text}</p>
              </article>
            ))}
            {experience.map((item, index) => (
              <article key={item.role} className="exec-journey-row" style={{ "--i": index + 2 } as CSSProperties}>
                <div className="exec-year">{item.year}</div>
                <div>
                  <strong>{item.role}</strong>
                  <span>{item.organisation}</span>
                </div>
                <p>{item.intro}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="exec-dashboard-grid" data-reveal>
          <aside id="exec-proof" className="exec-panel exec-snapshot">
            <h2>Leadership Snapshot</h2>
            {proofPoints.map((item, index) => (
              <div key={item.label} className="exec-snapshot-row">
                <span>{iconSet[index]}</span>
                <div>
                  <strong>{visibleStats ? formatCounter(item.value, statValues[index]) : item.value}</strong>
                  <p>{item.label}</p>
                </div>
              </div>
            ))}
          </aside>

          <section id="capability" className="exec-panel exec-matrix exec-capability-map">
            <h2>Capability Map</h2>
            <p>{sectionFrames.capability}</p>
            <div>
              {capabilityMap.map((group) => (
                <article key={group.axis}>
                  <strong>{group.axis}</strong>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section id="qualifications" className="exec-panel exec-qualifications">
            <h2>Education & Professional Development</h2>
            <ul>
              {qualifications.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="edge" className="exec-panel exec-tools exec-edge">
            <h2>The Uncommon Edge</h2>
            <p>{sectionFrames.edge}</p>
            <div>
              {digitalEdge.map((item) => (
                <article key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <small>{digitalSkills.join(" ")}</small>
          </section>
        </section>

        <section id="contact" className="exec-footer">
          <blockquote>
            {profile.supporting}
          </blockquote>
          <div>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a className="exec-linkedin-link" href={profile.linkedIn} target="_blank" rel="noreferrer">
              <span className="exec-linkedin-badge" aria-hidden="true">in</span>
              View LinkedIn Profile
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
