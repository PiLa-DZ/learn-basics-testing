# Documentation: Testing `debounce` with Timer Mocks

This document explains the unit testing implementation for the `debounce` utility,
specifically demonstrating how to handle asynchronous delays using `mock.timers`.

## Source Code Analysis (`debounce.js`)

The `debounce` function delays the execution of a provided callback until
a specified time has passed without any new calls.

If the function is called again before the delay,
the previous timer is cancelled and reset.

```javascript
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
```

## Testing Implementation (`debounce.test.js`)

### Key Concepts

- **`mock.timers.enable()`**:
  Necessary to override the default `setTimeout`
  and `clearTimeout` functions,
  allowing us to control time.

- **`mock.timers.tick(ms)`**:
  Advances the internal mock clock by the specified number of milliseconds,
  triggering any scheduled timers.

## Test Cases

- **Execution Delay**:
  Validates that the callback function is NOT called immediately
  but IS called after the required `delay` period.

- **Reset Logic**:
  Validates that calling the function again before
  the delay finishes resets the timer,
  preventing the callback from executing prematurely.

## How to Run

```bash
npm test
```
