import { useApp } from "../../context/AppContext";
import SummaryCard from "./SummaryCard";
import { calculateSummary } from "../../utils/calculate";

const SummarySection = () => {
  const { transactions } = useApp();

  const { income, expense, balance } = calculateSummary(transactions);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      <SummaryCard
        title="Total Balance"
        amount={balance}
        color="from-indigo-500 via-purple-500 to-pink-500"
      />

      <SummaryCard
        title="Income"
        amount={income}
        color="from-green-400 to-emerald-600"
      />

      <SummaryCard
        title="Expenses"
        amount={expense}
        color="from-red-400 to-rose-600"
      />
    </div>
  );
};

export default SummarySection;