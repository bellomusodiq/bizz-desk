import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { Dropdown, Input, Menu } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import Card from "../Card/Card";
import Table from "../Table/Table";
import styles from "./ScrollableCard.module.css";
import { IScrollableCard } from "./types";

const ScrollableCard: React.FC<IScrollableCard> = ({
  title,
  columns,
  data,
  selected,
  menu,
  link,
  notScrollable,
}) => {
  const [query, setQuery] = useState<string>("");

  return (
    <Card>
      <div className={styles.Container}>
        <div className={styles.HeaderContainer}>
          <h3 style={link ? { fontSize: 16 } : {}} className={styles.Title}>
            {title}
          </h3>
          {link && <Link href={link}>{"View >"}</Link>}
        </div>
        <div className={styles.FilterContainer}>
          <div className={styles.SearchContainer}>
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              suffix={<SearchOutlined />}
              placeholder="Search"
            />
          </div>
          <div className={styles.RoleContainer}>
            <Dropdown overlay={menu} trigger={["click"]}>
              <button className={styles.Dropdown}>
                <span className={styles.DropdownTitle}>Sort:</span>{" "}
                <span className={styles.UserType}>{selected}</span>
                <DownOutlined className={styles.DropdownIcon} />
              </button>
            </Dropdown>
          </div>
        </div>
        <Table
          scroll={!notScrollable ? { y: 300 } : {}}
          columns={columns}
          data={data}
        />
      </div>
    </Card>
  );
};

export default ScrollableCard;
