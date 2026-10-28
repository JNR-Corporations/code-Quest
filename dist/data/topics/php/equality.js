export default [
  {
    "id": "php-001",
    "language": "php",
    "topic": "Equality",
    "difficulty": "Easy",
    "format": "output",
    "question": "What is printed?",
    "code": "var_export(5 === \"5\");",
    "options": [
      {
        "id": "a",
        "text": "true"
      },
      {
        "id": "b",
        "text": "false"
      },
      {
        "id": "c",
        "text": "null"
      },
      {
        "id": "d",
        "text": "Error"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Strict equality checks both value and type. The integer and string differ in type.",
    "tags": [
      "Equality",
      "php"
    ],
    "hint": "Consider the rules of equality before choosing."
  }
];
