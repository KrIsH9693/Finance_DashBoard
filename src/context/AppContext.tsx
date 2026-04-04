import {
  createContext,
  useContext,
  useState,
} from "react";
import type { ReactNode } from "react";
import type { Transaction, Role } from "../types";

interface AppContextType {
  transactions: Transaction[];
  setTransactions: (t: Transaction[]) => void;
  role: Role;
  toggleRole: () => void;
}

const AppContext = createContext<AppContextType | undefined>(
  undefined
);

export const AppProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [transactions, setTransactions] = useState<Transaction[]>(
    JSON.parse(localStorage.getItem("transactions") || "[]")
  );

  const [role, setRole] = useState<Role>(
    (localStorage.getItem("role") as Role) || "admin"
  );

  const toggleRole = () => {
    setRole((prev) =>
      prev === "admin" ? "viewer" : "admin"
    );
  };

  return (
    <AppContext.Provider
      value={{
        transactions,
        setTransactions,
        role,
        toggleRole,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useApp must be used inside provider");
  return context;
};