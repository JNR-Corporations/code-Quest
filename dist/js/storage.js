import {dbRead,dbWrite} from './database.js';
export const defaults=()=>({version:1,questions:{},bookmarks:[],history:[],session:null,recent:[],configs:[],settings:{theme:'dark',accent:'#a07bed',codeSize:13,textSize:14,lineNumbers:true,length:10,difficulty:'Mixed',sound:false,reducedMotion:false}});
const plain=v=>v&&typeof v==='object'&&!Array.isArray(v);
const strings=a=>Array.isArray(a)&&a.every(v=>typeof v==='string'&&v.length<150);
const number=n=>Number.isSafeInteger(n)&&n>=0;
const validSettings=s=>plain(s)&&['dark','dim'].includes(s.theme)&&/^#[0-9a-f]{6}$/i.test(s.accent)&&s.codeSize>=11&&s.codeSize<=20&&s.textSize>=12&&s.textSize<=18&&number(s.length)&&s.length>=1&&s.length<=100&&['Mixed','Easy','Medium','Hard','Expert'].includes(s.difficulty)&&['lineNumbers','sound','reducedMotion'].every(k=>typeof s[k]==='boolean');
export function validateData(d,knownIds){
 if(!plain(d)||d.version!==1||!plain(d.questions)||!strings(d.bookmarks)||!strings(d.recent)||!Array.isArray(d.history)||!Array.isArray(d.configs)||!validSettings(d.settings))throw new Error('This is not a valid CodeQuest v1 export.');
 const idOK=id=>typeof id==='string'&&(!knownIds||knownIds.has(id));
 for(const [id,p] of Object.entries(d.questions)){if(!idOK(id)||!plain(p)||!['attempts','correct','incorrect'].every(k=>number(p[k]))||p.attempts!==p.correct+p.incorrect||!number(p.lastAt)||typeof p.lastCorrect!=='boolean'||!strings(p.lastSelected))throw new Error('Invalid question activity.')}
 if(!d.bookmarks.every(idOK)||new Set(d.bookmarks).size!==d.bookmarks.length)throw new Error('Invalid bookmarks.');
 const validConfig=c=>plain(c)&&typeof c.bank==='string'&&strings(c.topics)&&['Mixed','Easy','Medium','Hard','Expert'].includes(c.difficulty)&&number(c.length)&&c.length>=1&&c.length<=100&&typeof c.format==='string'&&['all','new','attempted','incorrect'].includes(c.pool)&&['timed','shuffleQuestions','shuffleAnswers'].every(k=>typeof c[k]==='boolean');
 const validSession=s=>plain(s)&&typeof s.id==='string'&&strings(s.ids)&&s.ids.length>0&&new Set(s.ids).size===s.ids.length&&s.ids.every(idOK)&&number(s.index)&&s.index<s.ids.length&&number(s.startedAt)&&number(s.elapsed)&&plain(s.responses)&&plain(s.optionOrders)&&s.ids.every(id=>strings(s.optionOrders[id])&&new Set(s.optionOrders[id]).size===s.optionOrders[id].length)&&validConfig(s.config)&&Object.entries(s.responses).every(([id,r])=>s.ids.includes(id)&&plain(r)&&strings(r.selected)&&typeof r.correct==='boolean'&&number(r.at));
 if(d.session!==null&&!validSession(d.session))throw new Error('Invalid saved session.');
 for(const h of d.history){if(!validSession(h)||!number(h.finishedAt))throw new Error('Invalid quiz history.')}
 if(!d.configs.every(validConfig))throw new Error('Invalid saved configurations.');
 return structuredClone(d);
}
let queue=Promise.resolve();let method='indexeddb';
export async function readState(){try{const d=await dbRead();if(d)return validateData(d)}catch(e){console.warn('Primary storage unavailable:',e.message);method='localStorage'}
 try{const raw=localStorage.getItem('cq-backup');if(raw)return validateData(JSON.parse(raw))}catch(e){globalThis.dispatchEvent?.(new CustomEvent('storage-warning',{detail:'Saved data could not be read. Export a backup regularly.'}))}return defaults()}
export function persist(state){const value=structuredClone(state);const task=queue.catch(()=>{}).then(async()=>{
 try{localStorage.setItem('cq-backup',JSON.stringify(value))}catch(e){if(method!=='indexeddb')throw new Error('Storage full or disabled. Progress could not be saved.')}
 if(method==='indexeddb'){try{await dbWrite(value)}catch(e){method='localStorage';if(localStorage.getItem('cq-backup')!==JSON.stringify(value))throw e;globalThis.dispatchEvent(new CustomEvent('storage-warning',{detail:'Using browser backup storage. Export your activity for safekeeping.'}))}}
 });queue=task;return task}
