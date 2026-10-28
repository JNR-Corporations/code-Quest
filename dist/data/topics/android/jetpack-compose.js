export default [
  {
    "id": "android-003",
    "language": "android",
    "topic": "Jetpack Compose",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What triggers recomposition for UI that reads mutable state?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Changing observed state"
      },
      {
        "id": "b",
        "text": "Changing any local variable"
      },
      {
        "id": "c",
        "text": "Only rotating the device"
      },
      {
        "id": "d",
        "text": "Only restarting the app"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "Compose tracks state reads and schedules recomposition when observed state changes.",
    "tags": [
      "Jetpack Compose",
      "android"
    ],
    "hint": "Consider the rules of jetpack compose before choosing."
  }
];
