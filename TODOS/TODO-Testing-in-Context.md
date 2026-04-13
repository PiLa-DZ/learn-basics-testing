# Phase 3: Testing in Context - TODO List

This phase focuses on testing complex,
real-world scenarios including asynchronous operations,
setup/teardown cycles,
and database integration.

- [x] **1. Testing Asynchronous Code**
  - **Task:** Create an async utility that fetches data from an API (using `fetch`).
  - **Goal:** Master `async/await` in `test()` blocks and verify promise resolutions/rejections.

- [x] **2. Lifecycle Hooks (`beforeEach` / `afterEach`)**
  - **Task:**
    Create a shared resource (like an in-memory counter or state manager)
    and use lifecycle hooks to reset it before every test.

  - **Goal:**
    Learn how to isolate tests by managing shared state safely across multiple test cases.

- [x] **3. Project 3: Database Integration (Prisma + SQLite)**
  - **Task:** Write integration tests for `users-todo-app-using-prisma`.
  - **Goal:**
    Use `before` and `after` hooks to connect to an in-memory SQLite database,
    run migrations, seed data, and clean up after tests.

---

### How to practice

1. Pick one TODO item.
2. I will provide the utility or project context.
3. You attempt to write the test.
4. If you get stuck, ask me for help or a review!
