import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import React, { useState } from "react";
import {
  Bar,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart as BChart,
} from "recharts";
import Card from "../../Card/Card";
import styles from "./BarChart.module.css";
import { IBarChart } from "./types";

const BarChart: React.FC<IBarChart> = ({
  data,
  title,
  noFilter,
  footer,
  horizontal,
}) => {
  const [date, setDate] = useState<string>("All Time");
  const menu: JSX.Element = (
    <Menu
      items={[
        {
          label: "Last Month",
          key: "0",
          onClick: () => setDate("Last Month"),
        },
        {
          label: "2 Months",
          key: "1",
          onClick: () => setDate("2 Months"),
        },
        {
          label: "3 Months",
          key: "3",
          onClick: () => setDate("3 Months"),
        },
        {
          label: "All Time",
          key: "4",
          onClick: () => setDate("All Time"),
        },
      ]}
    />
  );

  return (
    <Card>
      <div className={styles.Container}>
        <div className={styles.Header}>
          <h3 className={styles.Title}>{title}</h3>
          {!noFilter && (
            <div className={styles.RoleContainer}>
              <Dropdown overlay={menu} trigger={["click"]}>
                <button className={styles.Dropdown}>
                  <span className={styles.UserType}>{date}</span>
                  <DownOutlined className={styles.DropdownIcon} />
                </button>
              </Dropdown>
            </div>
          )}
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <BChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis
              unit="k"
              label={{ value: "Count", angle: -90, position: "insideLeft" }}
              direction="center"
            />
            <Tooltip />
            <Legend />
            <Bar legendType="circle" dataKey="failed" fill="#FF7766" />
            <Bar legendType="circle" dataKey="successful" fill="#91EDE2" />
          </BChart>
        </ResponsiveContainer>
        {footer}
      </div>
    </Card>
  );
};

export default BarChart;
