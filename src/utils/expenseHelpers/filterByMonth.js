/**
 * 2. Filter expenses by month (1-12)
 */
export const filterByMonth = (expenses, month) => {
  return expenses.filter((expense) => {
    const expenseMonth = new Date(expense.date).getMonth() + 1;
    return expenseMonth === parseInt(month);
  });
};
