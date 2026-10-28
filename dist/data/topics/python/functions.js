export default [
  {
    "id": "python-002",
    "language": "python",
    "topic": "Functions",
    "difficulty": "Medium",
    "format": "bug",
    "question": "What is the bug in this default argument?",
    "code": "def collect(value, items=[]):\n    items.append(value)\n    return items",
    "options": [
      {
        "id": "a",
        "text": "Lists are immutable"
      },
      {
        "id": "b",
        "text": "The list is shared across calls"
      },
      {
        "id": "c",
        "text": "append returns the list"
      },
      {
        "id": "d",
        "text": "Default arguments are forbidden"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Default argument expressions are evaluated once when the function is defined. Use None and create a new list inside.",
    "tags": [
      "Functions",
      "python"
    ],
    "hint": "Consider the rules of functions before choosing."
  },
  {
    "id": "python-foundation-015",
    "language": "python",
    "topic": "Functions",
    "difficulty": "Easy",
    "format": "output",
    "question": "For input 5, what value does this function return?",
    "code": "def twice(x):\n    return x * 2",
    "options": [
      {
        "id": "a",
        "text": "5"
      },
      {
        "id": "b",
        "text": "10"
      },
      {
        "id": "c",
        "text": "25"
      },
      {
        "id": "d",
        "text": "0"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "The function multiplies its argument by 2, so 5 × 2 returns 10. The fragment shows the function definition, not an invocation.",
    "tags": [
      "python",
      "Functions",
      "beginner"
    ],
    "hint": "Read each part of the example in order."
  },
  {
    "id": "python-foundation-016",
    "language": "python",
    "topic": "Functions",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What is a function parameter?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "A name that receives an input to a function"
      },
      {
        "id": "b",
        "text": "Every local file"
      },
      {
        "id": "c",
        "text": "The program output only"
      },
      {
        "id": "d",
        "text": "A comment at the end of code"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "Parameters name inputs in a function definition. Arguments are the values supplied at a call.",
    "tags": [
      "python",
      "Functions",
      "beginner"
    ],
    "hint": "Read each part of the example in order."
  }
];
