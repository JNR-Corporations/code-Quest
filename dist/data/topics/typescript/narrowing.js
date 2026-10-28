export default [
  {
    "id": "typescript-002",
    "language": "typescript",
    "topic": "Narrowing",
    "difficulty": "Medium",
    "format": "concept",
    "question": "Which safely narrows a string | number to string?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "value as string"
      },
      {
        "id": "b",
        "text": "typeof value === \"string\""
      },
      {
        "id": "c",
        "text": "value == String"
      },
      {
        "id": "d",
        "text": "value!"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "A typeof guard narrows the union inside the matching branch. A type assertion does not check at runtime.",
    "tags": [
      "Narrowing",
      "typescript"
    ],
    "hint": "Consider the rules of narrowing before choosing."
  }
];
