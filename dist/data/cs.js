export default [
  {
    "id": "cs-001",
    "language": "cs",
    "topic": "OOP",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What is encapsulation?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Exposing every field"
      },
      {
        "id": "b",
        "text": "Bundling state and behavior behind an interface"
      },
      {
        "id": "c",
        "text": "Using only inheritance"
      },
      {
        "id": "d",
        "text": "Replacing all functions with classes"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Encapsulation controls access to state and preserves invariants through a public interface.",
    "tags": [
      "OOP",
      "cs"
    ],
    "hint": "Consider the rules of oop before choosing."
  },
  {
    "id": "cs-002",
    "language": "cs",
    "topic": "Functional programming",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What describes a pure function?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Depends on a global clock"
      },
      {
        "id": "b",
        "text": "Same inputs give same output without side effects"
      },
      {
        "id": "c",
        "text": "Always uses recursion"
      },
      {
        "id": "d",
        "text": "Returns no value"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Purity combines deterministic output with no observable side effects.",
    "tags": [
      "Functional programming",
      "cs"
    ],
    "hint": "Consider the rules of functional programming before choosing."
  },
  {
    "id": "cs-003",
    "language": "cs",
    "topic": "Operating systems",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What is a context switch?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Changing a variable type"
      },
      {
        "id": "b",
        "text": "Saving one execution context and restoring another"
      },
      {
        "id": "c",
        "text": "Compiling a program"
      },
      {
        "id": "d",
        "text": "Opening a file"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "The scheduler switches execution between tasks by preserving and restoring processor state.",
    "tags": [
      "Operating systems",
      "cs"
    ],
    "hint": "Consider the rules of operating systems before choosing."
  },
  {
    "id": "cs-004",
    "language": "cs",
    "topic": "Memory management",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What is a dangling pointer?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "A pointer to freed or otherwise ended storage"
      },
      {
        "id": "b",
        "text": "A null pointer always"
      },
      {
        "id": "c",
        "text": "A pointer to an array"
      },
      {
        "id": "d",
        "text": "A function pointer"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "A dangling pointer no longer refers to a live object. Dereferencing it can lead to undefined behavior.",
    "tags": [
      "Memory management",
      "cs"
    ],
    "hint": "Consider the rules of memory management before choosing."
  },
  {
    "id": "cs-005",
    "language": "cs",
    "topic": "Concurrency",
    "difficulty": "Hard",
    "format": "multiple",
    "question": "Which conditions are associated with deadlock?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Mutual exclusion"
      },
      {
        "id": "b",
        "text": "Hold and wait"
      },
      {
        "id": "c",
        "text": "Circular wait"
      },
      {
        "id": "d",
        "text": "Automatic garbage collection"
      }
    ],
    "answers": [
      "a",
      "b",
      "c"
    ],
    "explanation": "The classic conditions are mutual exclusion, hold-and-wait, no preemption and circular wait.",
    "tags": [
      "Concurrency",
      "cs"
    ],
    "hint": "Consider the rules of concurrency before choosing."
  },
  {
    "id": "cs-006",
    "language": "cs",
    "topic": "Compiler fundamentals",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What does lexical analysis produce?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Tokens"
      },
      {
        "id": "b",
        "text": "Machine scheduling decisions"
      },
      {
        "id": "c",
        "text": "Network packets"
      },
      {
        "id": "d",
        "text": "Database rows"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "A lexer groups source characters into tokens such as identifiers, keywords and operators.",
    "tags": [
      "Compiler fundamentals",
      "cs"
    ],
    "hint": "Consider the rules of compiler fundamentals before choosing."
  },
  {
    "id": "cs-007",
    "language": "cs",
    "topic": "Computer networks",
    "difficulty": "Easy",
    "format": "boolean",
    "question": "TCP provides an ordered byte stream.",
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
    "explanation": "TCP provides reliable ordered byte delivery while the connection succeeds; it does not preserve application message boundaries.",
    "tags": [
      "Computer networks",
      "cs"
    ],
    "hint": "Consider the rules of computer networks before choosing."
  },
  {
    "id": "cs-008",
    "language": "cs",
    "topic": "Databases",
    "difficulty": "Medium",
    "format": "concept",
    "question": "What does normalization primarily reduce?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "All query cost"
      },
      {
        "id": "b",
        "text": "Redundancy and update anomalies"
      },
      {
        "id": "c",
        "text": "The need for keys"
      },
      {
        "id": "d",
        "text": "All indexes"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Normalization organizes dependencies to reduce duplicated facts and insertion, update and deletion anomalies.",
    "tags": [
      "Databases",
      "cs"
    ],
    "hint": "Consider the rules of databases before choosing."
  }
];
