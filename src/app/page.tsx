import { Reveal, MaskReveal, CountUp } from "@/components/Motion";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 py-6 bg-background/80 backdrop-blur-xl border-b border-border/50 transition-all duration-700">
        <div className="container flex justify-between items-center">
          <Link href="#" className="font-display font-medium text-2xl tracking-widest text-foreground hover:text-accent transition-colors">
            M.OHARE
          </Link>

          <nav className="hidden md:flex gap-10" aria-label="Primary navigation">
            {["Overview", "Value", "Evidence", "Systems", "Chronology", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-muted hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex gap-6 items-center">
            <a href="mailto:m.ohare@hotmail.co.uk" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted hover:text-foreground transition-colors hidden sm:block">Email</a>
            <a href="#contact" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted hover:text-foreground transition-colors hidden sm:block">07861 701490</a>
            <a href="/Mark_OHare_CV%202026.pdf" download className="text-xs font-semibold uppercase tracking-[0.2em] px-4 py-2 bg-accent text-background hover:bg-foreground transition-colors ml-4 inline-block text-center">
              Download Profile
            </a>
          </div>
        </div>
      </header>

      <main className="w-full text-foreground selection:bg-accent selection:text-background">
        
        {/* HERO */}
        <section id="overview" className="min-h-[85vh] flex flex-col justify-center pt-32 pb-20 relative overflow-hidden bg-surface">
          <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          
          <div className="container relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
            
            <div className="pr-8">
              <MaskReveal>
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-accent mb-8 block">Leadership Profile</span>
              </MaskReveal>
              
              <MaskReveal delay={0.1}>
                <h1 className="font-display text-6xl md:text-[7.5rem] tracking-tight leading-[0.9] text-foreground mb-8">
                  Mark O'Hare
                </h1>
              </MaskReveal>
              
              <Reveal delay={0.2}>
                <p className="font-sans text-xl md:text-2xl text-foreground font-light leading-relaxed mb-6 max-w-xl">
                  Community operations leader with deep experience in frontline services, local partnerships and safe, reliable building-based delivery.
                </p>
                <p className="font-sans text-lg text-muted font-light leading-relaxed mb-10 max-w-lg">
                  I help community spaces run well day to day, support staff and volunteers, and turn growth plans into practical local impact.
                </p>
              </Reveal>

              <Reveal delay={0.3} className="flex gap-6 items-center">
                <a href="#contact" className="px-8 py-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] bg-[#EAE2D6] text-foreground rounded-xl hover:bg-accent hover:text-white transition-all duration-300">
                  Discuss Strategy
                </a>
                <a href="#chronology" className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-muted hover:text-foreground transition-colors underline underline-offset-4">
                  View Track Record
                </a>
              </Reveal>
            </div>

            <Reveal delay={0.4} className="h-full min-h-[450px] lg:min-h-[600px] w-full relative rounded-sm overflow-hidden bg-background border border-border/50 p-2">
               <div className="w-full h-full bg-accent/5 rounded-sm relative overflow-hidden mix-blend-multiply grayscale">
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent mix-blend-multiply z-10" />
                  <img src="/mark_facilitator.png" alt="Mark O'Hare - Facilitating Community Leadership" className="object-cover w-full h-full opacity-60 mix-blend-luminosity" />
               </div>
            </Reveal>

          </div>
        </section>

        {/* METRICS STRIP */}
        <section className="py-20 bg-background border-b border-border/50">
          <div className="container relative z-10">
            <Reveal delay={0.5} className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border/50">
              <div className="pt-8 md:pt-0 px-8">
                <strong className="font-display text-5xl md:text-6xl block text-foreground mb-3 font-light tracking-tight">20<span className="text-accent">+</span></strong>
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-muted">Years Community Exp.</span>
              </div>
              <div className="pt-8 md:pt-0 px-8">
                <strong className="font-display text-5xl md:text-6xl block text-foreground mb-3 font-light tracking-tight">379</strong>
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-muted">Participants Annually</span>
              </div>
              <div className="pt-8 md:pt-0 px-8">
                <strong className="font-display text-5xl md:text-6xl block text-foreground mb-3 font-light tracking-tight">£850<span className="text-2xl">k</span></strong>
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-muted">Continuation Funding</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CCCG SPECIFIC */}
        <section className="py-40 bg-background border-t border-border/50">
          <div className="container max-w-6xl mx-auto">
            <Reveal className="mb-24">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-accent mb-6 block">Strategic Fit</span>
              <h2 className="font-display text-5xl md:text-7xl tracking-tight">What I would bring to CCCG</h2>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { title: "Building Operations", text: "Welcoming, well-run building operations that serve as a reliable local hub." },
                { title: "Safety & Standards", text: "Strong standards around safety, safeguarding and presentation." },
                { title: "Coordination", text: "Calm coordination of activities, hires, volunteers and partners." },
                { title: "Executive Support", text: "Practical support to Board and Development Officer." },
                { title: "Growth", text: "Focus on sustainable growth and community participation." }
              ].map((item, i) => (
                <Reveal key={i} delay={0.1 * i} className="p-8 border border-border bg-surface/50">
                  <strong className="block text-accent mb-4 text-[0.7rem] font-bold uppercase tracking-[0.2em]">{item.title}</strong>
                  <p className="text-[0.9rem] text-muted leading-relaxed font-light">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* VALUE */}
        <section id="value" className="py-40 bg-surface border-t border-border/50">
          <div className="container max-w-6xl mx-auto">
            <Reveal className="mb-32">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-accent mb-6 block text-center">Leadership Value</span>
              <h2 className="font-display text-5xl md:text-7xl text-center tracking-tight max-w-4xl mx-auto leading-tight mb-8">
                A bridge between policy and practice.
              </h2>
              <p className="text-2xl text-foreground max-w-4xl mx-auto text-center leading-relaxed font-light mb-8">
                 I convert strategy and policy into reliable frontline operations.
              </p>
              <p className="text-xl text-muted max-w-4xl mx-auto text-center leading-relaxed font-light">
                I do not manage services on paper; I build the teams, relationships and systems that keep them steady and trusted.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { title: "Governance", text: "Board-facing assurance across governance, performance and risk." },
                { title: "Delivery", text: "Proven delivery in complex, multi-agency programmes and community-facing environments." },
                { title: "Infrastructure", text: "Practical digital capability spanning bids, reporting, systems design and service improvement." },
                { title: "Application", text: "Forensic analysis, tender writing and digital design used to strengthen bids, reports and presentations." }
              ].map((item, i) => (
                <Reveal key={i} delay={0.1 * i} className="p-8 border border-border">
                  <strong className="block text-accent mb-6 text-[0.65rem] font-bold uppercase tracking-[0.2em]">{item.title}</strong>
                  <p className="text-[0.95rem] text-muted leading-relaxed font-light">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* EVIDENCE */}
        <section id="evidence" className="py-40 border-t border-border/50">
          <div className="container max-w-6xl mx-auto">
            <Reveal className="mb-24">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-accent mb-6 block">Signature Outcomes</span>
              <h2 className="font-display text-5xl md:text-7xl tracking-tight">Evidence before job titles.</h2>
              <p className="mt-8 text-muted max-w-3xl text-xl font-light leading-relaxed">
                Selected outcomes that show delivery range across programme growth, funding continuity, governance and learning infrastructure.
              </p>
            </Reveal>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Reveal delay={0.1} className="lg:col-span-2 group bg-background p-12 lg:p-20 border border-border relative overflow-hidden">
                <div className="grid lg:grid-cols-[1fr_0.8fr] gap-16 relative z-10 items-center">
                  <div>
                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-accent mb-6 block">Major Programme</span>
                    <h3 className="font-display text-4xl lg:text-5xl tracking-tight mb-6">Built a frontline engine from paper.</h3>
                    <p className="text-muted text-lg font-light leading-relaxed">Took an operational concept from paper and built it into the region's primary integrated health and employability service, coordinating NHS, local authority, and third sector delivery.</p>
                  </div>
                  <div className="lg:border-l border-border lg:pl-16 pt-10 lg:pt-0 border-t lg:border-t-0">
                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-accent mb-4 block">Measurable Impact</span>
                    <p className="text-2xl leading-relaxed text-foreground font-light">Supported 379 participants annually through a coordinated delivery model, reducing operational fragmentation.</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2} className="group bg-background p-12 lg:p-16 border border-border">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-accent mb-6 block">Funding Strategy</span>
                <h3 className="font-display text-3xl lg:text-4xl tracking-tight mb-6">Secured £850k continuation funding.</h3>
                <p className="text-muted text-lg font-light leading-relaxed">Secured £850k continuation funding to protect service continuity and organisational resilience across three years.</p>
              </Reveal>

              <Reveal delay={0.3} className="group bg-background p-12 lg:p-16 border border-border">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-accent mb-6 block">Instructional Design</span>
                <h3 className="font-display text-3xl lg:text-4xl tracking-tight mb-6">Digital training systems standardisation.</h3>
                <p className="text-muted text-lg font-light leading-relaxed">Implemented training infrastructure at Lifelink and CERT that still underpins operational learning, compliance and staff development.</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SYSTEMS */}
        <section id="systems" className="py-40 bg-surface border-t border-border/50">
          <div className="container max-w-5xl mx-auto">
            <Reveal className="mb-24">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-accent mb-6 block">Strategic Capability</span>
              <h2 className="font-display text-5xl md:text-7xl tracking-tight mb-8">Systems thinking.</h2>
              <p className="text-xl text-muted max-w-3xl font-light leading-relaxed">
                I build practical systems where organisations need more than process - where delivery improves because the underlying infrastructure is better designed.
              </p>
            </Reveal>
            
            <Reveal delay={0.1} className="p-12 border border-border bg-background">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent mb-6 block">Ground-up Infrastructure</span>
              <p className="text-[0.95rem] font-light text-foreground mb-12 max-w-2xl leading-relaxed">
                I conceptualise, design, and code live systems that solve structural bottlenecks in the third sector. These aren't theoretical concepts; they are functional digital products currently in production.
              </p>
              <div className="grid md:grid-cols-3 gap-10">
                {[
                  { 
                    title: "Talent Direct", 
                    desc: "An ethical hiring ecosystem built to completely bypass traditional agency fees and support candidate dignity within the sector.",
                    link: "https://kelloch.org.uk/talent-direct",
                    linkLabel: "View platform"
                  },
                  { 
                    title: "Job Signals", 
                    desc: "A live market intelligence engine tracking real-time data to help boards position roles accurately against evolving sector trends.",
                    link: "https://kelloch.org.uk/signals",
                    linkLabel: "View dataset"
                  },
                  { 
                    title: "Learning Hub", 
                    desc: "A fully automated LMS handling mandatory compliance and professional development without the heavy administrative burden.",
                    link: "https://kelloch.org.uk/learning-hub",
                    linkLabel: "View hub"
                  }
                ].map((sys, idx) => (
                  <div key={idx} className="flex flex-col">
                    <h3 className="font-display text-3xl mb-3 text-foreground">{sys.title}</h3>
                    <p className="text-muted leading-relaxed text-[0.95rem] font-light flex-grow mb-6">{sys.desc}</p>
                    <a href={sys.link} target="_blank" rel="noreferrer" className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent hover:text-foreground transition-colors inline-block mt-auto pb-1 border-b border-accent/30 w-max group">
                      {sys.linkLabel} <span className="inline-block transform group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* REACH: Why this matters */}
        <section className="py-40 border-t border-border/50">
          <div className="container max-w-4xl mx-auto text-center">
            <Reveal>
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-accent mb-6 block">Scale & Influence</span>
              <h2 className="font-display text-4xl lg:text-5xl tracking-tight mb-10">Provable reach in context.</h2>
              <p className="text-2xl text-muted font-light leading-relaxed mb-8">
                Generating <strong className="text-foreground font-normal">373,900+ weekly impressions</strong> and holding an active professional audience of <strong className="text-foreground font-normal">8,260+ followers</strong> and engaged newsletter subscribers, I use LinkedIn deliberately to share practice and shape senior cross-sector dialogue.
              </p>
              <div className="p-6 bg-surface border border-border/50 inline-block text-left mx-auto max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground block mb-3">Why this matters to a board:</span>
                <p className="text-[0.95rem] text-muted leading-relaxed font-light">It proves I know how to cut through the noise, capture attention, and clearly showcase the organisation's frontline impact. Beyond standard management, this translates into direct employer brand attraction, wider candidate reach, and the ability to influence cross-sector dialogue in real time.</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 90 DAY VIEW */}
        <section className="py-40 bg-surface border-t border-border/50">
          <div className="container max-w-6xl mx-auto">
            <Reveal className="mb-24">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-accent mb-6 block">Implementation</span>
              <h2 className="font-display text-5xl md:text-7xl tracking-tight">First 90 days</h2>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { title: "Review", text: "Review building operations, bookings, standards and risks." },
                { title: "Connect", text: "Meet Board, staff, volunteers, user groups and partners." },
                { title: "Stabilise", text: "Stabilise routines, reporting and communication." },
                { title: "Optimise", text: "Identify quick wins on accessibility, utilisation and user experience." },
                { title: "Growth", text: "Support a practical growth plan for activities and sustainability." }
              ].map((item, i) => (
                <Reveal key={i} delay={0.1 * i} className="p-8 border border-border bg-background">
                  <strong className="block text-accent mb-4 text-[0.7rem] font-bold uppercase tracking-[0.2em]">{item.title}</strong>
                  <p className="text-[0.9rem] text-muted leading-relaxed font-light">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CHRONOLOGY: Sciensus config box, trimmed bullets */}
        <section id="chronology" className="py-40 bg-surface border-t border-border/50">
          <div className="container max-w-5xl mx-auto">
            <Reveal className="mb-32">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-accent mb-6 block">Track Record</span>
              <h2 className="font-display text-5xl lg:text-7xl tracking-tight">A chronology of trust.</h2>
            </Reveal>

            {/* Current Configuration Box */}
            <Reveal className="mb-32 flex lg:justify-end">
              <div className="p-10 bg-surface border border-border inline-block max-w-2xl relative shadow-sm">
                <div className="absolute -left-[1px] top-10 w-1 h-16 bg-accent" />
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-accent mb-4 block">Current Configuration Layer</span>
                <p className="text-[0.95rem] text-muted font-light leading-relaxed">
                  Alongside directing <strong>Kelloch</strong>, I hold a developmental leadership position with multinational healthcare provider <strong>Sciensus</strong>. I maintain senior operational, compliance, and health & safety oversight of a live clinical warehouse, directly supporting a team of 10 professional logistics drivers.
                </p>
              </div>
            </Reveal>

            <div className="relative">
              {[
                { year: "2024", role: "Managing Director", org: "Kelloch Recruitment & Training", desc: "Founded a values-led consultancy supporting third-sector organisations with ethical recruitment and redesign.", bullets: ["Cut average cost-per-hire by 45% through direct sourcing.", "Designed and launched Talent Direct ecosystem."] },
                { year: "2022", role: "Operations Manager", org: "CERT", desc: "I literally took a concept from paper and built it into the region's largest pre-employability health and wellbeing project.", bullets: ["Scaled infrastructure to support 379 participants annually.", "Contributed to £850,000+ in continuation funding.", "Coordinated in-house and offsite course delivery, managing venue bookings, facilitator scheduling, and maintaining full health and safety compliance across all programme locations."] },
                { year: "2020", role: "Service Manager", org: "Lifelink", desc: "Assumed full Service Management responsibility within a four-person Senior Management Team.", bullets: ["Stabilised delivery through an exceptionally demanding pandemic operating period.", "Strengthened safeguarding and governance reporting.", "Managed the operational environment for onsite counselling, overseeing room allocation, session preparation, and ensuring spaces met clinical and professional standards; provided direct line management and in-building support for the counselling team."] },
                { year: "2014", role: "Community Justice Specialist", org: "The Wise Group", desc: "Coordinated the New Routes project delivering wellbeing programmes with people in custody and transition.", bullets: [] },
                { year: "2010", role: "Development Keyworker", org: "VANL (Voluntary Action North Lanarkshire)", desc: "Designed volunteer and employability training programmes in North Lanarkshire and supported third sector organisations in North Lanarkshire.", bullets: [] },
                { year: "2004", role: "Advice & Employability Worker", org: "Citizens Advice Bureau | Routes to Work", desc: "Delivered advice, advocacy and employability support to vulnerable individuals across Central Scotland.", bullets: [] },
                { year: "2000", role: "Director & Founder", org: "Holistic Enterprises Scotland", desc: "Led a community organisation delivering youth development and recruitment for two decades. Concurrently designing dramatic and educational workshops.", bullets: [] }
              ].map((job, idx) => (
                <Reveal key={idx} className="grid md:grid-cols-[1fr_2.5fr] gap-8 md:gap-20 mb-20 group" delay={0.1}>
                  <div className="md:text-right border-l-2 md:border-l-0 md:border-r border-border/50 md:pr-10 pl-6 md:pl-0 h-full pt-2">
                    <span className="font-display text-4xl text-accent block">{job.year}</span>
                  </div>
                  <div className="pb-8">
                    <h3 className="font-display text-4xl mb-2 text-foreground">{job.role}</h3>
                    <span className="block font-bold text-foreground mb-6 text-[0.65rem] uppercase tracking-[0.2em]">{job.org}</span>
                    <p className="text-[1.05rem] text-muted max-w-2xl mb-6 font-light leading-relaxed">{job.desc}</p>
                    {job.bullets.length > 0 && (
                      <ul className="space-y-2">
                        {job.bullets.map((bullet, i) => (
                          <li key={i} className="relative pl-4 text-[0.9rem] text-muted font-light">
                            <span className="absolute left-0 text-accent font-light">-</span> {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS & CREDENTIALS */}
        <section className="py-40 border-t border-border/50">
          <div className="container max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_0.8fr] gap-24">
              
              <Reveal>
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-accent mb-8 block">Operational range</span>
                <h2 className="font-display text-4xl lg:text-5xl tracking-tight mb-16">Skills & specialisms.</h2>
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
                  {[
                    { title: "Operational Management", desc: "Service and operations management in community settings." },
                    { title: "Creative & Media Production", desc: "Delivering dramatic/creative workshops, professional photography, and advanced media production to engage communities directly." },
                    { title: "Governance & Funding", desc: "Governance, risk reporting to boards, high-stakes analysis, and tender writing." },
                    { title: "Technical Infrastructure", desc: "Enhanced IT abilities, system architecture, and custom digital product development." },
                    { title: "Partnership Work", desc: "Building multi-agency partnerships across the public and third sector." },
                    { title: "Community Advocacy", desc: "Problem-solving in complex, emotionally charged environments." },
                  ].map((skill, i) => (
                    <div key={i} className="border-l border-accent/30 pl-6">
                      <strong className="block text-foreground mb-3 text-[0.7rem] uppercase tracking-[0.2em]">{skill.title}</strong>
                      <p className="text-[0.9rem] text-muted leading-relaxed font-light">{skill.desc}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.1} className="lg:pl-20 lg:border-l border-border/50">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-accent mb-8 block">Board-Approved Credentials</span>
                <ul className="space-y-6 pt-4">
                  {[
                    "SVQ Level 5 Learning & Development (SCQF 11)",
                    "SVQ Level 4 Leadership / Health & Social Care (SCQF 10)",
                    "SVQ Level 4 Advice & Guidance (SCQF 8)",
                    "Trauma-informed and ACE-informed practice leadership",
                    "Pacific Institute STEPS Master Facilitator",
                    "CeVe-endorsed Community Practice (Levels 1-7)"
                  ].map((cred, i) => (
                    <li key={i} className="text-[1rem] text-foreground font-light flex gap-4">
                       <span className="text-accent">-</span> {cred}
                    </li>
                  ))}
                </ul>
              </Reveal>

            </div>
          </div>
        </section>

        {/* REFERENCES */}
        <section className="py-40 border-t border-border/50 bg-background">
          <div className="container max-w-6xl mx-auto">
            <Reveal className="mb-24">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-accent mb-6 block">Verification</span>
              <h2 className="font-display text-4xl lg:text-5xl tracking-tight mb-6">Professional References.</h2>
              <p className="text-xl text-muted font-light leading-relaxed max-w-2xl">
                I would welcome any outreach at any time to these senior personnel to verify my operational and strategic discipline.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-12">
              <Reveal delay={0.1} className="p-10 border border-border border-l-2 border-l-accent bg-surface shadow-sm hover:-translate-y-1 transition-all duration-500">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent mb-4 block">Operational Leadership</span>
                <strong className="font-display text-3xl block mb-2">Lisa Reynolds</strong>
                <span className="text-[0.7rem] font-bold uppercase tracking-widest text-foreground block mb-6">Senior Service Manager, SAMH Glasgow</span>
                <address className="not-italic text-[0.95rem] text-muted font-light leading-relaxed space-y-1">
                  <p>Direct senior oversight during my tenure at Lifelink.</p>
                  <div className="pt-4 space-y-1">
                    <p>Phone: <a href="tel:07803564696" className="text-foreground hover:text-accent transition-colors">07803 564696</a></p>
                    <p>Email: <a href="mailto:Lisa.Reynolds@samh.org.uk" className="text-foreground hover:text-accent transition-colors break-words">Lisa.Reynolds@samh.org.uk</a></p>
                  </div>
                </address>
              </Reveal>

              <Reveal delay={0.2} className="p-10 border border-border border-l-2 border-l-accent bg-surface shadow-sm hover:-translate-y-1 transition-all duration-500">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent mb-4 block">Strategic Governance</span>
                <strong className="font-display text-3xl block mb-2">Karen Nailen</strong>
                <span className="text-[0.7rem] font-bold uppercase tracking-widest text-foreground block mb-6">CEO, Citizens Advice Bureau West Lothian</span>
                <address className="not-italic text-[0.95rem] text-muted font-light leading-relaxed space-y-1">
                  <p>Almondbank Centre, Shiel Walk</p>
                  <p>Craigshill, Livingston, West Lothian, EH54 5EH</p>
                  <div className="pt-4 space-y-1">
                    <p>Phone: <a href="tel:01506436132" className="text-foreground hover:text-accent transition-colors">01506 436132</a></p>
                    <p>Email: <a href="mailto:enquiries@cabwestlothian.caseonline.org.uk" className="text-foreground hover:text-accent transition-colors break-words">enquiries@cabwestlothian.caseonline.org.uk</a></p>
                  </div>
                </address>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-56 border-t border-border/50 bg-surface">
          <Reveal className="container max-w-4xl mx-auto text-center">
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-accent mb-8 block">Community Leadership</span>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight mb-12">Let's build a thriving community hub.</h2>
            <p className="text-2xl text-muted leading-relaxed font-light mb-20 mx-auto max-w-3xl">
              I bring hands-on leadership that bridges the gap between day-to-day facility management and long-term Board strategy. If you need a safe pair of hands to run your operations, support your team, and grow your community impact-let's talk.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <a href="mailto:m.ohare@hotmail.co.uk" className="inline-flex items-center justify-center px-10 py-5 text-[0.65rem] font-bold uppercase tracking-[0.2em] bg-accent text-background hover:bg-foreground hover:-translate-y-1 transition-all duration-500">
                Email Mark
              </a>
              <a href="tel:07861701490" className="inline-flex items-center justify-center px-10 py-5 text-[0.65rem] font-bold uppercase tracking-[0.2em] border border-border-strong text-foreground hover:border-accent hover:text-accent transition-all duration-500">
                07861 701490
              </a>
            </div>
          </Reveal>
        </section>

      </main>
    </>
  );
}
