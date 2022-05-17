import React from "react";
import { Table as ATable, Tag, Space } from "antd";
import styles from "./Table.module.css";
import { ITable } from "./types";
import Link from "next/link";
import { RightOutlined } from "@ant-design/icons";
import Card from "../Card/Card";

const Table: React.FC<ITable> = ({
  title,
  viewAllLink,
  data,
  columns,
  filterComponent,
}) => {
  return (
    <>
      <div className={styles.Header}>
        <p className={styles.Title}>{title}</p>
        {viewAllLink && (
          <Link href={viewAllLink}>
            <span style={{ cursor: "pointer" }} className={styles.Link}>
              View All <RightOutlined />
            </span>
          </Link>
        )}
      </div>
      <Card>
        <div className={styles.Container}>
          {filterComponent}
          <ATable
            scroll={{ x: true }}
            tableLayout="fixed"
            columns={columns}
            dataSource={data}
            pagination={false}
          />
        </div>
      </Card>
    </>
  );
};

export default Table;
