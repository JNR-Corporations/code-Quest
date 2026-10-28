export default [
  {
    "id": "swift-003",
    "language": "swift",
    "topic": "Memory",
    "difficulty": "Medium",
    "format": "concept",
    "question": "What does a weak reference help prevent?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Integer overflow"
      },
      {
        "id": "b",
        "text": "Strong reference cycles"
      },
      {
        "id": "c",
        "text": "Syntax errors"
      },
      {
        "id": "d",
        "text": "All race conditions"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "weak does not keep the referenced object alive, which helps break strong reference cycles under ARC.",
    "tags": [
      "Memory",
      "swift"
    ],
    "hint": "Consider the rules of memory before choosing."
  }
];
