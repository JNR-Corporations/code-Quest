export default [
  {
    "id": "ruby-001",
    "language": "ruby",
    "topic": "Blocks",
    "difficulty": "Easy",
    "format": "output",
    "question": "What is returned?",
    "code": "[1, 2, 3].map { |n| n * 2 }",
    "options": [
      {
        "id": "a",
        "text": "[1, 2, 3]"
      },
      {
        "id": "b",
        "text": "[2, 4, 6]"
      },
      {
        "id": "c",
        "text": "6"
      },
      {
        "id": "d",
        "text": "nil"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "map returns an array containing each block result.",
    "tags": [
      "Blocks",
      "ruby"
    ],
    "hint": "Consider the rules of blocks before choosing."
  }
];
