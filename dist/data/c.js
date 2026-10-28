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
    "id": "c-002",
    "language": "c",
    "topic": "Memory",
    "difficulty": "Easy",
    "format": "concept",
    "question": "Which function releases memory allocated by malloc?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "delete"
      },
      {
        "id": "b",
        "text": "free"
      },
      {
        "id": "c",
        "text": "release"
      },
      {
        "id": "d",
        "text": "dispose"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "free releases a compatible dynamically allocated block. Passing an invalid or already freed pointer is undefined behavior.",
    "tags": [
      "Memory",
      "c"
    ],
    "hint": "Consider the rules of memory before choosing."
  },
  {
    "id": "c-003",
    "language": "c",
    "topic": "Arrays",
    "difficulty": "Easy",
    "format": "bug",
    "question": "What is wrong with this access?",
    "code": "int a[3] = {1, 2, 3};\nprintf(\"%d\", a[3]);",
    "options": [
      {
        "id": "a",
        "text": "Arrays start at one"
      },
      {
        "id": "b",
        "text": "Index 3 is out of bounds"
      },
      {
        "id": "c",
        "text": "a must be a pointer"
      },
      {
        "id": "d",
        "text": "Nothing"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "A three-element array has valid indices 0, 1, and 2. Reading a[3] is undefined behavior.",
    "tags": [
      "Arrays",
      "c"
    ],
    "hint": "Consider the rules of arrays before choosing."
  },
  {
    "id": "c-004",
    "language": "c",
    "topic": "Undefined behavior",
    "difficulty": "Expert",
    "format": "concept",
    "question": "What can be concluded about this expression?",
    "code": "int i = 1;\nint n = i++ + ++i;",
    "options": [
      {
        "id": "a",
        "text": "Always 2"
      },
      {
        "id": "b",
        "text": "Always 3"
      },
      {
        "id": "c",
        "text": "It has undefined behavior"
      },
      {
        "id": "d",
        "text": "It is a syntax error"
      }
    ],
    "answers": [
      "c"
    ],
    "explanation": "The modifications of i are unsequenced relative to each other in C. There is no portable numeric result.",
    "tags": [
      "Undefined behavior",
      "c"
    ],
    "hint": "Consider the rules of undefined behavior before choosing."
  }
];
