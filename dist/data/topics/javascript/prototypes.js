export default [
  {
    "id": "javascript-011",
    "language": "javascript",
    "topic": "Prototypes",
    "difficulty": "Medium",
    "format": "interview",
    "question": "What does Object.create(null) produce?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "An array"
      },
      {
        "id": "b",
        "text": "An object with no prototype"
      },
      {
        "id": "c",
        "text": "A frozen object"
      },
      {
        "id": "d",
        "text": "null"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Object.create(null) creates an object whose [[Prototype]] is null. It does not inherit Object.prototype properties.",
    "tags": [
      "Prototypes",
      "javascript"
    ],
    "hint": "Consider the rules of prototypes before choosing."
  }
];
