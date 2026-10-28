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
  },
  {
    "id": "ruby-002",
    "language": "ruby",
    "topic": "Truthiness",
    "difficulty": "Easy",
    "format": "concept",
    "question": "Which values are falsy in Ruby?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Only false and nil"
      },
      {
        "id": "b",
        "text": "0 and empty string"
      },
      {
        "id": "c",
        "text": "Every empty collection"
      },
      {
        "id": "d",
        "text": "Only false"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "Only false and nil are falsy. Zero and empty strings are truthy.",
    "tags": [
      "Truthiness",
      "ruby"
    ],
    "hint": "Consider the rules of truthiness before choosing."
  },
  {
    "id": "ruby-003",
    "language": "ruby",
    "topic": "Symbols",
    "difficulty": "Easy",
    "format": "syntax",
    "question": "Which literal is a symbol?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "\"name\""
      },
      {
        "id": "b",
        "text": ":name"
      },
      {
        "id": "c",
        "text": "@name"
      },
      {
        "id": "d",
        "text": "$name"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": ":name is a symbol literal, often used as a key or identifier.",
    "tags": [
      "Symbols",
      "ruby"
    ],
    "hint": "Consider the rules of symbols before choosing."
  },
  {
    "id": "ruby-004",
    "language": "ruby",
    "topic": "OOP",
    "difficulty": "Easy",
    "format": "boolean",
    "question": "Modules can supply methods through mixins.",
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
    "explanation": "Including a module mixes its instance methods into a class’s method lookup chain.",
    "tags": [
      "OOP",
      "ruby"
    ],
    "hint": "Consider the rules of oop before choosing."
  }
];
