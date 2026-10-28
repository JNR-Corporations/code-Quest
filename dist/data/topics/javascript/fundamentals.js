export default [
  {
    "id": "javascript-013",
    "language": "javascript",
    "topic": "Fundamentals",
    "difficulty": "Easy",
    "format": "mcq",
    "question": "Which declaration creates a block-scoped variable that can be reassigned?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "let score = 0;"
      },
      {
        "id": "b",
        "text": "const score = 0;"
      },
      {
        "id": "c",
        "text": "var score = 0;"
      },
      {
        "id": "d",
        "text": "static score = 0;"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "let is block-scoped and allows reassignment. const is also block-scoped but does not permit reassignment of its binding. var is function-scoped.",
    "tags": [
      "Fundamentals",
      "javascript"
    ],
    "hint": "Consider the rules of fundamentals before choosing."
  }
];
