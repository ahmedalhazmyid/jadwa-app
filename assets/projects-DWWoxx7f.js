import{r as compute,t as sample}from"./schema-D5neG8AA.js";
const KEY=`jadwa:projects`;
function uid(){try{return crypto.randomUUID()}catch{return`p_${Date.now()}`}}
function load(){try{let e=localStorage.getItem(KEY);return e?JSON.parse(e):[]}catch{return[]}}
function save(e){localStorage.setItem(KEY,JSON.stringify(e))}
function summarize(p){return{id:p.id,title:p.title,status:p.status,country:p.country,currency:p.currency,capital:p.capital,npv:p.npv}}
function buildReport(inputs){
  const model=compute(inputs);
  const lang=inputs.language||`ar`;
  const narrative={
    executiveSummary:lang===`ar`
      ?`دراسة محلية: صافي القيمة الحالية ${model.metrics.npv.toFixed(0)} ${inputs.currency}، ومعدل العائد الداخلي ${model.metrics.irr==null?`—`:(model.metrics.irr*100).toFixed(1)+`%`}، والحكم ${model.metrics.verdict} (درجة ${model.metrics.verdictScore}).`
      :`Local study: NPV ${model.metrics.npv.toFixed(0)} ${inputs.currency}, IRR ${model.metrics.irr==null?`—`:(model.metrics.irr*100).toFixed(1)+`%`}, verdict ${model.metrics.verdict} (score ${model.metrics.verdictScore}).`,
    marketAnalysis:lang===`ar`
      ?`تحليل سوق مبسّط محليًا بدون مصادر سحابية. راجع الافتراضات والأرقام قبل أي قرار استثماري.`
      :`Simplified local market note without cloud research. Review assumptions before any investment decision.`,
    usedAi:!1
  };
  return{inputs,...model,narrative,research:null,citations:[]};
}
async function listProjects(){return load().map(summarize)}
async function quota(){return{remaining:99,limit:99}}
async function getProject({data:id}){const p=load().find(x=>x.id===id);if(!p)throw new Error(`not found`);return p}
async function deleteProject({data:id}){save(load().filter(x=>x.id!==id));return{ok:!0}}
async function saveDraft({data:{data:inputs}}){
  const id=uid();
  const project={id,title:inputs.title,description:inputs.description,country:inputs.country,currency:inputs.currency,capital:inputs.capital,status:`draft`,npv:null,inputs,reports:[],createdAt:new Date().toISOString()};
  save([project,...load()]);
  return{id};
}
async function generate(arg){
  const payload=arg&&arg.data!==void 0?arg.data:arg||{};
  const inputs=payload.data??payload;
  const projectId=payload.projectId;
  const report=buildReport(inputs);
  const id=projectId||uid();
  const existing=load();
  const prev=existing.find(x=>x.id===id);
  const project={
    id,
    title:inputs.title,
    description:inputs.description,
    country:inputs.country,
    currency:inputs.currency,
    capital:inputs.capital,
    status:`ready`,
    npv:report.metrics.npv,
    inputs,
    reports:[{content:report,createdAt:new Date().toISOString()}],
    createdAt:prev?.createdAt||new Date().toISOString()
  };
  save([project,...existing.filter(x=>x.id!==id)]);
  return{ok:!0,projectId:id};
}
async function noop(){return{ok:!0}}
// keep sample referenced so bundlers/trees don't matter; unused locally is fine
void sample;
const o=listProjects,a=quota,u=generate,c=saveDraft,s=getProject,d=noop,l=deleteProject;
export{o as a,a as i,u as n,c as o,s as r,d as s,l as t};
