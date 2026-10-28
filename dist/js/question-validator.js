export const formats=['mcq','output','bug','complete','syntax','concept','boolean','multiple','comparison','debug','interview'];
export function validateQuestion(q,seen=new Set()){
 if(!q||typeof q.id!=='string'||seen.has(q.id))throw new Error('Missing or duplicate question ID');
 for(const key of ['language','topic','difficulty','question','explanation'])if(typeof q[key]!=='string'||!q[key].trim())throw new Error(`${q.id}: invalid ${key}`);
 if(!['Easy','Medium','Hard','Expert'].includes(q.difficulty)||!formats.includes(q.format))throw new Error(`${q.id}: invalid format or difficulty`);
 if(q.code!=null&&typeof q.code!=='string')throw new Error(`${q.id}: invalid code`);
 if(!Array.isArray(q.options)||q.options.length!==(q.format==='boolean'?2:4))throw new Error(`${q.id}: invalid options`);
 const ids=new Set();for(const o of q.options){if(!o||typeof o.id!=='string'||typeof o.text!=='string'||ids.has(o.id))throw new Error(`${q.id}: invalid option`);ids.add(o.id)}
 if(!Array.isArray(q.answers)||!q.answers.length||new Set(q.answers).size!==q.answers.length||q.answers.some(id=>!ids.has(id))||(q.format!=='multiple'&&q.answers.length!==1))throw new Error(`${q.id}: invalid answer references`);
 seen.add(q.id);return q;
}
