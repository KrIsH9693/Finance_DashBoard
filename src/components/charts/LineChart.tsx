import {
  LineChart as LC,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useApp } from "../../context/AppContext";
import { getLineData } from "../../utils/chartData";

const LineChart = () => {
  const { transactions } = useApp();
  const data = getLineData(transactions);

  return (
    <div className="p-5 rounded-2xl 
      bg-white dark:bg-gray-900 
      border border-gray-200 dark:border-gray-700 shadow-md">

      <h2 className="text-lg font-semibold mb-4">Balance Trend</h2>

      <ResponsiveContainer width="100%" height={250}>
        <LC data={data}>
          <XAxis dataKey="date" stroke="#888" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#6366f1"
            strokeWidth={3}
          />
        </LC>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;