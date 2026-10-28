export default [
  {
    "id": "javascript-001",
    "language": "javascript",
    "topic": "Scope",
    "difficulty": "Medium",
    "format": "output",
    "question": "What does this code print?",
    "code": "console.log(value);\nlet value = 7;",
    "options": [
      {
        "id": "a",
        "text": "undefined"
      },
      {
        "id": "b",
        "text": "ReferenceError"
      },
      {
        "id": "c",
        "text": "7"
      },
      {
        "id": "d",
        "text": "null"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "A let binding exists in the temporal dead zone until its declaration is evaluated. Reading it earlier throws a ReferenceError.",
    "tags": [
      "Scope",
      "javascript"
    ],
    "hint": "Consider the rules of scope before choosing.",
    "explanationCode": "let value = 7;\nconsole.log(value); // 7: initialized before use"
  }
];
