export default [
  {
    "id": "android-001",
    "language": "android",
    "topic": "Architecture",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What is a ViewModel mainly responsible for?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Drawing individual pixels"
      },
      {
        "id": "b",
        "text": "Holding and preparing UI state"
      },
      {
        "id": "c",
        "text": "Replacing every database"
      },
      {
        "id": "d",
        "text": "Requesting every permission"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "A ViewModel exposes screen state and related logic while surviving supported configuration changes. It should avoid retaining an Activity.",
    "tags": [
      "Architecture",
      "android"
    ],
    "hint": "Consider the rules of architecture before choosing."
  }
];
