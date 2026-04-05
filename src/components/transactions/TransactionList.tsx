import { useState } from "react";
import { useApp } from "../../context/AppContext";
import { Trash2, Search } from "lucide-react";

const TransactionList = () => {
  const { transactions, setTransactions, role } = useApp();

  const [filter, setFilter] = useState<"all" | "income" | "expense">("all");
  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);

  // ✅ Form states
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<"income" | "expense">("income");

  // ✅ Success message
  const [successMsg, setSuccessMsg] = useState("");

  // ✅ ADD
  const handleAdd = () => {
    if (!category || !amount || !date) return;

    const newTransaction = {
      id: Date.now().toString(),
      date,
      category,
      amount: Number(amount),
      type,
    };

    setTransactions((prev) => [...prev, newTransaction]);

    // 🎉 success message
    setSuccessMsg(
      `Successfully ${type} added`
    );

    // auto hide message
    setTimeout(() => setSuccessMsg(""), 2000);

    // reset form
    setCategory("");
    setAmount("");
    setType("income");
    setDate("");
    setOpen(false);
  };

  // ✅ DELETE
  const handleDelete = (id: string) => {
    if (role !== "admin") return;
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  // ✅ FILTER
  const filteredTransactions = transactions
    .filter((t) => (filter === "all" ? true : t.type === filter))
    .filter((t) =>
      t.category.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 mt-6 border border-gray-100 dark:border-gray-700">

      {/* ✅ SUCCESS MESSAGE */}
      {successMsg && (
        <div className="mb-4 text-center py-2 rounded-lg bg-green-100 text-green-700 font-medium">
          {successMsg}
        </div>
      )}

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Transactions
        </h2>

        {role === "admin" && (
          <button
            onClick={() => setOpen(true)}
            className="px-4 py-2 rounded-lg bg-linear-to-r from-indigo-500 to-purple-500 text-white hover:scale-105 transition"
          >
            + Add
          </button>
        )}
      </div>

      {/* SEARCH + FILTER */}
      <div className="flex gap-4 mb-6">
        <div className="relative w-full">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 py-2 rounded-lg border"
          />
        </div>

        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value as "all" | "income" | "expense")
          }
          className="px-3 py-2 border rounded-lg"
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* TABLE HEADER */}
      <div className="grid grid-cols-5 text-center py-3 bg-gray-100 dark:bg-gray-800 rounded-lg font-semibold">
        <span>Date</span>
        <span>Category</span>
        <span>Amount</span>
        <span>Type</span>
        <span>Actions</span>
      </div>

      {/* DATA */}
      {filteredTransactions.length === 0 ? (
        <p className="text-center text-gray-400 py-6">
          No transactions found
        </p>
      ) : (
        filteredTransactions.map((t) => (
          <div
            key={t.id}
            className="grid grid-cols-5 text-center py-3 border-b"
          >
            <span>{t.date}</span>
            <span>{t.category}</span>

            <span
              className={
                t.type === "expense"
                  ? "text-red-500 font-semibold"
                  : "text-green-500 font-semibold"
              }
            >
              ₹ {t.amount}
            </span>

            <span>{t.type}</span>

            <div>
              {role === "admin" ? (
                <button
                  onClick={() => handleDelete(t.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={16} />
                </button>
              ) : (
                "View"
              )}
            </div>
          </div>
        ))
      )}

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl w-100 shadow-xl">

            <h3 className="text-xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
              Add Transaction
            </h3>

            {/* Date */}
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full mb-4 p-3 border rounded-lg"
            />

            {/* Category */}
            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full mb-4 p-3 border rounded-lg"
            />

            {/* Amount */}
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full mb-4 p-3 border rounded-lg"
            />

            {/* Type */}
            <select
              value={type}
              onChange={(e) =>
                setType(e.target.value as "income" | "expense")
              }
              className="w-full mb-6 p-3 border rounded-lg"
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => setOpen(false)}
                className="w-full py-2 rounded-lg bg-gray-300"
              >
                Cancel
              </button>

              <button
                onClick={handleAdd}
                className="w-full py-2 rounded-lg bg-linear-to-r from-indigo-500 to-purple-500 text-white"
              >
                Add
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionList;