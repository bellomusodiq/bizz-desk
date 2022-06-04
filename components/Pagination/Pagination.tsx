import { DownOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import React from "react";
import { useState } from "react";
import styles from "./Pagination.module.css";

const Pagination: React.FC = () => {
  const [pageSize, setPageSize] = useState<number>(10);

  const menu: JSX.Element = (
    <Menu
      items={[
        {
          label: 10,
          key: "0",
          onClick: () => setPageSize(10),
        },
        {
          label: 20,
          key: "0",
          onClick: () => setPageSize(20),
        },
        {
          label: 50,
          key: "0",
          onClick: () => setPageSize(50),
        },
        {
          label: 100,
          key: "0",
          onClick: () => setPageSize(100),
        },
      ]}
    />
  );

  return (
    <div className={styles.Pagination}>
      <p className={styles.Description}>Showing 1-10 of 1232</p>
      <div className={styles.Controls}>
        <Dropdown overlay={menu} trigger={["click"]}>
          <button className={styles.Dropdown}>
            <span>{pageSize}</span>
            <DownOutlined className={styles.DropdownIcon} />
          </button>
        </Dropdown>
        <p className={styles.RowsPerPage}>rows per page</p>
        <div className={styles.Pages}>
          <button className={styles.PreviousInactive}>
            <LeftOutlined className={styles.InActiveIcon} />
          </button>
          <button className={styles.PageActive}>1</button>
          <button className={styles.Page}>2</button>
          <button className={styles.Page}>3</button>
          <span className={styles.More}>...</span>
          <button className={styles.Page}>19</button>
          <button className={styles.Page}>20</button>
          <button className={styles.Page}>21</button>
          <button className={styles.Next}>
            <RightOutlined className={styles.ActiveIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
