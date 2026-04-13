# Documentation: Testing `willExceedBudget`

This document explains the unit testing implementation
for the `willExceedBudget` business rule.

## Source Code Analysis (`willExceedBudget.js`)

The function checks if the sum of current expenses plus
a new expense exceeds a defined monthly budget limit.

```javascript
export const willExceedBudget = (currentTotal, newAmount, monthlyLimit) => {
  return currentTotal + newAmount > monthlyLimit;
};
```

## Testing Implementation (`willExceedBudget.test.js`)

### Key Concepts

- **Boundary Condition**:
  We verify that the function correctly identifies
  when a budget is exceeded and when it is not.

- **Equality Case**:
  We explicitly test the boundary where the total equals the budget,
  confirming that this does _not_ exceed the budget.

## Test Cases

- **Exceeding**:
  Validates that it returns `true` when the new total is greater than the limit.

- **Within Limit**:
  Validates that it returns `false` when the new total is less than the limit.

- **At Limit**:
  Validates that it returns `false` when the new total is exactly equal to the limit.

## How to Run

```bash
npm test
```
