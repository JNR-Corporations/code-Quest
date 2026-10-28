export default [
  {
    "id": "data-structures-001",
    "language": "data-structures",
    "topic": "Stacks",
    "difficulty": "Easy",
    "format": "concept",
    "question": "Which access order describes a stack?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "FIFO"
      },
      {
        "id": "b",
        "text": "LIFO"
      },
      {
        "id": "c",
        "text": "Sorted ascending"
      },
      {
        "id": "d",
        "text": "Random only"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "A stack removes the most recently added item first: last in, first out.",
    "tags": [
      "Stacks",
      "data-structures"
    ],
    "hint": "Consider the rules of stacks before choosing."
  },
  {
    "id": "data-structures-002",
    "language": "data-structures",
    "topic": "Queues",
    "difficulty": "Easy",
    "format": "concept",
    "question": "Which structure is typically used by BFS?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Queue"
      },
      {
        "id": "b",
        "text": "Stack"
      },
      {
        "id": "c",
        "text": "Heap only"
      },
      {
        "id": "d",
        "text": "Set only"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "A FIFO queue preserves exploration by distance layers.",
    "tags": [
      "Queues",
      "data-structures"
    ],
    "hint": "Consider the rules of queues before choosing."
  },
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
  },
  {
    "id": "data-structures-004",
    "language": "data-structures",
    "topic": "Trees",
    "difficulty": "Easy",
    "format": "boolean",
    "question": "An inorder traversal of a binary search tree produces sorted keys.",
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
    "explanation": "Visiting left subtree, node, then right subtree respects the BST key ordering.",
    "tags": [
      "Trees",
      "data-structures"
    ],
    "hint": "Consider the rules of trees before choosing."
  }
];
