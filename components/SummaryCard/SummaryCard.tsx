import { Col, Dropdown, Menu } from "antd";
import React, { useState } from "react";
import { ISummaryItem } from "./types";
import styles from "./SummaryCard.module.css";
import { DownOutlined } from "@ant-design/icons";
import Card from "../Card/Card";

const SummaryCard: React.FC<ISummaryItem> = ({
  title,
  totalCount,
  percentage,
  isNaira,
  xs,
  md,
  lg,
  xl,
  sm,
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
    <Col
      className={styles.AreaChartCol}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
    >
      <Card>
        <div className={styles.SummaryCard}>
          <div className={styles.Header}>
            <div className={styles.HeaderLeft}>
              <img
                src="/icons/trend-down.svg"
                alt="trend down"
                className={styles.Icon}
              />
              <span className={styles.SummaryTitle}>{percentage}%</span>
            </div>
            <div className={styles.HeaderRight}>
              <Dropdown overlay={menu} trigger={["click"]}>
                <button className={styles.Dropdown}>
                  <span>{month}</span>
                  <DownOutlined className={styles.DropdownIcon} />
                </button>
              </Dropdown>
            </div>
          </div>
          <h1 className={styles.Count}>
            {isNaira && <span className={styles.Naira}>&#8358;</span>}
            {totalCount}
            {isNaira && "m"}
          </h1>
          <p className={styles.Description}>{title}</p>
        </div>
      </Card>
    </Col>
  );
};

export default SummaryCard;
