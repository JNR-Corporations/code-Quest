export default [
  {
    "id": "javascript-010",
    "language": "javascript",
    "topic": "Memory",
    "difficulty": "Hard",
    "format": "debug",
    "question": "A growing Map stores every request object forever. What is the likely issue?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Stack overflow"
      },
      {
        "id": "b",
        "text": "Retained references prevent collection"
      },
      {
        "id": "c",
        "text": "Automatic eviction is too fast"
      },
      {
        "id": "d",
        "text": "Promises cannot be collected"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Strong references in the Map keep entries reachable. Bound the cache or remove entries when they are no longer needed.",
    "tags": [
      "Memory",
      "javascript"
    ],
    "hint": "Consider the rules of memory before choosing."
  }
];
