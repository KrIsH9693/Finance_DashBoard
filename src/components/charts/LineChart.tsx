import {
  LineChart as LC,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useApp } from "../../context/AppContext";
import { getLineData } from "../../utils/chartData";

const LineChart = () => {
  const { transactions } = useApp();
  const data = getLineData(transactions);

  return (
    <div className="p-6 rounded-2xl 
      bg-white dark:bg-gray-900 
      border border-gray-200 dark:border-gray-700 
      shadow-lg hover:shadow-xl transition">

      <h2 className="text-xl font-semibold mb-5 text-gray-700 dark:text-gray-200">
        Balance Trend 📈
      </h2>

      <ResponsiveContainer width="100%" height={280}>
        <LC data={data}>
          {/* 🔥 Grid */}
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />

          {/* Axis */}
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 12 }} 
            stroke="#9ca3af" 
          />
          <YAxis tick={{ fontSize: 12 }} />

          {/* Tooltip */}
          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              border: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />

          {/* 🔥 Line */}
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#6366f1"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LC>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;