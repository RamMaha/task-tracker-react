import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function CompletionPieChart({ tasks }) {
  const completed = tasks.filter((t) => t.completed).length;
  const pending = tasks.length - completed;

  const data = [
    { name: "Completed", value: completed },
    { name: "Pending", value: pending },
  ];

  const COLORS = ["#4ade80", "#f87171"];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          innerRadius={50}
          outerRadius={80}
          paddingAngle={5}
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
