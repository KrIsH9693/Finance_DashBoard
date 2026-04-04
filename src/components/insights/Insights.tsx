import { useApp } from "../../context/AppContext";
import { getInsights } from "../../utils/insights";
import { motion } from "framer-motion";

const Insights = () => {
  const { transactions } = useApp();

  const { topCategory, totalIncome, totalExpense } =
    getInsights(transactions);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-10 p-6 rounded-2xl 
        bg-white dark:bg-gray-900 
        border border-gray-200 dark:border-gray-700 shadow-md text-center"
    >
      <h2 className="text-xl font-semibold mb-6">
        Insights 🧠
      </h2>

      {/* 🔥 CENTERED CONTENT */}
      <div className="flex flex-col items-center justify-center space-y-4 text-gray-700 dark:text-gray-300">

        <p>
          📌 Highest spending category:{" "}
          <span className="font-medium text-red-500">
            {topCategory}
          </span>
        </p>

        <p>
          💰 Total Income:{" "}
          <span className="text-green-500 font-medium">
            ₹ {totalIncome}
          </span>
        </p>

        <p>
          💸 Total Expenses:{" "}
          <span className="text-red-500 font-medium">
            ₹ {totalExpense}
          </span>
        </p>

        <p>
          📊 Net Savings:{" "}
          <span className="text-indigo-500 font-medium">
            ₹ {totalIncome - totalExpense}
          </span>
        </p>

      </div>
    </motion.div>
  );
};

export default Insights;