import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Sidebar({ open }) {
  return (
    <motion.div
      initial={{ x: -260 }}
      animate={{ x: open ? 0 : -260 }}
      transition={{ duration: 0.3 }}
      className="hidden lg:flex flex-col w-64 h-screen fixed left-0 top-0 
                 bg-white dark:bg-gray-800 shadow-xl p-6 z-40"
    >
      <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Navigation
      </h2>

      <nav className="flex flex-col gap-4">
        <Link to="/" className="text-blue-600 dark:text-blue-400">
          Dashboard
        </Link>
        <Link to="/tasks" className="text-blue-600 dark:text-blue-400">
          Tasks
        </Link>
      </nav>
    </motion.div>
  );
}
