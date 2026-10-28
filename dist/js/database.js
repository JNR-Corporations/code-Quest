let promise;
export function openDatabase(){if(!promise)promise=new Promise((resolve,reject)=>{
 if(!globalThis.indexedDB)return reject(new Error('IndexedDB unavailable'));
 const request=indexedDB.open('codequest',1);
 request.onupgradeneeded=()=>{if(!request.result.objectStoreNames.contains('state'))request.result.createObjectStore('state')};
 request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error);request.onblocked=()=>reject(new Error('Close other app tabs to upgrade storage'));
});return promise}
export async function dbRead(){const db=await openDatabase();return new Promise((resolve,reject)=>{const tx=db.transaction('state','readonly');const r=tx.objectStore('state').get('user');r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)})}
export async function dbWrite(value){const db=await openDatabase();return new Promise((resolve,reject)=>{const tx=db.transaction('state','readwrite');tx.objectStore('state').put(value,'user');tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error||new Error('Storage transaction aborted'))})}
