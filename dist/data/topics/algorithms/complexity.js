export default [
  {
    "id": "algorithms-005",
    "language": "algorithms",
    "topic": "Complexity",
    "difficulty": "Medium",
    "format": "output",
    "question": "What is the time complexity?",
    "code": "for (let i = 0; i < n; i++) {\n  for (let j = 0; j < n; j++) {\n    visit(i, j);\n  }\n}",
    "options": [
      {
        "id": "a",
        "text": "O(n)"
      },
      {
        "id": "b",
        "text": "O(log n)"
      },
      {
        "id": "c",
        "text": "O(n²)"
      },
      {
        "id": "d",
        "text": "O(1)"
      }
    ],
    "answers": [
      "c"
    ],
    "explanation": "The inner body executes n times for each of n outer iterations, for n² total executions.",
    "tags": [
      "Complexity",
      "algorithms"
    ],
    "hint": "Consider the rules of complexity before choosing."
  }
];
