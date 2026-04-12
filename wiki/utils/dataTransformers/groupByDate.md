# Documentation: Testing `groupByDate`

This document explains the unit testing implementation
for the `groupByDate` utility function.

## Source Code Analysis (`groupByDate.js`)

The function organizes an array of expense objects into an object
where keys are date strings (`"YYYY-MM-DD"`)
and values are arrays containing the corresponding expense objects
for that day.

It uses `Array.prototype.reduce` to build the grouping object.

```javascript
export const groupByDate = (expenses) => {
  return expenses.reduce((acc, expense) => {
    const date = expense.date;
    if (!acc[date]) acc[date] = [];
    acc[date].push(expense);
    return acc;
  }, {});
};
```

## Testing Implementation (`groupByDate.test.js`)

### Key Concepts

- **Grouping Logic**:
  We verify that the function correctly associates
  multiple expense objects with the same date key.

- **Deep Equality Assertion**:
  Since the result is a complex object containing arrays,
  `assert.deepStrictEqual` ensures the entire structure is grouped correctly.

## Test Cases

- **Date Grouping**:
  Validates that expenses on the same date
  are grouped together in their respective arrays.

- **Empty Array**:
  Validates that providing no expenses returns an empty object `{}`.

## How to Run

```bash
npm test
```
