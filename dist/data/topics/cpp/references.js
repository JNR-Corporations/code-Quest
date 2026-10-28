export default [
  {
    "id": "cpp-003",
    "language": "cpp",
    "topic": "References",
    "difficulty": "Easy",
    "format": "output",
    "question": "What is printed?",
    "code": "int n = 2;\nint &r = n;\nr = 5;\nstd::cout << n;",
    "options": [
      {
        "id": "a",
        "text": "2"
      },
      {
        "id": "b",
        "text": "5"
      },
      {
        "id": "c",
        "text": "0"
      },
      {
        "id": "d",
        "text": "An address"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "r is an lvalue reference to n. Assigning through r changes n.",
    "tags": [
      "References",
      "cpp"
    ],
    "hint": "Consider the rules of references before choosing."
  }
];
