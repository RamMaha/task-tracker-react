import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function TasksOverTimeLineChart({ tasks }) {
  const data = tasks.map((t) => ({
    date: new Date(t.id).toLocaleDateString(),
    completed: t.completed ? 1 : 0,
  }));

  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <XAxis dataKey="date" hide />
        <YAxis hide />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="completed"
          stroke="#34d399"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
