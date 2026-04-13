# Documentation: Testing `applyDiscount`

This document explains the unit testing implementation
for the `applyDiscount` business rule.

## Source Code Analysis (`applyDiscount.js`)

The function applies a 10% discount if the amount is greater
than 100 AND the user status is "premium". Otherwise,
it returns the original amount.

```javascript
export const applyDiscount = (amount, userStatus) => {
  if (amount > 100 && userStatus === "premium") {
    return amount * 0.9;
  }
  return amount;
};
```

## Testing Implementation (`applyDiscount.test.js`)

### Key Concepts

- **Business Rule Coverage**:
  We verify the dual-condition requirement
  (amount > 100 AND status = "premium").

- **Logic Branching**:
  We test all paths:
  the discount application,
  failing the amount threshold,
  and failing the status requirement.

## Test Cases

- **Discount Applied**:
  Validates that premium users with > 100 receive a 10% discount.

- **Amount Threshold**:
  Validates that no discount is applied if the amount is exactly 100.

- **Status Check**:
  Validates that no discount is applied
  for non-premium users, even if the amount is above 100.

## How to Run

```bash
npm test
```
