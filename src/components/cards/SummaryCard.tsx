import { motion } from "framer-motion";

interface Props {
  title: string;
  amount: number;
  color: string;
}

const SummaryCard = ({ title, amount, color }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04 }}
      className={`p-px rounded-2xl bg-linear-to-r ${color}`}
    >
      <div className="rounded-2xl bg-white dark:bg-gray-900 p-5 shadow-md">
        <p className="hover:scale-105 transition-transform duration-300">
          {title}
        </p>

        <h2 className="text-3xl font-bold">
          ₹ {amount.toLocaleString()}
        </h2>
      </div>
    </motion.div>
  );
};

export default SummaryCard;