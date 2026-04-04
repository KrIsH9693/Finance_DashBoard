export type Role = "admin" | "viewer";

export type Theme = "light" | "dark";

export interface Transaction {
  id: string;
  date: string;
  amount: number;
  category: string;
  type: "income" | "expense";
}