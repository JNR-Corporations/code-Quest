export default [
  {
    "id": "java-001",
    "language": "java",
    "topic": "Equality",
    "difficulty": "Easy",
    "format": "concept",
    "question": "Which checks String content equality?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "a == b"
      },
      {
        "id": "b",
        "text": "a.equals(b)"
      },
      {
        "id": "c",
        "text": "a = b"
      },
      {
        "id": "d",
        "text": "a === b"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "String.equals compares character content. == compares reference identity; call equals only on a non-null receiver.",
    "tags": [
      "Equality",
      "java"
    ],
    "hint": "Consider the rules of equality before choosing."
  },
  {
    "id": "java-002",
    "language": "java",
    "topic": "Collections",
    "difficulty": "Easy",
    "format": "concept",
    "question": "Which collection prevents duplicate elements?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "List"
      },
      {
        "id": "b",
        "text": "Set"
      },
      {
        "id": "c",
        "text": "Queue"
      },
      {
        "id": "d",
        "text": "ArrayList"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Set models a collection of unique elements, using its implementation’s equality or ordering rules.",
    "tags": [
      "Collections",
      "java"
    ],
    "hint": "Consider the rules of collections before choosing."
  },
  {
    "id": "java-003",
    "language": "java",
    "topic": "OOP",
    "difficulty": "Medium",
    "format": "concept",
    "question": "What allows a subclass implementation to run through a superclass reference?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Overloading only"
      },
      {
        "id": "b",
        "text": "Dynamic method dispatch"
      },
      {
        "id": "c",
        "text": "Static import"
      },
      {
        "id": "d",
        "text": "Type erasure"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Overridden instance methods are selected dynamically according to the runtime object type.",
    "tags": [
      "OOP",
      "java"
    ],
    "hint": "Consider the rules of oop before choosing."
  },
  {
    "id": "java-004",
    "language": "java",
    "topic": "Exceptions",
    "difficulty": "Easy",
    "format": "boolean",
    "question": "Checked exceptions generally must be caught or declared.",
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
    "explanation": "Checked exceptions are subject to compile-time handling requirements, unlike RuntimeException and Error subclasses.",
    "tags": [
      "Exceptions",
      "java"
    ],
    "hint": "Consider the rules of exceptions before choosing."
  }
];
