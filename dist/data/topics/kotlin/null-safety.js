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
  }
];
