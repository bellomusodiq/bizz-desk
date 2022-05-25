import React from "react";
import {
  Bar,
  BarChart,
  Label,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IVerticalBarChart } from "./types";
import styles from "./VerticalBarChart.module.css";

const VerticalBarChart: React.FC<IVerticalBarChart> = ({
  data,
  dataKey,
  title,
}) => {
  return (
    <div className={styles.Container}>
      <h3>{title}</h3>
      <ResponsiveContainer minHeight={250} maxHeight={400} width={"100%"}>
        <BarChart layout="vertical" data={data}>
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" fontSize="12" />
          <Tooltip />
          <Bar barSize={20} dataKey={dataKey} fill="#2085C9" />
          <Label />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VerticalBarChart;
