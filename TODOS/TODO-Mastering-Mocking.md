# Phase 2: Mastering Mocking - TODO List

This phase focuses on isolating your code from external dependencies
(databases, network requests, timers, etc.)
Using `node:test`'s built-in mocking capabilities.

- [x] **1. Mocking Functions (`mock.fn`)**
  - **Task:**
    Create a utility that accepts a callback function
    and executes it based on certain conditions.

  - **Goal:**
    Practice using `mock.fn()` to track
    how many times a callback was called and with what arguments.

- [x] **2. Mocking Object Methods (`mock.method`)**
  - **Task:**
    Create a `DatabaseService` or `FileService` utility
    with a method that returns a hardcoded result.

  - **Goal:**
    Practice using `mock.method()` to intercept a real method call
    and return a mock value instead.

- [x] **3. Mocking Timers**
  - **Task:**
    Create a "Debounce" or "Throttle" utility function that handles delays.

  - **Goal:**
    Practice using `mock.timers` to fast-forward time
    and avoid long waits in tests.

- [x] **4. Mocking Modules/Imports**
  - **Task:**
    Create a wrapper around a native module (like `node:fs` or `node:http`).

  - **Goal:**
    Learn how to mock external modules
    so your tests don't actually hit the file system or network.

---

## How to practice

1. Pick one TODO item.
2. I will provide the utility file.
3. You attempt to write the test in the corresponding `tests/` file.
4. If you get stuck, ask me for help or a review!
