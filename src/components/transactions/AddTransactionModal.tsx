import { useState } from "react";
import { useApp } from "../../context/AppContext";
import { motion, AnimatePresence } from "framer-motion";
import type { Transaction } from "../../types";

const AddTransactionModal = () => {
  const { transactions, setTransactions } = useApp();

  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);

  const [form, setForm] = useState<Omit<Transaction, "id">>({
    date: "",
    amount: 0,
    category: "",
    type: "expense",
  });

  const handleSubmit = () => {
    if (!form.date) return alert("Date is required");
    if (!form.category.trim()) return alert("Category required");
    if (form.amount <= 0) return alert("Invalid amount");

    if (editId) {
      setTransactions(
        transactions.map((t) =>
          t.id === editId ? { ...form, id: editId } : t
        )
      );
    } else {
      const newTransaction: Transaction = {
        ...form,
        id: Date.now().toString(),
      };
      setTransactions([...transactions, newTransaction]);
    }

    setOpen(false);
    setEditId(null);

    setForm({
      date: "",
      amount: 0,
      category: "",
      type: "expense",
    });
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 rounded-lg bg-indigo-500 text-white"
      >
        + Add
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/40"
          >
            <motion.div className="p-6 rounded-xl bg-white dark:bg-gray-900 w-[90%] max-w-md">

              <h2 className="mb-4 text-lg font-semibold">
                {editId ? "Edit" : "Add"} Transaction
              </h2>

              <input
                type="date"
                value={form.date}
                onChange={(e) =>
                  setForm({ ...form, date: e.target.value })
                }
                className="w-full mb-2 p-2 border rounded"
              />

              <input
                type="number"
                placeholder="Amount"
                value={form.amount}
                onChange={(e) =>
                  setForm({
                    ...form,
                    amount: Number(e.target.value),
                  })
                }
                className="w-full mb-2 p-2 border rounded"
              />

              <input
                type="text"
                placeholder="Category"
                value={form.category}
                onChange={(e) =>
                  setForm({
                    ...form,
                    category: e.target.value,
                  })
                }
                className="w-full mb-2 p-2 border rounded"
              />

              <select
                value={form.type}
                onChange={(e) =>
                  setForm({
                    ...form,
                    type: e.target.value as "income" | "expense",
                  })
                }
                className="w-full mb-2 p-2 border rounded"
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>

              <div className="flex justify-end gap-2 mt-3">
                <button onClick={() => setOpen(false)}>
                  Cancel
                </button>

                <button
                  onClick={handleSubmit}
                  className="bg-indigo-500 text-white px-3 py-1 rounded"
                >
                  {editId ? "Update" : "Save"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AddTransactionModal;