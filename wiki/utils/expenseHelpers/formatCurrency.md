# Documentation: Testing `formatCurrency`

This document explains the unit testing implementation
for the `formatCurrency` utility function.

## Source Code Analysis (`formatCurrency.js`)

The function takes a numeric amount,
ensures it is treated as a float,
and formats it to two decimal places prefixed with a dollar sign.

```javascript
export const formatCurrency = (amount) => {
  return `$${parseFloat(amount).toFixed(2)}`;
};
```

## Testing Implementation (`formatCurrency.test.js`)

### Key Concepts

- **Precision Control**:
  We use `toFixed(2)` to enforce a consistent display format,
  which is critical for financial applications.

- **Input Flexibility**:
  The function uses `parseFloat`,
  allowing it to handle both numeric
  and string representations of currency safely.

## Test Cases

- **Rounding**:
  Validates that long float values are correctly rounded to two decimal places.

- **String Input**:
  Validates that string-based numeric inputs
  (often resulting from terminal or form inputs)
  are correctly parsed and formatted.

- **Zero Value**: Validates that a zero input is formatted as `"$0.00"`.

## How to Run

```bash
npm test
```
