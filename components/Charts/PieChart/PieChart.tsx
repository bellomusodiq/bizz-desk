import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import React from "react";
import { useState } from "react";
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
  colors = COLORS,
  caption,
  isFilter,
  rightLegend,
  customHeader,
}) => {
  const [date, setDate] = useState<string>("Last Month");
  const [bank, setBank] = useState<string>("All Banks");
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
      ]}
    />
  );

  const bankMenu: JSX.Element = (
    <Menu
      items={[
        {
          label: "All Banks",
          key: "0",
          onClick: () => setBank("All Banks"),
        },
        {
          label: "GT Bank",
          key: "1",
          onClick: () => setBank("GT Bank"),
        },
        {
          label: "First Bank",
          key: "3",
          onClick: () => setBank("First Bank"),
        },
      ]}
    />
  );

  return (
    <div className={styles.Container}>
      {customHeader ? (
        customHeader
      ) : (
        <div className={styles.Header}>
          <p className={styles.Title}>{title}</p>
          {isFilter && (
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
      )}
      {isFilter && (
        <div className={styles.DropdownContainer}>
          <Dropdown overlay={bankMenu} trigger={["click"]}>
            <button className={styles.Dropdown2}>
              <span className={styles.UserType}>{bank}</span>
              <DownOutlined className={styles.DropdownIcon} />
            </button>
          </Dropdown>
        </div>
      )}
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
            legendType="circle"
          >
            <Label
              value={isNaira ? `${value}` : value}
              position={"center"}
              style={{ fontSize: 20, color: "red" }}
            />
            {data.map((_: any, index: any) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          {!rightLegend && <Legend />}
        </PChart>
      </ResponsiveContainer>
      {caption?.map((cap: string, i: number) => (
        <p key={i} className={styles.Caption}>
          {cap}
        </p>
      ))}
    </div>
  );
};

export default PieChart;
