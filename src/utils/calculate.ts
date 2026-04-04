import type { Transaction } from "../types";

export const calculateSummary = (transactions: Transaction[]) => {
  let income = 0;
  let expense = 0;

  transactions.forEach((t) => {
    if (t.type === "income") income += t.amount;
    else expense += t.amount;
  });

  const balance = income - expense;

  return { income, expense, balance };
};