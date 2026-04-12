/**
 * 1. Map labels to totals (Object Transformation)
 * Converts: [{cat: 'A', amount: 10}, {cat: 'A', amount: 20}]
 * To: { 'A': 30 }
 */
export const aggregateByCategory = (expenses) => {
  return expenses.reduce((acc, curr) => {
    // If the category doesn't exist in the accumulator, initialize to 0
    // then add the current expense amount
    acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {}); // Start with an empty object
};
