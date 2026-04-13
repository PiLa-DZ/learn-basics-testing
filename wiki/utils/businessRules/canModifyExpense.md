# Documentation: Testing `canModifyExpense`

This document explains the unit testing implementation
for the `canModifyExpense` business rule.

## Source Code Analysis (`canModifyExpense.js`)

The function enforces ownership and administrative privileges
for modifying an expense.

It returns `true` if the user is an admin or the owner of the expense,
and `false` otherwise.

It also contains guard clauses to handle missing input data.

```javascript
export const canModifyExpense = (user, expense) => {
  if (!user || !expense) return false;
  if (user.role === "admin") return true;
  return expense.userId === user.id;
};
```

## Testing Implementation (`canModifyExpense.test.js`)

### Key Concepts

- **Business Rule Coverage**:
  We explicitly test the three main logic branches:
  admin override, ownership match, and denial of access.

- **Robust Guard Clauses**:
  We verify that the function handles `undefined`
  or `null` inputs gracefully
  by returning `false` instead of crashing.

## Test Cases

- **Admin Access**:
  Validates that users with the `admin` role can modify any expense.

- **Owner Access**:
  Validates that a user can only modify an expense
  where `expense.userId === user.id`.

- **Restricted Access**:
  Validates that non-admins cannot modify expenses belonging to other users.

- **Invalid Inputs**:
  Validates that missing `user` or `expense` objects result in access denial.

## How to Run

```bash
npm test
```
