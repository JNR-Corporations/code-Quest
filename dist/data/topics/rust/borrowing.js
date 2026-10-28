export default [
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
  }
];
