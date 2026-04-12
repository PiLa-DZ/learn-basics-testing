# Documentation: Testing `getTopExpensiveItems`

This document explains the unit testing implementation
for the `getTopExpensiveItems` utility function.

## Source Code Analysis (`getTopExpensiveItems.js`)

The function takes an array of expenses,
sorts them in descending order based on their amount,
and returns a sliced subset of the top N most expensive items.

It uses a shallow copy (`[...expenses]`)
to ensure the original input array is not mutated during the sort operation.

```javascript
export const getTopExpensiveItems = (expenses, limit = 3) => {
  return [...expenses].sort((a, b) => b.amount - a.amount).slice(0, limit);
};
```

## Testing Implementation (`getTopExpensiveItems.test.js`)

### Key Concepts

- **Immutability Verification**:
  We ensure the original array remains untouched
  by verifying the sort operation happens on a shallow copy.

- **Sorting Logic**:
  We verify that the items are correctly ordered from highest to lowest amount.

## Test Cases

- **Standard Limit**: Validates that it correctly returns the top N items.

- **Default Limit**: Validates that it uses a default limit of 3 when none is provided.

- **Limit Overflow**:
  Validates that it handles requests where the requested limit
  is greater than the available number of items.

## How to Run

```bash
npm test
```
