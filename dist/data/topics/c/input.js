export default [
  {
    "id": "c-foundation-025",
    "language": "c",
    "topic": "Input",
    "difficulty": "Easy",
    "format": "concept",
    "question": "Which address should scanf receive for an int n?",
    "code": "int n;\nif (scanf(\"%d\", &n) == 1) {\n  printf(\"%d\", n);\n}",
    "options": [
      {
        "id": "a",
        "text": "&n"
      },
      {
        "id": "b",
        "text": "n"
      },
      {
        "id": "c",
        "text": "*n"
      },
      {
        "id": "d",
        "text": "\"n\""
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "scanf needs the address of the target int. Check its return value to know whether conversion succeeded.",
    "tags": [
      "c",
      "Input",
      "beginner"
    ],
    "hint": "Read each part of the example in order."
  }
];
