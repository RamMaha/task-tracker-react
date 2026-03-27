import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import TasksPage from "./pages/TasksPage";
import DashboardPage from "./pages/DashboardPage";
import Sidebar from "./components/Sidebar";

function AppContent() {
  const [dark, setDark] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const location = useLocation();

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
        {/* SIDEBAR (Desktop) */}
        <Sidebar open={sidebarOpen} />

        {/* NAVBAR */}
        <nav className="p-4 flex justify-between items-center bg-white dark:bg-gray-800 shadow ">
          <div className="flex gap-6">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hidden lg:block px-3 py-2 bg-gray-700 text-white rounded-md dark:bg-gray-300 dark:text-black"
            >
              {sidebarOpen ? "Close Menu" : "Menu"}
            </button>

            <Link
              to="/"
              className="text-blue-600 dark:text-blue-400 font-semibold"
            >
              Dashboard
            </Link>
            <Link
              to="/tasks"
              className="text-blue-600 dark:text-blue-400 font-semibold"
            >
              Tasks
            </Link>
          </div>

          <button
            onClick={() => setDark(!dark)}
            className="px-4 py-2 rounded-md bg-gray-800 text-white dark:bg-gray-200 dark:text-black"
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>

        {/* PAGE CONTENT WITH TRANSITIONS */}
        <div className="">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/tasks" element={<TasksPage />} />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
