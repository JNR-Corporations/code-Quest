export default [
  {
    "id": "typescript-001",
    "language": "typescript",
    "topic": "Types",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What does the ? mean here?",
    "code": "type User = { name?: string };",
    "options": [
      {
        "id": "a",
        "text": "name is readonly"
      },
      {
        "id": "b",
        "text": "name is optional"
      },
      {
        "id": "c",
        "text": "name is never"
      },
      {
        "id": "d",
        "text": "name is private"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "An optional property can be absent. With strict null checks, reading it may produce undefined.",
    "tags": [
      "Types",
      "typescript"
    ],
    "hint": "Consider the rules of types before choosing."
  }
];
