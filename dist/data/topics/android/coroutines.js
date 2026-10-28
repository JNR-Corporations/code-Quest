export default [
  {
    "id": "android-004",
    "language": "android",
    "topic": "Coroutines",
    "difficulty": "Medium",
    "format": "concept",
    "question": "Which dispatcher is intended for blocking I/O work?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Dispatchers.Main"
      },
      {
        "id": "b",
        "text": "Dispatchers.IO"
      },
      {
        "id": "c",
        "text": "Only Dispatchers.Default"
      },
      {
        "id": "d",
        "text": "No dispatcher can handle I/O"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Dispatchers.IO is designed for blocking I/O tasks. UI mutations belong on the appropriate main context.",
    "tags": [
      "Coroutines",
      "android"
    ],
    "hint": "Consider the rules of coroutines before choosing."
  }
];
