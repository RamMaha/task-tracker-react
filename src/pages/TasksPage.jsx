import { useState, useEffect } from "react";
import TaskInput from "../components/task/TaskInput";
import TaskList from "../components/task/TaskList";
import FilterButtons from "../components/task/FilterButtons";
import ProgressBar from "../components/task/ProgressBar";
import PageTransition from "../components/PageTransition";

import {
  collection,
  onSnapshot,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../components/firebase";

// Merge local + remote
function mergeTasks(local, remote) {
  const map = new Map();
  local.forEach((t) => map.set(t.id, t));
  remote.forEach((t) => map.set(t.id, t));
  return Array.from(map.values()).sort((a, b) => b.id - a.id);
}

export default function TasksPage() {
  // -----------------------------
  // STATE
  // -----------------------------
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all");

  // -----------------------------
  // FIRESTORE LISTENER
  // -----------------------------
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

  // -----------------------------
  // SAVE TO LOCALSTORAGE
  // -----------------------------
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // -----------------------------
  // CRUD
  // -----------------------------
  const addTask = async (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    await setDoc(doc(db, "tasks", String(newTask.id)), newTask);
  };

  const toggleComplete = async (id) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    const updated = { ...task, completed: !task.completed };
    await setDoc(doc(db, "tasks", String(id)), updated);
  };

  const deleteTask = async (id) => {
    await deleteDoc(doc(db, "tasks", String(id)));
  };

  // -----------------------------
  // FILTERING
  // -----------------------------
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  // -----------------------------
  // PROGRESS
  // -----------------------------
  const completedCount = tasks.filter((t) => t.completed).length;
  const progress = tasks.length
    ? Math.round((completedCount / tasks.length) * 100)
    : 0;

  // -----------------------------
  // UI
  // -----------------------------
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
          Task Manager
        </h1>

        <TaskInput onAdd={addTask} />

        <FilterButtons filter={filter} setFilter={setFilter} />

        <ProgressBar progress={progress} />

        <TaskList
          tasks={filteredTasks}
          onToggle={toggleComplete}
          onDelete={deleteTask}
        />
      </div>
    </PageTransition>
  );
}
