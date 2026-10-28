export default [
  {
    "id": "go-001",
    "language": "go",
    "topic": "Errors",
    "difficulty": "Easy",
    "format": "concept",
    "question": "How are ordinary errors conventionally returned?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Only by throwing"
      },
      {
        "id": "b",
        "text": "As an error return value"
      },
      {
        "id": "c",
        "text": "As global strings only"
      },
      {
        "id": "d",
        "text": "By stopping the runtime"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Go commonly returns a value and an error, with nil error indicating success.",
    "tags": [
      "Errors",
      "go"
    ],
    "hint": "Consider the rules of errors before choosing."
  }
];
