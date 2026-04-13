# Documentation: Testing `prepareDbPayload`

This document explains the unit testing implementation
for the `prepareDbPayload` utility function.

## Source Code Analysis (`prepareDbPayload.js`)

The function transforms raw CLI inputs into a clean object structured
for a Prisma database `create` call.

It includes validation to ensure required fields are present
and automatically sets a `createdAt` timestamp.

```javascript
export const prepareDbPayload = (description, amount, userId) => {
  if (!description || !amount || !userId)
    throw new Error("Missing required fields");

  return {
    data: {
      description: description.trim(),
      amount: parseFloat(amount),
      user: { connect: { id: userId } },
      createdAt: new Date().toISOString(),
    },
  };
};
```

## Testing Implementation (`prepareDbPayload.test.js`)

### Key Concepts

- **Mock Timers**:
  We use `mock.timers.enable` to lock the system time,
  ensuring the `createdAt` timestamp is predictable during tests.

- **Error Assertion**:
  We use `assert.throws` to verify that the function correctly enforces input validation.

## Test Cases

- **Valid Payload**:
  Validates that all inputs are correctly mapped into the final Prisma-compatible object,
  including trim for description and float conversion for amount.

- **Input Validation**: Validates that it throws an error if any required field is missing.

## How to Run

```bash
npm test
```
