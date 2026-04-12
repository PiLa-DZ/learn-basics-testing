# Backend Engineering Roadmap: Testing & Mocking

This roadmap focuses on practical, iterative learning.

We will use the built-in `node:test` module,
which is lightweight, modern,
and excellent for learning the fundamentals without the overhead of heavy external dependencies.

## Phase 1: Foundations of Testing

- **The Philosophy of Verification:** Moving from manual verification to automated scripts.

- **`node:test` Basics:**
  - Creating your first test file (`*.test.js` or `*.spec.js`).
  - Using `test()` and `describe()` blocks for structure.
  - Assertions: Using `node:assert` (strict equality, deep equality, and throwing checks).

- **Project 1 (Unit Testing):**
  Refactor a utility function from your _Expense-Tracker_ or _Task-Tracker_
  into a testable format and write comprehensive unit tests.

## Phase 2: Mastering Mocking

- **What is Mocking?**
  Understanding why we isolate code from external dependencies (DBs, APIs, File System).

- **Mocking Strategy in `node:test`:**
  - Using `mock.fn()` and `mock.method()` to track calls and control return values.
  - Mocking Timers: Controlling time-dependent code.
  - Spying: Verifying that functions were called with correct arguments.

- **Project 2 (Mocking):**
  Create a service in _EduRegistry-API_
  that interacts with an external service
  (e.g., a mock email sender or a mock external payment API)
  and write tests that mock these interactions.

## Phase 3: Testing in Context

- **Testing Asynchronous Code:** Handling `async/await` and Promises in tests.

- **Lifecycle Hooks:**
  Mastering `before`, `after`, `beforeEach`, `afterEach`
  to manage test setups and teardowns (crucial for database testing).

- **Project 3 (Database Integration):**
  Use Prisma with an in-memory SQLite database
  to perform integration tests on your _users-todo-app-using-prisma_.

## Phase 4: Quality & Maintenance

- **Test Coverage:** Understanding how to measure what code your tests actually run.

- **Continuous Integration (CI):** Setting up a GitHub Action to automatically run your test suite on every PR or push.

- **Final Project:** Build a comprehensive test suite for a new, small feature in any of your existing projects.

## Recommended File Structure

To maintain consistency throughout this repository,
adopt this structure for your testing files:

```text
/project-name
├── src/
│   ├── index.ts          # Main source code
│   └── math.ts           # Utility function to test
├── tests/                # Dedicated folder for tests
│   └── math.test.ts      # Test file matching source filename
└── package.json          # "test": "node --test" script here
```

By keeping tests in a `tests/` directory at the project root
(or next to the source files as `*.test.ts`),
you keep your production code clean while ensuring tests are easily discoverable.

1. **Don't over-engineer:**
   Start by testing the "Happy Path" (what should happen).
   Once that works,
   add tests for "Edge Cases" (what happens if the input is wrong?).

2. **"Red-Green-Refactor":**
   Write a failing test,
   write the minimal code to make it pass,
   then clean up the code.

3. **Use the wiki:**
   For every concept you master,
   write a short summary in this wiki.
   This reinforces your learning and creates a reference you will use for years.
