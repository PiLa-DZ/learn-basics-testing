# Documentation: Testing with `mock.method`

This document explains how to isolate code dependencies
using `mock.method` in Node.js,
specifically targeting class-based services.

## Source Code Analysis (`DatabaseService.js`)

The `DatabaseService` class represents a dependency
(like a database connection)
that we want to avoid hitting during unit tests.

```javascript
export class DatabaseService {
  getUser(id) {
    // Real implementation would go here
    return { id, name: "Real User", role: "user" };
  }
}
```

## Testing Implementation (`DatabaseService.test.js`)

### Key Concepts

- **`mock.method(object, methodName, implementation)`**:
  This is the core tool for intercepting calls to object methods.
  It replaces the real method implementation with our provided mock,
  allowing us to control the return value and behavior during the test.

- **`.mock.calls`**:
  Just like with `mock.fn`,
  `mock.method` adds a `mock` property to the method,
  allowing us to inspect how many times it was called
  and what arguments were passed.

- **`.mock.restore()`**:
  Essential for clean tests,
  it restores the original method implementation after the test finishes,
  preventing interference with other tests.

## Test Cases

- **Method Interception**:
  Validates that calling the mocked method returns the injected data instead of the real implementation.

- **Interaction Tracking**: Validates that the service was called with the expected arguments.

## How to Run

```bash
npm test
```
