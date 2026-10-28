export default [
  {
    "id": "c-foundation-005",
    "language": "c",
    "topic": "Variables",
    "difficulty": "Easy",
    "format": "output",
    "question": "Which value is produced after reassignment?",
    "code": "int n = 4;\nn = 9;\nprintf(\"%d\", n);",
    "options": [
      {
        "id": "a",
        "text": "4"
      },
      {
        "id": "b",
        "text": "9"
      },
      {
        "id": "c",
        "text": "13"
      },
      {
        "id": "d",
        "text": "The name n"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "The first statement initializes n to 4. Reassignment replaces that value with 9; output reads the current value.",
    "tags": [
      "c",
      "Variables",
      "beginner"
    ],
    "hint": "Track the value after each assignment."
  },
  {
    "id": "c-foundation-006",
    "language": "c",
    "topic": "Variables",
    "difficulty": "Easy",
    "format": "concept",
    "question": "Which best describes a variable?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "A named binding or storage location for a value"
      },
      {
        "id": "b",
        "text": "A screen widget"
      },
      {
        "id": "c",
        "text": "A comment delimiter"
      },
      {
        "id": "d",
        "text": "A file extension"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "Variables let code refer to values by name. Reassignment and mutability rules depend on the declaration and language.",
    "tags": [
      "c",
      "Variables",
      "beginner"
    ],
    "hint": "Track the value after each assignment."
  }
];
