# Documentation: Testing `getStoragePath`

This document explains the unit testing implementation
for the `getStoragePath` utility function,
specifically demonstrating
how to handle time-dependent tests using `mock.timers`.

## Source Code Analysis (`getStoragePath.js`)

The function generates a file storage path based
on the year and month of the provided date.

If no date is provided, it defaults to the current system time.

```javascript
export const getStoragePath = (baseDir, fileName, date = new Date()) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${baseDir}/${year}/${month}/${fileName}`;
};
```

## Testing Implementation (`getStoragePath.test.js`)

### Key Concepts

- **Mock Timers**:
  We use `mock.timers.enable` to control the "current" system time.
  This allows us to test code that relies on `new Date()`
  without being affected by the actual time the test is executed,
  ensuring deterministic results.

- **Deterministic Testing**:
  By forcing a fixed time,
  we ensure tests always pass regardless
  of the environment or execution timing.

## Test Cases

- **Provided Date**:
  Validates that the function correctly
  parses a specific date provided as an argument.

- **Default Current Date**:
  Validates that the function uses the current system time
  when no date is provided,
  confirmed by mocking the `Date` constructor.

## How to Run

```bash
npm test
```
