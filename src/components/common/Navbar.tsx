import { motion } from "framer-motion";
import { useApp } from "../../context/AppContext";

const Navbar = () => {
  const { role, toggleRole } = useApp();

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 
        flex items-center justify-between px-6 py-4
        backdrop-blur-xl 
        bg-white/60 dark:bg-gray-900/60 
        border-b border-gray-200/50 dark:border-gray-700/50"
    >
      {/* 🔥 Logo */}
      <h1
        className="absolute left-1/2 transform -translate-x-1/2 
        text-3xl md:text-4xl font-extrabold tracking-wide
        bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500
        text-transparent bg-clip-text"
      >
        Finance Dashboard
      </h1>

      {/* ⚙️ Controls */}
      <div className="flex items-center gap-3">

        {/* 🔐 Role Toggle */}
        <button
          onClick={toggleRole}
          className="px-4 py-2 rounded-xl text-sm font-medium
            bg-linear-to-r from-indigo-500 to-purple-600 
            text-white shadow-md
            hover:scale-105 hover:shadow-lg
            active:scale-95 transition-all"
        >
          {role === "admin" ? "Admin" : "Viewer"}
        </button>

        {/* 🌙 Theme Toggle
        <button
          onClick={toggleTheme}
          className="p-2.5 rounded-full
            bg-white/80 dark:bg-gray-800/80 
            backdrop-blur-md
            shadow-sm
            hover:scale-110 hover:shadow-md
            active:scale-95
            transition-all"
        >
          {theme === "dark" ? (
            <FaSun className="text-yellow-400" />
          ) : (
            <FaMoon className="text-gray-700" />
          )}
        </button> */}

      </div>
    </motion.div>
  );
};

export default Navbar;