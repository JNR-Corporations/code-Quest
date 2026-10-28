export default [
  {
    "id": "php-003",
    "language": "php",
    "topic": "Security",
    "difficulty": "Medium",
    "format": "concept",
    "question": "Which approach helps prevent SQL injection?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "String concatenation"
      },
      {
        "id": "b",
        "text": "Prepared statements with bound values"
      },
      {
        "id": "c",
        "text": "Removing spaces"
      },
      {
        "id": "d",
        "text": "Base64 encoding"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Prepared statements separate SQL structure from bound data. Dynamic identifiers still need appropriate allowlisting.",
    "tags": [
      "Security",
      "php"
    ],
    "hint": "Consider the rules of security before choosing."
  }
];
