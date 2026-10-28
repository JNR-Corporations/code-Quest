export default [
  {
    "id": "cpp-002",
    "language": "cpp",
    "topic": "RAII",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What is the core idea of RAII?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Acquire resources only globally"
      },
      {
        "id": "b",
        "text": "Tie resource lifetime to object lifetime"
      },
      {
        "id": "c",
        "text": "Avoid all constructors"
      },
      {
        "id": "d",
        "text": "Use manual cleanup everywhere"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "RAII acquires resources during initialization and releases them in destructors, enabling cleanup during normal and exceptional exits.",
    "tags": [
      "RAII",
      "cpp"
    ],
    "hint": "Consider the rules of raii before choosing."
  }
];
