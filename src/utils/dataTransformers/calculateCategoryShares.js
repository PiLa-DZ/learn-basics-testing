/**
 * 3. Add Percentages to categories
 * Takes the output of aggregateByCategory and adds a 'percentage' key.
 */
export const calculateCategoryShares = (categoryTotals, totalBudget) => {
  return Object.entries(categoryTotals).map(([category, amount]) => ({
    category,
    amount,
    percentage:
      totalBudget > 0 ? ((amount / totalBudget) * 100).toFixed(1) + "%" : "0%",
  }));
};
