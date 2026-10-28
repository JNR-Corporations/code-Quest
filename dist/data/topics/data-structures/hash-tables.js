export default [
  {
    "id": "data-structures-003",
    "language": "data-structures",
    "topic": "Hash tables",
    "difficulty": "Medium",
    "format": "concept",
    "question": "What is expected lookup time in a well-distributed hash table?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "O(1)"
      },
      {
        "id": "b",
        "text": "O(n log n)"
      },
      {
        "id": "c",
        "text": "O(n²)"
      },
      {
        "id": "d",
        "text": "Always O(log n)"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "With suitable hashing and load factor, expected lookup is constant time. Worst-case behavior depends on implementation.",
    "tags": [
      "Hash tables",
      "data-structures"
    ],
    "hint": "Consider the rules of hash tables before choosing."
  }
];
