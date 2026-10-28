export default [
  {
    "id": "sql-001",
    "language": "sql",
    "topic": "Filtering",
    "difficulty": "Easy",
    "format": "concept",
    "question": "Which clause filters grouped aggregate results?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "WHERE"
      },
      {
        "id": "b",
        "text": "HAVING"
      },
      {
        "id": "c",
        "text": "ORDER BY"
      },
      {
        "id": "d",
        "text": "LIMIT"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "HAVING filters groups after grouping. WHERE filters rows before aggregation.",
    "tags": [
      "Filtering",
      "sql"
    ],
    "hint": "Consider the rules of filtering before choosing."
  }
];
