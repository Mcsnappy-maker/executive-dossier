/**
 * Build a two-page, text-selectable CV before Next.js static export.
 * Self-contained on purpose: no PDF service, browser automation or added dependency.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const out = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'Mark_OHare_Leadership_CV_2026.pdf');
const W=595.28, H=841.89, M=54, INNER=W-2*M;
const DARK='0.065 0.071 0.067', MUTED='0.32 0.36 0.33', RULE='0.78 0.81 0.78';
let commands=[], pages=[], y=785;
function safe(s) {
  return s.replace(/[‘’]/g,"'").replace(/[–—]/g,'-').replace(/\\/g,'\\\\')
    .replace(/\(/g,'\\(').replace(/\)/g,'\\)');
}
function approx(s,size,bold=false) {
  return Array.from(s).reduce((n,c)=>n+(c===' '?0.27:/[il.,'!;:|]/.test(c)?0.24:/[MW@]/.test(c)?0.86:/[A-Z]/.test(c)?0.64:bold?0.54:0.48)*size,0);
}
function put(t,size=9,opts={}) {
  const f={regular:'F1',bold:'F2',display:'F3',italic:'F4'}[opts.font||'regular'];
  const x=opts.x??M, top=opts.top??y, color=opts.color||DARK;
  commands.push(color+' rg BT /'+f+' '+size+' Tf 1 0 0 1 '+x.toFixed(2)+' '+top.toFixed(2)+' Tm ('+safe(t)+') Tj ET');
}
function line(top=y) {
  commands.push(RULE+' RG 0.7 w '+M+' '+top.toFixed(2)+' m '+(W-M)+' '+top.toFixed(2)+' l S');
}
function para(t,opts={}) {
  const size=opts.size||8.8, leading=opts.leading||12.5, indent=opts.indent||0;
  const font=opts.font||'regular', max=INNER-indent-5;
  let current='';
  function flush() { if(current) {put(current,size,{x:M+indent,font,color:opts.color});y-=leading;current='';} }
  for(const word of t.split(/\s+/).filter(Boolean)){
    const test=current?current+' '+word:word;
    if(current && approx(test,size,font==='bold')>max)flush();
    current=current?current+' '+word:word;
  }
  flush();y-=opts.after??5;
  if(y<51)throw new Error('CV page overflow; reduce text or font size');
}
function section(label) {
  y-=7;put(label.toUpperCase(),9.1,{font:'bold'});y-=7;line();y-=16;
}
function point(t) {para('- '+t,{size:8.65,leading:12.3,indent:4,after:4});}
function role(title,dates,description,points){
  y-=4;put(title,9.6,{font:'bold'});
  put(dates,8.3,{font:'bold',color:MUTED,x:W-M-approx(dates,8.3,true)});
  y-=16;para(description,{size:8.4,leading:11.6,font:'italic',color:MUTED,after:5});
  points.forEach(point);
}
function endPage(){
  line(42);put("MARK O'HARE  /  LEADERSHIP CV  /  OCTOBER 2026",7.6,{top:28,color:MUTED});
  put((pages.length+1)+' / 2',7.6,{top:28,x:W-M-20,color:MUTED});
  pages.push(commands.join('\n'));commands=[];y=785;
}
put("Mark O'Hare",34,{font:'display'});y-=30;
put('THIRD SECTOR OPERATIONS & PEOPLE LEADER',10.3,{font:'bold'});y-=20;
put('North Lanarkshire, Scotland  |  07861 701490  |  m.ohare@hotmail.co.uk',8.5,{color:MUTED});y-=15;
put('Executive dossier: executive-dossier-kohl.vercel.app',8.1,{color:MUTED});y-=15;
section('Profile');
para('Community development, operations and service leader with more than 25 years across employability, wellbeing, advice, volunteering, justice and organisational development. Experienced in moving services from identified need into funded delivery, supporting staff and practitioners, working with boards and improving services under pressure.');
section('Selected impact');
point('CERT: Project-managed a nine-partner employability and wellbeing pilot and helped develop a service model supporting 379 participants annually.');
point('Funding: Contributed to more than £850k in continuation funding over three years through bid development, evidence, delivery arrangements and funder reporting.');
point('Leadership: Promoted into senior operational roles within one year at CERT and Lifelink; reported on risk, safeguarding, performance and delivery.');
section('Selected leadership experience');
role('Operations Manager - CERT','JAN 2022 - JUL 2024',
 'Clackmannanshire Economic Regeneration Trust. Promoted from Project Manager within one year; reported directly to the Chair and Board.',[
 'Led the nine-partner pilot and grew it into regional employability and wellbeing delivery supporting 379 people annually.',
 'Contributed directly to funding applications, outcomes, reporting and partner arrangements associated with more than £850k of continuation funding across three years.',
 'Led safeguarding, risk governance, trustee reporting, budget and performance oversight, staff supervision and service improvement.',
 'Developed partnerships with Clackmannanshire Council, NHS Forth Valley and third-sector organisations.'
]);
role('Service Manager - Lifelink','MAR 2020 - JAN 2022',
 'Promoted from Assistant Manager; member of a four-person Senior Management Team.',[
 'Managed a defined Glasgow service area for school-based and therapeutic wellbeing services, overseeing commissioned delivery, safeguarding, quality and performance.',
 'Supported practitioner teams through changing demand and helped move wellbeing delivery online during COVID-19.',
 'Trained staff and practitioners, strengthened risk and governance reporting, and supported workforce wellbeing.'
]);
endPage();
section('Current professional activity');
role('Founder & Lead - Kelloch','JUL 2024 - PRESENT',
 'Independent third-sector workforce and digital resource initiative, operated alongside employed work.',[
 'Built practical tools for charities, CICs, social enterprises and jobseekers, including Third Sector Talent Network, CV Studio and the Learning Hub.',
 'Develop workshops and practical guidance covering people development, service design, recruitment and organisational improvement.',
 'Manage digital product delivery, communications, partnerships and day-to-day operations independently.'
]);
role('Lead Clinical Logistics Driver - Sciensus','JUL 2024 - PRESENT',
 'Safety-critical clinical logistics work in a regulated, time-sensitive healthcare environment.',[
 'Maintain operating procedures, compliance, safety and reporting requirements, including route cover and shift coordination.',
 'Carry out checks, documentation and prompt risk escalation, with insight into frontline delivery pressures.'
]);
section('Earlier third-sector and community experience | 2000 - 2020');
para('Holistic Enterprises Scotland: Founded and led training, employability, wellbeing and youth-development programmes.',{size:8.7});
para('Citizens Advice: Youth Reachout Project Manager and Regional Support & Training Officer, including advice, outreach, complex support, training and service development.',{size:8.7});
para('Voluntary Action North Lanarkshire: Supported volunteer development, governance and safeguarding improvement.',{size:8.7});
para('Justice and community programmes: Employability, mentoring and development work including HM Polmont; additional work through Routes to Work and local services.',{size:8.7});
section('Qualifications & professional development');
para('SVQ Level 5 Learning & Development (SCQF 11)  |  SVQ Level 4 Mentoring & Leadership (SCQF 10)  |  HND Community Arts  |  SVQ Level 4 Advice & Guidance',{size:8.7});
para('Trauma-Informed Practice Facilitator  |  Mental Health First Aid Instructor  |  Complex & Specialist Adviser Training  |  Citizens Advice Scotland Specialist Management Training',{size:8.7});
section('Additional capabilities');
para('Service and people: Governance reporting, safeguarding, programme design, partnerships, funding, budgets, staff development, facilitation and stakeholder communication.',{size:8.7});
para('Digital and communication: Website and online service design, React and TypeScript working knowledge, AI-assisted workflows, Adobe Creative Suite and professional photography.',{size:8.7});
y-=6;put('References available on request.',8.4,{color:MUTED});
endPage();
const objects=[];
function add(s){objects.push(s);return objects.length;}
const f1=add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>');
const f2=add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>');
const f3=add('<< /Type /Font /Subtype /Type1 /BaseFont /Times-Roman /Encoding /WinAnsiEncoding >>');
const f4=add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique /Encoding /WinAnsiEncoding >>');
const root=add('');
const ids=[];
for(const content of pages){
  const size=Buffer.byteLength(content,'latin1');
  const stream=add('<< /Length '+size+' >>\nstream\n'+content+'\nendstream');
  ids.push(add('<< /Type /Page /Parent '+root+' 0 R /MediaBox [0 0 '+W+' '+H+'] /Resources << /Font << /F1 '+f1+' 0 R /F2 '+f2+' 0 R /F3 '+f3+' 0 R /F4 '+f4+' 0 R >> >> /Contents '+stream+' 0 R >>'));
}
objects[root-1]='<< /Type /Pages /Count '+ids.length+' /Kids ['+ids.map(x=>x+' 0 R').join(' ')+'] >>';
const catalog=add('<< /Type /Catalog /Pages '+root+' 0 R >>');
const info=add("<< /Title (Mark O'Hare - Leadership CV) /Author (Mark O'Hare) >>");
let pdf='%PDF-1.4\n%âãÏÓ\n';const offsets=[0];
for(let i=0;i<objects.length;i++){offsets.push(Buffer.byteLength(pdf,'latin1'));pdf+=(i+1)+' 0 obj\n'+objects[i]+'\nendobj\n';}
const cross=Buffer.byteLength(pdf,'latin1');
pdf+='xref\n0 '+(objects.length+1)+'\n0000000000 65535 f \n';
for(let i=1;i<offsets.length;i++)pdf+=String(offsets[i]).padStart(10,'0')+' 00000 n \n';
pdf+='trailer\n<< /Size '+(objects.length+1)+' /Root '+catalog+' 0 R /Info '+info+' 0 R >>\nstartxref\n'+cross+'\n%%EOF\n';
await mkdir(dirname(out),{recursive:true});await writeFile(out,Buffer.from(pdf,'latin1'));
console.log('Generated two-page leadership CV: '+out);
