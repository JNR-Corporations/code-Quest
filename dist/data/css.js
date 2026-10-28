export default [
  {
    "id": "css-001",
    "language": "css",
    "topic": "Box model",
    "difficulty": "Easy",
    "format": "output",
    "question": "What width does the border box have?",
    "code": "width: 100px;\npadding: 10px;\nborder: 2px solid;\nbox-sizing: content-box;",
    "options": [
      {
        "id": "a",
        "text": "100px"
      },
      {
        "id": "b",
        "text": "120px"
      },
      {
        "id": "c",
        "text": "124px"
      },
      {
        "id": "d",
        "text": "144px"
      }
    ],
    "answers": [
      "c"
    ],
    "explanation": "With content-box, the specified width is content width. Add 20px padding and 4px borders for 124px.",
    "tags": [
      "Box model",
      "css"
    ],
    "hint": "Consider the rules of box model before choosing."
  },
  {
    "id": "css-002",
    "language": "css",
    "topic": "Layout",
    "difficulty": "Easy",
    "format": "concept",
    "question": "Which centers items on the cross axis of a flex container?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "justify-content"
      },
      {
        "id": "b",
        "text": "align-items"
      },
      {
        "id": "c",
        "text": "text-align"
      },
      {
        "id": "d",
        "text": "z-index"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "align-items controls cross-axis alignment. The axis depends on flex-direction.",
    "tags": [
      "Layout",
      "css"
    ],
    "hint": "Consider the rules of layout before choosing."
  },
  {
    "id": "css-003",
    "language": "css",
    "topic": "Responsive design",
    "difficulty": "Easy",
    "format": "concept",
    "question": "Which supports a layout that adapts to viewport width?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Media queries"
      },
      {
        "id": "b",
        "text": "Only fixed pixel widths"
      },
      {
        "id": "c",
        "text": "Higher z-index"
      },
      {
        "id": "d",
        "text": "!important everywhere"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "Media queries can conditionally apply rules for viewport characteristics. Flexible sizing also supports responsive layouts.",
    "tags": [
      "Responsive design",
      "css"
    ],
    "hint": "Consider the rules of responsive design before choosing."
  },
  {
    "id": "css-004",
    "language": "css",
    "topic": "Accessibility",
    "difficulty": "Easy",
    "format": "syntax",
    "question": "Which media feature detects reduced motion preference?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "prefers-reduced-motion"
      },
      {
        "id": "b",
        "text": "motion-disabled"
      },
      {
        "id": "c",
        "text": "screen-reader"
      },
      {
        "id": "d",
        "text": "no-animation"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "prefers-reduced-motion: reduce lets the interface reduce nonessential motion.",
    "tags": [
      "Accessibility",
      "css"
    ],
    "hint": "Consider the rules of accessibility before choosing."
  }
];
