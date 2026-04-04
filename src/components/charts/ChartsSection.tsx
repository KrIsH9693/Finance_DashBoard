import LineChart from "./LineChart";
import PieChart from "./PieChart";

const ChartsSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
      <LineChart />
      <PieChart />
    </div>
  );
};

export default ChartsSection;