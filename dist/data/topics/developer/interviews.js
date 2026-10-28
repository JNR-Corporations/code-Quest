export default [
  {
    "id": "developer-006",
    "language": "developer",
    "topic": "Interviews",
    "difficulty": "Medium",
    "format": "interview",
    "question": "Which statement about caching is most accurate?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "It always guarantees freshness"
      },
      {
        "id": "b",
        "text": "It trades resources and invalidation complexity for faster repeated access"
      },
      {
        "id": "c",
        "text": "It removes all failure modes"
      },
      {
        "id": "d",
        "text": "It always reduces memory"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Caching can speed up repeated reads, but requires policies for size, freshness and invalidation.",
    "tags": [
      "Interviews",
      "developer"
    ],
    "hint": "Consider the rules of interviews before choosing."
  }
];
