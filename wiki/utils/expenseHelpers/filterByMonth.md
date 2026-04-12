# Documentation: Testing `filterByMonth`

This document explains the unit testing implementation
for the `filterByMonth` utility function.

## Source Code Analysis (`filterByMonth.js`)

The function filters an array of expense objects based on a provided month (1-12).

It extracts the month from the `date` string property of each expense.

Note that `Date.prototype.getMonth()` returns 0-indexed months (0-11),
so we add 1 to match the human-readable 1-12 format.

```javascript
export const filterByMonth = (expenses, month) => {
  return expenses.filter((expense) => {
    const expenseMonth = new Date(expense.date).getMonth() + 1;
    return expenseMonth === parseInt(month);
  });
};
```

## Testing Implementation (`filterByMonth.test.js`)

### Key Concepts

- **Test Organization**:
  We use `describe` blocks to group related tests,
  which improves readability and helps structure the test suite hierarchy.

- **Array Filtering**:
  We verify that the function successfully returns...
  only the items that meet the criteria.

- **Deep Assertion**:
  We check not only the length of the returned array
  but also verify specific properties of the items
  inside the array using `assert.strictEqual`.

## Test Cases

- **Matching Month**:
  Validates that it correctly identifies and returns
  all expenses belonging to the specified month.

- **No Matches**:
  Validates that providing a month with no matching expenses
  returns an empty array.

## How to Run

```bash
npm test
```
