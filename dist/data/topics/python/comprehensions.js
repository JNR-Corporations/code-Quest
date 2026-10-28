export default [
  {
    "id": "python-003",
    "language": "python",
    "topic": "Comprehensions",
    "difficulty": "Easy",
    "format": "syntax",
    "question": "Which expression creates squares of 0 through 3?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "[x*x for x in range(4)]"
      },
      {
        "id": "b",
        "text": "[x^2 for x in 4]"
      },
      {
        "id": "c",
        "text": "range(4).map(x*x)"
      },
      {
        "id": "d",
        "text": "[for x in range(4): x*x]"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "A list comprehension places the expression before the for clause; range(4) yields 0, 1, 2, 3.",
    "tags": [
      "Comprehensions",
      "python"
    ],
    "hint": "Consider the rules of comprehensions before choosing."
  }
];
