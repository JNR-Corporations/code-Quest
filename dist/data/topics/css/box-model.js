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
  }
];
