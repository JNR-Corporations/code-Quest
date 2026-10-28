export default [
  {
    "id": "c-foundation-019",
    "language": "c",
    "topic": "Loops",
    "difficulty": "Easy",
    "format": "concept",
    "question": "A loop adds 1 on each of 4 iterations to a total starting at 0. What is the final total?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "0"
      },
      {
        "id": "b",
        "text": "1"
      },
      {
        "id": "c",
        "text": "4"
      },
      {
        "id": "d",
        "text": "5"
      }
    ],
    "answers": [
      "c"
    ],
    "explanation": "Four additions of 1 produce a total of 4. Trace 0 → 1 → 2 → 3 → 4.",
    "tags": [
      "c",
      "Loops",
      "beginner"
    ],
    "hint": "Trace each iteration separately."
  },
  {
    "id": "c-foundation-020",
    "language": "c",
    "topic": "Loops",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What usually causes an accidental infinite while loop?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "The condition never becomes false"
      },
      {
        "id": "b",
        "text": "Using a descriptive name"
      },
      {
        "id": "c",
        "text": "Putting arithmetic in a function"
      },
      {
        "id": "d",
        "text": "Printing after the loop"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "A while loop repeats while its condition is true. If nothing changes the relevant state, it may never terminate.",
    "tags": [
      "c",
      "Loops",
      "beginner"
    ],
    "hint": "Trace each iteration separately."
  },
  {
    "id": "c-foundation-028",
    "language": "c",
    "topic": "Loops",
    "difficulty": "Easy",
    "format": "concept",
    "question": "How many times does the loop body run?",
    "code": "for (int i = 0; i < 3; i++) {\n  printf(\"%d\", i);\n}",
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
        "text": "Forever"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "i takes the values 0, 1 and 2. When i becomes 3, i < 3 is false.",
    "tags": [
      "c",
      "Loops",
      "beginner"
    ],
    "hint": "Trace each iteration separately."
  }
];
