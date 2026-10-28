export default [
  {
    "id": "go-001",
    "language": "go",
    "topic": "Errors",
    "difficulty": "Easy",
    "format": "concept",
    "question": "How are ordinary errors conventionally returned?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Only by throwing"
      },
      {
        "id": "b",
        "text": "As an error return value"
      },
      {
        "id": "c",
        "text": "As global strings only"
      },
      {
        "id": "d",
        "text": "By stopping the runtime"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Go commonly returns a value and an error, with nil error indicating success.",
    "tags": [
      "Errors",
      "go"
    ],
    "hint": "Consider the rules of errors before choosing."
  },
  {
    "id": "go-002",
    "language": "go",
    "topic": "Concurrency",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What is a goroutine?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "A lightweight concurrent function execution"
      },
      {
        "id": "b",
        "text": "An OS process"
      },
      {
        "id": "c",
        "text": "A database lock"
      },
      {
        "id": "d",
        "text": "A package manager"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "A goroutine is an independently executing function managed by the Go runtime. It is started using go.",
    "tags": [
      "Concurrency",
      "go"
    ],
    "hint": "Consider the rules of concurrency before choosing."
  },
  {
    "id": "go-003",
    "language": "go",
    "topic": "Defer",
    "difficulty": "Easy",
    "format": "output",
    "question": "What is printed?",
    "code": "func main() {\n  defer fmt.Println(\"B\")\n  fmt.Println(\"A\")\n}",
    "options": [
      {
        "id": "a",
        "text": "A then B"
      },
      {
        "id": "b",
        "text": "B then A"
      },
      {
        "id": "c",
        "text": "Only A"
      },
      {
        "id": "d",
        "text": "Compilation error"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "Deferred calls run when the surrounding function returns. The direct print runs first.",
    "tags": [
      "Defer",
      "go"
    ],
    "hint": "Consider the rules of defer before choosing."
  },
  {
    "id": "go-004",
    "language": "go",
    "topic": "Maps",
    "difficulty": "Medium",
    "format": "boolean",
    "question": "A regular Go map supports unsynchronized concurrent writes safely.",
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
      "b"
    ],
    "explanation": "Ordinary maps require synchronization for concurrent access involving writes. Use a mutex or suitable concurrent design.",
    "tags": [
      "Maps",
      "go"
    ],
    "hint": "Consider the rules of maps before choosing."
  }
];
