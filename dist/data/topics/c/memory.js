export default [
  {
    "id": "c-002",
    "language": "c",
    "topic": "Memory",
    "difficulty": "Easy",
    "format": "concept",
    "question": "Which function releases memory allocated by malloc?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "delete"
      },
      {
        "id": "b",
        "text": "free"
      },
      {
        "id": "c",
        "text": "release"
      },
      {
        "id": "d",
        "text": "dispose"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "free releases a compatible dynamically allocated block. Passing an invalid or already freed pointer is undefined behavior.",
    "tags": [
      "Memory",
      "c"
    ],
    "hint": "Consider the rules of memory before choosing."
  }
];
