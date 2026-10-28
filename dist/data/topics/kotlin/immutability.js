export default [
  {
    "id": "kotlin-003",
    "language": "kotlin",
    "topic": "Immutability",
    "difficulty": "Easy",
    "format": "boolean",
    "question": "A val reference guarantees its object is deeply immutable.",
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
      "b"
    ],
    "explanation": "val prevents reassignment of the reference. The referenced object may still expose mutable state.",
    "tags": [
      "Immutability",
      "kotlin"
    ],
    "hint": "Consider the rules of immutability before choosing."
  }
];
