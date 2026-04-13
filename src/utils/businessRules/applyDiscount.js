/**
 * 3. Discount Eligibility
 * Logic for a "Premium" user or a "Bulk" discount.
 * Rule: 10% off if amount > 100 AND user is 'premium'.
 */
export const applyDiscount = (amount, userStatus) => {
  if (amount > 100 && userStatus === "premium") {
    return amount * 0.9;
  }
  return amount;
};
