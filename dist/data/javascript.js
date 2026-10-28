export default [
  {
    "id": "javascript-001",
    "language": "javascript",
    "topic": "Scope",
    "difficulty": "Medium",
    "format": "output",
    "question": "What does this code print?",
    "code": "console.log(value);\nlet value = 7;",
    "options": [
      {
        "id": "a",
        "text": "undefined"
      },
      {
        "id": "b",
        "text": "ReferenceError"
      },
      {
        "id": "c",
        "text": "7"
      },
      {
        "id": "d",
        "text": "null"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "A let binding exists in the temporal dead zone until its declaration is evaluated. Reading it earlier throws a ReferenceError.",
    "tags": [
      "Scope",
      "javascript"
    ],
    "hint": "Consider the rules of scope before choosing.",
    "explanationCode": "let value = 7;\nconsole.log(value); // 7: initialized before use"
  },
  {
    "id": "javascript-002",
    "language": "javascript",
    "topic": "Closures",
    "difficulty": "Medium",
    "format": "output",
    "question": "What does the second call return?",
    "code": "function counter() {\n  let n = 0;\n  return () => ++n;\n}\nconst next = counter();\nnext();\nnext();",
    "options": [
      {
        "id": "a",
        "text": "1"
      },
      {
        "id": "b",
        "text": "2"
      },
      {
        "id": "c",
        "text": "0"
      },
      {
        "id": "d",
        "text": "undefined"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Both calls share the same captured n binding. The first increments it to 1; the second increments it to 2.",
    "tags": [
      "Closures",
      "javascript"
    ],
    "hint": "Consider the rules of closures before choosing."
  },
  {
    "id": "javascript-003",
    "language": "javascript",
    "topic": "Async",
    "difficulty": "Medium",
    "format": "output",
    "question": "In what order are the values logged?",
    "code": "console.log(\"A\");\nPromise.resolve().then(() => console.log(\"B\"));\nconsole.log(\"C\");",
    "options": [
      {
        "id": "a",
        "text": "A, B, C"
      },
      {
        "id": "b",
        "text": "B, A, C"
      },
      {
        "id": "c",
        "text": "A, C, B"
      },
      {
        "id": "d",
        "text": "C, A, B"
      }
    ],
    "answers": [
      "c"
    ],
    "explanation": "Synchronous statements run first. The promise callback is a microtask and runs after the current stack finishes.",
    "tags": [
      "Async",
      "javascript"
    ],
    "hint": "Consider the rules of async before choosing."
  },
  {
    "id": "javascript-004",
    "language": "javascript",
    "topic": "Arrays",
    "difficulty": "Easy",
    "format": "multiple",
    "question": "Which methods create a new array?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "map()"
      },
      {
        "id": "b",
        "text": "filter()"
      },
      {
        "id": "c",
        "text": "push()"
      },
      {
        "id": "d",
        "text": "slice()"
      }
    ],
    "answers": [
      "a",
      "b",
      "d"
    ],
    "explanation": "map, filter and slice return new arrays. push changes the receiver and returns its new length.",
    "tags": [
      "Arrays",
      "javascript"
    ],
    "hint": "Consider the rules of arrays before choosing."
  },
  {
    "id": "javascript-005",
    "language": "javascript",
    "topic": "Equality",
    "difficulty": "Easy",
    "format": "output",
    "question": "What is the result?",
    "code": "3 === \"3\"",
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
        "text": "TypeError"
      },
      {
        "id": "d",
        "text": "undefined"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Strict equality does not convert operand types. A number and a string are different.",
    "tags": [
      "Equality",
      "javascript"
    ],
    "hint": "Consider the rules of equality before choosing."
  },
  {
    "id": "javascript-006",
    "language": "javascript",
    "topic": "Debugging",
    "difficulty": "Medium",
    "format": "bug",
    "question": "Why does every callback print 3?",
    "code": "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}",
    "options": [
      {
        "id": "a",
        "text": "Timers run immediately"
      },
      {
        "id": "b",
        "text": "var shares one function-scoped binding"
      },
      {
        "id": "c",
        "text": "console.log caches values"
      },
      {
        "id": "d",
        "text": "The loop never executes"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "var creates one shared i binding. By the time timers run, the loop has finished and i is 3. Use let for a fresh binding per iteration.",
    "tags": [
      "Debugging",
      "javascript"
    ],
    "hint": "Consider the rules of debugging before choosing."
  },
  {
    "id": "javascript-007",
    "language": "javascript",
    "topic": "Objects",
    "difficulty": "Easy",
    "format": "complete",
    "question": "Complete the code to copy an object’s own enumerable properties.",
    "code": "const copy = { /* ? */ };",
    "options": [
      {
        "id": "a",
        "text": "...user"
      },
      {
        "id": "b",
        "text": "*user"
      },
      {
        "id": "c",
        "text": "&user"
      },
      {
        "id": "d",
        "text": "user..."
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "Object spread copies own enumerable properties into a new object. This is a shallow copy.",
    "tags": [
      "Objects",
      "javascript"
    ],
    "hint": "Consider the rules of objects before choosing."
  },
  {
    "id": "javascript-008",
    "language": "javascript",
    "topic": "Functions",
    "difficulty": "Easy",
    "format": "boolean",
    "question": "An arrow function has its own this binding.",
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
      "b"
    ],
    "explanation": "Arrow functions capture this lexically from their enclosing scope.",
    "tags": [
      "Functions",
      "javascript"
    ],
    "hint": "Consider the rules of functions before choosing."
  },
  {
    "id": "javascript-009",
    "language": "javascript",
    "topic": "Async",
    "difficulty": "Hard",
    "format": "comparison",
    "question": "Which snippet waits for each task sequentially?",
    "code": "// Snippet A\nitems.forEach(async item => await save(item));\n\n// Snippet B\nfor (const item of items) {\n  await save(item);\n}",
    "options": [
      {
        "id": "a",
        "text": "Snippet A"
      },
      {
        "id": "b",
        "text": "Snippet B"
      },
      {
        "id": "c",
        "text": "Both"
      },
      {
        "id": "d",
        "text": "Neither"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "forEach does not await async callbacks. A for...of loop with await waits before starting its next iteration.",
    "tags": [
      "Async",
      "javascript"
    ],
    "hint": "Consider the rules of async before choosing."
  },
  {
    "id": "javascript-010",
    "language": "javascript",
    "topic": "Memory",
    "difficulty": "Hard",
    "format": "debug",
    "question": "A growing Map stores every request object forever. What is the likely issue?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Stack overflow"
      },
      {
        "id": "b",
        "text": "Retained references prevent collection"
      },
      {
        "id": "c",
        "text": "Automatic eviction is too fast"
      },
      {
        "id": "d",
        "text": "Promises cannot be collected"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Strong references in the Map keep entries reachable. Bound the cache or remove entries when they are no longer needed.",
    "tags": [
      "Memory",
      "javascript"
    ],
    "hint": "Consider the rules of memory before choosing."
  },
  {
    "id": "javascript-011",
    "language": "javascript",
    "topic": "Prototypes",
    "difficulty": "Medium",
    "format": "interview",
    "question": "What does Object.create(null) produce?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "An array"
      },
      {
        "id": "b",
        "text": "An object with no prototype"
      },
      {
        "id": "c",
        "text": "A frozen object"
      },
      {
        "id": "d",
        "text": "null"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Object.create(null) creates an object whose [[Prototype]] is null. It does not inherit Object.prototype properties.",
    "tags": [
      "Prototypes",
      "javascript"
    ],
    "hint": "Consider the rules of prototypes before choosing."
  },
  {
    "id": "javascript-012",
    "language": "javascript",
    "topic": "Coercion",
    "difficulty": "Easy",
    "format": "output",
    "question": "What is printed?",
    "code": "console.log(1 + \"1\");",
    "options": [
      {
        "id": "a",
        "text": "11"
      },
      {
        "id": "b",
        "text": "2"
      },
      {
        "id": "c",
        "text": "NaN"
      },
      {
        "id": "d",
        "text": "TypeError"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "With a string operand, + performs concatenation after primitive conversion. 1 becomes \"1\".",
    "tags": [
      "Coercion",
      "javascript"
    ],
    "hint": "Consider the rules of coercion before choosing."
  },
  {
    "id": "javascript-013",
    "language": "javascript",
    "topic": "Fundamentals",
    "difficulty": "Easy",
    "format": "mcq",
    "question": "Which declaration creates a block-scoped variable that can be reassigned?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "let score = 0;"
      },
      {
        "id": "b",
        "text": "const score = 0;"
      },
      {
        "id": "c",
        "text": "var score = 0;"
      },
      {
        "id": "d",
        "text": "static score = 0;"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "let is block-scoped and allows reassignment. const is also block-scoped but does not permit reassignment of its binding. var is function-scoped.",
    "tags": [
      "Fundamentals",
      "javascript"
    ],
    "hint": "Consider the rules of fundamentals before choosing."
  }
];
