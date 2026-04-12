# Documentation: Testing `aggregateByCategory`

This document explains the unit testing implementation
for the `aggregateByCategory` utility function.

## Source Code Analysis (`aggregateByCategory.js`)

The function transforms an array of expense objects
into an object where keys are categories
and values are the sum of amounts for that category.

It uses `Array.prototype.reduce`
to iterate over the array and build the resulting totals object.

```javascript
export const aggregateByCategory = (expenses) => {
  return expenses.reduce((acc, curr) => {
    // If the category doesn't exist in the accumulator, initialize to 0
    // then add the current expense amount
    acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {}); // Start with an empty object
};
```

## Testing Implementation (`aggregateByCategory.test.js`)

### Key Concepts

- **Deep Equality Assertion**:
  Since the function returns an object,
  we use `assert.deepStrictEqual`
  to verify that the entire structure
  and content of the result match our expectation,
  rather than checking object references.

- **Transformation Logic**:
  We verify that the function effectively
  reduces multiple input items into a single summary object.

## Test Cases

- **Aggregation**:
  Validates that expenses with matching categories are correctly summed together.

- **Empty Array**:
  Validates that an empty input array
  returns an empty object `{}` rather than `undefined` or `null`.

## How to Run

```bash
npm test
```
