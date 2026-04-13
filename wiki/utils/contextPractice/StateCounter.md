# Documentation: Testing with Lifecycle Hooks (`beforeEach`)

This document explains how to isolate test state using lifecycle hooks in Node.js.

## Source Code Analysis (`StateCounter.js`)

The `stateCounter` utility maintains shared state (`count`).
In a real application,
this could represent a cache,
a database connection pool,
or a user session.

```javascript
export const stateCounter = {
  count: 0,
  increment() {
    this.count++;
    return this.count;
  },
  reset() {
    this.count = 0;
  },
};
```

## Testing Implementation (`StateCounter.test.js`)

### Key Concepts

- **`beforeEach(fn)`**:
  A lifecycle hook that runs the provided function
  before every individual `test()` block.
  This is critical for ensuring that shared state is reset,
  preventing tests from polluting each other (test isolation).

- **Test Isolation**:
  By resetting the counter in `beforeEach`,
  we guarantee that every test starts with a clean slate of `0`,
  regardless of which tests ran before it.

## Test Cases

- **Isolation Check**:
  Validates that each test starts with the counter at `0`
  by checking that the return value of `increment()` is always `1`.

## How to Run

```bash
npm test
```
