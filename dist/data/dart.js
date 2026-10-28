export default [
  {
    "id": "dart-001",
    "language": "dart",
    "topic": "Null safety",
    "difficulty": "Easy",
    "format": "concept",
    "question": "Which type permits null?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "String"
      },
      {
        "id": "b",
        "text": "String?"
      },
      {
        "id": "c",
        "text": "final String"
      },
      {
        "id": "d",
        "text": "const String"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "A question mark marks a nullable type under sound null safety.",
    "tags": [
      "Null safety",
      "dart"
    ],
    "hint": "Consider the rules of null safety before choosing."
  },
  {
    "id": "dart-002",
    "language": "dart",
    "topic": "Async",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What does an async function typically return?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Future"
      },
      {
        "id": "b",
        "text": "Thread"
      },
      {
        "id": "c",
        "text": "Stream only"
      },
      {
        "id": "d",
        "text": "void only"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "An async function returns a Future that completes with its result or error.",
    "tags": [
      "Async",
      "dart"
    ],
    "hint": "Consider the rules of async before choosing."
  },
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
    "id": "dart-004",
    "language": "dart",
    "topic": "Collections",
    "difficulty": "Easy",
    "format": "output",
    "question": "What is printed?",
    "code": "final values = [1, 2];\nvalues.add(3);\nprint(values.length);",
    "options": [
      {
        "id": "a",
        "text": "2"
      },
      {
        "id": "b",
        "text": "3"
      },
      {
        "id": "c",
        "text": "4"
      },
      {
        "id": "d",
        "text": "null"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "The list contains three items after add.",
    "tags": [
      "Collections",
      "dart"
    ],
    "hint": "Consider the rules of collections before choosing."
  }
];
