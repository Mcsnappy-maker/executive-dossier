"use client";

import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { CategoryKey, Course, NeedKey, RoleKey, TrainingDashboardData } from "@/lib/signal-deck-data";

type SignalDeckAppProps = { data: TrainingDashboardData };
type ViewKey = "overview" | "plan" | "library" | "evidence";
type StatusFilter = "all" | "saved" | "in_progress" | "completed";
type Stage = "not_started" | "in_progress" | "completed";
type CourseRecord = { saved: boolean; stage: Stage; completedOn?: string; updatedOn: string };

const STORAGE_KEY = "kelloch-learning-hub-state-v5";

function todayLabel() {
  return new Intl.DateTimeFormat("en-GB").format(new Date());
}

function emptyRecord(): CourseRecord {
  return { saved: false, stage: "not_started", updatedOn: todayLabel() };
}

function getRecord(records: Record<string, CourseRecord>, courseId: number) {
  return records[String(courseId)] ?? emptyRecord();
}

function statusLabel(record: CourseRecord) {
  if (record.stage === "completed") return "Completed";
  if (record.stage === "in_progress") return "In progress";
  if (record.saved) return "Saved";
  return "Not started";
}

function readinessLabel(score: number) {
  if (score >= 80) return "Strong";
  if (score >= 55) return "Building";
  if (score >= 30) return "Starting";
  return "Thin";
}

