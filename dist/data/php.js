export default [
  {
    "id": "php-001",
    "language": "php",
    "topic": "Equality",
    "difficulty": "Easy",
    "format": "output",
    "question": "What is printed?",
    "code": "var_export(5 === \"5\");",
    "options": [
      {
        "id": "a",
        "text": "true"
      },
      {
        "id": "b",
        "text": "false"
      },
      {
        "id": "c",
        "text": "null"
      },
      {
        "id": "d",
        "text": "Error"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Strict equality checks both value and type. The integer and string differ in type.",
    "tags": [
      "Equality",
      "php"
    ],
    "hint": "Consider the rules of equality before choosing."
  },
  {
    "id": "php-002",
    "language": "php",
    "topic": "Arrays",
    "difficulty": "Easy",
    "format": "boolean",
    "question": "A PHP array can act as an ordered map.",
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
    "explanation": "PHP arrays are ordered maps supporting integer and string keys.",
    "tags": [
      "Arrays",
      "php"
    ],
    "hint": "Consider the rules of arrays before choosing."
  },
  {
    "id": "php-003",
    "language": "php",
    "topic": "Security",
    "difficulty": "Medium",
    "format": "concept",
    "question": "Which approach helps prevent SQL injection?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "String concatenation"
      },
      {
        "id": "b",
        "text": "Prepared statements with bound values"
      },
      {
        "id": "c",
        "text": "Removing spaces"
      },
      {
        "id": "d",
        "text": "Base64 encoding"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Prepared statements separate SQL structure from bound data. Dynamic identifiers still need appropriate allowlisting.",
    "tags": [
      "Security",
      "php"
    ],
    "hint": "Consider the rules of security before choosing."
  },
  {
    "id": "php-004",
    "language": "php",
    "topic": "Syntax",
    "difficulty": "Easy",
    "format": "syntax",
    "question": "Which accesses an object property?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "$user->name"
      },
      {
        "id": "b",
        "text": "$user.name"
      },
      {
        "id": "c",
        "text": "user::name()"
      },
      {
        "id": "d",
        "text": "$user[name] only"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "The -> operator accesses instance properties and methods.",
    "tags": [
      "Syntax",
      "php"
    ],
    "hint": "Consider the rules of syntax before choosing."
  }
];
