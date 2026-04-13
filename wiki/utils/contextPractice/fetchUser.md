# Documentation: Testing Asynchronous Code with `fetchUser`

This document explains how to test asynchronous functions
using `async/await` and `assert.rejects` with Node.js built-in testing.

## Source Code Analysis (`fetchUser.js`)

The `fetchUser` function simulates an asynchronous API call.
It returns a user object on success
and throws an error if the provided ID is invalid (negative).

```javascript
export const fetchUser = async (id) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  if (id < 0) throw new Error("User not found");

  return { id, name: "API User" };
};
```

## Testing Implementation (`fetchUser.test.js`)

### Key Concepts

- **`async/await` in tests**:
  Since `node:test` supports async test functions,
  we mark our test callbacks as `async` and `await` the function call.
  This ensures the test runner waits for the promise to resolve or reject.

- **`assert.rejects()`**:
  Used to test that a promise is rejected as expected.
  We wrap the function call in an async function
  and verify the thrown error's message.

## Test Cases

- **Valid Fetch**:
  Validates that a valid user ID returns the expected user object after the simulated network delay.

- **Error Handling**:
  Validates that an invalid user ID (-1) correctly throws the expected "User not found" error.

## How to Run

```bash
npm test
```
