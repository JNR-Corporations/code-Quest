export default [
  {
    "id": "android-001",
    "language": "android",
    "topic": "Architecture",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What is a ViewModel mainly responsible for?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Drawing individual pixels"
      },
      {
        "id": "b",
        "text": "Holding and preparing UI state"
      },
      {
        "id": "c",
        "text": "Replacing every database"
      },
      {
        "id": "d",
        "text": "Requesting every permission"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "A ViewModel exposes screen state and related logic while surviving supported configuration changes. It should avoid retaining an Activity.",
    "tags": [
      "Architecture",
      "android"
    ],
    "hint": "Consider the rules of architecture before choosing."
  },
  {
    "id": "android-002",
    "language": "android",
    "topic": "Lifecycle",
    "difficulty": "Easy",
    "format": "concept",
    "question": "Which callback typically marks an Activity becoming interactive?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "onCreate"
      },
      {
        "id": "b",
        "text": "onResume"
      },
      {
        "id": "c",
        "text": "onDestroy"
      },
      {
        "id": "d",
        "text": "onSaveInstanceState"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "onResume places the Activity in its resumed foreground state, normally ready for user interaction.",
    "tags": [
      "Lifecycle",
      "android"
    ],
    "hint": "Consider the rules of lifecycle before choosing."
  },
  {
    "id": "android-003",
    "language": "android",
    "topic": "Jetpack Compose",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What triggers recomposition for UI that reads mutable state?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Changing observed state"
      },
      {
        "id": "b",
        "text": "Changing any local variable"
      },
      {
        "id": "c",
        "text": "Only rotating the device"
      },
      {
        "id": "d",
        "text": "Only restarting the app"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "Compose tracks state reads and schedules recomposition when observed state changes.",
    "tags": [
      "Jetpack Compose",
      "android"
    ],
    "hint": "Consider the rules of jetpack compose before choosing."
  },
  {
    "id": "android-004",
    "language": "android",
    "topic": "Coroutines",
    "difficulty": "Medium",
    "format": "concept",
    "question": "Which dispatcher is intended for blocking I/O work?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Dispatchers.Main"
      },
      {
        "id": "b",
        "text": "Dispatchers.IO"
      },
      {
        "id": "c",
        "text": "Only Dispatchers.Default"
      },
      {
        "id": "d",
        "text": "No dispatcher can handle I/O"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Dispatchers.IO is designed for blocking I/O tasks. UI mutations belong on the appropriate main context.",
    "tags": [
      "Coroutines",
      "android"
    ],
    "hint": "Consider the rules of coroutines before choosing."
  },
  {
    "id": "android-005",
    "language": "android",
    "topic": "Intents",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What is an implicit intent?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "An intent specifying a target class"
      },
      {
        "id": "b",
        "text": "A request described by action and data for a matching component"
      },
      {
        "id": "c",
        "text": "A hidden permission"
      },
      {
        "id": "d",
        "text": "A background thread"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Implicit intents describe what to do, letting Android resolve a matching component.",
    "tags": [
      "Intents",
      "android"
    ],
    "hint": "Consider the rules of intents before choosing."
  },
  {
    "id": "android-006",
    "language": "android",
    "topic": "Navigation",
    "difficulty": "Easy",
    "format": "concept",
    "question": "What normally happens when Back pops a navigation entry?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "The previous destination is revealed"
      },
      {
        "id": "b",
        "text": "Every file is deleted"
      },
      {
        "id": "c",
        "text": "A new permission is granted"
      },
      {
        "id": "d",
        "text": "The network disconnects"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "Back generally removes the current navigation entry and reveals the preceding destination, subject to app handling.",
    "tags": [
      "Navigation",
      "android"
    ],
    "hint": "Consider the rules of navigation before choosing."
  },
  {
    "id": "android-007",
    "language": "android",
    "topic": "Storage",
    "difficulty": "Easy",
    "format": "concept",
    "question": "Where should sensitive private app files normally be stored?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Public Downloads by default"
      },
      {
        "id": "b",
        "text": "App-specific internal storage"
      },
      {
        "id": "c",
        "text": "The clipboard"
      },
      {
        "id": "d",
        "text": "A public media folder"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Internal app-specific storage is sandboxed from other ordinary apps and suits private app files.",
    "tags": [
      "Storage",
      "android"
    ],
    "hint": "Consider the rules of storage before choosing."
  },
  {
    "id": "android-008",
    "language": "android",
    "topic": "Permissions",
    "difficulty": "Easy",
    "format": "concept",
    "question": "When should a runtime permission be requested?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "On every launch regardless of use"
      },
      {
        "id": "b",
        "text": "In context when its protected feature is needed"
      },
      {
        "id": "c",
        "text": "Only after an app crashes"
      },
      {
        "id": "d",
        "text": "Never explain the request"
      }
    ],
    "answers": [
      "b"
    ],
    "explanation": "Request permissions at the point of need, explain the purpose where appropriate, and handle denial gracefully.",
    "tags": [
      "Permissions",
      "android"
    ],
    "hint": "Consider the rules of permissions before choosing."
  },
  {
    "id": "android-009",
    "language": "android",
    "topic": "Performance",
    "difficulty": "Easy",
    "format": "debug",
    "question": "A screen freezes during a large file read. What should change?",
    "code": "",
    "options": [
      {
        "id": "a",
        "text": "Move blocking work off the main thread"
      },
      {
        "id": "b",
        "text": "Add more main-thread loops"
      },
      {
        "id": "c",
        "text": "Hide the progress indicator"
      },
      {
        "id": "d",
        "text": "Raise font size"
      }
    ],
    "answers": [
      "a"
    ],
    "explanation": "Blocking work on the main thread prevents input and drawing. Use an appropriate background execution mechanism.",
    "tags": [
      "Performance",
      "android"
    ],
    "hint": "Consider the rules of performance before choosing."
  }
];
