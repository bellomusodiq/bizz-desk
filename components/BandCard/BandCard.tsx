import { DownOutlined } from "@ant-design/icons";
import { Divider, Dropdown, Menu } from "antd";
import React, { useState } from "react";
import styles from "./BandCard.module.css";
import { IBandCard } from "./types";

const BandCard: React.FC<IBandCard> = ({
  title,
  totalTitle,
  totalValue,
  onTargetTitle,
  onTargetValue,
  offTargetTitle,
  offTargetValue,
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
    <div className={styles.BandCard}>
      <div className={styles.Header}>
        <h3>{title}</h3>
        <Dropdown overlay={menu} trigger={["click"]}>
          <button className={styles.Dropdown}>
            <span>{month}</span>
            <DownOutlined className={styles.DropdownIcon} />
          </button>
        </Dropdown>
      </div>
      <div className={styles.BodyContainer}>
        <div className={styles.Body}>
          <p style={{ color: "#425d8a" }} className={styles.Key}>
            {totalTitle}
          </p>
          <p className={styles.Value}>{totalValue}</p>
        </div>
        <Divider style={{ margin: 0 }} />
        <div className={styles.Body}>
          <p style={{ color: "#136F63" }} className={styles.Key}>
            {onTargetTitle}
          </p>
          <p className={styles.Value}>{onTargetValue}</p>
        </div>
        <Divider style={{ margin: 0 }} />
        <div className={styles.Body}>
          <p style={{ color: "#ED6A5A" }} className={styles.Key}>
            {offTargetTitle}
          </p>
          <p className={styles.Value}>{offTargetValue}</p>
        </div>
      </div>
    </div>
  );
};

export default BandCard;
