export default [
  {
    "id": "cs-004",
    "language": "cs",
    "topic": "Memory management",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What is a dangling pointer?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "A pointer to freed or otherwise ended storage"
      },
      {
        "id": "b",
        "text": "A null pointer always"
      },
      {
        "id": "c",
        "text": "A pointer to an array"
      },
      {
        "id": "d",
        "text": "A function pointer"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "A dangling pointer no longer refers to a live object. Dereferencing it can lead to undefined behavior.",
    "tags": [
      "Memory management",
      "cs"
    ],
    "hint": "Consider the rules of memory management before choosing."
  }
];
