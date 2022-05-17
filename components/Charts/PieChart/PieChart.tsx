import React from "react";
import {
  Cell,
  Label,
  Legend,
  Pie,
  PieChart as PChart,
  ResponsiveContainer,
} from "recharts";
import styles from "./PieChart.module.css";
import { IPieChart } from "./types";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieChart: React.FC<IPieChart> = ({
  data,
  title,
  isNaira,
  value,
  percentage,
}) => {
  return (
    <div className={styles.Container}>
      <p className={styles.Title}>{title}</p>
      <ResponsiveContainer width="100%" minHeight={350}>
        <PChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            label
            startAngle={0}
            endAngle={360}
          >
            <Label
              value={isNaira ? `${value}` : value}
              position={"center"}
              style={{ fontSize: 20, color: "red" }}
            />
            {data.map((_: any, index: any) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
        </PChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChart;
