import { useApp } from "./context/AppContext";
import Navbar from "./components/common/Navbar";
import SummarySection from "./components/cards/SummarySection";
import TransactionList from "./components/transactions/TransactionList";
import ChartsSection from "./components/charts/ChartsSection";
import Insights from "./components/insights/Insights";

function App() {
  useApp();

  return (
    // <div className={theme === "dark" ? "dark" : ""}>
      <div
        className="min-h-screen transition-all duration-300
        bg-linear-to-br from-slate-50 via-slate-100 to-slate-200
        dark:from-[#0f172a] dark:via-[#020617] dark:to-black
        text-gray-900 dark:text-gray-100"
      >
        {/* 🔥 Navbar */}
        <Navbar />

        {/* 📊 Main Content */}
        <main className="p-6 space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl md:text-5xl font-extrabold
                bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500
                text-transparent bg-clip-text">
              Dashboard
            </h1>

            <p className="text-gray-500 text-lg">
              Welcome back 👋 Manage your finances smoothly
            </p>
          </div>

          {/* 💰 Summary */}
          <SummarySection />

          {/* 📋 Transactions */}
          <TransactionList />

          {/* 📈 Charts */}
          <ChartsSection />

          {/* 🧠 Insights */}
          <Insights />
        </main>
      </div>
    // </div>
  );
}

export default App;