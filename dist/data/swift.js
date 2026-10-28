export default [
  {
    "id": "swift-001",
    "language": "swift",
    "topic": "Optionals",
    "difficulty": "Easy",
    "format": "syntax",
    "question": "Which safely unwraps an optional?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "if let value = optional { print(value) }"
      },
      {
        "id": "b",
        "text": "print(optional!) always"
      },
      {
        "id": "c",
        "text": "optional as Int"
      },
      {
        "id": "d",
        "text": "delete optional"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "Optional binding executes the block only when there is a wrapped value. Forced unwrap can trap.",
    "tags": [
      "Optionals",
      "swift"
    ],
    "hint": "Consider the rules of optionals before choosing."
  },
  {
    "id": "swift-002",
    "language": "swift",
    "topic": "Value types",
    "difficulty": "Easy",
    "format": "boolean",
    "question": "Swift structs have value semantics.",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "True"
      },
      {
        "id": "b",
        "text": "False"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "Assigning or passing a struct gives value semantics. Contained reference-type properties can still share referenced objects.",
    "tags": [
      "Value types",
      "swift"
    ],
    "hint": "Consider the rules of value types before choosing."
  },
  {
    "id": "swift-003",
    "language": "swift",
    "topic": "Memory",
    "difficulty": "Medium",
    "format": "concept",
    "question": "What does a weak reference help prevent?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Integer overflow"
      },
      {
        "id": "b",
        "text": "Strong reference cycles"
      },
      {
        "id": "c",
        "text": "Syntax errors"
      },
      {
        "id": "d",
        "text": "All race conditions"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "weak does not keep the referenced object alive, which helps break strong reference cycles under ARC.",
    "tags": [
      "Memory",
      "swift"
    ],
    "hint": "Consider the rules of memory before choosing."
  },
  {
    "id": "swift-004",
    "language": "swift",
    "topic": "Collections",
    "difficulty": "Easy",
    "format": "output",
    "question": "What is printed?",
    "code": "var values = [1, 2]\nvalues.append(3)\nprint(values.count)",
    "options": [
      {
        "id": "a",
        "text": "1"
      },
      {
        "id": "b",
        "text": "2"
      },
      {
        "id": "c",
        "text": "3"
      },
      {
        "id": "d",
        "text": "nil"
      }
    ],
    "answers": [
      "c"
    ],
    "explanation": "append adds one element, so the array count becomes three.",
    "tags": [
      "Collections",
      "swift"
    ],
    "hint": "Consider the rules of collections before choosing."
  }
];
