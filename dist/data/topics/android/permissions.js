export default [
  {
    "id": "android-008",
    "language": "android",
    "topic": "Permissions",
    "difficulty": "Easy",
    "format": "concept",
    "question": "When should a runtime permission be requested?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "On every launch regardless of use"
      },
      {
        "id": "b",
        "text": "In context when its protected feature is needed"
      },
      {
        "id": "c",
        "text": "Only after an app crashes"
      },
      {
        "id": "d",
        "text": "Never explain the request"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Request permissions at the point of need, explain the purpose where appropriate, and handle denial gracefully.",
    "tags": [
      "Permissions",
      "android"
    ],
    "hint": "Consider the rules of permissions before choosing."
  }
];
