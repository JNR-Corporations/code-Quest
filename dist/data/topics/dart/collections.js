export default [
  {
    "id": "dart-004",
    "language": "dart",
    "topic": "Collections",
    "difficulty": "Easy",
    "format": "output",
    "question": "What is printed?",
    "code": "final values = [1, 2];\nvalues.add(3);\nprint(values.length);",
    "options": [
      {
        "id": "a",
        "text": "2"
      },
      {
        "id": "b",
        "text": "3"
      },
      {
        "id": "c",
        "text": "4"
      },
      {
        "id": "d",
        "text": "null"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "The list contains three items after add.",
    "tags": [
      "Collections",
      "dart"
    ],
    "hint": "Consider the rules of collections before choosing."
  },
  {
    "id": "dart-foundation-015",
    "language": "dart",
    "topic": "Collections",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What is the first numeric element in this collection?",
    "code": "final values = [2, 4, 6];",
    "options": [
      {
        "id": "a",
        "text": "2"
      },
      {
        "id": "b",
        "text": "4"
      },
      {
        "id": "c",
        "text": "6"
      },
      {
        "id": "d",
        "text": "0"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "The collection contains 2, 4, and 6 in order. For this example, the first element is at index 0.",
    "tags": [
      "dart",
      "Collections",
      "beginner"
    ],
    "hint": "Read each part of the example in order."
  },
  {
    "id": "dart-foundation-016",
    "language": "dart",
    "topic": "Collections",
    "difficulty": "Easy",
    "format": "concept",
    "question": "When is a collection useful?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "When managing multiple related values"
      },
      {
        "id": "b",
        "text": "Only when there are no values"
      },
      {
        "id": "c",
        "text": "To guarantee constant-time work for all operations"
      },
      {
        "id": "d",
        "text": "To remove all control flow"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "Collections group values for storage and processing. The available operations and costs depend on the chosen structure.",
    "tags": [
      "dart",
      "Collections",
      "beginner"
    ],
    "hint": "Read each part of the example in order."
  }
];
