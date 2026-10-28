export default [
  {
    "id": "algorithms-001",
    "language": "algorithms",
    "topic": "Big-O",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What is the time complexity of binary search on a sorted random-access array?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "O(1)"
      },
      {
        "id": "b",
        "text": "O(log n)"
      },
      {
        "id": "c",
        "text": "O(n)"
      },
      {
        "id": "d",
        "text": "O(n²)"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Each comparison halves the remaining search range, so the comparison count grows logarithmically.",
    "tags": [
      "Big-O",
      "algorithms"
    ],
    "hint": "Consider the rules of big-o before choosing."
  },
  {
    "id": "algorithms-002",
    "language": "algorithms",
    "topic": "Sorting",
    "difficulty": "Medium",
    "format": "concept",
    "question": "Which sorting algorithm is stable in its usual merge-based form?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Selection sort"
      },
      {
        "id": "b",
        "text": "Merge sort"
      },
      {
        "id": "c",
        "text": "Heapsort"
      },
      {
        "id": "d",
        "text": "In-place quicksort"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Merge sort can preserve equal elements’ input order by taking from the left side first on ties.",
    "tags": [
      "Sorting",
      "algorithms"
    ],
    "hint": "Consider the rules of sorting before choosing."
  },
  {
    "id": "algorithms-003",
    "language": "algorithms",
    "topic": "Graphs",
    "difficulty": "Medium",
    "format": "concept",
    "question": "Which finds shortest paths in an unweighted graph?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Breadth-first search"
      },
      {
        "id": "b",
        "text": "Depth-first search always"
      },
      {
        "id": "c",
        "text": "Binary search"
      },
      {
        "id": "d",
        "text": "Quicksort"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "BFS explores vertices in increasing edge-count distance from the source.",
    "tags": [
      "Graphs",
      "algorithms"
    ],
    "hint": "Consider the rules of graphs before choosing."
  },
  {
    "id": "algorithms-004",
    "language": "algorithms",
    "topic": "Recursion",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What must a terminating recursive function have?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "A global variable"
      },
      {
        "id": "b",
        "text": "A reachable base case and progress toward it"
      },
      {
        "id": "c",
        "text": "Two recursive calls"
      },
      {
        "id": "d",
        "text": "A sorted input"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "A base case stops recursion, and each recursive step must move toward it on valid input.",
    "tags": [
      "Recursion",
      "algorithms"
    ],
    "hint": "Consider the rules of recursion before choosing."
  },
  {
    "id": "algorithms-005",
    "language": "algorithms",
    "topic": "Complexity",
    "difficulty": "Medium",
    "format": "output",
    "question": "What is the time complexity?",
    "code": "for (let i = 0; i < n; i++) {\n  for (let j = 0; j < n; j++) {\n    visit(i, j);\n  }\n}",
    "options": [
      {
        "id": "a",
        "text": "O(n)"
      },
      {
        "id": "b",
        "text": "O(log n)"
      },
      {
        "id": "c",
        "text": "O(n²)"
      },
      {
        "id": "d",
        "text": "O(1)"
      }
    ],
    "answers": [
      "c"
    ],
    "explanation": "The inner body executes n times for each of n outer iterations, for n² total executions.",
    "tags": [
      "Complexity",
      "algorithms"
    ],
    "hint": "Consider the rules of complexity before choosing."
  }
];
