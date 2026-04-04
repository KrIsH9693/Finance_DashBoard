import type { Transaction } from "../types";

export const getInsights = (transactions: Transaction[]) => {
  let expenseMap: Record<string, number> = {};
  let totalIncome = 0;
  let totalExpense = 0;

  transactions.forEach((t) => {
    if (t.type === "income") {
      totalIncome += t.amount;
    } else {
      totalExpense += t.amount;
      expenseMap[t.category] =
        (expenseMap[t.category] || 0) + t.amount;
    }
  });

  // Highest spending category
  let topCategory = "N/A";
  let max = 0;

  for (let key in expenseMap) {
    if (expenseMap[key] > max) {
      max = expenseMap[key];
      topCategory = key;
    }
  }

  return {
    topCategory,
    totalIncome,
    totalExpense,
  };
};