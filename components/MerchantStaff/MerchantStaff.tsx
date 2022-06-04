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
import BandCard from "../BandCard/BandCard";
import { IBandCard } from "../BandCard/types";
import SummaryCard from "../SummaryCard/SummaryCard";
import { ISummaryItem } from "..//SummaryCard/types";
import Table from "../Table/Table";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import styles from "./MerchantStaff.module.css";

const USERS = [
  {
    key: "1",
    index: "1",
    staffName: "Olu Eniorirufoko",
    email: "utyte@email.com",
    phoneNumber: "09021256322",
    terminalType: "Pax s90",
    terminalId: "12345rf5",
    bank: "GTB",
    merchantName: "Ololade Bangbowo",
    merchantAddress: "Oshodi, Lagos",
    actionTaken: "Lorem ipsum dolor sit amet, conse...",
    dateVisited: "2022-02-02 06:35:24PM",
    status: "ACTIVE",
  },
  {
    key: "2",
    index: "2",
    staffName: "Olu Eniorirufoko",
    email: "utyte@email.com",
    phoneNumber: "09021256322",
    terminalType: "Pax s90",
    terminalId: "12345rf5",
    bank: "GTB",
    merchantName: "Ololade Bangbowo",
    merchantAddress: "Oshodi, Lagos",
    actionTaken: "Lorem ipsum dolor sit amet, conse...",
    dateVisited: "2022-02-02 06:35:24PM",
    status: "ACTIVE",
  },
  {
    key: "3",
    index: "3",
    staffName: "Olu Eniorirufoko",
    email: "utyte@email.com",
    phoneNumber: "09021256322",
    terminalType: "Pax s90",
    terminalId: "12345rf5",
    bank: "GTB",
    merchantName: "Ololade Bangbowo",
    merchantAddress: "Oshodi, Lagos",
    actionTaken: "Lorem ipsum dolor sit amet, conse...",
    dateVisited: "2022-02-02 06:35:24PM",
    status: "ACTIVE",
  },
  {
    key: "4",
    index: "4",
    staffName: "Olu Eniorirufoko",
    email: "utyte@email.com",
    phoneNumber: "09021256322",
    terminalType: "Pax s90",
    terminalId: "12345rf5",
    bank: "GTB",
    merchantName: "Ololade Bangbowo",
    merchantAddress: "Oshodi, Lagos",
    actionTaken: "Lorem ipsum dolor sit amet, conse...",
    dateVisited: "2022-02-02 06:35:24PM",
    status: "ACTIVE",
  },
  {
    key: "5",
    index: "5",
    staffName: "Olu Eniorirufoko",
    email: "utyte@email.com",
    phoneNumber: "09021256322",
    terminalType: "Pax s90",
    terminalId: "12345rf5",
    bank: "GTB",
    merchantName: "Ololade Bangbowo",
    merchantAddress: "Oshodi, Lagos",
    actionTaken: "Lorem ipsum dolor sit amet, conse...",
    dateVisited: "2022-02-02 06:35:24PM",
    status: "ACTIVE",
  },
];

