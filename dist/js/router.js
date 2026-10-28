export function route(){return (location.hash.slice(1)||'/').split('?')[0]}
export function navigate(path){if(location.hash==='#'+path)globalThis.dispatchEvent(new HashChangeEvent('hashchange'));else location.hash=path}
