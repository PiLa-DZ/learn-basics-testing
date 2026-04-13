/**
 * 4. Expense Categorization Logic
 * Automatically suggests a category based on keywords in the description.
 */
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
