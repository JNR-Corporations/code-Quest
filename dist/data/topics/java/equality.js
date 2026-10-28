export default [
  {
    "id": "java-001",
    "language": "java",
    "topic": "Equality",
    "difficulty": "Easy",
    "format": "concept",
    "question": "Which checks String content equality?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "a == b"
      },
      {
        "id": "b",
        "text": "a.equals(b)"
      },
      {
        "id": "c",
        "text": "a = b"
      },
      {
        "id": "d",
        "text": "a === b"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "String.equals compares character content. == compares reference identity; call equals only on a non-null receiver.",
    "tags": [
      "Equality",
      "java"
    ],
    "hint": "Consider the rules of equality before choosing."
  }
];
