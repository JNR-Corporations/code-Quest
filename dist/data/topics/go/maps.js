export default [
  {
    "id": "go-004",
    "language": "go",
    "topic": "Maps",
    "difficulty": "Medium",
    "format": "boolean",
    "question": "A regular Go map supports unsynchronized concurrent writes safely.",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "True"
      },
      {
        "id": "b",
        "text": "False"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Ordinary maps require synchronization for concurrent access involving writes. Use a mutex or suitable concurrent design.",
    "tags": [
      "Maps",
      "go"
    ],
    "hint": "Consider the rules of maps before choosing."
  }
];
