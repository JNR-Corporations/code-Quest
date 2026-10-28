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
  },
  {
    "id": "web-002",
    "language": "web",
    "topic": "Browser APIs",
    "difficulty": "Easy",
    "format": "concept",
    "question": "Where can a large structured local dataset be stored asynchronously?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "IndexedDB"
      },
      {
        "id": "b",
        "text": "Only cookies"
      },
      {
        "id": "c",
        "text": "The URL fragment"
      },
      {
        "id": "d",
        "text": "CSS variables"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "IndexedDB supports asynchronous transactions over structured local records without a remote server.",
    "tags": [
      "Browser APIs",
      "web"
    ],
    "hint": "Consider the rules of browser apis before choosing."
  },
  {
    "id": "web-003",
    "language": "web",
    "topic": "HTTP",
    "difficulty": "Easy",
    "format": "concept",
    "question": "Which status indicates a resource was not found?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "200"
      },
      {
        "id": "b",
        "text": "301"
      },
      {
        "id": "c",
        "text": "404"
      },
      {
        "id": "d",
        "text": "503"
      }
    ],
    "answers": [
      "c"
    ],
    "explanation": "404 means the origin server did not find a current representation for the requested resource.",
    "tags": [
      "HTTP",
      "web"
    ],
    "hint": "Consider the rules of http before choosing."
  },
  {
    "id": "web-004",
    "language": "web",
    "topic": "Networking",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What is DNS primarily used for?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Encrypting HTML"
      },
      {
        "id": "b",
        "text": "Resolving domain names to records such as IP addresses"
      },
      {
        "id": "c",
        "text": "Compressing images"
      },
      {
        "id": "d",
        "text": "Running JavaScript"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "DNS maps names to records, including A and AAAA records used for addressing.",
    "tags": [
      "Networking",
      "web"
    ],
    "hint": "Consider the rules of networking before choosing."
  },
  {
    "id": "web-005",
    "language": "web",
    "topic": "Performance",
    "difficulty": "Easy",
    "format": "concept",
    "question": "Which avoids repeatedly firing expensive search work while typing?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Debouncing"
      },
      {
        "id": "b",
        "text": "A synchronous loop"
      },
      {
        "id": "c",
        "text": "More event listeners"
      },
      {
        "id": "d",
        "text": "Disabling caching"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "Debouncing waits for a pause in calls before doing work, reducing unnecessary repeated processing.",
    "tags": [
      "Performance",
      "web"
    ],
    "hint": "Consider the rules of performance before choosing."
  },
  {
    "id": "web-006",
    "language": "web",
    "topic": "Accessibility",
    "difficulty": "Easy",
    "format": "multiple",
    "question": "Which are useful keyboard accessibility practices?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Visible focus indicators"
      },
      {
        "id": "b",
        "text": "Logical tab order"
      },
      {
        "id": "c",
        "text": "Keyboard-operable controls"
      },
      {
        "id": "d",
        "text": "Removing all focus outlines"
      }
    ],
    "answers": [
      "a",
      "b",
      "c"
    ],
    "explanation": "Visible focus, predictable order and operable controls let keyboard users understand and use the interface.",
    "tags": [
      "Accessibility",
      "web"
    ],
    "hint": "Consider the rules of accessibility before choosing."
  }
];
