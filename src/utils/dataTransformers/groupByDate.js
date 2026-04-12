/**
 * 5. Group by Date String
 * Converts an array of expenses into an object keyed by "YYYY-MM-DD".
 */
export const groupByDate = (expenses) => {
  return expenses.reduce((acc, expense) => {
    const date = expense.date;
    if (!acc[date]) acc[date] = [];
    acc[date].push(expense);
    return acc;
  }, {});
};
