function ProgressBar({ progress }) {
  return (
    <>
      <div className="w-full bg-gray-300 dark:bg-gray-600 h-3 rounded-full overflow-hidden mb-2">
        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300">
        {progress}% completed
      </p>
    </>
  );
}

export default ProgressBar;
