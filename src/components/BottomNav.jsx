function BottomNav({ filter, setFilter }) {
  const items = [
    { key: "all", label: "All" },
    { key: "completed", label: "Done" },
    { key: "pending", label: "Pending" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex justify-around py-2 lg:hidden">
      {items.map((item) => (
        <button
          key={item.key}
          onClick={() => setFilter(item.key)}
          className={`text-sm px-3 py-1 rounded-full ${
            filter === item.key
              ? "bg-blue-600 text-white"
              : "text-gray-700 dark:text-gray-200"
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}

export default BottomNav;
