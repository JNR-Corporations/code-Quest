export default [
  {
    "id": "sql-006",
    "language": "sql",
    "topic": "Indexes",
    "difficulty": "Medium",
    "format": "concept",
    "question": "Why can an index speed up a selective lookup?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "It removes all writes"
      },
      {
        "id": "b",
        "text": "It avoids scanning every row"
      },
      {
        "id": "c",
        "text": "It sorts every query result automatically"
      },
      {
        "id": "d",
        "text": "It guarantees no locking"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "An appropriate index can locate a small matching subset efficiently, at the cost of space and write maintenance.",
    "tags": [
      "Indexes",
      "sql"
    ],
    "hint": "Consider the rules of indexes before choosing."
  }
];
