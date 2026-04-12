/**
 * 5. Format an expense for the terminal
 */
export const formatCurrency = (amount) => {
  return `$${parseFloat(amount).toFixed(2)}`;
};
