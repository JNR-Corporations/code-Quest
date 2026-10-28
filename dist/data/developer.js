export default [
  {
    "id": "developer-001",
    "language": "developer",
    "topic": "Git",
    "difficulty": "Easy",
    "format": "syntax",
    "question": "Which command creates a new branch and switches to it?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "git switch -c feature"
      },
      {
        "id": "b",
        "text": "git push feature"
      },
      {
        "id": "c",
        "text": "git clone feature"
      },
      {
        "id": "d",
        "text": "git add feature"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "git switch -c feature creates the branch at the current starting point and checks it out.",
    "tags": [
      "Git",
      "developer"
    ],
    "hint": "Consider the rules of git before choosing."
  },
  {
    "id": "developer-002",
    "language": "developer",
    "topic": "Debugging",
    "difficulty": "Easy",
    "format": "debug",
    "question": "What is the most useful first step for an intermittent bug?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Change random lines"
      },
      {
        "id": "b",
        "text": "Capture a minimal reproduction and relevant evidence"
      },
      {
        "id": "c",
        "text": "Disable all errors"
      },
      {
        "id": "d",
        "text": "Rewrite the application"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "A repeatable case, inputs and logs help distinguish causes and validate a fix.",
    "tags": [
      "Debugging",
      "developer"
    ],
    "hint": "Consider the rules of debugging before choosing."
  },
  {
    "id": "developer-003",
    "language": "developer",
    "topic": "Testing",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What does a unit test usually isolate?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "A small behavior or component"
      },
      {
        "id": "b",
        "text": "The entire internet"
      },
      {
        "id": "c",
        "text": "Only visual styling"
      },
      {
        "id": "d",
        "text": "Production credentials"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "A unit test focuses on a small behavior with controlled dependencies; integration tests cover interactions.",
    "tags": [
      "Testing",
      "developer"
    ],
    "hint": "Consider the rules of testing before choosing."
  },
  {
    "id": "developer-004",
    "language": "developer",
    "topic": "Code quality",
    "difficulty": "Easy",
    "format": "concept",
    "question": "Why prefer a descriptive function name?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "It always makes execution faster"
      },
      {
        "id": "b",
        "text": "It communicates intent and reduces reading effort"
      },
      {
        "id": "c",
        "text": "It removes the need for testing"
      },
      {
        "id": "d",
        "text": "It guarantees no bugs"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Clear names help readers understand behavior. They do not replace validation or guarantee correctness.",
    "tags": [
      "Code quality",
      "developer"
    ],
    "hint": "Consider the rules of code quality before choosing."
  },
  {
    "id": "developer-005",
    "language": "developer",
    "topic": "Design patterns",
    "difficulty": "Medium",
    "format": "concept",
    "question": "What does the Strategy pattern make interchangeable?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Algorithms behind a common interface"
      },
      {
        "id": "b",
        "text": "Database tables only"
      },
      {
        "id": "c",
        "text": "Compiler versions"
      },
      {
        "id": "d",
        "text": "Operating system threads"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "Strategy encapsulates alternative behaviors so a caller can select or replace them without changing its own structure.",
    "tags": [
      "Design patterns",
      "developer"
    ],
    "hint": "Consider the rules of design patterns before choosing."
  },
  {
    "id": "developer-006",
    "language": "developer",
    "topic": "Interviews",
    "difficulty": "Medium",
    "format": "interview",
    "question": "Which statement about caching is most accurate?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "It always guarantees freshness"
      },
      {
        "id": "b",
        "text": "It trades resources and invalidation complexity for faster repeated access"
      },
      {
        "id": "c",
        "text": "It removes all failure modes"
      },
      {
        "id": "d",
        "text": "It always reduces memory"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Caching can speed up repeated reads, but requires policies for size, freshness and invalidation.",
    "tags": [
      "Interviews",
      "developer"
    ],
    "hint": "Consider the rules of interviews before choosing."
  }
];
