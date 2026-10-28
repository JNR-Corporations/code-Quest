export default [
  {
    "id": "python-001",
    "language": "python",
    "topic": "Collections",
    "difficulty": "Easy",
    "format": "output",
    "question": "What is printed?",
    "code": "a = [1]\nb = a\nb.append(2)\nprint(a)",
    "options": [
      {
        "id": "a",
        "text": "[1]"
      },
      {
        "id": "b",
        "text": "[1, 2]"
      },
      {
        "id": "c",
        "text": "[2]"
      },
      {
        "id": "d",
        "text": "TypeError"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "a and b refer to the same list object. append mutates that shared list.",
    "tags": [
      "Collections",
      "python"
    ],
    "hint": "Consider the rules of collections before choosing."
  },
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
  },
  {
    "id": "python-004",
    "language": "python",
    "topic": "Iterators",
    "difficulty": "Easy",
    "format": "boolean",
    "question": "A generator can yield values lazily.",
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
    "explanation": "Calling a generator function creates a generator. Values are produced as iteration resumes execution.",
    "tags": [
      "Iterators",
      "python"
    ],
    "hint": "Consider the rules of iterators before choosing."
  },
  {
    "id": "python-005",
    "language": "python",
    "topic": "Equality",
    "difficulty": "Medium",
    "format": "output",
    "question": "What is the result?",
    "code": "[1, 2] is [1, 2]",
    "options": [
      {
        "id": "a",
        "text": "True"
      },
      {
        "id": "b",
        "text": "False"
      },
      {
        "id": "c",
        "text": "None"
      },
      {
        "id": "d",
        "text": "TypeError"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "== compares values; is compares object identity. These are two distinct list objects.",
    "tags": [
      "Equality",
      "python"
    ],
    "hint": "Consider the rules of equality before choosing."
  },
  {
    "id": "python-006",
    "language": "python",
    "topic": "Exceptions",
    "difficulty": "Easy",
    "format": "concept",
    "question": "Which block runs whether or not an exception occurs?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "except"
      },
      {
        "id": "b",
        "text": "finally"
      },
      {
        "id": "c",
        "text": "else"
      },
      {
        "id": "d",
        "text": "raise"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "The finally block runs as control leaves the try statement, including when exceptions or returns occur.",
    "tags": [
      "Exceptions",
      "python"
    ],
    "hint": "Consider the rules of exceptions before choosing."
  }
];
