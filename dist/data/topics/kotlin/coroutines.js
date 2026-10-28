export default [
  {
    "id": "kotlin-002",
    "language": "kotlin",
    "topic": "Coroutines",
    "difficulty": "Medium",
    "format": "concept",
    "question": "What does suspend mean?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Always runs on a background thread"
      },
      {
        "id": "b",
        "text": "May suspend without blocking its thread"
      },
      {
        "id": "c",
        "text": "Creates a new thread"
      },
      {
        "id": "d",
        "text": "Cannot return a value"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "A suspending function may pause and resume through coroutine machinery. suspend alone does not choose a dispatcher.",
    "tags": [
      "Coroutines",
      "kotlin"
    ],
    "hint": "Consider the rules of coroutines before choosing."
  }
];