const Merchants: NextPage = () => {
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
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [account, setAccount] = useState<string>("");
  const [bank, setBank] = useState<string>("");
  const [band, setBand] = useState<string>("");
  const [supportStaff, setSupportStaff] = useState<string>("");

  const columns = [
    { ellipsis: true, title: "S/N", dataIndex: "index", key: "index" },
    {
      ellipsis: true,
      title: "STAFF NAME",
      dataIndex: "staffName",
      key: "staffName",
    },
    {
      ellipsis: true,
      title: "EMAIL",
      dataIndex: "email",
      key: "email",
    },
    {
      ellipsis: true,
      title: "PHONE NUMBER",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      ellipsis: true,
      title: "TERMINAL TYPE",
      dataIndex: "terminalType",
      key: "terminalType",
    },
    {
      ellipsis: true,
      title: "TERMINAL ID",
      dataIndex: "terminalId",
      key: "terminalId",
    },
    {
      ellipsis: true,
      title: "BANK",
      dataIndex: "bank",
      key: "bank",
    },
    {
      ellipsis: true,
      title: "MERCHANT NAME",
      dataIndex: "merchantName",
      key: "merchantName",
    },
    {
      ellipsis: true,
      title: "MERCHANT ADDRESS",
      dataIndex: "merchantAddress",
      key: "merchantAddress",
    },
    {
      ellipsis: true,
      title: "DATE VISITED",
      dataIndex: "dateVisited",
      key: "dateVisited",
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
    {
      ellipsis: true,
      title: "ACTION TAKEN",
      dataIndex: "actionTaken",
      key: "actionTaken",
    },
    {
      ellipsis: true,
      title: "",
      render: (text: string, record: any) => (
        <div className={styles.Actions}>
          <button
            onClick={() => {
              setUser(record);
              setOpenUserModal(true);
            }}
            className={styles.View}
          >
            View
          </button>
        </div>
      ),
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
  return (
    <>
      <Modal
        style={{ textAlign: "center" }}
        title="Merchant support for staff"
        visible={openUserModal}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setOpenUserModal(false)}
        footer={null}
      >
        <div className={styles.FormControl}>
          <p className={styles.MerchantKey}>Staff name</p>
          <p className={styles.MerchantValue}>Ola Eniorirufoko</p>
        </div>
        <div className={styles.FormControl}>
          <p className={styles.MerchantKey}>Staff email</p>
          <p className={styles.MerchantValue}>Olaeni@emailcom</p>
        </div>
        <div className={styles.FormControl}>
          <p className={styles.MerchantKey}>Terminal type</p>
          <p className={styles.MerchantValue}>Pax s90</p>
        </div>
        <div className={styles.FormControl}>
          <p className={styles.MerchantKey}>Terminal ID</p>
          <p className={styles.MerchantValue}>0938h482</p>
        </div>
        <div className={styles.FormControl}>
          <p className={styles.MerchantKey}>Terminal series</p>
          <p className={styles.MerchantValue}>231232</p>
        </div>
        <div className={styles.FormControl}>
          <p className={styles.MerchantKey}>Bank</p>
          <p className={styles.MerchantValue}>UBA</p>
        </div>
        <div className={styles.FormControl}>
          <p className={styles.MerchantKey}>Merchant name</p>
          <p className={styles.MerchantValue}>Ololade Bangbowo</p>
        </div>
        <div className={styles.FormControl}>
          <p className={styles.MerchantKey}>Merchant Address</p>
          <p className={styles.MerchantValue}>Oshodi, Lagos</p>
        </div>
        <div className={styles.FormControl}>
          <p className={styles.MerchantKey}>Date Recieved</p>
          <p className={styles.MerchantValue}>2022-03-08 12:05:24</p>
        </div>
        <div className={styles.FormControl}>
          <p className={styles.MerchantKey}>Date Delivered</p>
          <p className={styles.MerchantValue}>2022-03-08 12:05:24</p>
        </div>
        <div className={styles.FormControl}>
          <p className={styles.MerchantKey}>Status</p>
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <span
              style={{ width: "fit-content", justifySelf: "flex-start" }}
              className={styles.ActiveStatus}
            >
              ACTIVE
            </span>
          </div>
        </div>
        <div className={styles.FormControl}>
          <p className={styles.MerchantKey}>Fault</p>
          <p className={styles.MerchantValue}>Printer Fault</p>
        </div>
        <div className={styles.FormControl}>
          <p className={styles.MerchantKey}>Part Used</p>
          <p className={styles.MerchantValue}>Screen</p>
        </div>
        <div className={styles.FormControl}>
          <p className={styles.MerchantKey}>Action Taken</p>
          <p className={styles.MerchantValue}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
            commodo, eget sit fringilla odio dolor, in ullamcorper.
          </p>
        </div>
      </Modal>
      <div className={styles.TableContainer}>
        <Table
          columns={columns}
          data={USERS}
          viewAllLink="/dashboard/merchant-support/staffs"
          title="Merchant support for staffs"
          filterComponent={filterComponent}
        />
      </div>
    </>
  );
};

export default Merchants;
