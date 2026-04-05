import {
  PieChart as PC,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useApp } from "../../context/AppContext";
import { getPieData } from "../../utils/chartData";

const COLORS = ["#6366f1", "#22c55e", "#ef4444", "#f59e0b", "#14b8a6"];

const PieChart = () => {
  const { transactions } = useApp();
  const data = getPieData(transactions);

  return (
    <div className="p-6 rounded-2xl 
      bg-white dark:bg-gray-900 
      border border-gray-200 dark:border-gray-700 
      shadow-lg hover:shadow-xl transition">

      <h2 className="text-xl font-semibold mb-5 text-gray-700 dark:text-gray-200">
        Spending Breakdown 🥧
      </h2>

      <ResponsiveContainer width="100%" height={280}>
        <PC>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            innerRadius={50}   // 🔥 donut style
            paddingAngle={3}
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          {/* Tooltip */}
          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              border: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />

          {/* 🔥 Legend */}
          <Legend verticalAlign="bottom" height={36} />
        </PC>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChart;