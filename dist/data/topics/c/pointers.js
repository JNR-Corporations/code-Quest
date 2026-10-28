export default [
  {
    "id": "c-001",
    "language": "c",
    "topic": "Pointers",
    "difficulty": "Easy",
    "format": "output",
    "question": "What does *p evaluate to?",
    "code": "int x = 42;\nint *p = &x;",
    "options": [
      {
        "id": "a",
        "text": "An address"
      },
      {
        "id": "b",
        "text": "42"
      },
      {
        "id": "c",
        "text": "0"
      },
      {
        "id": "d",
        "text": "Undefined behavior"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "p holds the address of x. Dereferencing it reads x, which is initialized to 42.",
    "tags": [
      "Pointers",
      "c"
    ],
    "hint": "Consider the rules of pointers before choosing."
  },
  {
    "id": "c-foundation-030",
    "language": "c",
    "topic": "Pointers",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What is &x used for?",
    "code": "int x = 7;\nint *p = &x;",
    "options": [
      {
        "id": "a",
        "text": "Obtaining the address of x"
      },
      {
        "id": "b",
        "text": "Reading x through a pointer"
      },
      {
        "id": "c",
        "text": "Multiplying x"
      },
      {
        "id": "d",
        "text": "Freeing x"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "The address-of operator produces a pointer to its operand.",
    "tags": [
      "c",
      "Pointers",
      "beginner"
    ],
    "hint": "Read each part of the example in order."
  }
];
