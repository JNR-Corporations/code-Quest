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
  }
];
