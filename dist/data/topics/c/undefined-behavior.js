export default [
  {
    "id": "c-004",
    "language": "c",
    "topic": "Undefined behavior",
    "difficulty": "Expert",
    "format": "concept",
    "question": "What can be concluded about this expression?",
    "code": "int i = 1;\nint n = i++ + ++i;",
    "options": [
      {
        "id": "a",
        "text": "Always 2"
      },
      {
        "id": "b",
        "text": "Always 3"
      },
      {
        "id": "c",
        "text": "It has undefined behavior"
      },
      {
        "id": "d",
        "text": "It is a syntax error"
      }
    ],
    "answers": [
      "c"
    ],
    "explanation": "The modifications of i are unsequenced relative to each other in C. There is no portable numeric result.",
    "tags": [
      "Undefined behavior",
      "c"
    ],
    "hint": "Consider the rules of undefined behavior before choosing."
  }
];
