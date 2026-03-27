import { useState } from "react";

function TaskInput({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-4 animate-fadeIn">
      <input
        id="task-input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a task..."
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                   bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 
                   focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                   transition-colors"
      >
        Add
      </button>
    </form>
  );
}

export default TaskInput;
