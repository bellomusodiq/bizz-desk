import { Col, Menu, Row } from "antd";
import { NextPage } from "next";
import React, { useState } from "react";
import Card from "../../../components/Card/Card";
import ScrollableCard from "../../../components/ScrollableCard/ScrollableCard";
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import styles from "./group.module.css";

const TerminalGroup: NextPage = () => {
  const [terminalFilter, setTerminalFilter] = useState<string>("High");
  const [groupFilter, setGroupFilter] = useState<string>("All");
  const terminalColumn = [
    { ellipsis: true, title: "S/N", dataIndex: "index", key: "index" },
    {
      ellipsis: true,
      title: "BANK",
      dataIndex: "bank",
      key: "bank",
    },
    {
      ellipsis: true,
      title: "TERMINALS",
      dataIndex: "terminals",
      key: "terminals",
    },
    {
      ellipsis: true,
      title: "",
      dataIndex: "",
      key: "index",
      render: (text: string, record: any) => <a href="#">View</a>,
    },
  ];

  const terminalColumnFull = [
    { ellipsis: true, title: "S/N", dataIndex: "index", key: "index" },
    {
      ellipsis: true,
      title: "TERMINAL ID",
      dataIndex: "terminalId",
      key: "terminalId",
    },
    {
      ellipsis: true,
      title: "MERCHANT NAME",
      dataIndex: "merchantName",
      key: "merchantName",
    },
    {
      ellipsis: true,
      title: "SERIAL",
      dataIndex: "serial",
      key: "serial",
    },
    {
      ellipsis: true,
      title: "TYPE",
      dataIndex: "type",
      key: "type",
    },
    {
      ellipsis: true,
      title: "STATUS",
      dataIndex: "status",
      key: "status",
      render: (text: string, record: any) => {
        return text === "ACTIVE" ? (
          <div className={styles.ActiveStatus}>{text}</div>
        ) : (
          <div className={styles.InActiveStatus}>{text}</div>
        );
      },
    },
  ];

  const terminalData = [
    {
      ellipses: true,
      index: 1,
      bank: "GTBank",
      terminals: 200,
      terminalId: "3H12345",
      type: "PAX",
      status: "ACTIVE",
      inactiveDays: "",
      merchantName: "Obinna",
      serial: "2033AJM7",
    },
    {
      ellipses: true,
      index: 2,
      bank: "UBA",
      terminals: 12,
      terminalId: "3H12345",
      type: "PAX",
      status: "ACTIVE",
      inactiveDays: "",
      merchantName: "Obinna",
      serial: "2033AJM7",
    },
    {
      ellipses: true,
      index: 3,
      bank: "Access Bank",
      terminals: 40,
      terminalId: "3H12345",
      type: "PAX",
      status: "ACTIVE",
      inactiveDays: "",
      merchantName: "Obinna",
      serial: "2033AJM7",
    },
    {
      ellipses: true,
      index: 4,
      bank: "Access Bank",
      terminals: 40,
      terminalId: "3H12345",
      type: "PAX",
      status: "ACTIVE",
      inactiveDays: "",
      merchantName: "Obinna",
      serial: "2033AJM7",
    },
    {
      ellipses: true,
      index: 5,
      bank: "Access Bank",
      terminals: 40,
      terminalId: "3H12345",
      type: "PAX",
      status: "ACTIVE",
      inactiveDays: "",
      merchantName: "Obinna",
      serial: "2033AJM7",
    },
  ];

  return (
    <DashboardLayout>
      <h3 className={styles.Title}>Terminal per bank</h3>
      <Row gutter={[20, 20]}>
        <Col style={{ marginTop: 20 }} xs={24} md={24} lg={10}>
          <ScrollableCard
            columns={terminalColumn}
            data={terminalData}
            selected={terminalFilter}
            notScrollable
            menu={
              <Menu
                items={[
                  {
                    label: "High",
                    key: "0",
                    onClick: () => setTerminalFilter("High"),
                  },
                  {
                    label: "Medium",
                    key: "0",
                    onClick: () => setTerminalFilter("Medium"),
                  },
                  {
                    label: "Low",
                    key: "0",
                    onClick: () => setTerminalFilter("Low"),
                  },
                ]}
              />
            }
          />
        </Col>
        <Col xs={24} md={24} lg={14}>
          <Card>
            <div className={styles.Container}>
              <div className={styles.Header}>
                <img src="/images/bank.png" alt="bank" />
                <div className={styles.HeaderTexts}>
                  <h3>United Bank for Africa</h3>
                  <span className={styles.ActiveStatus}>ACTIVE</span>
                </div>
              </div>
              <div className={styles.TableContainer}>
                <ScrollableCard
                  columns={terminalColumnFull}
                  data={terminalData}
                  selected={groupFilter}
                  notScrollable
                  menu={
                    <Menu
                      items={[
                        {
                          label: "All",
                          key: "0",
                          onClick: () => setGroupFilter("All"),
                        },
                        {
                          label: "Medium",
                          key: "0",
                          onClick: () => setGroupFilter("Medium"),
                        },
                        {
                          label: "Low",
                          key: "0",
                          onClick: () => setGroupFilter("Low"),
                        },
                      ]}
                    />
                  }
                />
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </DashboardLayout>
  );
};

export default TerminalGroup;
