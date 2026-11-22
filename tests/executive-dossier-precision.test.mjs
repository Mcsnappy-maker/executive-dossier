import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const component = await readFile(
  new URL('../components/ExecutiveDossierApp.tsx', import.meta.url),
  'utf8',
);
const css = await readFile(
  new URL('../components/ExecutiveDossier.module.css', import.meta.url),
  'utf8',
);
const globalCss = await readFile(
  new URL('../app/globals.css', import.meta.url),
  'utf8',
);
const nextConfig = await readFile(
  new URL('../next.config.ts', import.meta.url),
  'utf8',
);

test('the static export uses an export-safe image configuration', () => {
  assert.match(nextConfig, /output:\s*["']export["']/);
  assert.match(nextConfig, /images:\s*\{\s*unoptimized:\s*true\s*\}/s);
});

test('the approved midnight, ivory, oxblood and steel palette is the only brand palette', () => {
  assert.match(css, /--midnight:\s*#12233b/i);
  assert.match(css, /--ivory:\s*#f2eee5/i);
  assert.match(css, /--oxblood:\s*#7a3045/i);
  assert.match(css, /--steel:\s*#6d7886/i);
  assert.doesNotMatch(
    `${css}\n${globalCss}`,
    /#e8620a|#108b9a|#b1137d|rgba?\(\s*232\s*,\s*98\s*,\s*10/i,
  );
});

test('the operational briefing hero and evidence rail use the approved hierarchy', () => {
  assert.match(css, /\.topline\s*\{[^}]*background:\s*rgba\(242,\s*238,\s*229,/s);
  assert.match(css, /\.hero\s*\{[^}]*background:\s*var\(--ivory\)[^}]*color:\s*var\(--midnight\)/s);
  assert.match(css, /\.heroName\s*\{[^}]*font-family:\s*"DM Sans"[^}]*font-weight:\s*600/s);
  assert.match(css, /\.heroPortraitFrame\s*\{[^}]*border:\s*clamp\([^}]*var\(--oxblood\)/s);
  assert.match(css, /\.primaryAction\s*\{[^}]*background:\s*var\(--oxblood\)/s);
  assert.match(css, /\.metric strong\s*\{[^}]*color:\s*var\(--oxblood\)/s);
});

test('dark-surface metadata remains legible and the source portrait edge is masked', () => {
  assert.match(css, /\.evidenceItem span\s*\{[^}]*color:\s*var\(--sage\)/s);
  assert.match(css, /\.heroPortrait img\s*\{[^}]*scale\(1\.1\)/s);
});

test('the featured evidence card avoids an artificial full-height content gap', () => {
  assert.doesNotMatch(css, /\.caseStudy:first-child dl\s*\{[^}]*margin-top:\s*auto/s);
  assert.match(css, /\.caseStudy:first-child dl\s*\{[^}]*margin-top:\s*clamp\(/s);
});

test('reveal effects are progressive enhancement and content is visible without JavaScript', () => {
  assert.doesNotMatch(css, /\.page \[data-reveal\]\s*\{[^}]*opacity:\s*0/s);
  assert.match(css, /\.page \[data-reveal\]\s*\{[^}]*opacity:\s*1[^}]*transform:\s*none/s);
  assert.match(css, /\.page\[data-enhanced=['"]true['"]\] \[data-reveal\]/);
  assert.match(component, /dataset\.enhanced = 'true'/);
});

test('the italic surname is never clipped by the reveal state', () => {
  assert.doesNotMatch(
    css,
    /\.page\[data-enhanced='true'\] \.heroName \[data-reveal\]\[data-visible="true"\]\s*\{[^}]*clip-path/s,
  );
});

test('desktop navigation exposes every existing destination and its active state', () => {
  assert.match(component, /className=\{styles\.desktopNav\}/);
  assert.match(component, /aria-current=\{activeSection === href\.slice\(1\) \? 'location' : undefined\}/);
  assert.match(css, /\.desktopNav/);
  assert.match(css, /@media \(max-width: 860px\)[\s\S]*\.desktopNav\s*\{[^}]*display:\s*none/s);
  assert.match(component, /document\.fonts\?\.ready\.then\(alignToHash\)/);
  assert.match(component, /target\.scrollIntoView\(\{ block: 'start' \}\)/);
});

test('priority leadership roles and digital capability have explicit visual emphasis hooks', () => {
  assert.match(component, /styles\.roleFeatured/);
  assert.match(component, /styles\.digitalPanelExpanded/);
  assert.match(css, /\.roleFeatured/);
  assert.match(css, /\.digitalPanelExpanded/);
});

test('career disclosures retain native details semantics with an accessible control target', () => {
  assert.match(component, /<details className=\{styles\.details\}>/);
  assert.match(css, /\.details summary\s*\{[^}]*min-height:\s*48px/s);
  assert.match(css, /\.details summary:focus-visible/);
});

test('mobile navigation is modal, keyboard-contained and restores focus', () => {
  assert.match(component, /role='dialog'/);
  assert.match(component, /aria-modal='true'/);
  assert.match(component, /event\.key === 'Escape'/);
  assert.match(component, /event\.key !== 'Tab'/);
  assert.match(component, /setAttribute\('inert', ''\)/);
  assert.match(component, /previousFocusRef\.current\?\.focus\(\)/);
});

test('reduced-motion mode removes all reveal and ticker motion', () => {
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)[\s\S]*\.tickerTrack\s*\{[^}]*animation:\s*none !important/s);
  assert.match(css, /\.page\[data-enhanced='true'\] \[data-reveal\][\s\S]*transform:\s*none !important/s);
  assert.doesNotMatch(css, /\n\.evidenceItem\[data-reveal\]/);
  assert.doesNotMatch(css, /\n\.role\[data-reveal\]/);
});

test('priority evidence copy and chronology remain intact', () => {
  assert.match(component, /Continuation funding contributed to across three years/);
  assert.match(component, /Participants supported annually by the scaled CERT model/);
  assert.ok(component.indexOf("organisation: 'CERT") < component.indexOf("organisation: 'Lifelink'"));
});

test('desktop section rails retain a protected outer inset', () => {
  assert.match(
    css,
    /\.darkSection\s*\{[^}]*grid-template-columns:\s*minmax\(150px,\s*calc\(\(100vw - 1400px\)\/2 \+ 130px\)\)/s,
  );
  assert.match(
    css,
    /\.darkSection \.sectionLabel\s*\{[^}]*padding-left:\s*max\(34px,\s*calc\(\(100vw - 1400px\)\/2 \+ 14px\)\)/s,
  );
});

test('desktop hero reveals evidence sooner without changing mobile height behavior', () => {
  assert.match(css, /\.hero\s*\{[^}]*min-height:\s*min\(840px,\s*calc\(100svh - 80px\)\)/s);
  assert.match(css, /@media \(max-width: 720px\)[\s\S]*\.hero\s*\{[^}]*min-height:\s*auto/s);
});

test('the evidence rail stacks before long metric values can force mobile overflow', () => {
  assert.match(
    css,
    /@media \(max-width: 480px\)[\s\S]*\.metricRail\s*\{[^}]*grid-template-columns:\s*1fr/s,
  );
});

test('the long funding metric has a cell-safe desktop type scale', () => {
  assert.match(
    css,
    /\.metric:nth-child\(2\) strong\s*\{[^}]*font-size:\s*clamp\(3\.5rem,\s*5\.2vw,\s*5\.2rem\)/s,
  );
});

test('micro typography has an eleven-pixel desktop floor', () => {
  assert.match(css, /\.desktopNav\s*\{[^}]*font-size:\s*11px/s);
  assert.match(css, /\.heroMeta\s*\{[^}]*font-size:\s*11px/s);
  assert.match(css, /\.sectionLabel p\s*\{[^}]*font-size:\s*11px/s);
  assert.match(css, /\.roleOrg\s*\{[^}]*font-size:\s*11px/s);
});

test('closing monogram uses the dossier background and a restrained aligned scale', () => {
  assert.match(css, /\.accentBand\s*\{[^}]*justify-content:\s*flex-end[^}]*background:\s*var\(--bone\)/s);
  assert.match(css, /\.accentBand span\s*\{[^}]*font-size:\s*clamp\(5rem,\s*12vw,\s*11rem\)/s);
  assert.match(css, /\.accentBand span\s*\{[^}]*transform:\s*none/s);
});

test('existing CV destination remains unchanged', () => {
  assert.match(component, /href='\/Mark_OHare_Leadership_CV_2026\.pdf'/);
  assert.match(component, /href='\/Mark_OHare_CV_2026_V1\.docx'/);
});

test('council leadership refinements and PDF download exist', () => {
  assert.match(component, /CERT · Service transformation/);
  assert.match(component, /Lifelink · Service continuity/);
  assert.match(component, /Kelloch · Digital service design/);
  assert.match(component, /Third Sector Talent Network/);
  assert.doesNotMatch(component, /Talent Direct/);
  assert.match(component, /Mark_OHare_Leadership_CV_2026\.pdf/);
  assert.match(css, /@media print/);
  assert.match(css, /\.caseStudyGrid/);
});

test('final editorial refinement avoids duplicate ticker and prioritises CERT', () => {
  assert.doesNotMatch(component, /className={styles\.ticker}/);
  assert.match(component, /className={styles\.featureOutcome}/);
  assert.match(component, /participants supported annually by the scaled CERT service/);
  assert.match(css, /\.caseStudy:first-child\s*\{/);
  assert.match(css, /\.details summary:focus-visible\s*\{/);
  assert.doesNotMatch(component, /Additional measurable service outcomes will only be published/);
});
