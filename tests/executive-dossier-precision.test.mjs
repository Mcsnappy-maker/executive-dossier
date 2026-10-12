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

test('reveal effects are progressive enhancement and content is visible without JavaScript', () => {
  assert.doesNotMatch(css, /\.page \[data-reveal\]\s*\{[^}]*opacity:\s*0/s);
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
  assert.match(component, /href='\/Mark_OHare_CV_2026_V1\.docx'/);
});
