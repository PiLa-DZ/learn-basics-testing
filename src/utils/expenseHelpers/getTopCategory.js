/**
 * 4. Find the highest spending category
 * (Useful for your "Summary" command)
 */
export const getTopCategory = (expenses) => {
  if (expenses.length === 0) return null;
  const totals = expenses.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {});
  return Object.keys(totals).reduce((a, b) => (totals[a] > totals[b] ? a : b));
};
