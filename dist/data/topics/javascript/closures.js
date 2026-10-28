export default [
  {
    "id": "javascript-002",
    "language": "javascript",
    "topic": "Closures",
    "difficulty": "Medium",
    "format": "output",
    "question": "What does the second call return?",
    "code": "function counter() {\n  let n = 0;\n  return () => ++n;\n}\nconst next = counter();\nnext();\nnext();",
    "options": [
      {
        "id": "a",
        "text": "1"
      },
      {
        "id": "b",
        "text": "2"
      },
      {
        "id": "c",
        "text": "0"
      },
      {
        "id": "d",
        "text": "undefined"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Both calls share the same captured n binding. The first increments it to 1; the second increments it to 2.",
    "tags": [
      "Closures",
      "javascript"
    ],
    "hint": "Consider the rules of closures before choosing."
  }
];
