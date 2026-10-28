export const searchCollections=(items,term)=>{term=term.trim().toLowerCase();return items.filter(c=>[c.title,c.description,c.group,...c.topics].join(' ').toLowerCase().includes(term))};
export const searchQuestions=(items,term)=>{term=term.trim().toLowerCase();return term?items.filter(q=>[q.question,q.language,q.topic,...q.tags].join(' ').toLowerCase().includes(term)):[]};
