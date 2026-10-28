export default [
  {
    "id": "csharp-foundation-009",
    "language": "csharp",
    "topic": "Operators",
    "difficulty": "Easy",
    "format": "output",
    "question": "What numeric value is produced?",
    "code": "Console.WriteLine(2 + 3 * 4);",
    "options": [
      {
        "id": "a",
        "text": "20"
      },
      {
        "id": "b",
        "text": "14"
      },
      {
        "id": "c",
        "text": "24"
      },
      {
        "id": "d",
        "text": "9"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Multiplication has higher precedence than addition: 3 \u00d7 4 = 12, then 2 + 12 = 14.",
    "tags": [
      "csharp",
      "Operators",
      "beginner"
    ],
    "hint": "Apply multiplication before addition."
  },
  {
    "id": "csharp-foundation-010",
    "language": "csharp",
    "topic": "Operators",
    "difficulty": "Easy",
    "format": "concept",
    "question": "Why add parentheses to an arithmetic expression?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "To explicitly group operations"
      },
      {
        "id": "b",
        "text": "To declare a collection"
      },
      {
        "id": "c",
        "text": "To make all operations run in parallel"
      },
      {
        "id": "d",
        "text": "To disable type checking"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "Parentheses group subexpressions. They can change evaluation grouping and make the intended order easier to read.",
    "tags": [
      "csharp",
      "Operators",
      "beginner"
    ],
    "hint": "Apply multiplication before addition."
  }
];
