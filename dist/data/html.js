export default [
  {
    "id": "html-001",
    "language": "html",
    "topic": "Semantics",
    "difficulty": "Easy",
    "format": "concept",
    "question": "Which element represents the page’s primary content?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "<main>"
      },
      {
        "id": "b",
        "text": "<div>"
      },
      {
        "id": "c",
        "text": "<aside>"
      },
      {
        "id": "d",
        "text": "<span>"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "main identifies the dominant content of the document and provides an important landmark.",
    "tags": [
      "Semantics",
      "html"
    ],
    "hint": "Consider the rules of semantics before choosing."
  },
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
  },
  {
    "id": "html-003",
    "language": "html",
    "topic": "Forms",
    "difficulty": "Easy",
    "format": "syntax",
    "question": "Which button type avoids submitting a form?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "type=\"button\""
      },
      {
        "id": "b",
        "text": "type=\"submit\""
      },
      {
        "id": "c",
        "text": "type=\"send\""
      },
      {
        "id": "d",
        "text": "type=\"form\""
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "A button with type=\"button\" has no form submission behavior by default.",
    "tags": [
      "Forms",
      "html"
    ],
    "hint": "Consider the rules of forms before choosing."
  },
  {
    "id": "html-004",
    "language": "html",
    "topic": "Media",
    "difficulty": "Easy",
    "format": "boolean",
    "question": "Decorative images should usually have alt=\"\".",
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
    "explanation": "An empty alt signals that the image can be ignored by assistive technology when it adds no information.",
    "tags": [
      "Media",
      "html"
    ],
    "hint": "Consider the rules of media before choosing."
  }
];
