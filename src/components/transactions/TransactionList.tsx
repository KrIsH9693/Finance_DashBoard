import { useApp } from "../../context/AppContext";

const TransactionList = () => {
  const { transactions, setTransactions, role } = useApp();

  // ❌ Delete Handler (Admin only)
  const handleDelete = (id: string) => {
    if (role !== "admin") return;

    const updated = transactions.filter((t) => t.id !== id);
    setTransactions(updated);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-6">
      {/* 🔥 Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Transactions</h2>

        {/* ✅ Add button only for ADMIN */}
        {role === "admin" && (
          <button
            className="px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition"
          >
            + Add
          </button>
        )}
      </div>

      {/* 📊 Table Header */}
      <div className="grid grid-cols-5 font-semibold text-center py-2 border-b text-gray-600">
        <span>Date</span>
        <span>Category</span>
        <span>Amount</span>
        <span>Type</span>
        <span>Actions</span>
      </div>

      {/* 📋 Data Rows */}
      {transactions.length === 0 ? (
        <p className="text-center text-gray-400 py-4">
          No transactions found
        </p>
      ) : (
        transactions.map((t) => (
          <div
            key={t.id}
            className="grid grid-cols-5 text-center py-3 items-center border-b hover:bg-gray-50 transition"
          >
            <span>{t.date}</span>

            <span>{t.category}</span>

            <span
              className={
                t.type === "expense"
                  ? "text-red-500 font-medium"
                  : "text-green-500 font-medium"
              }
            >
              ₹ {t.amount}
            </span>

            <span className="capitalize">{t.type}</span>

            {/* ✅ ACTIONS CONTROL */}
            <div>
              {role === "admin" ? (
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => handleDelete(t.id)}
                >
                  Delete
                </button>
              ) : (
                <span className="text-gray-400 text-sm">
                  View Only
                </span>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TransactionList;