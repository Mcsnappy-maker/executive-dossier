export type CategoryKey =
  | "governance"
  | "leadership"
  | "finance"
  | "digital"
  | "hr"
  | "fundraising";

export type RoleKey =
  | "new_to_sector"
  | "frontline_staff"
  | "volunteer_support"
  | "operations_admin"
  | "trustee"
  | "manager"
  | "senior_leader";

export type NeedKey =
  | "induction"
  | "governance"
  | "compliance"
  | "people"
  | "operations"
  | "fundraising"
  | "digital"
  | "progression";

export type Category = {
  key: CategoryKey;
  title: string;
  description: string;
  accent: "sage" | "ink" | "gold" | "moss" | "claret" | "slate";
};

export type RoleProfile = {
  key: RoleKey;
  title: string;
  strapline: string;
  summary: string;
  defaultNeed: NeedKey;
  featuredPathwayKey: string;
  recommendedCourseIds: number[];
};

export type NeedProfile = {
  key: NeedKey;
  title: string;
  description: string;
};

export type LearningPathway = {
  key: string;
  title: string;
  summary: string;
  timeline: string;
  audience: RoleKey[];
  focus: NeedKey[];
  courseIds: number[];
};

export type Course = {
  id: number;
  category: CategoryKey;
  provider: string;
  title: string;
  description: string;
  hours: number;
  durationLabel: string;
  deliveryLabel: string;
  accessLabel: string;
  proofLabel: string;
  levelLabel: string;
  lastChecked: string;
  tags: string[];
  cueTags: string[];
  roles: RoleKey[];
  needs: NeedKey[];
  awardsCredential: boolean;
  bestFor: string;
  whyItMatters: string;
  outcome: string;
  sourceNote: string;
  href: string;
};

export type SourceLink = {
  label: string;
  href: string;
  note: string;
};

export type HeroStat = {
  value: string;
  label: string;
  note: string;
};

export type TrainingDashboardData = {
  eyebrow: string;
  title: string;
  summary: string;
  supportingPoints: string[];
  trustMarks: string[];
  heroStats: HeroStat[];
  categories: Category[];
  roles: RoleProfile[];
  needs: NeedProfile[];
  pathways: LearningPathway[];
  courses: Course[];
  accessNoteTitle: string;
  accessNoteBody: string;
  accessNoteLink: SourceLink;
  sourceLinks: SourceLink[];
  footerNote: string;
};