function downloadFile(name: string, body: string, type: string) {
  const blob = new Blob([body], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  link.click();
  URL.revokeObjectURL(url);
}

function csvBody(courses: Course[], records: Record<string, CourseRecord>) {
  return [["Course", "Provider", "Category", "Hours", "Date"]]
    .concat(courses.map((course) => [course.title, course.provider, course.category, String(course.hours), getRecord(records, course.id).completedOn ?? ""]))
    .map((row) => row.map((value) => `"${value.replaceAll('"', '""')}"`).join(","))
    .join("\n");
}

function summaryBody(data: TrainingDashboardData, roleTitle: string, needTitle: string, readiness: number, completed: Course[], inProgress: Course[], saved: Course[], hours: number, credentials: number, nextBest: Course[], records: Record<string, CourseRecord>) {
  return [
    "Kelloch Learning Hub Summary",
    `Date: ${todayLabel()}`,
    `Role lens: ${roleTitle}`,
    `Current focus: ${needTitle}`,
    `Readiness: ${readiness}% (${readinessLabel(readiness)})`,
    `Completed: ${completed.length}`,
    `In progress: ${inProgress.length}`,
    `Saved: ${saved.length}`,
    `CPD hours: ${hours}`,
    `Credentials: ${credentials}`,
    "",
    "Completed learning",
    ...completed.map((course) => `- ${course.title} | ${course.provider} | ${getRecord(records, course.id).completedOn ?? ""}`),
    "",
    "Next recommended",
    ...nextBest.map((course) => `- ${course.title} | ${course.whyItMatters}`),
    "",
    data.footerNote
  ].join("\n");
}

export function SignalDeckApp({ data }: SignalDeckAppProps) {
  const [view, setView] = useState<ViewKey>("overview");
  const [roleKey, setRoleKey] = useState<RoleKey>("new_to_sector");
  const [needKey, setNeedKey] = useState<NeedKey>("induction");
  const [pathwayKey, setPathwayKey] = useState("starting-out");
  const [topicKey, setTopicKey] = useState<"all" | CategoryKey>("all");
  const [libraryNeed, setLibraryNeed] = useState<"all" | NeedKey>("all");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [roleFocusOnly, setRoleFocusOnly] = useState(true);
  const [search, setSearch] = useState("");
  const [records, setRecords] = useState<Record<string, CourseRecord>>({});
  const [loaded, setLoaded] = useState(false);
  const deferredSearch = useDeferredValue(search);

  const role = data.roles.find((item) => item.key === roleKey) ?? data.roles[0];
  const need = data.needs.find((item) => item.key === needKey) ?? data.needs[0];
  const pathway = data.pathways.find((item) => item.key === pathwayKey) ?? data.pathways.find((item) => item.key === role.featuredPathwayKey) ?? data.pathways[0];
  const relevantPathways = data.pathways.filter((item) => item.audience.includes(roleKey));

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Record<string, CourseRecord>;
      setRecords(Object.fromEntries(Object.entries(parsed).filter(([id, record]) => data.courses.some((course) => course.id === Number(id)) && typeof record?.saved === "boolean")));
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    } finally {
      setLoaded(true);
    }
  }, [data.courses]);

  useEffect(() => {
    if (loaded) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  }, [loaded, records]);

  function updateRecord(courseId: number, updater: (current: CourseRecord) => CourseRecord) {
    setRecords((current) => ({ ...current, [String(courseId)]: updater(getRecord(current, courseId)) }));
  }

  function chooseRole(nextRoleKey: RoleKey) {
    const nextRole = data.roles.find((item) => item.key === nextRoleKey);
    if (!nextRole) return;
    setRoleKey(nextRoleKey);
    setNeedKey(nextRole.defaultNeed);
    setPathwayKey(nextRole.featuredPathwayKey);
  }

  function resetAll() {
    if (window.confirm("Reset all saved state for this dashboard?")) setRecords({});
  }

  function toggleSaved(courseId: number) {
    updateRecord(courseId, (current) => ({ ...current, saved: !current.saved, updatedOn: todayLabel() }));
  }

  function toggleStarted(courseId: number) {
    updateRecord(courseId, (current) => ({ ...current, stage: current.stage === "in_progress" ? "not_started" : "in_progress", completedOn: undefined, updatedOn: todayLabel() }));
  }

  function toggleCompleted(courseId: number) {
    updateRecord(courseId, (current) => current.stage === "completed" ? { ...current, stage: "in_progress", completedOn: undefined, updatedOn: todayLabel() } : { saved: false, stage: "completed", completedOn: todayLabel(), updatedOn: todayLabel() });
  }

  const completed = useMemo(() => data.courses.filter((course) => getRecord(records, course.id).stage === "completed"), [data.courses, records]);
  const inProgress = useMemo(() => data.courses.filter((course) => getRecord(records, course.id).stage === "in_progress"), [data.courses, records]);
  const saved = useMemo(() => data.courses.filter((course) => getRecord(records, course.id).saved && getRecord(records, course.id).stage !== "completed"), [data.courses, records]);
  const completedHours = completed.reduce((sum, course) => sum + course.hours, 0);
  const credentials = completed.filter((course) => course.awardsCredential).length;
  const roleCourses = data.courses.filter((course) => role.recommendedCourseIds.includes(course.id));
  const roleCompleted = roleCourses.filter((course) => getRecord(records, course.id).stage === "completed").length;
  const readiness = roleCourses.length ? Math.round((roleCompleted / roleCourses.length) * 100) : 0;

  const ranked = data.courses.map((course) => {
    const record = getRecord(records, course.id);
    const pathwayIndex = pathway.courseIds.indexOf(course.id);
    let score = (role.recommendedCourseIds.includes(course.id) ? 20 : 0) + (course.roles.includes(roleKey) ? 10 : 0);
    score += course.needs.includes(needKey) ? 10 : 0;
    score += pathwayIndex >= 0 ? 10 - pathwayIndex : 0;
    score += course.cueTags.includes("Essential") || course.cueTags.includes("Best first step") ? 4 : 0;
    score += course.awardsCredential ? 2 : 0;
    if (record.stage === "in_progress") score += 2;
    if (record.stage === "completed") score -= 100;
    return { course, record, score };
  }).sort((a, b) => b.score - a.score || a.course.hours - b.course.hours);

  const nextBest = ranked.filter((item) => item.record.stage !== "completed").slice(0, 3).map((item) => item.course);
  const quickWins = ranked.filter((item) => item.record.stage !== "completed" && item.course.hours <= 2).slice(0, 3).map((item) => item.course);
  const credentialWins = ranked.filter((item) => item.record.stage !== "completed" && item.course.awardsCredential).slice(0, 3).map((item) => item.course);
  const coverage = data.categories.map((category) => {
    const relevant = data.courses.filter((course) => course.category === category.key && course.roles.includes(roleKey));
    const done = relevant.filter((course) => getRecord(records, course.id).stage === "completed").length;
    return { category, total: relevant.length, done, score: relevant.length ? Math.round((done / relevant.length) * 100) : 0 };
  }).filter((item) => item.total > 0);

  const library = data.courses
    .filter((course) => (roleFocusOnly ? course.roles.includes(roleKey) : true))
    .filter((course) => (topicKey === "all" ? true : course.category === topicKey))
    .filter((course) => (libraryNeed === "all" ? true : course.needs.includes(libraryNeed)))
    .filter((course) => [course.title, course.provider, course.description, course.bestFor, course.outcome, ...course.tags, ...course.cueTags].join(" ").toLowerCase().includes(deferredSearch.toLowerCase()))
    .filter((course) => {
      const record = getRecord(records, course.id);
      if (statusFilter === "saved") return record.saved && record.stage !== "completed";
      if (statusFilter === "in_progress") return record.stage === "in_progress";
      if (statusFilter === "completed") return record.stage === "completed";
      return true;
    });

  const summary = summaryBody(data, role.title, need.title, readiness, completed, inProgress, saved, completedHours, credentials, nextBest, records);
  const navItems: Array<{ key: ViewKey; label: string; strap: string }> = [
    { key: "overview", label: "Overview", strap: "Choose your lens" },
    { key: "plan", label: "My Plan", strap: "Follow a route" },
    { key: "library", label: "Library", strap: "Browse the full set" },
    { key: "evidence", label: "Evidence", strap: "Export progress" }
  ];

  return (
    <main className="brand-page">
      <div className="brand-shell">
        <header className="site-header">
          <div className="site-mark">
            <span className="site-mark-rule" />
            <div>
              <p className="site-eyebrow">{data.eyebrow}</p>
              <h1>{data.title}</h1>
            </div>
          </div>
          <p className="site-summary">Plain-spoken, free and Scotland-first. This is a working tool for staff, volunteers, trustees, coordinators, managers and senior leaders who need the right learning fast.</p>
        </header>

        <nav className="top-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button key={item.key} type="button" className={view === item.key ? "top-nav-link top-nav-link-active" : "top-nav-link"} onClick={() => setView(item.key)}>
              <span>{item.label}</span>
              <small>{item.strap}</small>
            </button>
          ))}
        </nav>

        {view === "overview" ? (
          <div className="page-stack">
            <section className="hero-grid">
              <div className="hero-copy">
                <p className="section-kicker">Start Here</p>
                <h2>Set your role. Get a clearer starting point.</h2>
                <p className="section-copy">{data.summary}</p>
                <ul className="plain-list">{data.supportingPoints.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div className="hero-panel">
                <div className="hero-panel-head">
                  <p className="section-kicker">Current Focus</p>
                  <strong>{role.title}</strong>
                  <span>{need.title}</span>
                </div>
                <div className="hero-stats">
                  {data.heroStats.map((item, index) => (
                    <article key={item.label} className={index === 1 ? "hero-stat hero-stat-magenta" : index === 2 ? "hero-stat hero-stat-cyan" : "hero-stat"}>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                      <p>{item.note}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="section-block">
              <div className="section-head">
                <div>
                  <p className="section-kicker">Role Lens</p>
                  <h2>Choose the lens. Keep the same library.</h2>
                </div>
                <p className="section-note">{role.summary}</p>
              </div>
              <div className="role-grid">
                {data.roles.map((item) => (
                  <button key={item.key} type="button" className={item.key === roleKey ? "role-card role-card-active" : "role-card"} onClick={() => chooseRole(item.key)}>
                    <strong>{item.title}</strong>
                    <span>{item.strapline}</span>
                  </button>
                ))}
              </div>
            </section>

            <section className="section-block section-block-compact">
              <div className="section-head">
                <div>
                  <p className="section-kicker">Immediate Need</p>
                  <h2>Keep the guidance practical.</h2>
                </div>
                <p className="section-note">Pick the need that matters now. The recommendations shift without changing the core library.</p>
              </div>
              <div className="need-row">
                {data.needs.map((item) => (
                  <button key={item.key} type="button" className={item.key === needKey ? "need-chip need-chip-active" : "need-chip"} onClick={() => setNeedKey(item.key)}>
                    {item.title}
                  </button>
                ))}
              </div>
            </section>

            <section className="overview-grid">
              <article className="section-block">
                <div className="section-head">
                  <div>
                    <p className="section-kicker">Best Next</p>
                    <h2>Do these first.</h2>
                  </div>
                  <button type="button" className="plain-button" onClick={() => setView("plan")}>
                    Open my plan
                  </button>
                </div>
                <div className="stack-list">
                  {nextBest.map((course) => (
                    <article key={course.id} className="compact-row">
                      <div className="row-copy">
                        <p className="course-provider">{course.provider}</p>
                        <h3>{course.title}</h3>
                        <p>{course.whyItMatters}</p>
                      </div>
                      <div className="row-meta">
                        <span>{course.durationLabel}</span>
                        <span>{course.proofLabel}</span>
                      </div>
                      <a href={course.href} target="_blank" rel="noreferrer" className="primary-link">
                        Open course
                      </a>
                    </article>
                  ))}
                </div>
              </article>

              <article className="section-block">
                <div className="section-head">
                  <div>
                    <p className="section-kicker">Coverage</p>
                    <h2>See where you are thin.</h2>
                  </div>
                  <strong className="summary-badge">
                    {readiness}% {readinessLabel(readiness)}
                  </strong>
                </div>
                <div className="coverage-list">
                  {coverage.map((item) => (
                    <article key={item.category.key} className="coverage-row">
                      <div>
                        <p className={`coverage-topic accent-${item.category.accent}`}>{item.category.title}</p>
                        <span>
                          {item.done}/{item.total} complete
                        </span>
                      </div>
                      <strong>{item.score}%</strong>
                    </article>
                  ))}
                </div>
              </article>
            </section>

            <section className="overview-grid">
              <article className="section-block">
                <div className="section-head">
                  <div>
                    <p className="section-kicker">Guided Routes</p>
                    <h2>Pick a route, not a flat list.</h2>
                  </div>
                  <span className="section-note">One route per role. No clutter.</span>
                </div>
                <div className="stack-list">
                  {relevantPathways.map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      className={item.key === pathway.key ? "pathway-row pathway-row-active" : "pathway-row"}
                      onClick={() => {
                        setPathwayKey(item.key);
                        setView("plan");
                      }}
                    >
                      <div className="row-copy">
                        <strong>{item.title}</strong>
                        <p>{item.summary}</p>
                      </div>
                      <span>{item.timeline}</span>
                    </button>
                  ))}
                </div>
              </article>

              <article className="section-block">
                <div className="section-head">
                  <div>
                    <p className="section-kicker">Source Trust</p>
                    <h2>Why these sources are here.</h2>
                  </div>
                  <span className="section-note">Checked {data.courses[0]?.lastChecked}</span>
                </div>
                <div className="source-list">
                  {data.sourceLinks.map((item) => (
                    <article key={item.label} className="source-row">
                      <div className="row-copy">
                        <strong>{item.label}</strong>
                        <p>{item.note}</p>
                      </div>
                      <a href={item.href} target="_blank" rel="noreferrer" className="plain-link">
                        Visit
                      </a>
                    </article>
                  ))}
                </div>
              </article>
            </section>
          </div>
        ) : null}

        {view === "plan" ? (
          <div className="page-stack">
            <section className="section-block">
              <div className="section-head">
                <div>
                  <p className="section-kicker">My Plan</p>
                  <h2>{pathway.title}</h2>
                </div>
                <p className="section-note">{pathway.timeline}</p>
              </div>
              <p className="section-copy">{pathway.summary}</p>
              <div className="pathway-tabs">
                {relevantPathways.map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    className={item.key === pathway.key ? "need-chip need-chip-active" : "need-chip"}
                    onClick={() => setPathwayKey(item.key)}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </section>

            <section className="summary-band">
              <article>
                <strong>{completed.length}</strong>
                <span>Completed</span>
              </article>
              <article>
                <strong>{inProgress.length}</strong>
                <span>In progress</span>
              </article>
              <article>
                <strong>{completedHours}</strong>
                <span>Hours logged</span>
              </article>
              <article>
                <strong>{credentials}</strong>
                <span>Credentials</span>
              </article>
            </section>

            <section className="route-list">
              {pathway.courseIds.map((courseId, index) => {
                const course = data.courses.find((item) => item.id === courseId);
                if (!course) return null;
                const record = getRecord(records, course.id);
                return (
                  <article key={course.id} className="route-row">
                    <div className="route-index">{index + 1}</div>
                    <div className="route-copy">
                      <div className="route-head">
                        <div>
                          <p className="course-provider">{course.provider}</p>
                          <h3>{course.title}</h3>
                        </div>
                        <span className="status-badge">{statusLabel(record)}</span>
                      </div>
                      <p className="route-why">{course.outcome}</p>
                      <div className="meta-row">
                        <span>{course.durationLabel}</span>
                        <span>{course.levelLabel}</span>
                        <span>{course.proofLabel}</span>
                      </div>
                    </div>
                    <div className="route-actions">
                      <a href={course.href} target="_blank" rel="noreferrer" className="primary-link">
                        Open course
                      </a>
                      <div className="sub-actions">
                        <button type="button" className="secondary-link" onClick={() => toggleStarted(course.id)}>
                          {record.stage === "in_progress" ? "Started" : "Start"}
                        </button>
                        <button type="button" className="secondary-link" onClick={() => toggleCompleted(course.id)}>
                          {record.stage === "completed" ? "Completed" : "Complete"}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </section>

            <section className="overview-grid">
              <article className="section-block">
                <div className="section-head">
                  <div>
                    <p className="section-kicker">Quick Wins</p>
                    <h2>Shorter courses worth doing soon.</h2>
                  </div>
                </div>
                <div className="stack-list">
                  {quickWins.map((course) => (
                    <article key={course.id} className="compact-row">
                      <div className="row-copy">
                        <p className="course-provider">{course.provider}</p>
                        <h3>{course.title}</h3>
                        <p>{course.bestFor}</p>
                      </div>
                      <a href={course.href} target="_blank" rel="noreferrer" className="primary-link">
                        Open course
                      </a>
                    </article>
                  ))}
                </div>
              </article>

              <article className="section-block">
                <div className="section-head">
                  <div>
                    <p className="section-kicker">Credentialled Wins</p>
                    <h2>Learning you can evidence.</h2>
                  </div>
                </div>
                <div className="stack-list">
                  {credentialWins.map((course) => (
                    <article key={course.id} className="compact-row">
                      <div className="row-copy">
                        <p className="course-provider">{course.provider}</p>
                        <h3>{course.title}</h3>
                        <p>{course.proofLabel}</p>
                      </div>
                      <a href={course.href} target="_blank" rel="noreferrer" className="primary-link">
                        Open course
                      </a>
                    </article>
                  ))}
                </div>
              </article>
            </section>
          </div>
        ) : null}

        {view === "library" ? (
          <div className="page-stack">
            <section className="library-shell">
              <aside className="library-rail">
                <div className="section-head">
                  <div>
                    <p className="section-kicker">Library</p>
                    <h2>Find the right course faster.</h2>
                  </div>
                </div>
                <label className="search-box">
                  <span>Search</span>
                  <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="governance, volunteers, GDPR, fundraising" />
                </label>

                <div className="filter-group">
                  <p className="filter-label">View</p>
                  <button type="button" className={roleFocusOnly ? "need-chip need-chip-active" : "need-chip"} onClick={() => setRoleFocusOnly((current) => !current)}>
                    {roleFocusOnly ? "Role lens only" : "Show all roles"}
                  </button>
                </div>

                <div className="filter-group">
                  <p className="filter-label">Topic</p>
                  <div className="need-row need-row-rail">
                    <button type="button" className={topicKey === "all" ? "need-chip need-chip-active" : "need-chip"} onClick={() => setTopicKey("all")}>
                      All topics
                    </button>
                    {data.categories.map((item) => (
                      <button key={item.key} type="button" className={topicKey === item.key ? "need-chip need-chip-active" : "need-chip"} onClick={() => setTopicKey(item.key)}>
                        {item.title}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="filter-group">
                  <p className="filter-label">Need</p>
                  <div className="need-row need-row-rail">
                    <button type="button" className={libraryNeed === "all" ? "need-chip need-chip-active" : "need-chip"} onClick={() => setLibraryNeed("all")}>
                      All needs
                    </button>
                    {data.needs.map((item) => (
                      <button key={item.key} type="button" className={libraryNeed === item.key ? "need-chip need-chip-active" : "need-chip"} onClick={() => setLibraryNeed(item.key)}>
                        {item.title}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="filter-group">
                  <p className="filter-label">State</p>
                  <div className="need-row need-row-rail">
                    {(["all", "saved", "in_progress", "completed"] as StatusFilter[]).map((item) => (
                      <button key={item} type="button" className={statusFilter === item ? "need-chip need-chip-active" : "need-chip"} onClick={() => setStatusFilter(item)}>
                        {item === "all" ? "All states" : item.replace("_", " ")}
                      </button>
                    ))}
                  </div>
                </div>
              </aside>

              <section className="library-results">
                <div className="results-head">
                  <div>
                    <p className="section-kicker">Results</p>
                    <h2>{library.length} courses</h2>
                  </div>
                  <p className="section-note">Shorter cards, one clear primary action, and clearer scanning signals.</p>
                </div>
                <div className="library-grid">
                  {library.map((course) => {
                    const record = getRecord(records, course.id);
                    return (
                      <article key={course.id} className="library-card">
                        <div className="library-card-head">
                          <div>
                            <p className="course-provider">{course.provider}</p>
                            <h3>{course.title}</h3>
                          </div>
                          <span className="status-badge">{statusLabel(record)}</span>
                        </div>

                        <div className="tag-row">
                          {course.cueTags.slice(0, 3).map((item) => (
                            <span key={item} className="tag">
                              {item}
                            </span>
                          ))}
                        </div>

                        <p className="card-why">{course.whyItMatters}</p>

                        <div className="detail-grid">
                          <p>
                            <strong>Best for</strong>
                            <span>{course.bestFor}</span>
                          </p>
                          <p>
                            <strong>Outcome</strong>
                            <span>{course.outcome}</span>
                          </p>
                        </div>

                        <div className="meta-row">
                          <span>{course.durationLabel}</span>
                          <span>{course.levelLabel}</span>
                          <span>{course.accessLabel}</span>
                          <span>{course.proofLabel}</span>
                        </div>

                        <div className="card-foot">
                          <a href={course.href} target="_blank" rel="noreferrer" className="primary-link">
                            Open course
                          </a>
                          <div className="sub-actions">
                            <button type="button" className="secondary-link" onClick={() => toggleSaved(course.id)}>
                              {record.saved ? "Saved" : "Save"}
                            </button>
                            <button type="button" className="secondary-link" onClick={() => toggleStarted(course.id)}>
                              {record.stage === "in_progress" ? "Started" : "Start"}
                            </button>
                            <button type="button" className="secondary-link" onClick={() => toggleCompleted(course.id)}>
                              {record.stage === "completed" ? "Completed" : "Complete"}
                            </button>
                          </div>
                        </div>

                        <p className="source-note">
                          <strong>Source note:</strong> {course.sourceNote} Last checked {course.lastChecked}.
                        </p>
                      </article>
                    );
                  })}
                </div>
              </section>
            </section>
          </div>
        ) : null}

        {view === "evidence" ? (
          <div className="page-stack">
            <section className="section-block">
              <div className="section-head">
                <div>
                  <p className="section-kicker">Evidence</p>
                  <h2>Show the work clearly.</h2>
                </div>
                <div className="header-actions">
                  <button type="button" className="secondary-button" onClick={() => downloadFile(`Kelloch_Learning_Summary_${new Date().toISOString().slice(0, 10)}.txt`, summary, "text/plain;charset=utf-8")}>
                    Download summary
                  </button>
                  <button type="button" className="primary-button" onClick={() => downloadFile(`Kelloch_CPD_Log_${new Date().toISOString().slice(0, 10)}.csv`, csvBody(completed, records), "text/csv;charset=utf-8")}>
                    Export CPD CSV
                  </button>
                </div>
              </div>
              <p className="section-copy">Export a plain-language summary or a clean CSV for line management, board papers, supervision or your own CPD record.</p>
            </section>

            <section className="summary-band">
              <article><strong>{completed.length}</strong><span>Completed</span></article>
              <article><strong>{inProgress.length}</strong><span>In progress</span></article>
              <article><strong>{saved.length}</strong><span>Saved</span></article>
              <article><strong>{credentials}</strong><span>Credentials</span></article>
            </section>

            <section className="overview-grid">
              <article className="section-block">
                <div className="section-head">
                  <div>
                    <p className="section-kicker">Completed Log</p>
                    <h2>Recorded learning.</h2>
                  </div>
                </div>
                {completed.length === 0 ? (
                  <div className="empty-note">No completed courses yet.</div>
                ) : (
                  <div className="table-wrap">
                    <table className="evidence-table">
                      <thead>
                        <tr><th>Course</th><th>Provider</th><th>Hours</th><th>Date</th></tr>
                      </thead>
                      <tbody>
                        {completed.map((course) => (
                          <tr key={course.id}>
                            <td>{course.title}</td>
                            <td>{course.provider}</td>
                            <td>{course.hours}</td>
                            <td>{getRecord(records, course.id).completedOn ?? ""}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </article>

              <article className="section-block">
                <div className="section-head">
                  <div>
                    <p className="section-kicker">Summary</p>
                    <h2>Plain-language export.</h2>
                  </div>
                </div>
                <pre className="summary-box">{summary}</pre>
              </article>
            </section>
          </div>
        ) : null}

        <footer className="page-footer">
          <div>
            <p>{data.footerNote}</p>
            <span>{data.accessNoteBody}</span>
          </div>
          <div className="footer-actions">
            <a href={data.accessNoteLink.href} target="_blank" rel="noreferrer" className="plain-link">
              {data.accessNoteLink.label}
            </a>
            <button type="button" className="plain-button" onClick={resetAll}>
              Reset saved state
            </button>
          </div>
        </footer>
      </div>
    </main>
  );
}
