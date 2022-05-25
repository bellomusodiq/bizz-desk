import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Calendar, Dropdown, Input, Menu, Modal, Select } from "antd";
import { NextPage } from "next";
import React, { useState } from "react";
import Table from "../../../components/Table/Table";
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import styles from "./users.module.css";

const USERS = [
  {
    key: "1",
    index: "1",
    merchantName: "Olu and Sons",
    rnn: "8937389",
    terminalRef: "Zenith",
    terminalId: "2033AJM7",
    bank: "UBA",
    panAccount: "200*****342",
    cardType: "Verve",
    stan: "98765",
    authCode: "897889",
    transactionType: "Purchase",
    amount: "10.00",
    dateTime: "2022-02-02 06:35:24PM",
    status: "ACTIVE",
    responseCode: "00",
  },
  {
    key: "2",
    index: "2",
    merchantName: "Olu and Sons",
    rnn: "8937389",
    terminalRef: "Zenith",
    terminalId: "2033AJM7",
    bank: "UBA",
    panAccount: "200*****342",
    cardType: "Verve",
    stan: "98765",
    authCode: "897889",
    transactionType: "Purchase",
    amount: "10.00",
    dateTime: "2022-02-02 06:35:24PM",
    status: "ACTIVE",
    responseCode: "00",
  },
  {
    key: "3",
    index: "3",
    merchantName: "Olu and Sons",
    rnn: "8937389",
    terminalRef: "Zenith",
    terminalId: "2033AJM7",
    bank: "UBA",
    panAccount: "200*****342",
    cardType: "Verve",
    stan: "98765",
    authCode: "897889",
    transactionType: "Purchase",
    amount: "10.00",
    dateTime: "2022-02-02 06:35:24PM",
    status: "ACTIVE",
    responseCode: "00",
  },
  {
    key: "4",
    index: "4",
    merchantName: "Olu and Sons",
    rnn: "8937389",
    terminalRef: "Zenith",
    terminalId: "2033AJM7",
    bank: "UBA",
    panAccount: "200*****342",
    cardType: "Verve",
    stan: "98765",
    authCode: "897889",
    transactionType: "Purchase",
    amount: "10.00",
    dateTime: "2022-02-02 06:35:24PM",
    status: "ACTIVE",
    responseCode: "00",
  },
  {
    key: "5",
    index: "5",
    merchantName: "Olu and Sons",
    rnn: "8937389",
    terminalRef: "Zenith",
    terminalId: "2033AJM7",
    bank: "UBA",
    panAccount: "200*****342",
    cardType: "Verve",
    stan: "98765",
    authCode: "897889",
    transactionType: "Purchase",
    amount: "10.00",
    dateTime: "2022-02-02 06:35:24PM",
    status: "ACTIVE",
    responseCode: "00",
  },
  {
    key: "6",
    index: "6",
    merchantName: "Olu and Sons",
    rnn: "8937389",
    terminalRef: "Zenith",
    terminalId: "2033AJM7",
    bank: "UBA",
    panAccount: "200*****342",
    cardType: "Verve",
    stan: "98765",
    authCode: "897889",
    transactionType: "Purchase",
    amount: "10.00",
    dateTime: "2022-02-02 06:35:24PM",
    status: "ACTIVE",
    responseCode: "00",
  },
  {
    key: "7",
    index: "7",
    merchantName: "Olu and Sons",
    rnn: "8937389",
    terminalRef: "Zenith",
    terminalId: "2033AJM7",
    bank: "UBA",
    panAccount: "200*****342",
    cardType: "Verve",
    stan: "98765",
    authCode: "897889",
    transactionType: "Purchase",
    amount: "10.00",
    dateTime: "2022-02-02 06:35:24PM",
    status: "ACTIVE",
    responseCode: "00",
  },
  {
    key: "8",
    index: "8",
    merchantName: "Olu and Sons",
    rnn: "8937389",
    terminalRef: "Zenith",
    terminalId: "2033AJM7",
    bank: "UBA",
    panAccount: "200*****342",
    cardType: "Verve",
    stan: "98765",
    authCode: "897889",
    transactionType: "Purchase",
    amount: "10.00",
    dateTime: "2022-02-02 06:35:24PM",
    status: "ACTIVE",
    responseCode: "00",
  },
  {
    key: "9",
    index: "9",
    merchantName: "Olu and Sons",
    rnn: "8937389",
    terminalRef: "Zenith",
    terminalId: "2033AJM7",
    bank: "UBA",
    panAccount: "200*****342",
    cardType: "Verve",
    stan: "98765",
    authCode: "897889",
    transactionType: "Purchase",
    amount: "10.00",
    dateTime: "2022-02-02 06:35:24PM",
    status: "ACTIVE",
    responseCode: "00",
  },
  {
    key: "10",
    index: "10",
    merchantName: "Olu and Sons",
    rnn: "8937389",
    terminalRef: "Zenith",
    terminalId: "2033AJM7",
    bank: "UBA",
    panAccount: "200*****342",
    cardType: "Verve",
    stan: "98765",
    authCode: "897889",
    transactionType: "Purchase",
    amount: "10.00",
    dateTime: "2022-02-02 06:35:24PM",
    status: "ACTIVE",
    responseCode: "00",
  },
];

