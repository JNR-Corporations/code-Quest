export default [
  {
    "id": "cpp-001",
    "language": "cpp",
    "topic": "Ownership",
    "difficulty": "Medium",
    "format": "concept",
    "question": "Which type represents exclusive ownership?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "std::shared_ptr"
      },
      {
        "id": "b",
        "text": "std::unique_ptr"
      },
      {
        "id": "c",
        "text": "A raw pointer always"
      },
      {
        "id": "d",
        "text": "std::weak_ptr"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "unique_ptr owns its managed object exclusively and destroys it on scope exit. Ownership can be moved.",
    "tags": [
      "Ownership",
      "cpp"
    ],
    "hint": "Consider the rules of ownership before choosing."
  }
];
