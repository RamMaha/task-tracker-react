function FilterButtons({ filter, setFilter }) {
  return (
    <div className="flex gap-3 my-4">
      {["all", "completed", "pending"].map((type) => (
        <button
          key={type}
          onClick={() => setFilter(type)}
          className={`px-4 py-1 rounded-full border 
            transition-colors
            ${
              filter === type
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600"
            }`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
