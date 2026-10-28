export default [
  {
    "id": "sql-004",
    "language": "sql",
    "topic": "Aggregates",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What does COUNT(column) exclude?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Duplicate values"
      },
      {
        "id": "b",
        "text": "NULL values"
      },
      {
        "id": "c",
        "text": "Zero values"
      },
      {
        "id": "d",
        "text": "Empty strings always"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "COUNT(column) counts non-NULL expression values. COUNT(*) counts rows.",
    "tags": [
      "Aggregates",
      "sql"
    ],
    "hint": "Consider the rules of aggregates before choosing."
  }
];
