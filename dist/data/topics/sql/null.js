export default [
  {
    "id": "sql-002",
    "language": "sql",
    "topic": "NULL",
    "difficulty": "Easy",
    "format": "syntax",
    "question": "How do you test for a missing value?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "value = NULL"
      },
      {
        "id": "b",
        "text": "value IS NULL"
      },
      {
        "id": "c",
        "text": "value == null"
      },
      {
        "id": "d",
        "text": "value != NULL"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "IS NULL tests nullness. Comparisons using = with NULL evaluate to unknown.",
    "tags": [
      "NULL",
      "sql"
    ],
    "hint": "Consider the rules of null before choosing."
  }
];
