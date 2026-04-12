# Documentation: Testing `isValidAmount`

This document explains the unit testing implementation
for the `isValidAmount` utility function.

## Source Code Analysis (`isValidAmount.js`)

The function validates that a given input is a positive number.
It converts the input using `parseFloat`
and checks that the result is both a valid number (`!isNaN`)
and greater than zero.

```javascript
export const isValidAmount = (amount) => {
  const num = parseFloat(amount);
  return !isNaN(num) && num > 0;
};
```

## Testing Implementation (`isValidAmount.test.js`)

### Key Concepts

- **Input Normalization**:
  We verify that the function handles both numbers and strings
  containing numeric values (e.g., `"5.5"`) correctly.

- **Robust Edge Case Testing**:
  We explicitly test the boundaries and invalid inputs,
  including `0` (not positive), `NaN` (not a number), and negative numbers.

## Test Cases

- **Positive Cases**:
  Returns `true` for valid positive integers or floats,
  regardless of whether they are provided as a `number` or a `string`.

- **Negative/Invalid Cases**:
  Returns `false` for `0`, `NaN`, and negative numbers,
  ensuring the function only accepts strictly positive values.

## How to Run

```bash
npm test
```
