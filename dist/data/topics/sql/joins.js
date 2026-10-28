export default [
  {
    "id": "sql-003",
    "language": "sql",
    "topic": "Joins",
    "difficulty": "Easy",
    "format": "concept",
    "question": "Which join keeps every row of the left table?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "INNER JOIN"
      },
      {
        "id": "b",
        "text": "LEFT JOIN"
      },
      {
        "id": "c",
        "text": "CROSS JOIN only"
      },
      {
        "id": "d",
        "text": "RIGHT JOIN only"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "LEFT JOIN retains left rows and supplies NULLs for right-side columns when no match exists.",
    "tags": [
      "Joins",
      "sql"
    ],
    "hint": "Consider the rules of joins before choosing."
  }
];
