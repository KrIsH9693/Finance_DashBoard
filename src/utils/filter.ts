import type { Transaction } from "../types";

export const filterTransactions = (
  transactions: Transaction[],
  search: string,
  typeFilter: string
) => {
  return transactions.filter((t) => {
    const matchSearch =
      t.category.toLowerCase().includes(search.toLowerCase());

    const matchType =
      typeFilter === "all" || t.type === typeFilter;

    return matchSearch && matchType;
  });
};