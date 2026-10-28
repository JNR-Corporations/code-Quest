export default [
  {
    "id": "csharp-001",
    "language": "csharp",
    "topic": "Async",
    "difficulty": "Medium",
    "format": "concept",
    "question": "What does await do when a Task has not completed?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Always blocks the thread"
      },
      {
        "id": "b",
        "text": "Suspends the async method"
      },
      {
        "id": "c",
        "text": "Creates a new process"
      },
      {
        "id": "d",
        "text": "Ignores errors"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "await suspends the method and arranges continuation after completion. It does not inherently block the current thread.",
    "tags": [
      "Async",
      "csharp"
    ],
    "hint": "Consider the rules of async before choosing."
  }
];
