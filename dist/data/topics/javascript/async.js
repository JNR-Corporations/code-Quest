export default [
  {
    "id": "javascript-003",
    "language": "javascript",
    "topic": "Async",
    "difficulty": "Medium",
    "format": "output",
    "question": "In what order are the values logged?",
    "code": "console.log(\"A\");\nPromise.resolve().then(() => console.log(\"B\"));\nconsole.log(\"C\");",
    "options": [
      {
        "id": "a",
        "text": "A, B, C"
      },
      {
        "id": "b",
        "text": "B, A, C"
      },
      {
        "id": "c",
        "text": "A, C, B"
      },
      {
        "id": "d",
        "text": "C, A, B"
      }
    ],
    "answers": [
      "c"
    ],
    "explanation": "Synchronous statements run first. The promise callback is a microtask and runs after the current stack finishes.",
    "tags": [
      "Async",
      "javascript"
    ],
    "hint": "Consider the rules of async before choosing."
  },
  {
    "id": "javascript-009",
    "language": "javascript",
    "topic": "Async",
    "difficulty": "Hard",
    "format": "comparison",
    "question": "Which snippet waits for each task sequentially?",
    "code": "// Snippet A\nitems.forEach(async item => await save(item));\n\n// Snippet B\nfor (const item of items) {\n  await save(item);\n}",
    "options": [
      {
        "id": "a",
        "text": "Snippet A"
      },
      {
        "id": "b",
        "text": "Snippet B"
      },
      {
        "id": "c",
        "text": "Both"
      },
      {
        "id": "d",
        "text": "Neither"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "forEach does not await async callbacks. A for...of loop with await waits before starting its next iteration.",
    "tags": [
      "Async",
      "javascript"
    ],
    "hint": "Consider the rules of async before choosing."
  }
];
