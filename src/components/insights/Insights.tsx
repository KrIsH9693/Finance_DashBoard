import { useApp } from "../../context/AppContext";
import { getInsights } from "../../utils/insights";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Wallet, PieChart } from "lucide-react";

const Insights = () => {
  const { transactions } = useApp();

  const { topCategory, totalIncome, totalExpense } =
    getInsights(transactions);

  const net = totalIncome - totalExpense;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-10 p-6 rounded-2xl 
        bg-white dark:bg-gray-900 
        border border-gray-200 dark:border-gray-700 
        shadow-lg"
    >
      <h2 className="text-2xl font-bold text-center mb-8">
        Insights & Highlights
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-center">

        {/* 🔥 COMMON CARD STYLE */}
        {[
          {
            title: "Top Category",
            value: topCategory,
            icon: <PieChart size={24} />,
            color: "from-indigo-500 to-purple-500",
            text: "text-red-400",
          },
          {
            title: "Total Income",
            value: `₹ ${totalIncome}`,
            icon: <TrendingUp size={24} />,
            color: "from-green-500 to-emerald-500",
            text: "text-green-400",
          },
          {
            title: "Total Expense",
            value: `₹ ${totalExpense}`,
            icon: <TrendingDown size={24} />,
            color: "from-red-500 to-pink-500",
            text: "text-red-400",
          },
          {
            title: "Net Savings",
            value: `₹ ${net}`,
            icon: <Wallet size={24} />,
            color:
              net >= 0
                ? "from-indigo-500 to-blue-500"
                : "from-red-500 to-orange-500",
            text: net >= 0 ? "text-indigo-400" : "text-red-400",
          },
        ].map((item, i) => (
          <div
            key={i}
            className={`relative p-5 rounded-xl 
              bg-gray-50 dark:bg-gray-800
              overflow-hidden
              transition-all duration-300
              hover:scale-105 hover:shadow-xl group`}
          >
            {/* 🔥 GRADIENT OVERLAY */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-20 
              bg-linear-to-br ${item.color} transition`}
            />

            {/* CONTENT */}
            <div className="relative z-10">
              <div className="mb-2 flex justify-center text-gray-600 dark:text-gray-300 group-hover:text-white transition">
                {item.icon}
              </div>

              <p className="text-sm text-gray-500 group-hover:text-white transition">
                {item.title}
              </p>

              <p className={`font-semibold mt-1 ${item.text} group-hover:text-white transition`}>
                {item.value}
              </p>
            </div>
          </div>
        ))}

      </div>
    </motion.div>
  );
};

export default Insights;