export const signalDeckData: TrainingDashboardData = {
  eyebrow: "Kelloch Learning Hub",
  title: "Free learning for people working and volunteering across Scotland's third sector.",
  summary:
    "A Scotland-first learning dashboard for trustees, staff, volunteers, coordinators, administrators, managers and senior leaders. It keeps the current trusted free course library intact, but adds role-aware guidance, better evidence outputs and more practical scanning signals.",
  supportingPoints: [
    "Every existing course recommendation is preserved",
    "Built around real sector roles, not just management titles",
    "Curated from trusted sources and checked on 13 April 2026"
  ],
  trustMarks: [
    "Free to access or free with local TSI code",
    "Scotland-first curation",
    "Useful for frontline through to senior leadership",
    "Built for pressured teams who need clarity fast"
  ],
  heroStats: [
    {
      value: "18",
      label: "Current courses",
      note: "The original trusted library remains intact."
    },
    {
      value: "7",
      label: "Role lenses",
      note: "Browse the same library through real sector responsibilities."
    },
    {
      value: "6",
      label: "Guided pathways",
      note: "Start with structured routes instead of a flat list."
    },
    {
      value: "102",
      label: "Estimated free learning hours",
      note: "Enough depth for induction, refreshers and progression."
    }
  ],
  categories: [
    {
      key: "governance",
      title: "Governance & Charity Law",
      description: "Board duties, decision-making, compliance and keeping charities on sound ground.",
      accent: "sage"
    },
    {
      key: "leadership",
      title: "Leadership, Teams & Volunteering",
      description: "Leading people well, involving volunteers and improving working practice.",
      accent: "ink"
    },
    {
      key: "finance",
      title: "Finance & Sustainability",
      description: "Budgets, controls, financial literacy and funding confidence for charities.",
      accent: "gold"
    },
    {
      key: "digital",
      title: "Digital, Data & Communications",
      description: "Digital confidence, safer data handling and stronger communications practice.",
      accent: "moss"
    },
    {
      key: "hr",
      title: "People, Rights & Safeguarding",
      description: "Rights-based practice, inclusion, people management and safer organisational culture.",
      accent: "claret"
    },
    {
      key: "fundraising",
      title: "Fundraising & Impact",
      description: "Telling the story, generating income and communicating impact with more confidence.",
      accent: "slate"
    }
  ],
  roles: [
    {
      key: "new_to_sector",
      title: "New to the sector",
      strapline: "Start with the practical foundations.",
      summary:
        "Useful if you are new to charities, voluntary organisations, community groups or social enterprises and need a sensible place to begin.",
      defaultNeed: "induction",
      featuredPathwayKey: "starting-out",
      recommendedCourseIds: [9, 1, 10, 14, 8]
    },
    {
      key: "frontline_staff",
      title: "Frontline staff",
      strapline: "Build confidence in delivery, compliance and team working.",
      summary:
        "Designed for project workers, support staff, development workers and people delivering services who need practical sector-relevant learning.",
      defaultNeed: "compliance",
      featuredPathwayKey: "operations-confidence",
      recommendedCourseIds: [9, 14, 15, 16, 8]
    },
    {
      key: "volunteer_support",
      title: "Volunteers & volunteer coordinators",
      strapline: "Focus on volunteer practice, support and safe involvement.",
      summary:
        "For people supporting volunteers formally or informally, including volunteer managers, coordinators and community-led teams.",
      defaultNeed: "people",
      featuredPathwayKey: "volunteer-practice",
      recommendedCourseIds: [7, 8, 15, 16, 17]
    },
    {
      key: "operations_admin",
      title: "Operations & admin staff",
      strapline: "Strengthen the organisational basics that keep delivery moving.",
      summary:
        "For office, finance, operations and compliance support roles that need governance, risk, data and financial confidence.",
      defaultNeed: "operations",
      featuredPathwayKey: "operations-confidence",
      recommendedCourseIds: [9, 10, 14, 5, 12]
    },
    {
      key: "trustee",
      title: "Trustees & board members",
      strapline: "Prioritise governance, finance oversight and duty of care.",
      summary:
        "For charity trustees, committee members and people with board-level responsibility who need clear governance-focused essentials.",
      defaultNeed: "governance",
      featuredPathwayKey: "trustee-essentials",
      recommendedCourseIds: [1, 2, 3, 4, 10]
    },
    {
      key: "manager",
      title: "Managers & team leads",
      strapline: "Combine governance confidence with people and operational practice.",
      summary:
        "For line managers, service managers and programme leads balancing people, delivery, compliance and day-to-day decisions.",
      defaultNeed: "progression",
      featuredPathwayKey: "people-and-line-management",
      recommendedCourseIds: [6, 8, 17, 12, 14]
    },
    {
      key: "senior_leader",
      title: "Senior leaders & heads of service",
      strapline: "Support stronger judgement across governance, finance, people and sustainability.",
      summary:
        "For directors, heads of service and senior operational leaders who need learning that strengthens strategic judgement as well as organisational resilience.",
      defaultNeed: "governance",
      featuredPathwayKey: "governance-and-risk",
      recommendedCourseIds: [2, 4, 11, 12, 6]
    }
  ],
  needs: [
    {
      key: "induction",
      title: "Induction",
      description: "Start here if you need sector basics, confidence and orientation."
    },
    {
      key: "governance",
      title: "Governance",
      description: "Useful for board duties, decision-making, finance oversight and compliance."
    },
    {
      key: "compliance",
      title: "Compliance",
      description: "Focus on law, cyber, GDPR and safer organisational practice."
    },
    {
      key: "people",
      title: "People & volunteering",
      description: "Best for line management, volunteer support and team culture."
    },
    {
      key: "operations",
      title: "Operations",
      description: "For day-to-day systems, controls, administration and running things well."
    },
    {
      key: "fundraising",
      title: "Fundraising",
      description: "For income generation, donor communication and impact storytelling."
    },
    {
      key: "digital",
      title: "Digital",
      description: "For communications, marketing, digital confidence and data practice."
    },
    {
      key: "progression",
      title: "Progression",
      description: "For deeper skill-building and moving into broader responsibility."
    }
  ],
  pathways: [
    {
      key: "starting-out",
      title: "Starting out in the sector",
      summary: "A calm route into sector basics, governance, data handling and team working.",
      timeline: "Complete over 30 days",
      audience: ["new_to_sector", "frontline_staff", "operations_admin"],
      focus: ["induction", "compliance", "operations"],
      courseIds: [9, 1, 10, 14, 8]
    },
    {
      key: "trustee-essentials",
      title: "Trustee essentials",
      summary: "Covers the duties, law and finance oversight that matter most at board level.",
      timeline: "Complete over 30 days",
      audience: ["trustee", "senior_leader"],
      focus: ["governance", "compliance"],
      courseIds: [1, 2, 3, 4, 10]
    },
    {
      key: "volunteer-practice",
      title: "Volunteer practice",
      summary: "Build better support for volunteers, stronger inclusion and more consistent people practice.",
      timeline: "Complete over 30 to 45 days",
      audience: ["volunteer_support", "manager", "frontline_staff"],
      focus: ["people", "progression"],
      courseIds: [7, 8, 15, 16, 17]
    },
    {
      key: "operations-confidence",
      title: "Running operations well",
      summary: "Good for operational staff who need practical confidence in controls, cyber, data and sustainability.",
      timeline: "Complete over 30 days",
      audience: ["operations_admin", "frontline_staff", "manager"],
      focus: ["operations", "compliance"],
      courseIds: [9, 10, 14, 5, 12]
    },
    {
      key: "people-and-line-management",
      title: "People & line management",
      summary: "Support line managers with teams, volunteers, people processes and better judgement.",
      timeline: "Complete over 45 days",
      audience: ["manager", "senior_leader"],
      focus: ["people", "progression"],
      courseIds: [6, 8, 17, 7, 15]
    },
    {
      key: "governance-and-risk",
      title: "Governance, risk & sustainability",
      summary: "A stronger route for senior decision-makers balancing duty, resilience and organisational direction.",
      timeline: "Complete over 45 days",
      audience: ["senior_leader", "trustee", "manager"],
      focus: ["governance", "operations", "progression"],
      courseIds: [2, 4, 11, 12, 14]
    }
  ],
  courses: [
    {
      id: 1,
      category: "governance",
      provider: "OSCR",
      title: "Guidance & Good Practice for Charity Trustees",
      description:
        "OSCR's definitive guide to general and specific trustee duties under the Charities and Trustee Investment (Scotland) Act 2005, including more recent regulatory changes.",
      hours: 1,
      durationLabel: "~1 hr",
      deliveryLabel: "Self-directed guidance",
      accessLabel: "Open access",
      proofLabel: "No formal credential",
      levelLabel: "Intro",
      lastChecked: "13 Apr 2026",
      tags: ["Free", "Scotland", "CPD"],
      cueTags: ["Essential", "Trustee-specific", "Quick win", "Scotland-specific"],
      roles: ["new_to_sector", "trustee", "manager", "senior_leader", "operations_admin"],
      needs: ["induction", "governance", "compliance"],
      awardsCredential: false,
      bestFor: "Trustees, managers, governance leads and anyone needing a clean view of Scottish charity duties.",
      whyItMatters: "It anchors the rest of the dashboard in the core legal and governance expectations for Scottish charities.",
      outcome: "Clearer understanding of trustee duties, decision-making responsibilities and what good governance looks like.",
      sourceNote:
        "Included because OSCR is the Scottish charity regulator and this guidance remains the clearest first step for governance basics.",
      href: "https://www.oscr.org.uk/managing-a-charity/managing-charity-trustees/guidance-and-good-practice-for-charity-trustees/"
    },
    {
      id: 2,
      category: "governance",
      provider: "TSI Scotland Learning Portal",
      title: "Nuts & Bolts: Governance Module",
      description:
        "Interactive learning for trustees, board members and managers covering governance responsibilities, decision-making and compliance.",
      hours: 3,
      durationLabel: "~3 hrs",
      deliveryLabel: "Interactive self-paced course",
      accessLabel: "Free with local TSI code",
      proofLabel: "Certificate",
      levelLabel: "Working knowledge",
      lastChecked: "13 Apr 2026",
      tags: ["Free", "Certificate", "Scotland"],
      cueTags: ["Essential", "Governance core", "Certificate", "Board-ready"],
      roles: ["trustee", "manager", "senior_leader", "operations_admin"],
      needs: ["governance", "operations", "progression"],
      awardsCredential: true,
      bestFor: "Trustees, board-facing staff, managers and senior decision-makers.",
      whyItMatters: "The TSI portal is specifically built for community groups, voluntary organisations and social enterprises across Scotland.",
      outcome: "Stronger governance literacy and more confidence in what boards and senior staff need to get right.",
      sourceNote:
        "The TSI portal states it supports staff and volunteers, with learning relevant to board and committee members and those running organisations.",
      href: "https://tsi-learning.scot/"
    },
    {
      id: 3,
      category: "governance",
      provider: "TSI Scotland Learning Portal",
      title: "Nuts & Bolts: Charity Law Module",
      description:
        "Scottish charity law essentials, including the 2005 Act and the Charities (Regulation and Administration) (Scotland) Act 2023, with structured knowledge checks.",
      hours: 3,
      durationLabel: "~3 hrs",
      deliveryLabel: "Interactive self-paced course",
      accessLabel: "Free with local TSI code",
      proofLabel: "Certificate",
      levelLabel: "Working knowledge",
      lastChecked: "13 Apr 2026",
      tags: ["Free", "Certificate", "Scotland"],
      cueTags: ["Essential", "Compliance", "Certificate", "Trustee-specific"],
      roles: ["trustee", "manager", "senior_leader", "operations_admin"],
      needs: ["governance", "compliance"],
      awardsCredential: true,
      bestFor: "Trustees, senior staff, operations support and anyone handling governance assurance.",
      whyItMatters: "It gives a stronger legal footing than general governance summaries and is directly relevant to Scottish sector practice.",
      outcome: "Better understanding of charity law duties, regulatory expectations and where risk can arise.",
      sourceNote:
        "Included as part of the TSI portal's Scotland-specific learning for organisations that need practical legal and governance confidence.",
      href: "https://tsi-learning.scot/"
    },
    {
      id: 4,
      category: "governance",
      provider: "ICAEW",
      title: "Trustee Training Modules: Finance & Governance",
      description:
        "A broader trustee programme covering financial oversight, governance duties and strategic decision-making, with optional assessment and reflective activities.",
      hours: 5,
      durationLabel: "4-6 hrs",
      deliveryLabel: "Self-directed programme",
      accessLabel: "Open access",
      proofLabel: "Optional assessment",
      levelLabel: "Working knowledge",
      lastChecked: "13 Apr 2026",
      tags: ["Free", "Badge", "CPD"],
      cueTags: ["Trustee-specific", "Finance oversight", "Credentialled", "Board-ready"],
      roles: ["trustee", "senior_leader", "manager"],
      needs: ["governance", "progression", "operations"],
      awardsCredential: true,
      bestFor: "Trustees and senior staff who need stronger finance and governance fluency.",
      whyItMatters: "It turns trustee responsibility into more practical finance and strategic judgement rather than compliance language alone.",
      outcome: "Improved confidence around oversight, scrutiny, challenge and reading the financial dimensions of board decisions.",
      sourceNote:
        "The current ICAEW listing describes this as a self-directed programme for effective charity trustees with reading, video and reflective tasks.",
      href: "https://learningshop.icaew.com/product?catalog=Trustee_Training_Modules_Member"
    },
    {
      id: 5,
      category: "governance",
      provider: "TSI Scotland Learning Portal",
      title: "Staying Safe Online / Cyber Security for Small Organisations",
      description:
        "A concise cyber security module for charities and community groups, covering phishing, data handling and basic organisational safeguards.",
      hours: 1,
      durationLabel: "~1 hr",
      deliveryLabel: "Interactive self-paced course",
      accessLabel: "Free with local TSI code",
      proofLabel: "No formal credential",
      levelLabel: "Intro",
      lastChecked: "13 Apr 2026",
      tags: ["Free", "Scotland", "Cyber"],
      cueTags: ["Quick win", "Compliance", "Operations", "Scotland-specific"],
      roles: ["frontline_staff", "operations_admin", "manager", "senior_leader"],
      needs: ["compliance", "operations", "digital"],
      awardsCredential: false,
      bestFor: "Operations staff, managers and teams that need a quick baseline in safer digital practice.",
      whyItMatters: "Cyber risk sits with everyone in the organisation, not only digital leads.",
      outcome: "Stronger baseline awareness of common cyber risks and better everyday handling of digital risk.",
      sourceNote:
        "Included through the TSI portal because it translates sector needs into practical, self-paced learning rather than generic IT guidance.",
      href: "https://tsi-learning.scot/"
    },
    {
      id: 6,
      category: "leadership",
      provider: "Open University OpenLearn",
      title: "Developing Leadership Practice in Voluntary Organisations",
      description:
        "A substantial voluntary-sector leadership course focused on thoughtful, practical leadership rather than generic management language.",
      hours: 15,
      durationLabel: "~15 hrs",
      deliveryLabel: "OpenLearn course",
      accessLabel: "Open access",
      proofLabel: "Statement of participation",
      levelLabel: "Intro to applied",
      lastChecked: "13 Apr 2026",
      tags: ["Free", "Statement", "Voluntary sector"],
      cueTags: ["Progression", "People lead", "Sector-specific", "Deep dive"],
      roles: ["manager", "senior_leader", "trustee", "frontline_staff"],
      needs: ["progression", "people"],
      awardsCredential: true,
      bestFor: "Managers, aspiring managers, trustees and staff stepping into broader responsibility.",
      whyItMatters: "OpenLearn explicitly positions this course for people employed by, volunteering for or running voluntary organisations.",
      outcome: "A more reflective and practical understanding of leadership practice in voluntary sector contexts.",
      sourceNote:
        "Open University states this course is aimed at anyone working in or around voluntary organisations, including employees, volunteers and those who run them.",
      href: "https://www.open.edu/openlearn/money-business/developing-leadership-practice-voluntary-organisations"
    },
    {
      id: 7,
      category: "leadership",
      provider: "Open University & Volunteer Scotland",
      title: "Involving Volunteers",
      description:
        "A Volunteer Scotland and Open University course focused on creating a positive volunteering experience and building effective volunteer practice.",
      hours: 14,
      durationLabel: "~14 hrs",
      deliveryLabel: "OpenLearnCreate course",
      accessLabel: "Open access",
      proofLabel: "Digital badge + statement",
      levelLabel: "Intro",
      lastChecked: "13 Apr 2026",
      tags: ["Free", "Badge", "Volunteering"],
      cueTags: ["Volunteer-focused", "Essential", "Digital badge", "People practice"],
      roles: ["volunteer_support", "manager", "frontline_staff", "new_to_sector"],
      needs: ["people", "induction", "progression"],
      awardsCredential: true,
      bestFor: "Volunteer coordinators, project workers, managers and anyone supporting volunteers.",
      whyItMatters: "It speaks directly to the volunteer journey and not just organisational process.",
      outcome: "Clearer approach to volunteer involvement, support, communication and listening to volunteer experience.",
      sourceNote:
        "OpenLearnCreate describes this as suitable for people supporting volunteers in organisations or informal community settings, from volunteers to paid volunteer managers.",
      href: "https://www.open.edu/openlearncreate/course/view.php?id=3521"
    },
    {
      id: 8,
      category: "leadership",
      provider: "Open University OpenLearn",
      title: "Working in Teams",
      description:
        "A longer-form OpenLearn course on team dynamics, collaboration, problem-solving and performance, directly useful for operational settings.",
      hours: 8,
      durationLabel: "~8 hrs",
      deliveryLabel: "OpenLearn course",
      accessLabel: "Open access",
      proofLabel: "Badge available",
      levelLabel: "Intro",
      lastChecked: "13 Apr 2026",
      tags: ["Free", "Badge", "Teams"],
      cueTags: ["Quick win", "Team basics", "Digital badge", "All-role useful"],
      roles: [
        "new_to_sector",
        "frontline_staff",
        "volunteer_support",
        "operations_admin",
        "manager",
        "senior_leader"
      ],
      needs: ["induction", "people", "progression"],
      awardsCredential: true,
      bestFor: "Anyone working in teams across the sector, from frontline staff through to line managers.",
      whyItMatters: "Good team practice is a cross-sector capability, not a management-only topic.",
      outcome: "Better understanding of team roles, dynamics and what stronger collaborative practice looks like.",
      sourceNote:
        "Included as a transferable but still highly practical course that supports real team-based work in charities and social enterprises.",
      href: "https://www.open.edu/openlearn/mod/oucontent/view.php?id=172078"
    },
    {
      id: 9,
      category: "leadership",
      provider: "SCVO SCOPE",
      title: "SCOPE eLearning: Governance Module",
      description:
        "Part of SCVO's SCOPE suite, covering organisational structures, board responsibilities and decision-making in an accessible entry-level format.",
      hours: 2,
      durationLabel: "40-80 min",
      deliveryLabel: "Mobile-friendly self-study",
      accessLabel: "Open access",
      proofLabel: "Badge may not work",
      levelLabel: "Intro",
      lastChecked: "13 Apr 2026",
      tags: ["Free", "Scotland", "Intro"],
      cueTags: ["Best first step", "Quick win", "Scotland-specific", "Sector basics"],
      roles: ["new_to_sector", "frontline_staff", "operations_admin", "trustee", "manager"],
      needs: ["induction", "governance", "operations"],
      awardsCredential: false,
      bestFor: "Trustees, volunteers and staff who need accessible sector basics.",
      whyItMatters: "SCVO explicitly positions SCOPE as entry-level learning for trustees, volunteers and staff.",
      outcome: "A grounded understanding of governance basics without needing to start with denser legal material.",
      sourceNote:
        "SCVO says SCOPE is for trustees, volunteers and staff, and recommends beginning with governance before choosing other modules.",
      href: "https://scvo.scot/events-training/elearning/scope"
    },
    {
      id: 10,
      category: "finance",
      provider: "SCVO SCOPE",
      title: "SCOPE eLearning: Financial Module",
      description:
        "An entry-level financial management module for smaller voluntary organisations, covering budgeting, reporting, controls and core finance awareness.",
      hours: 2,
      durationLabel: "40-80 min",
      deliveryLabel: "Mobile-friendly self-study",
      accessLabel: "Open access",
      proofLabel: "Badge may not work",
      levelLabel: "Intro",
      lastChecked: "13 Apr 2026",
      tags: ["Free", "Scotland", "Finance"],
      cueTags: ["Best first step", "Quick win", "Finance basics", "Sector-specific"],
      roles: ["new_to_sector", "operations_admin", "trustee", "manager", "senior_leader"],
      needs: ["operations", "governance", "induction"],
      awardsCredential: false,
      bestFor: "People handling budgets, supporting operations or needing an introduction to charity finance language.",
      whyItMatters: "Finance confidence is often a barrier for trustees, administrators and new managers.",
      outcome: "Clearer grounding in budgeting, controls and what responsible financial practice looks like.",
      sourceNote:
        "SCVO positions SCOPE as practical entry-level learning for the voluntary sector, which makes this a strong first finance step.",
      href: "https://scvo.scot/events-training/elearning/scope"
    },
    {
      id: 11,
      category: "finance",
      provider: "TSI Scotland Learning Portal",
      title: "Nuts & Bolts: Financial Management Module",
      description:
        "Income and expenditure, budgets, controls and reporting for Scottish charities, delivered in a structured e-learning format with knowledge checks.",
      hours: 3,
      durationLabel: "~3 hrs",
      deliveryLabel: "Interactive self-paced course",
      accessLabel: "Free with local TSI code",
      proofLabel: "Certificate",
      levelLabel: "Working knowledge",
      lastChecked: "13 Apr 2026",
      tags: ["Free", "Certificate", "Scotland"],
      cueTags: ["Finance oversight", "Certificate", "Operations", "Scotland-specific"],
      roles: ["operations_admin", "trustee", "manager", "senior_leader"],
      needs: ["operations", "governance", "progression"],
      awardsCredential: true,
      bestFor: "Operations staff, trustees and senior staff who need more than a basic introduction to charity finance.",
      whyItMatters: "It moves from awareness into stronger operational and governance literacy.",
      outcome: "Better understanding of controls, reporting and the financial basics that support sustainable decision-making.",
      sourceNote:
        "The TSI portal is built around core aspects of running community groups, charities and social enterprises across Scotland.",
      href: "https://tsi-learning.scot/"
    },
    {
      id: 12,
      category: "finance",
      provider: "TSI Scotland Learning Portal",
      title: "Nuts & Bolts: Funding & Sustainability",
      description:
        "A practical course on funding sources, bid writing, income diversification and longer-term resilience in the Scottish third sector.",
      hours: 3,
      durationLabel: "~3 hrs",
      deliveryLabel: "Interactive self-paced course",
      accessLabel: "Free with local TSI code",
      proofLabel: "Certificate",
      levelLabel: "Working knowledge",
      lastChecked: "13 Apr 2026",
      tags: ["Free", "Certificate", "Scotland"],
      cueTags: ["Sustainability", "Fundraising support", "Certificate", "Operations"],
      roles: ["operations_admin", "manager", "senior_leader", "frontline_staff"],
      needs: ["operations", "fundraising", "progression"],
      awardsCredential: true,
      bestFor: "Managers, operational leads and teams that need stronger confidence in income and organisational sustainability.",
      whyItMatters: "Funding pressure is a practical reality for almost every third sector organisation.",
      outcome: "Better confidence in income planning, bid thinking and sustainability conversations.",
      sourceNote:
        "The TSI portal explicitly highlights Funding and Sustainability within its themed 'Nuts and Bolts' learning pathway.",
      href: "https://tsi-learning.scot/"
    },
    {
      id: 13,
      category: "digital",
      provider: "Google Digital Garage",
      title: "Fundamentals of Digital Marketing",
      description:
        "A wider digital marketing course with modules on SEO, social, analytics, content and advertising. Particularly useful for communications and fundraising teams.",
      hours: 40,
      durationLabel: "~40 hrs",
      deliveryLabel: "Structured online course",
      accessLabel: "Open access",
      proofLabel: "Accredited certificate",
      levelLabel: "Intro to working knowledge",
      lastChecked: "13 Apr 2026",
      tags: ["Free", "Certificate", "Digital"],
      cueTags: ["Credentialled win", "Digital", "Fundraising support", "Long-form"],
      roles: ["frontline_staff", "operations_admin", "manager", "senior_leader"],
      needs: ["digital", "fundraising", "progression"],
      awardsCredential: true,
      bestFor: "Communications staff, fundraisers, small teams wearing multiple hats and people building digital confidence.",
      whyItMatters: "Digital visibility and communications matter across services, fundraising and organisational reputation.",
      outcome: "Stronger practical grasp of digital marketing concepts and a recognised certificate to evidence effort.",
      sourceNote:
        "Kept because it remains one of the strongest broad free digital skills options, especially for smaller teams without specialist support.",
      href: "https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing"
    },
    {
      id: 14,
      category: "digital",
      provider: "TSI Scotland Learning Portal",
      title: "GDPR & Data Protection for Charities",
      description:
        "A concise module covering UK GDPR principles, lawful basis, data subject rights and practical compliance issues for charities and community organisations.",
      hours: 1,
      durationLabel: "~1 hr",
      deliveryLabel: "Interactive self-paced course",
      accessLabel: "Free with local TSI code",
      proofLabel: "Certificate",
      levelLabel: "Intro",
      lastChecked: "13 Apr 2026",
      tags: ["Free", "Certificate", "Scotland"],
      cueTags: ["Essential", "Compliance", "Quick win", "Certificate"],
      roles: [
        "new_to_sector",
        "frontline_staff",
        "operations_admin",
        "trustee",
        "manager",
        "senior_leader"
      ],
      needs: ["compliance", "digital", "operations"],
      awardsCredential: true,
      bestFor: "Anyone handling data, records, service-user information or organisational systems.",
      whyItMatters: "GDPR is not optional, and a short trusted course removes a lot of uncertainty fast.",
      outcome: "Clearer baseline understanding of lawful data handling and practical compliance responsibilities.",
      sourceNote:
        "Included because the TSI portal offers practical, sector-facing courses that help organisations run safely and responsibly.",
      href: "https://tsi-learning.scot/"
    },
    {
      id: 15,
      category: "hr",
      provider: "THRE / TSI Scotland",
      title: "Human Rights & Equalities First Approach: The Basics",
      description:
        "An introductory rights-based practice module from THRE, focused on the basics of a human rights and equalities first approach in the third sector.",
      hours: 2,
      durationLabel: "~2 hrs",
      deliveryLabel: "Interactive self-paced course",
      accessLabel: "Open access",
      proofLabel: "Certificate",
      levelLabel: "Intro",
      lastChecked: "13 Apr 2026",
      tags: ["Free", "Rights-based", "Scotland"],
      cueTags: ["People practice", "Essential", "Scotland-specific", "Certificate"],
      roles: ["frontline_staff", "volunteer_support", "manager", "senior_leader", "new_to_sector"],
      needs: ["people", "induction", "compliance"],
      awardsCredential: true,
      bestFor: "Staff, volunteers, coordinators and managers who want stronger rights-based practice in everyday delivery.",
      whyItMatters: "It makes equalities and human rights practice more practical and less abstract.",
      outcome: "Better grounding in how a human rights and equalities first approach applies to real third sector work.",
      sourceNote:
        "Included because THRE's Scotland-focused work helps translate rights and equalities into day-to-day sector practice.",
      href: "https://thre.org.uk/topic/the-basics/"
    },
    {
      id: 16,
      category: "hr",
      provider: "THRE / TSI Scotland",
      title: "PANEL Principles: Human Rights & Equalities in Practice",
      description:
        "A follow-on module focused on applying Participation, Accountability, Non-discrimination, Empowerment and Legality in real services and decisions.",
      hours: 2,
      durationLabel: "~2 hrs",
      deliveryLabel: "Interactive self-paced course",
      accessLabel: "Open access",
      proofLabel: "Certificate",
      levelLabel: "Working knowledge",
      lastChecked: "13 Apr 2026",
      tags: ["Free", "Rights-based", "Scotland"],
      cueTags: ["Applied practice", "People practice", "Certificate", "Scotland-specific"],
      roles: ["frontline_staff", "volunteer_support", "manager", "senior_leader"],
      needs: ["people", "progression", "compliance"],
      awardsCredential: true,
      bestFor: "People improving services, volunteer experience or organisational decision-making through a rights-based lens.",
      whyItMatters: "It helps move from general principles into how to apply rights and equalities thinking in practice.",
      outcome: "More confidence using PANEL in service design, management and organisational conversations.",
      sourceNote:
        "Included to give users a deeper step after the basics rather than stopping at awareness-level equalities learning.",
      href: "https://thre.org.uk/topic/panel-principles/"
    },
    {
      id: 17,
      category: "hr",
      provider: "SCVO SCOPE",
      title: "SCOPE: HR & People Management Module",
      description:
        "Recruitment, contracts, performance, disciplinary processes, volunteer management and wellbeing for smaller voluntary organisations.",
      hours: 2,
      durationLabel: "40-80 min",
      deliveryLabel: "Mobile-friendly self-study",
      accessLabel: "Open access",
      proofLabel: "Badge may not work",
      levelLabel: "Intro",
      lastChecked: "13 Apr 2026",
      tags: ["Free", "People", "Scotland"],
      cueTags: ["People lead", "Quick win", "Operations", "All-role useful"],
      roles: ["volunteer_support", "operations_admin", "manager", "senior_leader"],
      needs: ["people", "operations", "progression"],
      awardsCredential: false,
      bestFor: "Managers, coordinators and operational staff needing clearer people-process fundamentals.",
      whyItMatters: "It bridges the gap between good intentions and the practical people processes that smaller organisations often need help with.",
      outcome: "Better grounding in core people management and volunteer management responsibilities.",
      sourceNote:
        "Included because SCVO's SCOPE platform is intentionally designed as accessible, entry-level learning for real voluntary sector roles.",
      href: "https://scvo.scot/events-training/elearning/scope"
    },
    {
      id: 18,
      category: "fundraising",
      provider: "SCVO SCOPE",
      title: "SCOPE: Fundraising & Communications Module",
      description:
        "Fundraising strategy, donor communication, impact reporting and digital storytelling for third sector organisations that need practical foundations.",
      hours: 2,
      durationLabel: "40-80 min",
      deliveryLabel: "Mobile-friendly self-study",
      accessLabel: "Open access",
      proofLabel: "Badge may not work",
      levelLabel: "Intro",
      lastChecked: "13 Apr 2026",
      tags: ["Free", "Fundraising", "Scotland"],
      cueTags: ["Quick win", "Communications", "Fundraising basics", "All-role useful"],
      roles: ["frontline_staff", "operations_admin", "manager", "senior_leader", "new_to_sector"],
      needs: ["fundraising", "digital", "progression"],
      awardsCredential: false,
      bestFor: "Small teams who need a practical introduction to fundraising and communications basics.",
      whyItMatters: "Many third sector roles touch storytelling, donor confidence or communicating impact even without a formal fundraiser title.",
      outcome: "Stronger baseline understanding of fundraising thinking, donor communication and how to present impact clearly.",
      sourceNote:
        "Included because SCVO's sector-specific entry-level learning helps demystify fundraising and communications for non-specialists.",
      href: "https://scvo.scot/events-training/elearning/scope"
    }
  ],
  accessNoteTitle: "TSI Learning Portal access",
  accessNoteBody:
    "The TSI Scotland Learning Portal provides courses and resources for community groups, voluntary organisations and social enterprises across Scotland, with learning for staff, volunteers and board-facing users. Most relevant courses in this dashboard are free with a local TSI code.",
  accessNoteLink: {
    label: "Find local TSI contacts",
    href: "https://tsi-learning.scot/contact-us/",
    note: "Use the TSI portal contact list to find the correct local authority contact."
  },
  sourceLinks: [
    {
      label: "TSI Scotland Learning Portal",
      href: "https://tsi-learning.scot/",
      note: "For staff, volunteers and board-facing users across Scotland."
    },
    {
      label: "SCVO SCOPE",
      href: "https://scvo.scot/events-training/elearning/scope",
      note: "Entry-level learning for trustees, volunteers and staff."
    },
    {
      label: "OSCR guidance",
      href: "https://www.oscr.org.uk/",
      note: "Core regulatory guidance for Scottish charities."
    },
    {
      label: "Open University OpenLearn",
      href: "https://www.open.edu/openlearn/",
      note: "Free longer-form learning with statements or badges on some courses."
    },
    {
      label: "THRE",
      href: "https://thre.org.uk/course/",
      note: "Human rights and equalities practice for Scotland's third sector."
    },
    {
      label: "ICAEW trustee learning",
      href: "https://learningshop.icaew.com/",
      note: "Useful for trustee finance and governance confidence."
    },
    {
      label: "Google Digital Garage",
      href: "https://learndigital.withgoogle.com/digitalgarage",
      note: "Broad free digital and communications capability-building."
    }
  ],
  footerNote:
    "Built for Kelloch Recruitment & Training as a practical, Scotland-first learning companion for the wider third sector workforce."
};
