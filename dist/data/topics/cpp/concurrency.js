export default [
  {
    "id": "cpp-004",
    "language": "cpp",
    "topic": "Concurrency",
    "difficulty": "Hard",
    "format": "boolean",
    "question": "Unsynchronized conflicting access from threads can cause a data race.",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "True"
      },
      {
        "id": "b",
        "text": "False"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "When conflicting memory operations are not ordered and at least one is a non-atomic write, a data race yields undefined behavior.",
    "tags": [
      "Concurrency",
      "cpp"
    ],
    "hint": "Consider the rules of concurrency before choosing."
  }
];
