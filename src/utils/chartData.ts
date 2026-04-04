import type { Transaction } from "../types";

// 📈 Line Chart Data (by date)
export const getLineData = (transactions: Transaction[]) => {
  let balance = 0;

  return transactions.map((t) => {
    if (t.type === "income") balance += t.amount;
    else balance -= t.amount;

    return {
      date: t.date,
      balance,
    };
  });
};

// 🥧 Pie Chart Data (category wise expense)
export const getPieData = (transactions: Transaction[]) => {
  const map: Record<string, number> = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      map[t.category] = (map[t.category] || 0) + t.amount;
    }
  });

  return Object.keys(map).map((key) => ({
    name: key,
    value: map[key],
  }));
};