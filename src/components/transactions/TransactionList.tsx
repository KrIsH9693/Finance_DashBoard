import { useState } from "react";
import { useApp } from "../../context/AppContext";
import { Trash2, Search } from "lucide-react";

const TransactionList = () => {
  const { transactions, setTransactions, role } = useApp();

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const handleDelete = (id: string) => {
    if (role !== "admin") return;
    const updated = transactions.filter((t) => t.id !== id);
    setTransactions(updated);
  };

  const filteredTransactions = transactions
    .filter((t) => (filter === "all" ? true : t.type === filter))
    .filter((t) =>
      t.category.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-6 border border-gray-100">
      
      {/* 🔥 Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 tracking-wide">
          Transactions
        </h2>

        {role === "admin" && (
          <button className="px-4 py-2 rounded-lg bg-linear-to-r from-indigo-500 to-purple-500 text-white font-medium hover:scale-105 transition">
            + Add
          </button>
        )}
      </div>

      {/* 🔍 FILTER + SEARCH */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        
        {/* Search */}
        <div className="relative w-full">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-200 pl-10 pr-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Filter */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-200 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* 📊 Table Header */}
      <div className="grid grid-cols-5 text-center py-3 bg-gray-50 rounded-lg font-semibold text-gray-600">
        <span>Date</span>
        <span>Category</span>
        <span>Amount</span>
        <span>Type</span>
        <span>Actions</span>
      </div>

      {/* 📋 Rows */}
      {filteredTransactions.length === 0 ? (
        <p className="text-center text-gray-400 py-6">
          No transactions found
        </p>
      ) : (
        filteredTransactions.map((t, index) => (
          <div
            key={t.id}
            className={`grid grid-cols-5 text-center py-3 items-center border-b transition hover:bg-gray-50 ${
              index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
            }`}
          >
            <span className="text-gray-600">{t.date}</span>

            <span className="font-medium text-gray-700">
              {t.category}
            </span>

            <span
              className={`font-semibold ${
                t.type === "expense"
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              ₹ {t.amount}
            </span>

            <span className="capitalize text-gray-500">
              {t.type}
            </span>

            <div className="flex justify-center">
              {role === "admin" ? (
                <button
                  onClick={() => handleDelete(t.id)}
                  className="flex items-center gap-1 text-red-500 hover:text-red-700 transition"
                >
                  <Trash2 size={16} />
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