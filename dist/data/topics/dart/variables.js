export default [
  {
    "id": "dart-003",
    "language": "dart",
    "topic": "Variables",
    "difficulty": "Easy",
    "format": "syntax",
    "question": "Which declaration is a compile-time constant?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "var x = 2;"
      },
      {
        "id": "b",
        "text": "final x = DateTime.now();"
      },
      {
        "id": "c",
        "text": "const x = 2;"
      },
      {
        "id": "d",
        "text": "late int x;"
      }
    ],
    "answers": [
      "c"
    ],
    "explanation": "const requires a compile-time constant value. final prevents reassignment but can hold runtime values.",
    "tags": [
      "Variables",
      "dart"
    ],
    "hint": "Consider the rules of variables before choosing."
  },
  {
    "id": "dart-foundation-005",
    "language": "dart",
    "topic": "Variables",
    "difficulty": "Easy",
    "format": "output",
    "question": "Which value is produced after reassignment?",
    "code": "var n = 4;\nn = 9;\nprint(n);",
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
      "dart",
      "Variables",
      "beginner"
    ],
    "hint": "Track the value after each assignment."
  },
  {
    "id": "dart-foundation-006",
    "language": "dart",
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
      "dart",
      "Variables",
      "beginner"
    ],
    "hint": "Track the value after each assignment."
  }
];
