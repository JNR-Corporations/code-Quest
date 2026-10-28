export default [
  {
    "id": "c-003",
    "language": "c",
    "topic": "Arrays",
    "difficulty": "Easy",
    "format": "bug",
    "question": "What is wrong with this access?",
    "code": "int a[3] = {1, 2, 3};\nprintf(\"%d\", a[3]);",
    "options": [
      {
        "id": "a",
        "text": "Arrays start at one"
      },
      {
        "id": "b",
        "text": "Index 3 is out of bounds"
      },
      {
        "id": "c",
        "text": "a must be a pointer"
      },
      {
        "id": "d",
        "text": "Nothing"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "A three-element array has valid indices 0, 1, and 2. Reading a[3] is undefined behavior.",
    "tags": [
      "Arrays",
      "c"
    ],
    "hint": "Consider the rules of arrays before choosing."
  }
];
