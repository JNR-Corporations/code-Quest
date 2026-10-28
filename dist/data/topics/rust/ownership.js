export default [
  {
    "id": "rust-001",
    "language": "rust",
    "topic": "Ownership",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What happens when a non-Copy String is assigned to another variable?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Deep copy always"
      },
      {
        "id": "b",
        "text": "Ownership moves"
      },
      {
        "id": "c",
        "text": "Both become null"
      },
      {
        "id": "d",
        "text": "The program leaks"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "The binding receives ownership; the original cannot be used afterward unless ownership is returned. clone explicitly duplicates the string.",
    "tags": [
      "Ownership",
      "rust"
    ],
    "hint": "Consider the rules of ownership before choosing."
  }
];
