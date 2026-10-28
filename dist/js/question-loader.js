import {catalog} from '../data/catalog.js';
import {validateQuestion} from './question-validator.js';
const loaded=new Map();const seen=new Set();
export {catalog};
export async function loadBank(id){
 if(loaded.has(id))return loaded.get(id);
 const meta=catalog.find(c=>c.id===id);if(!meta)throw new Error('Unknown collection');
 const pending=import(`../data/${id}.js`).then(m=>{const local=new Set(seen);m.default.forEach(q=>validateQuestion(q,local));if(m.default.length!==meta.count)throw new Error('Question catalog count does not match');m.default.forEach(q=>seen.add(q.id));return m.default}).catch(e=>{loaded.delete(id);throw e});
 loaded.set(id,pending);return pending;
}
export async function loadQuestions(id='all'){return id==='all'?(await Promise.all(catalog.map(c=>loadBank(c.id)))).flat():loadBank(id)}
export function filterQuestions(questions,config,activity={}){return questions.filter(q=>{
 const p=activity[q.id];return (!config.topics?.length||config.topics.includes(q.topic))&&(!config.difficulty||config.difficulty==='Mixed'||q.difficulty===config.difficulty)&&(!config.format||config.format==='all'||q.format===config.format)&&(config.pool==='new'?!p:config.pool==='attempted'?!!p:config.pool==='incorrect'?p?.lastCorrect===false:true)
})}
