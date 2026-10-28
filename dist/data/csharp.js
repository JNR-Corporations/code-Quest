export default [
  {
    "id": "csharp-001",
    "language": "csharp",
    "topic": "Async",
    "difficulty": "Medium",
    "format": "concept",
    "question": "What does await do when a Task has not completed?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Always blocks the thread"
      },
      {
        "id": "b",
        "text": "Suspends the async method"
      },
      {
        "id": "c",
        "text": "Creates a new process"
      },
      {
        "id": "d",
        "text": "Ignores errors"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "await suspends the method and arranges continuation after completion. It does not inherently block the current thread.",
    "tags": [
      "Async",
      "csharp"
    ],
    "hint": "Consider the rules of async before choosing."
  },
  {
    "id": "csharp-002",
    "language": "csharp",
    "topic": "Types",
    "difficulty": "Easy",
    "format": "concept",
    "question": "Which is a value type?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "class"
      },
      {
        "id": "b",
        "text": "interface"
      },
      {
        "id": "c",
        "text": "struct"
      },
      {
        "id": "d",
        "text": "delegate"
      }
    ],
    "answers": [
      "c"
    ],
    "explanation": "Struct types are value types. Classes, interfaces and delegates are reference types.",
    "tags": [
      "Types",
      "csharp"
    ],
    "hint": "Consider the rules of types before choosing."
  },
  {
    "id": "csharp-003",
    "language": "csharp",
    "topic": "Null safety",
    "difficulty": "Easy",
    "format": "output",
    "question": "What is printed?",
    "code": "string? name = null;\nConsole.WriteLine(name?.Length ?? 0);",
    "options": [
      {
        "id": "a",
        "text": "null"
      },
      {
        "id": "b",
        "text": "0"
      },
      {
        "id": "c",
        "text": "Exception"
      },
      {
        "id": "d",
        "text": "1"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "The null-conditional access produces null and ?? supplies the fallback.",
    "tags": [
      "Null safety",
      "csharp"
    ],
    "hint": "Consider the rules of null safety before choosing."
  },
  {
    "id": "csharp-004",
    "language": "csharp",
    "topic": "Resources",
    "difficulty": "Easy",
    "format": "boolean",
    "question": "A using statement can ensure IDisposable cleanup.",
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
    "explanation": "using arranges Dispose on leaving scope, including through an exception.",
    "tags": [
      "Resources",
      "csharp"
    ],
    "hint": "Consider the rules of resources before choosing."
  }
];
