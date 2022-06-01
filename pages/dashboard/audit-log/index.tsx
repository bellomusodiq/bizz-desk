import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import {
  Button,
  Calendar,
  Col,
  Dropdown,
  Input,
  Menu,
  Modal,
  Row,
  Select,
  Space,
  Tag,
} from "antd";
import { NextPage } from "next";
import React, { useState } from "react";
import BandCard from "../../../components/BandCard/BandCard";
import { IBandCard } from "../../../components/BandCard/types";
import Card from "../../../components/Card/Card";
import BarChart from "../../../components/Charts/BarChart/BarChart";
import PieChart from "../../../components/Charts/PieChart/PieChart";
import ScrollableCard from "../../../components/ScrollableCard/ScrollableCard";
import SummaryCard from "../../../components/SummaryCard/SummaryCard";
import { ISummaryItem } from "../../../components/SummaryCard/types";
import Table from "../../../components/Table/Table";
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import styles from "./audit-logs.module.css";

const AuditLogs: NextPage = () => {
  const [query, setQuery] = useState<string>("");
  const [userType, setUserType] = useState<string>("Users");
  const [status, setStatus] = useState<string>("All");
  const [openFromCalendar, setOpenFromCalendar] = useState<boolean>(false);
  const [openToCalendar, setOpenToCalendar] = useState<boolean>(false);
  const [openUserModal, setOpenUserModal] = useState<boolean>(false);
  const [disableModal, setDisableModal] = useState<boolean>(false);
  const [user, setUser] = useState<any>();
  const [isEditUser, setIsEditUser] = useState<boolean>(false);
  const [openUserForm, setOpenUserForm] = useState<boolean>(false);
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [bankCode, setBankCode] = useState<string>("");
  const [bank, setBank] = useState<string>("Most performing Banks");

  const auditLogColumns = [
    {
      ellipsis: true,
      title: "S/N",
      dataIndex: "index",
      key: "index",
    },
    {
      ellipsis: true,
      title: "USER",
      dataIndex: "user",
      key: "user",
    },
    {
      ellipsis: true,
      title: "EMAIL",
      dataIndex: "email",
      key: "email",
    },
    {
      ellipsis: true,
      title: "TYPE",
      dataIndex: "type",
      key: "type",
      render: (text: string) => {
        let color = "#2085C9";
        if (text === "Edited") {
          color = "#EDA95A";
        }
        if (text === "Disabled") {
          color = "#ED6A5A";
        }
        return <span style={{ color }}>{text}</span>;
      },
    },
    {
      ellipsis: true,
      title: "ENTITY TYPE",
      dataIndex: "entityType",
      key: "entityType",
    },
    {
      ellipsis: true,
      title: "DATE/TIME",
      dataIndex: "dateTime",
      key: "dateTime",
    },
  ];

  const auditLogData = [
    {
      index: 1,
      user: "Olufolake Jaden (Admin)",
      email: "olufolakejaden@gmail.com",
      type: "Created",
      entityType: "Transaction Type",
      dateTime: "2022-02-02 06:35:24PM",
    },
    {
      index: 2,
      user: "Olufolake Jaden (Admin)",
      email: "olufolakejaden@gmail.com",
      type: "Disabled",
      entityType: "Transaction Type",
      dateTime: "2022-02-02 06:35:24PM",
    },
    {
      index: 3,
      user: "Olufolake Jaden (Admin)",
      email: "olufolakejaden@gmail.com",
      type: "Edited",
      entityType: "Transaction Type",
      dateTime: "2022-02-02 06:35:24PM",
    },
    {
      index: 4,
      user: "Olufolake Jaden (Admin)",
      email: "olufolakejaden@gmail.com",
      type: "Created",
      entityType: "Transaction Type",
      dateTime: "2022-02-02 06:35:24PM",
    },
    {
      index: 5,
      user: "Olufolake Jaden (Admin)",
      email: "olufolakejaden@gmail.com",
      type: "Created",
      entityType: "Transaction Type",
      dateTime: "2022-02-02 06:35:24PM",
    },
  ];

  const menu: JSX.Element = (
    <Menu
      items={[
        {
          label: "Users",
          key: "0",
          onClick: () => setUserType("Users"),
        },
        {
          label: "Admin - Maker",
          key: "1",
          onClick: () => setUserType("Admin - Maker"),
        },
        {
          label: "Admin-Checker",
          key: "3",
          onClick: () => setUserType("Admin-Checker"),
        },
        {
          label: "Sub Admin",
          key: "4",
          onClick: () => setUserType("Sub Admin"),
        },
        {
          label: "Support staff",
          key: "5",
          onClick: () => setUserType("Support staff"),
        },
      ]}
    />
  );
  const statusMenu: JSX.Element = (
    <Menu
      items={[
        {
          label: "All",
          key: "0",
          onClick: () => setStatus("All"),
        },
        {
          label: "Active",
          key: "1",
          onClick: () => setStatus("Active"),
        },
        {
          label: "Inactive",
          key: "2",
          onClick: () => setStatus("Inactive"),
        },
      ]}
    />
  );

  const calendarMenu: JSX.Element = (
    <div className={styles.Calendar}>
      <Calendar
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 300,
          backgroundColor: "white",
          border: "1px solid #425c8a2c",
          borderRadius: 4,
        }}
        fullscreen={false}
      />
    </div>
  );
  const filterComponent = (
    <div className={styles.FilterComponent}>
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
            <span className={styles.DropdownTitle}>Showing:</span>{" "}
            <span className={styles.UserType}>{userType}</span>
            <DownOutlined className={styles.DropdownIcon} />
          </button>
        </Dropdown>
      </div>
      <div className={styles.StatusContainer}>
        <Dropdown overlay={statusMenu} trigger={["click"]}>
          <button className={styles.Dropdown}>
            <span className={styles.DropdownTitle}>Status:</span>{" "}
            <span className={styles.UserType}>{status}</span>
            <DownOutlined className={styles.DropdownIcon} />
          </button>
        </Dropdown>
      </div>
      <div className={styles.DateContainer}>
        <Dropdown
          visible={openFromCalendar}
          overlay={calendarMenu}
          trigger={["click"]}
        >
          <button
            onClick={() => setOpenFromCalendar(!openFromCalendar)}
            className={styles.CalendarButton}
          >
            <span className={styles.DropdownTitle}>From:</span>{" "}
            <span className={styles.UserType}>10 August</span>
            <img src="/icons/calendar.svg" alt="calendar icon" />
          </button>
        </Dropdown>
        <hr className={styles.Divider} />
        <Dropdown
          visible={openToCalendar}
          overlay={calendarMenu}
          trigger={["click"]}
          placement="bottomLeft"
        >
          <button
            onClick={() => setOpenToCalendar(!openToCalendar)}
            className={styles.CalendarButton}
          >
            <span className={styles.DropdownTitle}>To:</span>{" "}
            <span className={styles.UserType}>17 August</span>
            <img src="/icons/calendar.svg" alt="calendar icon" />
          </button>
        </Dropdown>
      </div>
      <div className={styles.ButtonContainer}>
        <Button className={styles.ExportData}>Export data</Button>
      </div>
    </div>
  );
  const filterBankComponent = (
    <div className={styles.FilterComponent}>
      <div className={styles.SearchContainer}>
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          suffix={<SearchOutlined />}
          placeholder="Search"
        />
      </div>

      <div className={styles.StatusContainer}>
        <Dropdown overlay={statusMenu} trigger={["click"]}>
          <button className={styles.Dropdown}>
            <span className={styles.DropdownTitle}>Status:</span>{" "}
            <span className={styles.UserType}>{status}</span>
            <DownOutlined className={styles.DropdownIcon} />
          </button>
        </Dropdown>
      </div>
      <div className={styles.ButtonContainer}>
        <Button className={styles.ExportData}>Export data</Button>
      </div>
    </div>
  );

  const performanceColumns = [
    { ellipsis: true, title: "RANK", dataIndex: "rank", key: "rank" },
    {
      ellipsis: true,
      title: "BANK",
      dataIndex: "bank",
      key: "bank",
    },
    {
      ellipsis: true,
      title: "",
      dataIndex: "progress",
      key: "progress",
      render: (text: string, record: any) => (
        <div className={styles.ProgressContainer}>
          <div className={styles.Progress}>
            <div
              style={{ width: `${record.progress}%` }}
              className={styles.ProgressBackground}
            />
            <div style={{ flex: 1 }} className={styles.ProgressLeft} />
          </div>
        </div>
      ),
    },
    {
      ellipsis: true,
      title: "AMOUNT",
      dataIndex: "amount",
      key: "amount",
    },
    {
      ellipsis: true,
      title: "COUNT",
      dataIndex: "count",
      key: "count",
    },
  ];

  const performanceData = [
    {
      rank: 1,
      bank: "GTBank",
      progress: 33,
      amount: "N43,342,002",
      count: "1,423",
    },
    {
      rank: 2,
      bank: "UBA",
      progress: 12,
      amount: "N43,342,002",
      count: "1,423",
    },
    {
      rank: 3,
      bank: "Access Bank",
      progress: 40,
      amount: "N43,342,002",
      count: "1,423",
    },
    {
      rank: 4,
      bank: "Access Bank",
      progress: 40,
      amount: "N43,342,002",
      count: "1,423",
    },
    {
      rank: 5,
      bank: "Access Bank",
      progress: 40,
      amount: "N43,342,002",
      count: "1,423",
    },
  ];

  const errorColumns = [
    { ellipsis: true, title: "RANK", dataIndex: "rank", key: "rank" },
    { ellipsis: true, title: "ERROR", dataIndex: "error", key: "error" },
    { ellipsis: true, title: "COUNT", dataIndex: "count", key: "count" },
  ];

  const errorData = [
    {
      rank: 1,
      error: "Issuer or slip Inoperative",
      count: "1,423",
    },
    {
      rank: 2,
      error: "Not Sufficient fund",
      count: "1,423",
    },
    {
      rank: 3,
      error: "Transaction not permitted to card owner",
      count: "1,423",
    },
    {
      rank: 4,
      error: "Incorrect PIN",
      count: "1,423",
    },
  ];

  return (
    <DashboardLayout>
      <div className={styles.TitleContainer}>
        <h1 className={styles.Title}>Audit Logs</h1>
      </div>

      <div className={styles.TableContainer}>
        <Table
          columns={auditLogColumns}
          data={auditLogData}
          filterComponent={filterComponent}
        />
      </div>
    </DashboardLayout>
  );
};

export default AuditLogs;