const AllUsers: NextPage = () => {
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
  const [merchant, setMerchant] = useState<string>("");
  const [accquirer, setAccquirer] = useState<string>("");
  const [notificationClass, setNotificationClass] = useState<string>("");
  const [key, setKey] = useState<string>("");
  const [reversalURL, setReversalURL] = useState<string>("");
  const [url, setURL] = useState<string>("");
  const [port, setPort] = useState<string>("");

  const columns = [
    { ellipsis: true, title: "S/N", dataIndex: "index", key: "index" },
    {
      ellipsis: true,
      title: "MERCHANT NAME",
      dataIndex: "merchantName",
      key: "merchantName",
    },
    {
      ellipsis: true,
      title: "RNN",
      dataIndex: "rnn",
      key: "rnn",
    },
    {
      ellipsis: true,
      title: "TERMINAL REF",
      dataIndex: "terminalRef",
      key: "terminalRef",
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
      title: "PAN ACCOUNT",
      dataIndex: "panAccount",
      key: "panAccount",
    },
    {
      ellipsis: true,
      title: "CARD TYPE",
      dataIndex: "cardType",
      key: "cardType",
    },
    {
      ellipsis: true,
      title: "STAN",
      dataIndex: "stan",
      key: "stan",
    },
    {
      ellipsis: true,
      title: "AUTH CODE",
      dataIndex: "authCode",
      key: "authCode",
    },
    {
      ellipsis: true,
      title: "TRANSACTION TYPE",
      dataIndex: "transactionType",
      key: "transactionType",
    },
    {
      ellipsis: true,
      title: "AMOUNT",
      dataIndex: "amount",
      key: "amount",
      render: (text: string) => (
        <p style={{ marginBottom: 0 }}>&#8358;{text}</p>
      ),
    },
    {
      ellipsis: true,
      title: "PSTSP FEE",
      dataIndex: "pstspFee",
      key: "pstspFee",
      render: (text: string) => (
        <p style={{ marginBottom: 0 }}>&#8358;{text}</p>
      ),
    },
    {
      ellipsis: true,
      title: "TMO FEE",
      dataIndex: "tmoFee",
      key: "tmoFee",
      render: (text: string) => (
        <p style={{ marginBottom: 0 }}>&#8358;{text}</p>
      ),
    },
    {
      ellipsis: true,
      title: "DATE/TIME",
      dataIndex: "dateTime",
      key: "dateTime",
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
      title: "RESPONSE CODE",
      dataIndex: "responseCode",
      key: "responseCode",
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
          <button
            onClick={() => {
              setIsEditUser(true);
              setOpenUserForm(true);
            }}
            className={styles.Edit}
          >
            Edit
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
    <DashboardLayout>
      <Modal
        style={{ textAlign: "center" }}
        title="View Notification"
        visible={openUserModal}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setOpenUserModal(false)}
        footer={
          <div className={styles.UserModal}>
            <Button
              style={{
                backgroundColor: "#E9F3FA",
                color: "#2085C9",
                width: "90%",
              }}
            >
              Edit
            </Button>
            {/* <Button style={{ backgroundColor: "#ED6A5A", color: "white" }}>
              Disable
            </Button> */}
          </div>
        }
      >
        <div className={styles.FormControl}>
          <p>Merchant</p>
          <Input value="Olu and sons" />
        </div>
        <div className={styles.FormControl}>
          <p>Accquirer</p>
          <Input value={"Olu and sons"} />
        </div>
        <div className={styles.FormControl}>
          <p>Notification class</p>
          <Input value={"1"} />
        </div>
        <div className={styles.FormControl}>
          <p>Key</p>
          <Input value={"12345"} />
        </div>
        <div className={styles.FormControl}>
          <p>Reversal URL</p>
          <Input value={"https://reversal.bizdesk.com"} />
        </div>
        <div className={styles.FormControl}>
          <p>URL</p>
          <Input value={"https://bizdesk.com"} />
        </div>
        <div className={styles.FormControl}>
          <p>PORT</p>
          <Input value={"8080"} />
        </div>
      </Modal>
      <Modal
        title={
          isEditUser
            ? "Edit Notification Service"
            : "Create Notification Service"
        }
        style={{ textAlign: "center" }}
        visible={openUserForm}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setOpenUserForm(false)}
        footer={<Button className={styles.ConfirmButton}>Confirm</Button>}
      >
        <div className={styles.FormControl}>
          <p>Merchant</p>
          <Input
            value={merchant}
            onChange={(e) => setMerchant(e.target.value)}
          />
        </div>
        <div className={styles.FormControl}>
          <p>Accquirer</p>
          <Input
            value={accquirer}
            onChange={(e) => setAccquirer(e.target.value)}
          />
        </div>
        <div className={styles.FormControl}>
          <p>Notification class</p>
          <Input
            value={notificationClass}
            onChange={(e) => setNotificationClass(e.target.value)}
          />
        </div>
        <div className={styles.FormControl}>
          <p>Key</p>
          <Input value={key} onChange={(e) => setKey(e.target.value)} />
        </div>
        <div className={styles.FormControl}>
          <p>Reversal URL</p>
          <Input
            value={reversalURL}
            onChange={(e) => setReversalURL(e.target.value)}
          />
        </div>
        <div className={styles.FormControl}>
          <p>URL</p>
          <Input value={url} onChange={(e) => setURL(e.target.value)} />
        </div>
        <div className={styles.FormControl}>
          <p>PORT</p>
          <Input value={port} onChange={(e) => setPort(e.target.value)} />
        </div>
      </Modal>
      <Modal
        title="Disable Notification"
        style={{ textAlign: "center" }}
        visible={disableModal}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setDisableModal(false)}
        footer={<Button className={styles.DisableButton}>Disable</Button>}
      >
        <div className={styles.DisableModal}>
          <img src="/images/info.png" />
          <h3>Disable User</h3>
          <p>Are you sure you want to disable this user</p>
        </div>
      </Modal>
      <div className={styles.TableContainer}>
        <Table
          columns={columns}
          data={USERS}
          title="List of Notification Services"
          filterComponent={filterComponent}
        />
      </div>
    </DashboardLayout>
  );
};

export default AllUsers;
