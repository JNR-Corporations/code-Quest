export default [
  {
    "id": "go-003",
    "language": "go",
    "topic": "Defer",
    "difficulty": "Easy",
    "format": "output",
    "question": "What is printed?",
    "code": "func main() {\n  defer fmt.Println(\"B\")\n  fmt.Println(\"A\")\n}",
    "options": [
      {
        "id": "a",
        "text": "A then B"
      },
      {
        "id": "b",
        "text": "B then A"
      },
      {
        "id": "c",
        "text": "Only A"
      },
      {
        "id": "d",
        "text": "Compilation error"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "Deferred calls run when the surrounding function returns. The direct print runs first.",
    "tags": [
      "Defer",
      "go"
    ],
    "hint": "Consider the rules of defer before choosing."
  }
];
