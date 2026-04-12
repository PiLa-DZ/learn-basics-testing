# Documentation: Testing `getTopCategory`

This document explains the unit testing implementation
for the `getTopCategory` utility function.

## Source Code Analysis (`getTopCategory.js`)

The function aggregates total spending by category using `reduce`
and then identifies the category with the highest total.
It includes a guard clause to return `null` for empty inputs
and uses a `>=` comparison during reduction
to ensure consistent "first-found" behavior in case of a tie.

```javascript
export const getTopCategory = (expenses) => {
  if (expenses.length === 0) return null;
  const totals = expenses.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {});
  return Object.keys(totals).reduce((a, b) => (totals[a] >= totals[b] ? a : b));
};
```

## Testing Implementation (`getTopCategory.test.js`)

### Key Concepts

- **Data Aggregation**:
  Verifies that the logic correctly groups expenses
  by category before calculating the winner.

- **Consistency**:
  We explicitly test tie-breaking logic
  to ensure the function behaves predictably.

## Test Cases

- **Highest Total**:
  Validates that it correctly identifies the category with the most spending.

- **Tie-Breaking**:
  Validates that when two categories have equal totals,
  the first one encountered is returned.

- **Empty Array**: Validates that providing no expenses returns `null`.

## How to Run

```bash
npm test
```
