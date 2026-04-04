import {
  PieChart as PC,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useApp } from "../../context/AppContext";
import { getPieData } from "../../utils/chartData";

const COLORS = ["#6366f1", "#22c55e", "#ef4444", "#f59e0b", "#14b8a6"];

const PieChart = () => {
  const { transactions } = useApp();
  const data = getPieData(transactions);

  return (
    <div className="p-5 rounded-2xl 
      bg-white dark:bg-gray-900 
      border border-gray-200 dark:border-gray-700 shadow-md">

      <h2 className="text-lg font-semibold mb-4">Spending Breakdown</h2>

      <ResponsiveContainer width="100%" height={250}>
        <PC>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={90}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PC>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChart;