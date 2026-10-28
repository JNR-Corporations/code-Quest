export default [
  {
    "id": "python-001",
    "language": "python",
    "topic": "Collections",
    "difficulty": "Easy",
    "format": "output",
    "question": "What is printed?",
    "code": "a = [1]\nb = a\nb.append(2)\nprint(a)",
    "options": [
      {
        "id": "a",
        "text": "[1]"
      },
      {
        "id": "b",
        "text": "[1, 2]"
      },
      {
        "id": "c",
        "text": "[2]"
      },
      {
        "id": "d",
        "text": "TypeError"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "a and b refer to the same list object. append mutates that shared list.",
    "tags": [
      "Collections",
      "python"
    ],
    "hint": "Consider the rules of collections before choosing."
  },
  {
    "id": "python-foundation-017",
    "language": "python",
    "topic": "Collections",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What is the first numeric element in this collection?",
    "code": "values = [2, 4, 6]",
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
      "python",
      "Collections",
      "beginner"
    ],
    "hint": "Read each part of the example in order."
  },
  {
    "id": "python-foundation-018",
    "language": "python",
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
      "python",
      "Collections",
      "beginner"
    ],
    "hint": "Read each part of the example in order."
  }
];
