export default [
  {
    "id": "javascript-007",
    "language": "javascript",
    "topic": "Objects",
    "difficulty": "Easy",
    "format": "complete",
    "question": "Complete the code to copy an object’s own enumerable properties.",
    "code": "const copy = { /* ? */ };",
    "options": [
      {
        "id": "a",
        "text": "...user"
      },
      {
        "id": "b",
        "text": "*user"
      },
      {
        "id": "c",
        "text": "&user"
      },
      {
        "id": "d",
        "text": "user..."
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "Object spread copies own enumerable properties into a new object. This is a shallow copy.",
    "tags": [
      "Objects",
      "javascript"
    ],
    "hint": "Consider the rules of objects before choosing."
  }
];
