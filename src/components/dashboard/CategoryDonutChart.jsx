import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function CategoryDonutChart({ tasks }) {
  const grouped = {};

  tasks.forEach((t) => {
    const cat = t.category || "Uncategorized";
    grouped[cat] = (grouped[cat] || 0) + 1;
  });

  const data = Object.entries(grouped).map(([name, value]) => ({
    name,
    value,
  }));

  const COLORS = ["#60a5fa", "#f472b6", "#34d399", "#facc15", "#fb923c"];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          innerRadius={40}
          outerRadius={80}
          paddingAngle={4}
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
