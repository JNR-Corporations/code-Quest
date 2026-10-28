export default [
  {
    "id": "rust-001",
    "language": "rust",
    "topic": "Ownership",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What happens when a non-Copy String is assigned to another variable?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Deep copy always"
      },
      {
        "id": "b",
        "text": "Ownership moves"
      },
      {
        "id": "c",
        "text": "Both become null"
      },
      {
        "id": "d",
        "text": "The program leaks"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "The binding receives ownership; the original cannot be used afterward unless ownership is returned. clone explicitly duplicates the string.",
    "tags": [
      "Ownership",
      "rust"
    ],
    "hint": "Consider the rules of ownership before choosing."
  },
  {
    "id": "rust-002",
    "language": "rust",
    "topic": "Borrowing",
    "difficulty": "Easy",
    "format": "concept",
    "question": "Which denotes a mutable borrow?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "&T"
      },
      {
        "id": "b",
        "text": "&mut T"
      },
      {
        "id": "c",
        "text": "*const T"
      },
      {
        "id": "d",
        "text": "Box<T>"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "&mut T is an exclusive mutable reference, checked by Rust’s borrowing rules.",
    "tags": [
      "Borrowing",
      "rust"
    ],
    "hint": "Consider the rules of borrowing before choosing."
  },
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
  },
  {
    "id": "rust-004",
    "language": "rust",
    "topic": "Lifetimes",
    "difficulty": "Hard",
    "format": "boolean",
    "question": "Lifetime annotations extend how long a value lives.",
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
    "explanation": "Lifetime annotations describe relationships among references. They do not extend the lifetime of the referent.",
    "tags": [
      "Lifetimes",
      "rust"
    ],
    "hint": "Consider the rules of lifetimes before choosing."
  }
];
