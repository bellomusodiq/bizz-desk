import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import {
  Button,
  Calendar,
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
import SummaryCard from "../../../components/SummaryCard/SummaryCard";
import { ISummaryItem } from "../../../components/SummaryCard/types";
import Table from "../../../components/Table/Table";
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import styles from "./users.module.css";

const DATA: ISummaryItem[] = [
  {
    title: "TOTAL NOTIFICATION SERVICES",
    percentage: 3.5,
    totalCount: "450k",
  },
  {
    title: "ACTIVE NOTIFICATION SERVICES",
    percentage: 3.1,
    totalCount: "22.3k",
  },
  {
    title: "INACTIVE NOTIFICATION SERVICES",
    percentage: 3.6,
    totalCount: "13k",
  },
];

const NOTIFICATION_TRANSACTIONS = [
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
];

const NOTIFICATION_SERVICES = [
  {
    index: 1,
    merchantName: "Stan Instant",
    merchantId: "8937389",
    acquirer: "Zenith",
    notificationClass: "staninstantnotifier",
    reversalUrl: "https://reversal.stan.com",
    url: "https://stan.com",
    port: "8080",
    key: "4RE5TX",
    dateCreated: "2021-02-02 06:35:24PM",
    status: "ACTIVE",
  },
];

const Users: NextPage = () => {
  const [query, setQuery] = useState<string>("");
  const [userType, setUserType] = useState<string>("Users");
  const [status, setStatus] = useState<string>("All");
  const [openFromCalendar, setOpenFromCalendar] = useState<boolean>(false);
  const [openToCalendar, setOpenToCalendar] = useState<boolean>(false);
  const [openUserModal, setOpenUserModal] = useState<boolean>(false);
  const [disableModal, setDisableModal] = useState<boolean>(false);
  const [type, setType] = useState<string>("");
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
  const [merchantId, setMerchantId] = useState<string>("");

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
              setType("transactions");
            }}
            className={styles.View}
          >
            View
          </button>
          <button
            onClick={() => {
              setIsEditUser(true);
              setOpenUserForm(true);
              setType("transactions");
            }}
            className={styles.Edit}
          >
            Edit
          </button>
        </div>
      ),
    },
  ];

  const notificationServiceColumns = [
    { ellipsis: true, title: "S/N", dataIndex: "index", key: "index" },
    {
      ellipsis: true,
      title: "MERCHANT NAME",
      dataIndex: "merchantName",
      key: "merchantName",
    },
    {
      ellipsis: true,
      title: "Merchant ID",
      dataIndex: "merchantId",
      key: "merchantId",
    },
    {
      ellipsis: true,
      title: "Acquirer",
      dataIndex: "acquirer",
      key: "acquirer",
    },
    {
      ellipsis: true,
      title: "NOTIFICATION CLASS",
      dataIndex: "notificationClass",
      key: "notificationClass",
    },
    {
      ellipsis: true,
      title: "REVERSAL URL",
      dataIndex: "reversalUrl",
      key: "reversalUrl",
    },
    {
      ellipsis: true,
      title: "URL",
      dataIndex: "url",
      key: "url",
    },
    {
      ellipsis: true,
      title: "PORT",
      dataIndex: "port",
      key: "port",
    },
    {
      ellipsis: true,
      title: "KEY",
      dataIndex: "key",
      key: "key",
    },
    {
      ellipsis: true,
      title: "DATE CREATED",
      dataIndex: "dateCreated",
      key: "dateCreated",
    },
    // {
    //   ellipsis: true,
    //   title: "AMOUNT",
    //   dataIndex: "amount",
    //   key: "amount",
    //   render: (text: string) => (
    //     <p style={{ marginBottom: 0 }}>&#8358;{text}</p>
    //   ),
    // },
    // {
    //   ellipsis: true,
    //   title: "PSTSP FEE",
    //   dataIndex: "pstspFee",
    //   key: "pstspFee",
    //   render: (text: string) => (
    //     <p style={{ marginBottom: 0 }}>&#8358;{text}</p>
    //   ),
    // },
    // {
    //   ellipsis: true,
    //   title: "TMO FEE",
    //   dataIndex: "tmoFee",
    //   key: "tmoFee",
    //   render: (text: string) => (
    //     <p style={{ marginBottom: 0 }}>&#8358;{text}</p>
    //   ),
    // },
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
      title: "",
      render: (text: string, record: any) => (
        <div className={styles.Actions}>
          <button
            onClick={() => setDisableModal(true)}
            className={styles.Disable}
          >
            Disable
          </button>
          <button
            onClick={() => {
              setUser(record);
              setOpenUserModal(true);
              setType("service");
            }}
            className={styles.View}
          >
            View
          </button>
          <button
            onClick={() => {
              setIsEditUser(true);
              setOpenUserForm(true);
              setType("service");
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
            ? `Edit Notification ${
                type === "transactions" ? "Transaction" : "Service"
              }`
            : `Create Notification ${
                type === "transactions" ? "Transaction" : "Service"
              }`
        }
        style={{ textAlign: "center" }}
        visible={openUserForm}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setOpenUserForm(false)}
        footer={<Button className={styles.ConfirmButton}>Confirm</Button>}
      >
        {type === "transactions" ? (
          <>
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
          </>
        ) : (
          <>
            <div className={styles.FormControl}>
              <p>Merchant Name</p>
              <Input
                value={merchant}
                onChange={(e) => setMerchant(e.target.value)}
              />
            </div>
            <div className={styles.FormControl}>
              <p>Merchant ID</p>
              <Input
                value={merchantId}
                onChange={(e) => setMerchantId(e.target.value)}
              />
            </div>
            <div className={styles.FormControl}>
              <p>Acquirer</p>
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
            <div className={styles.FormControl}>
              <p>KEY</p>
              <Input value={key} onChange={(e) => setKey(e.target.value)} />
            </div>
          </>
        )}
      </Modal>
      <Modal
        title="Disable Notification Service"
        style={{ textAlign: "center" }}
        visible={disableModal}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setDisableModal(false)}
        footer={<Button className={styles.DisableButton}>Disable</Button>}
      >
        <div className={styles.DisableModal}>
          <img src="/images/info.png" />
          <h3>Disable Notification Service</h3>
          <p>Are you sure you want to disable this notifiation service</p>
        </div>
      </Modal>
      <div className={styles.TitleContainer}>
        <h1 className={styles.Title}>Notification Services</h1>
        <Button
          style={{
            backgroundColor: "#2085C9",
            color: "white",
            display: "flex",
            alignItems: "center",
            borderRadius: 8,
            padding: 20,
          }}
          onClick={() => {
            setOpenUserForm(true);
            setIsEditUser(false);
            setType("service");
          }}
          icon={<img style={{ marginRight: 5 }} src="/icons/add-square.svg" />}
        >
          Create Notification Service
        </Button>
      </div>
      <Row wrap gutter={[20, 20]}>
        {DATA.map((summary, i) => (
          <SummaryCard
            key={i}
            title={summary.title}
            totalCount={summary.totalCount}
            isNaira={summary.isNaira}
            percentage={summary.percentage}
            xs={24}
            sm={24}
            md={12}
            lg={8}
          />
        ))}
      </Row>
      <div className={styles.TableContainer}>
        <Table
          columns={notificationServiceColumns}
          data={NOTIFICATION_SERVICES}
          title="List of Notification Transactions"
          // filterComponent={filterComponent}
        />
      </div>
      <div style={{ marginTop: 50 }} className={styles.TitleContainer}>
        <h1 className={styles.Title}>Notification Transactions</h1>
        <Button
          style={{
            backgroundColor: "#2085C9",
            color: "white",
            display: "flex",
            alignItems: "center",
            borderRadius: 8,
            padding: 20,
          }}
          onClick={() => {
            setOpenUserForm(true);
            setIsEditUser(false);
            setType("transactions");
          }}
          icon={<img style={{ marginRight: 5 }} src="/icons/add-square.svg" />}
        >
          Create Notification transaction
        </Button>
      </div>
      <div className={styles.TableContainer}>
        <Table
          columns={columns}
          data={NOTIFICATION_TRANSACTIONS}
          viewAllLink="/dashboard/notifications/all"
          title="List of Notification Transactions"
          filterComponent={filterComponent}
        />
      </div>
    </DashboardLayout>
  );
};

export default Users;
