import { useState, useEffect } from "react";
import PageTransition from "../components/PageTransition";
import Dashboard from "../components/Dashboard";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../components/firebase";

// Merge local + remote
function mergeTasks(local, remote) {
  const map = new Map();
  local.forEach((t) => map.set(t.id, t));
  remote.forEach((t) => map.set(t.id, t));
  return Array.from(map.values()).sort((a, b) => b.id - a.id);
}

export default function DashboardPage() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const q = collection(db, "tasks");

    const unsub = onSnapshot(q, (snapshot) => {
      const remote = snapshot.docs.map((d) => d.data());

      setTasks((local) => {
        const merged = mergeTasks(local, remote);
        localStorage.setItem("tasks", JSON.stringify(merged));
        return merged;
      });
    });

    return unsub;
  }, []);

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          Dashboard
        </h1>

        <Dashboard tasks={tasks} />
      </div>
    </PageTransition>
  );
}
