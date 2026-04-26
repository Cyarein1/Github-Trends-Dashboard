"use client";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const chartColors = ["#16a34a", "#2563eb", "#f59e0b", "#dc2626", "#7c3aed"];

export default function CategoryPieChart({ categories }) {
  const chartData = categories.filter((category) => category.count > 0);

  return (
    <ResponsiveContainer width="100%" height={280}>
      <PieChart>
        <Pie
          data={chartData}
          dataKey="count"
          nameKey="name"
          innerRadius={58}
          outerRadius={92}
          paddingAngle={3}
        >
          {chartData.map((category, index) => (
            <Cell
              key={category.name}
              fill={chartColors[index % chartColors.length]}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend iconType="circle" wrapperStyle={{ fontSize: 12 }} />
      </PieChart>
    </ResponsiveContainer>
  );
}
