export default function SummaryCard({ title, value }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow text-center">
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
        {title}
      </h3>
      <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2">
        {value}
      </p>
    </div>
  );
}
