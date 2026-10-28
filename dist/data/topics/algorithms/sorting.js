export default [
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
  }
];
