import SummaryCard from "./dashboard/SummaryCard";
import CompletionPieChart from "./dashboard/CompletionPieChart";
import WeeklyBarChart from "./dashboard/WeeklyBarChart";
import TasksOverTimeLineChart from "./dashboard/TasksOverTimeLineChart";
import CategoryDonutChart from "./dashboard/CategoryDonutChart";

export default function Dashboard({ tasks }) {
  if (!tasks || !Array.isArray(tasks)) return null;

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <SummaryCard title="Total Tasks" value={total} />
        <SummaryCard title="Completed" value={completed} />
        <SummaryCard title="Pending" value={pending} />
      </div>

      {/* Graphs Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
            Completion Breakdown
          </h2>
          <CompletionPieChart tasks={tasks} />
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
            Weekly Activity
          </h2>
          <WeeklyBarChart tasks={tasks} />
        </div>
      </div>

      {/* Graphs Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
            Tasks Over Time
          </h2>
          <TasksOverTimeLineChart tasks={tasks} />
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
            Category Breakdown
          </h2>
          <CategoryDonutChart tasks={tasks} />
        </div>
      </div>
    </div>
  );
}
