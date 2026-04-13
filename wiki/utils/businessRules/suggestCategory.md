# Documentation: Testing `suggestCategory`

This document explains the unit testing implementation
for the `suggestCategory` business rule.

## Source Code Analysis (`suggestCategory.js`)

The function takes a description string,
converts it to lowercase,
and checks for specific keywords to suggest a category
("Transport", "Food", "Tech").
If no keywords match, it defaults to "General".

```javascript
export const suggestCategory = (description) => {
  const desc = description.toLowerCase();
  if (desc.includes("uber") || desc.includes("gas") || desc.includes("train"))
    return "Transport";
  if (
    desc.includes("food") ||
    desc.includes("restaurant") ||
    desc.includes("pizza")
  )
    return "Food";
  if (
    desc.includes("server") ||
    desc.includes("hosting") ||
    desc.includes("domain")
  )
    return "Tech";
  return "General";
};
```

## Testing Implementation (`suggestCategory.test.js`)

### Key Concepts

- **Keyword Matching**:
  We verify that various inputs containing
  specific keywords trigger the correct category.

- **Normalization**:
  We verify that the function is case-insensitive
  by passing uppercase keywords.

- **Fallback Logic**:
  We verify the default "General" category for unmatched input.

## Test Cases

- **Transport, Food, Tech**:
  Validates category assignment for known keywords.

- **Case-Insensitivity**:
  Validates that it correctly identifies keywords regardless of case.

- **General**: Validates that unknown descriptions default correctly.

## How to Run

```bash
npm test
```
