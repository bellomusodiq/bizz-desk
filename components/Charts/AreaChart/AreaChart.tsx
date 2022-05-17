import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import React, { useState } from "react";
import {
  AreaChart as AChart,
  CartesianGrid,
  XAxis,
  Area,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styles from "./AreaChart.module.css";
import { IAreaChart } from "./types";

const data = [
  {
    name: "MON",
    amount: "24K",
    amt: 24,
  },
  {
    name: "TUE",
    amount: "30K",
    amt: 30,
  },
  {
    name: "WED",
    amount: "20K",
    amt: 20,
  },
  {
    name: "THU",
    amount: "27k",
    amt: 27,
  },
  {
    name: "FRI",
    amount: "48k",
    amt: 48,
  },
  {
    name: "SAT",
    amount: "23.9k",
    amt: 23.9,
  },
  {
    name: "SUN",
    amount: "34.9k",
    amt: 34.9,
  },
];

const AreaChart: React.FC<IAreaChart> = ({
  title,
  amount,
  totalCount,
  percentage,
}) => {
  const [month, setMonth] = useState<string>("Last Month");
  const menu: JSX.Element = (
    <Menu
      items={[
        {
          label: "Last Month",
          key: "0",
          onClick: () => setMonth("Last Month"),
        },
        {
          label: "2 Months",
          key: "1",
          onClick: () => setMonth("2 Months"),
        },
        {
          label: "3 Months",
          key: "3",
          onClick: () => setMonth("3 Months"),
        },
      ]}
    />
  );

  return (
    <div className={styles.Container}>
      <div className={styles.Header}>
        <div className={styles.ValueContainer}>
          <p className={styles.Title}>TOTAL {title}</p>
          <p className={styles.Value}>&#8358;{amount}</p>
        </div>
        <hr className={styles.Divider} />
        <div className={styles.ValueContainer}>
          <p className={styles.Title}>{title} COUNT</p>
          <p className={styles.Value}>{totalCount}</p>
        </div>
        <div className={styles.Control}>
          <Dropdown overlay={menu} trigger={["click"]}>
            <button className={styles.Dropdown}>
              <span>{month}</span>
              <DownOutlined className={styles.DropdownIcon} />
            </button>
          </Dropdown>
          <div className={styles.Percentage}>
            <img
              src="/icons/trend-down.svg"
              alt="trend down"
              className={styles.Icon}
            />
            <span className={styles.SummaryTitle}>{percentage}%</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <AChart
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#95C7EC" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#95C7EC" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis unicode={"U+020A6"} unit="K" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="amt"
            stroke="#95C7EC"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChart;
