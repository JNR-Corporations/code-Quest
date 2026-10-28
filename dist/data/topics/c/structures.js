export default [
  {
    "id": "c-foundation-032",
    "language": "c",
    "topic": "Structures",
    "difficulty": "Easy",
    "format": "concept",
    "question": "Which operator accesses a field through a struct value?",
    "code": "struct Point { int x; int y; };\nstruct Point p = {2, 3};\nprintf(\"%d\", p.x);",
    "options": [
      {
        "id": "a",
        "text": "."
      },
      {
        "id": "b",
        "text": "-> only"
      },
      {
        "id": "c",
        "text": "::"
      },
      {
        "id": "d",
        "text": "?."
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "Use dot for a struct value and -> for a pointer to a struct.",
    "tags": [
      "c",
      "Structures",
      "beginner"
    ],
    "hint": "Read each part of the example in order."
  }
];
