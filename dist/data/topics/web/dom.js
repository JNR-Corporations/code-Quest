export default [
  {
    "id": "web-001",
    "language": "web",
    "topic": "DOM",
    "difficulty": "Easy",
    "format": "concept",
    "question": "Which property safely assigns plain text?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "innerHTML"
      },
      {
        "id": "b",
        "text": "textContent"
      },
      {
        "id": "c",
        "text": "outerHTML"
      },
      {
        "id": "d",
        "text": "document.write"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "textContent treats input as text instead of HTML markup, avoiding HTML injection for text content.",
    "tags": [
      "DOM",
      "web"
    ],
    "hint": "Consider the rules of dom before choosing."
  }
];
