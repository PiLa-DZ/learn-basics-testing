/**
 * 4. Filter and Sort (Multi-step transformation)
 * Returns the top N expensive items sorted descending.
 */
export const getTopExpensiveItems = (expenses, limit = 3) => {
  return [...expenses].sort((a, b) => b.amount - a.amount).slice(0, limit);
};
