export default [
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
  }
];
