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
  },
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
  },
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
  },
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
  },
  {
    "id": "sql-005",
    "language": "sql",
    "topic": "Transactions",
    "difficulty": "Medium",
    "format": "multiple",
    "question": "Which properties describe ACID?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Atomicity"
      },
      {
        "id": "b",
        "text": "Consistency"
      },
      {
        "id": "c",
        "text": "Isolation"
      },
      {
        "id": "d",
        "text": "Distribution"
      }
    ],
    "answers": [
      "a",
      "b",
      "c"
    ],
    "explanation": "ACID means atomicity, consistency, isolation and durability. Distribution is not one of the four properties.",
    "tags": [
      "Transactions",
      "sql"
    ],
    "hint": "Consider the rules of transactions before choosing."
  },
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
