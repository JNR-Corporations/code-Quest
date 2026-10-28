export default [
  {
    "id": "c-foundation-031",
    "language": "c",
    "topic": "Memory allocation",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What should be checked after malloc?",
    "code": "int *p = malloc(10 * sizeof *p);",
    "options": [
      {
        "id": "a",
        "text": "Whether the result is NULL"
      },
      {
        "id": "b",
        "text": "Whether it always equals 1"
      },
      {
        "id": "c",
        "text": "Whether it is a string"
      },
      {
        "id": "d",
        "text": "Whether printf was called"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "Allocation can fail and return NULL. Do not dereference the result before checking it.",
    "tags": [
      "c",
      "Memory allocation",
      "beginner"
    ],
    "hint": "Read each part of the example in order."
  }
];
