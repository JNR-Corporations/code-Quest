export default [
  {
    "id": "cpp-001",
    "language": "cpp",
    "topic": "Ownership",
    "difficulty": "Medium",
    "format": "concept",
    "question": "Which type represents exclusive ownership?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "std::shared_ptr"
      },
      {
        "id": "b",
        "text": "std::unique_ptr"
      },
      {
        "id": "c",
        "text": "A raw pointer always"
      },
      {
        "id": "d",
        "text": "std::weak_ptr"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "unique_ptr owns its managed object exclusively and destroys it on scope exit. Ownership can be moved.",
    "tags": [
      "Ownership",
      "cpp"
    ],
    "hint": "Consider the rules of ownership before choosing."
  },
  {
    "id": "cpp-002",
    "language": "cpp",
    "topic": "RAII",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What is the core idea of RAII?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Acquire resources only globally"
      },
      {
        "id": "b",
        "text": "Tie resource lifetime to object lifetime"
      },
      {
        "id": "c",
        "text": "Avoid all constructors"
      },
      {
        "id": "d",
        "text": "Use manual cleanup everywhere"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "RAII acquires resources during initialization and releases them in destructors, enabling cleanup during normal and exceptional exits.",
    "tags": [
      "RAII",
      "cpp"
    ],
    "hint": "Consider the rules of raii before choosing."
  },
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
  },
  {
    "id": "cpp-004",
    "language": "cpp",
    "topic": "Concurrency",
    "difficulty": "Hard",
    "format": "boolean",
    "question": "Unsynchronized conflicting access from threads can cause a data race.",
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
    "explanation": "When conflicting memory operations are not ordered and at least one is a non-atomic write, a data race yields undefined behavior.",
    "tags": [
      "Concurrency",
      "cpp"
    ],
    "hint": "Consider the rules of concurrency before choosing."
  }
];
