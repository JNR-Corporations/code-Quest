export default [
  {
    "id": "typescript-001",
    "language": "typescript",
    "topic": "Types",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What does the ? mean here?",
    "code": "type User = { name?: string };",
    "options": [
      {
        "id": "a",
        "text": "name is readonly"
      },
      {
        "id": "b",
        "text": "name is optional"
      },
      {
        "id": "c",
        "text": "name is never"
      },
      {
        "id": "d",
        "text": "name is private"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "An optional property can be absent. With strict null checks, reading it may produce undefined.",
    "tags": [
      "Types",
      "typescript"
    ],
    "hint": "Consider the rules of types before choosing."
  },
  {
    "id": "typescript-002",
    "language": "typescript",
    "topic": "Narrowing",
    "difficulty": "Medium",
    "format": "concept",
    "question": "Which safely narrows a string | number to string?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "value as string"
      },
      {
        "id": "b",
        "text": "typeof value === \"string\""
      },
      {
        "id": "c",
        "text": "value == String"
      },
      {
        "id": "d",
        "text": "value!"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "A typeof guard narrows the union inside the matching branch. A type assertion does not check at runtime.",
    "tags": [
      "Narrowing",
      "typescript"
    ],
    "hint": "Consider the rules of narrowing before choosing."
  },
  {
    "id": "typescript-003",
    "language": "typescript",
    "topic": "Generics",
    "difficulty": "Easy",
    "format": "complete",
    "question": "Complete the identity signature.",
    "code": "function identity<T>(value: T): /* ? */ {\n  return value;\n}",
    "options": [
      {
        "id": "a",
        "text": "T"
      },
      {
        "id": "b",
        "text": "any[]"
      },
      {
        "id": "c",
        "text": "never"
      },
      {
        "id": "d",
        "text": "void"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "The type parameter T preserves the relationship between the argument type and return type.",
    "tags": [
      "Generics",
      "typescript"
    ],
    "hint": "Consider the rules of generics before choosing."
  },
  {
    "id": "typescript-004",
    "language": "typescript",
    "topic": "Runtime",
    "difficulty": "Easy",
    "format": "boolean",
    "question": "TypeScript interfaces are available as runtime JavaScript objects.",
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
    "explanation": "Interfaces describe types during checking and are erased from emitted JavaScript.",
    "tags": [
      "Runtime",
      "typescript"
    ],
    "hint": "Consider the rules of runtime before choosing."
  }
];
