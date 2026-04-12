# Documentation: Testing `calculateCategoryShares`

This document explains the unit testing implementation
for the `calculateCategoryShares` utility function.

## Source Code Analysis (`calculateCategoryShares.js`)

The function accepts an object of category totals
and a total budget,
then maps these into an array of objects,
adding a `percentage` property formatted as a string.

```javascript
export const calculateCategoryShares = (categoryTotals, totalBudget) => {
  return Object.entries(categoryTotals).map(([category, amount]) => ({
    category,
    amount,
    percentage:
      totalBudget > 0 ? ((amount / totalBudget) * 100).toFixed(1) + "%" : "0%",
  }));
};
```

## Testing Implementation (`calculateCategoryShares.test.js`)

### Key Concepts

- **Array Transformation**:
  The test verifies that the object-based input
  is correctly converted into an array of objects
  with the added `percentage` field.

- **Percentage Formatting**:
  We verify that the result correctly
  uses `toFixed(1)` and appends the `%` symbol.

## Test Cases

- **Valid Calculation**:
  Validates that it correctly calculates the percentage
  for different categories relative to the provided total budget.

- **Zero Budget**:
  Validates the guard clause that prevents division by zero,
  ensuring it returns `0%` when `totalBudget` is 0.

## How to Run

```bash
npm test
```
