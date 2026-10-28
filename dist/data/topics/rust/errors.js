export default [
  {
    "id": "rust-003",
    "language": "rust",
    "topic": "Errors",
    "difficulty": "Easy",
    "format": "concept",
    "question": "Which represents success or failure with a value?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Option<T>"
      },
      {
        "id": "b",
        "text": "Result<T, E>"
      },
      {
        "id": "c",
        "text": "Vec<T>"
      },
      {
        "id": "d",
        "text": "String"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Result has Ok(T) and Err(E) variants for recoverable success and failure.",
    "tags": [
      "Errors",
      "rust"
    ],
    "hint": "Consider the rules of errors before choosing."
  }
];
