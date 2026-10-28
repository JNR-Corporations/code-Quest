export default [
  {
    "id": "csharp-003",
    "language": "csharp",
    "topic": "Null safety",
    "difficulty": "Easy",
    "format": "output",
    "question": "What is printed?",
    "code": "string? name = null;\nConsole.WriteLine(name?.Length ?? 0);",
    "options": [
      {
        "id": "a",
        "text": "null"
      },
      {
        "id": "b",
        "text": "0"
      },
      {
        "id": "c",
        "text": "Exception"
      },
      {
        "id": "d",
        "text": "1"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "The null-conditional access produces null and ?? supplies the fallback.",
    "tags": [
      "Null safety",
      "csharp"
    ],
    "hint": "Consider the rules of null safety before choosing."
  }
];
