# Documentation: Testing `calculateTotal`

This document explains the unit testing implementation
for the `calculateTotal` utility function
using Node.js built-in testing modules.

## Source Code Analysis (`calculateTotal.js`)

The function calculates the sum of `amount` properties
within an array of expense objects
using the `Array.prototype.reduce` method.

```javascript
export const calculateTotal = (expenses) => {
  return expenses.reduce((sum, item) => sum + item.amount, 0);
};
```

## Testing Implementation (`calculateTotal.test.js`)

### Key Concepts

- **Test Organization**:
  We use `describe` blocks to group related tests,
  which improves readability and helps structure the test suite hierarchy.

- **`node:test`**: A built-in Node.js module that provides a test runner...
  It allows you to define tests without needing third-party libraries
  like Jest or Mocha.
  - **`test(name, fn)`**:
    The core function used to define an individual test.
    It takes a description of what the test verifies
    and a function containing the test logic.

1. **`node:assert`**:
   A built-in module used for verifying expectations in your tests.
   - **`assert.strictEqual(actual, expected)`**:
     Checks that the `actual` value is strictly equal (`===`) to the `expected` value.
     If they are not equal,
     the test fails, providing a clear error message.

## Test Cases

- **"Happy Path"**:
  Validates that the function correctly sums various expense amounts
  (e.g., `10 + 20 + 30 = 60`).

- **Edge Case**:
  Validates that the function handles an empty array correctly,
  returning `0` as defined by the `reduce` initial value.

## How to Run

The project uses `node --test`
in the `scripts.test` entry
of `package.json`.
Run the tests via:

```bash
npm test
```
