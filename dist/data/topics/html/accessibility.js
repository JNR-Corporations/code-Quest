export default [
  {
    "id": "html-002",
    "language": "html",
    "topic": "Accessibility",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What associates this label with its input?",
    "code": "<label for=\"email\">Email</label>\n<input id=\"email\" type=\"email\">",
    "options": [
      {
        "id": "a",
        "text": "Matching for and id values"
      },
      {
        "id": "b",
        "text": "Matching class values"
      },
      {
        "id": "c",
        "text": "Adjacent placement only"
      },
      {
        "id": "d",
        "text": "The placeholder attribute"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "The label for attribute refers to the input id, providing a programmatic name and click target.",
    "tags": [
      "Accessibility",
      "html"
    ],
    "hint": "Consider the rules of accessibility before choosing."
  }
];
