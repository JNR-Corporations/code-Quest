export default [
  {
    "id": "kotlin-001",
    "language": "kotlin",
    "topic": "Null safety",
    "difficulty": "Easy",
    "format": "output",
    "question": "What is printed?",
    "code": "val name: String? = null\nprintln(name?.length ?: 0)",
    "options": [
      {
        "id": "a",
        "text": "NullPointerException"
      },
      {
        "id": "b",
        "text": "0"
      },
      {
        "id": "c",
        "text": "null"
      },
      {
        "id": "d",
        "text": "4"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "The safe call returns null, then the Elvis operator supplies 0.",
    "tags": [
      "Null safety",
      "kotlin"
    ],
    "hint": "Consider the rules of null safety before choosing."
  },
  {
    "id": "kotlin-002",
    "language": "kotlin",
    "topic": "Coroutines",
    "difficulty": "Medium",
    "format": "concept",
    "question": "What does suspend mean?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Always runs on a background thread"
      },
      {
        "id": "b",
        "text": "May suspend without blocking its thread"
      },
      {
        "id": "c",
        "text": "Creates a new thread"
      },
      {
        "id": "d",
        "text": "Cannot return a value"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "A suspending function may pause and resume through coroutine machinery. suspend alone does not choose a dispatcher.",
    "tags": [
      "Coroutines",
      "kotlin"
    ],
    "hint": "Consider the rules of coroutines before choosing."
  },
  {
    "id": "kotlin-003",
    "language": "kotlin",
    "topic": "Immutability",
    "difficulty": "Easy",
    "format": "boolean",
    "question": "A val reference guarantees its object is deeply immutable.",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "True"
      },
      {
        "id": "b",
        "text": "False"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "val prevents reassignment of the reference. The referenced object may still expose mutable state.",
    "tags": [
      "Immutability",
      "kotlin"
    ],
    "hint": "Consider the rules of immutability before choosing."
  },
  {
    "id": "kotlin-004",
    "language": "kotlin",
    "topic": "Syntax",
    "difficulty": "Easy",
    "format": "syntax",
    "question": "Which declares a data class?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "data class Point(val x: Int)"
      },
      {
        "id": "b",
        "text": "class data Point(x: Int)"
      },
      {
        "id": "c",
        "text": "struct Point { x: Int }"
      },
      {
        "id": "d",
        "text": "data Point = Int"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "A data class declares primary constructor properties and receives generated functions such as equals and copy.",
    "tags": [
      "Syntax",
      "kotlin"
    ],
    "hint": "Consider the rules of syntax before choosing."
  }
];
