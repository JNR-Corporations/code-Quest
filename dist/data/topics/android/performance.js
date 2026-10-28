export default [
  {
    "id": "android-009",
    "language": "android",
    "topic": "Performance",
    "difficulty": "Easy",
    "format": "debug",
    "question": "A screen freezes during a large file read. What should change?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Move blocking work off the main thread"
      },
      {
        "id": "b",
        "text": "Add more main-thread loops"
      },
      {
        "id": "c",
        "text": "Hide the progress indicator"
      },
      {
        "id": "d",
        "text": "Raise font size"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "Blocking work on the main thread prevents input and drawing. Use an appropriate background execution mechanism.",
    "tags": [
      "Performance",
      "android"
    ],
    "hint": "Consider the rules of performance before choosing."
  }
];
