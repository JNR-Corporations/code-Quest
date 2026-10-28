export default [
  {
    "id": "javascript-012",
    "language": "javascript",
    "topic": "Coercion",
    "difficulty": "Easy",
    "format": "output",
    "question": "What is printed?",
    "code": "console.log(1 + \"1\");",
    "options": [
      {
        "id": "a",
        "text": "11"
      },
      {
        "id": "b",
        "text": "2"
      },
      {
        "id": "c",
        "text": "NaN"
      },
      {
        "id": "d",
        "text": "TypeError"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "With a string operand, + performs concatenation after primitive conversion. 1 becomes \"1\".",
    "tags": [
      "Coercion",
      "javascript"
    ],
    "hint": "Consider the rules of coercion before choosing."
  }
];
