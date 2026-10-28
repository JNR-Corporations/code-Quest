export default [
  {
    "id": "javascript-006",
    "language": "javascript",
    "topic": "Debugging",
    "difficulty": "Medium",
    "format": "bug",
    "question": "Why does every callback print 3?",
    "code": "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}",
    "options": [
      {
        "id": "a",
        "text": "Timers run immediately"
      },
      {
        "id": "b",
        "text": "var shares one function-scoped binding"
      },
      {
        "id": "c",
        "text": "console.log caches values"
      },
      {
        "id": "d",
        "text": "The loop never executes"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "var creates one shared i binding. By the time timers run, the loop has finished and i is 3. Use let for a fresh binding per iteration.",
    "tags": [
      "Debugging",
      "javascript"
    ],
    "hint": "Consider the rules of debugging before choosing."
  }
];
