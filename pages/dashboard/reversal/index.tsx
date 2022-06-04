import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import {
  Button,
  Calendar,
  Divider,
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
import styles from "./transactions.module.css";

const DATA: ISummaryItem[] = [
  {
    title: "TOTAL AMOUNT REVERSED",
    percentage: 3.5,
    totalCount: "450",
    isNaira: true,
  },
  {
    title: "TOTAL TRANSACTIONS REVERSED",
    percentage: 3.1,
    totalCount: "22.3k",
  },
];

const USERS = [
  {
    key: "1",
    index: "1",
    merchantName: "Olu and Sons",
    rnn: "8937389",
    terminalRef: "PAX|5C546961 | gopos 1.0.0 ",
    terminalId: "2033AJM7",
    bank: "UBA",
    panAccount: "200*****342",
    cardType: "Verve",
    stan: "98765",
    authCode: "897889",
    transactionType: "Purchase",
    amount: "10.00",
    dateTime: "2022-02-02 06:35:24PM",
    currency: "566",
    bankCharges: "2.5",
    recievableAmount: "9.5",
    responseCode: "00",
  },
  {
    key: "2",
    index: "2",
    merchantName: "Olu and Sons",
    rnn: "8937389",
    terminalRef: "PAX|5C546961 | gopos 1.0.0 ",
    terminalId: "2033AJM7",
    bank: "UBA",
    panAccount: "200*****342",
    cardType: "Verve",
    stan: "98765",
    authCode: "897889",
    transactionType: "Purchase",
    amount: "10.00",
    dateTime: "2022-02-02 06:35:24PM",
    currency: "566",
    bankCharges: "2.5",
    recievableAmount: "9.5",
    responseCode: "00",
  },
  {
    key: "3",
    index: "3",
    merchantName: "Olu and Sons",
    rnn: "8937389",
    terminalRef: "PAX|5C546961 | gopos 1.0.0 ",
    terminalId: "2033AJM7",
    bank: "UBA",
    panAccount: "200*****342",
    cardType: "Verve",
    stan: "98765",
    authCode: "897889",
    transactionType: "Purchase",
    amount: "10.00",
    dateTime: "2022-02-02 06:35:24PM",
    currency: "566",
    bankCharges: "2.5",
    recievableAmount: "9.5",
    responseCode: "00",
  },
  {
    key: "4",
    index: "4",
    merchantName: "Olu and Sons",
    rnn: "8937389",
    terminalRef: "PAX|5C546961 | gopos 1.0.0 ",
    terminalId: "2033AJM7",
    bank: "UBA",
    panAccount: "200*****342",
    cardType: "Verve",
    stan: "98765",
    authCode: "897889",
    transactionType: "Purchase",
    amount: "10.00",
    dateTime: "2022-02-02 06:35:24PM",
    currency: "566",
    bankCharges: "2.5",
    recievableAmount: "9.5",
    responseCode: "00",
  },
  {
    key: "5",
    index: "5",
    merchantName: "Olu and Sons",
    rnn: "8937389",
    terminalRef: "PAX|5C546961 | gopos 1.0.0 ",
    terminalId: "2033AJM7",
    bank: "UBA",
    panAccount: "200*****342",
    cardType: "Verve",
    stan: "98765",
    authCode: "897889",
    transactionType: "Purchase",
    amount: "10.00",
    dateTime: "2022-02-02 06:35:24PM",
    currency: "566",
    bankCharges: "2.5",
    recievableAmount: "9.5",
    responseCode: "00",
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
      title: "CURRENCY",
      dataIndex: "currency",
      key: "currency",
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
      title: "BANK CHARGES",
      dataIndex: "bankCharges",
      key: "bankCharges",
      render: (text: string) => (
        <p style={{ marginBottom: 0 }}>&#8358;{text}</p>
      ),
    },
    {
      ellipsis: true,
      title: "RECIEVABLE AMOUNT",
      dataIndex: "recievableAmount",
      key: "recievableAmount",
      render: (text: string) => (
        <p style={{ marginBottom: 0 }}>&#8358;{text}</p>
      ),
    },
    {
      ellipsis: true,
      title: "REVERSAL DATE/TIME",
      dataIndex: "dateTime",
      key: "dateTime",
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
            Print
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
        title="Transaction Detail"
        visible={openUserModal}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setOpenUserModal(false)}
        footer={
          <div className={styles.UserModal}>
            <p className={styles.FooterStatus}>Status description</p>
            <span
              style={{
                marginBottom: 40,
                width: "fit-content",
                marginLeft: 22,
                padding: 10,
                borderRadius: 20,
              }}
              className={styles.ActiveStatus}
            >
              Completed Successfully
            </span>
            <Button
              style={{
                backgroundColor: "#2085C9",
                color: "white",
                width: "90%",
                border: "none",
              }}
            >
              Print report
            </Button>
            <p className={styles.ViewFullReport}>View full report</p>
            {/* <Button style={{ backgroundColor: "#ED6A5A", color: "white" }}>
              Disable
            </Button> */}
          </div>
        }
      >
        <img src="/icons/logo.svg" />
        <p className={styles.Amount}>Amount</p>
        <h3 className={styles.AmountFigure}>&#8358;40,000</h3>
        <Divider />
        <div className={styles.KeyValue}>
          <div className={styles.Key}>
            <p className={styles.ViewTitle}>Payment date</p>
            <p className={styles.ViewValue}>10 October, 2021</p>
          </div>
          <div className={styles.Value}>
            <p className={styles.ViewTitle}>Customer Bank</p>
            <p className={styles.ViewValue}>Guarantee Trust Bank</p>
          </div>
        </div>
        <Divider />
        <div className={styles.KeyValue}>
          <div className={styles.Key}>
            <p className={styles.ViewTitle}>Terminal ID</p>
            <p className={styles.ViewValue}>0123456789</p>
          </div>
          <div className={styles.Value}>
            <p className={styles.ViewTitle}>RRR</p>
            <p className={styles.ViewValue}>N40,020</p>
          </div>
        </div>
        <Divider />
        <div className={styles.KeyValue}>
          <div className={styles.Key}>
            <p className={styles.ViewTitle}>Merchant ID</p>
            <p className={styles.ViewValue}>0123456789</p>
          </div>
          <div className={styles.Value}>
            <p className={styles.ViewTitle}>Merchant name</p>
            <p className={styles.ViewValue}>John Doe </p>
          </div>
        </div>
        <Divider />
        <div className={styles.KeyValue}>
          <div className={styles.Key}>
            <p className={styles.ViewTitle}>Plan</p>
            <p className={styles.ViewValue}>Percentage plan 0.7 </p>
          </div>
          <div className={styles.Value}>
            <p className={styles.ViewTitle}>Status Code</p>
            <p className={styles.ViewValue}>00</p>
          </div>
        </div>
        <Divider />
        <p style={{ textAlign: "left" }} className={styles.ViewTitle}>
          Description
        </p>
        <p style={{ textAlign: "left" }} className={styles.ViewValue}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          nostrum sapiente dolore est, cum aliquam rem laudantium suscipit
          reprehenderit doloribus et voluptate quia aspernatur quis ducimus
          nulla consequatur assumenda eveniet.
        </p>
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
      <div className={styles.TitleContainer}>
        <h1 className={styles.Title}>Reversal</h1>
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
            lg={12}
          />
        ))}
      </Row>
      <div className={styles.TableContainer}>
        <Table
          columns={columns}
          data={USERS}
          viewAllLink="/dashboard/reversal/all"
          title="List of Reversals"
          filterComponent={filterComponent}
        />
      </div>
    </DashboardLayout>
  );
};

export default Users;
