function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div
      className={`flex items-center justify-between p-3 rounded-lg shadow 
                  bg-gray-100 dark:bg-gray-700 transition-all animate-slideIn
                  ${task.completed ? "opacity-60 line-through" : ""}`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="w-5 h-5 accent-blue-600"
        />
        <span className="text-gray-800 dark:text-gray-100">{task.title}</span>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 
                   text-xl transition-colors"
      >
        ✖
      </button>
    </div>
  );
}

export default TaskItem;
