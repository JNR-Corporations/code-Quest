export default [
  {
    "id": "swift-001",
    "language": "swift",
    "topic": "Optionals",
    "difficulty": "Easy",
    "format": "syntax",
    "question": "Which safely unwraps an optional?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "if let value = optional { print(value) }"
      },
      {
        "id": "b",
        "text": "print(optional!) always"
      },
      {
        "id": "c",
        "text": "optional as Int"
      },
      {
        "id": "d",
        "text": "delete optional"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "Optional binding executes the block only when there is a wrapped value. Forced unwrap can trap.",
    "tags": [
      "Optionals",
      "swift"
    ],
    "hint": "Consider the rules of optionals before choosing."
  }
];
