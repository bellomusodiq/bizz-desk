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
import styles from "./banks.module.css";

const DATA: ISummaryItem[] = [
  {
    title: "TOTAL INCOME",
    percentage: 3.5,
    totalCount: 3.5,
    isNaira: true,
  },
  {
    title: "TOTAL BANKS",
    percentage: 3.1,
    totalCount: 423,
  },
];

const TRANSACTION_DATA: ISummaryItem[] = [
  {
    title: "TOTAL TRANSACTION",
    percentage: 3.4,
    totalCount: 43.2,
    isNaira: true,
    subTotal: "15,342",
  },
  {
    title: "APPROVED TRANSACTION",
    percentage: 3.4,
    totalCount: 33.2,
    isNaira: true,
    subTotal: "13,342",
  },
  {
    title: "FAILED TRANSACTION",
    percentage: 3.4,
    totalCount: 10,
    isNaira: true,
    subTotal: "3,342",
  },
];

const BANKS = [
  {
    key: "1",
    bank: "GTB",
    bankCode: "024",
    status: "ACTIVE",
  },
  {
    key: "2",
    bank: "UBA",
    bankCode: "025",
    status: "ACTIVE",
  },
];

const Banks: NextPage = () => {
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

  const columns = [
    { ellipsis: true, title: "S/N", dataIndex: "key", key: "key" },
    {
      ellipsis: true,
      title: "BANK",
      dataIndex: "bank",
      key: "bank",
    },
    {
      ellipsis: true,
      title: "BANK CODE",
      dataIndex: "bankCode",
      key: "bankCode",
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

  const transactionsColumn = [
    {
      ellipsis: true,
      title: "S/N",
      dataIndex: "index",
      key: "index",
    },
    {
      ellipsis: true,
      title: "TRANSACTION (N)",
      dataIndex: "transaction",
      key: "transaction",
      render: (text: string) => <span>&#8358;{text}</span>,
    },
    {
      ellipsis: true,
      title: "TRANSACTIONS",
      dataIndex: "transactions",
      key: "transactions",
    },
    {
      ellipsis: true,
      title: (
        <h3 className={styles.ApprovedHeader}>
          APPROVED {"("}&#8358;{")"}
        </h3>
      ),
      dataIndex: "approvedAmount",
      key: "approvedAmount",
      render: (text: string) => <span>&#8358;{text}</span>,
    },
    {
      ellipsis: true,
      title: <h3 className={styles.ApprovedHeader}>APPROVED</h3>,
      dataIndex: "approvedCount",
      key: "approvedCount",
    },
    {
      ellipsis: true,
      title: (
        <h3 className={styles.FailedHeader}>
          FAILED {"("}&#8358;{")"}
        </h3>
      ),
      dataIndex: "failedAmount",
      key: "failedAmount",
      render: (text: string) => <span>&#8358;{text}</span>,
    },
    {
      ellipsis: true,
      title: <h3 className={styles.FailedHeader}>FAILED</h3>,
      dataIndex: "failedCount",
      key: "failedCount",
    },
  ];

  const transactionsData = [
    {
      index: 1,
      bank: "GT Bank",
      transaction: "34,342,323",
      transactions: "4,523",
      approvedAmount: "12,000,102",
      approvedCount: "4,322",
      failedAmount: "12,000,102",
      failedCount: "4,322",
    },
    {
      index: 2,
      bank: "GT Bank",
      transaction: "34,342,323",
      transactions: "4,523",
      approvedAmount: "12,000,102",
      approvedCount: "4,322",
      failedAmount: "12,000,102",
      failedCount: "4,322",
    },
    {
      index: 3,
      bank: "GT Bank",
      transaction: "34,342,323",
      transactions: "4,523",
      approvedAmount: "12,000,102",
      approvedCount: "4,322",
      failedAmount: "12,000,102",
      failedCount: "4,322",
    },
    {
      index: 4,
      bank: "GT Bank",
      transaction: "34,342,323",
      transactions: "4,523",
      approvedAmount: "12,000,102",
      approvedCount: "4,322",
      failedAmount: "12,000,102",
      failedCount: "4,322",
    },
    {
      index: 5,
      bank: "GT Bank",
      transaction: "34,342,323",
      transactions: "4,523",
      approvedAmount: "12,000,102",
      approvedCount: "4,322",
      failedAmount: "12,000,102",
      failedCount: "4,322",
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
      <Modal
        style={{ textAlign: "center" }}
        title="View Bank"
        visible={openUserModal}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setOpenUserModal(false)}
        footer={
          <div className={styles.UserModal}>
            <Button style={{ backgroundColor: "#E9F3FA", color: "#2085C9" }}>
              Edit
            </Button>
            <Button style={{ backgroundColor: "#ED6A5A", color: "white" }}>
              Disable
            </Button>
          </div>
        }
      >
        <div className={styles.FormControl}>
          <p>Bank Name</p>
          <Input value={"GT Bank"} />
        </div>
        <div className={styles.FormControl}>
          <p>Bank Code</p>
          <Input value={"054"} />
        </div>
      </Modal>
      <Modal
        title={isEditUser ? "Edit Bank" : "Create Bank"}
        style={{ textAlign: "center" }}
        visible={openUserForm}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setOpenUserForm(false)}
        footer={
          <Button
            onClick={() => setSuccessModal(true)}
            className={styles.ConfirmButton}
          >
            Confirm
          </Button>
        }
      >
        <div className={styles.FormControl}>
          <p>Name</p>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={styles.FormControl}>
          <p>Bank Code</p>
          <Input
            value={bankCode}
            onChange={(e) => setBankCode(e.target.value)}
          />
        </div>
      </Modal>
      <Modal
        title="Disable Bank"
        style={{ textAlign: "center" }}
        visible={disableModal}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setDisableModal(false)}
        footer={<Button className={styles.DisableButton}>Disable</Button>}
      >
        <div className={styles.DisableModal}>
          <img src="/images/info.png" />
          <h3>Disable Bank</h3>
          <p>Are you sure you want to disable this bank?</p>
        </div>
      </Modal>
      <Modal
        title="Bank added successfully"
        style={{ textAlign: "center" }}
        visible={successModal}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setSuccessModal(false)}
        footer={
          <Button
            onClick={() => setSuccessModal(false)}
            className={styles.ProceedButton}
          >
            Proceed
          </Button>
        }
      >
        <div className={styles.DisableModal}>
          <img src="/images/success.png" />
          <h3>Bank Added</h3>
          <p>You have sucessfully added a new bank</p>
        </div>
      </Modal>
      <div className={styles.TitleContainer}>
        <h1 className={styles.Title}>Banks</h1>
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
          />
        ))}
      </Row>
      <Row style={{ marginTop: 24 }} wrap gutter={[20, 20]}>
        {TRANSACTION_DATA.map((summary, i) => (
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
      <Row style={{ marginTop: 24 }} align="stretch" wrap gutter={[20, 20]}>
        <Col md={12} xs={24} lg={7}>
          <Card>
            <PieChart
              title="INCOME"
              data={[
                {
                  name: "PTSP",
                  value: 400,
                },
                {
                  name: "TMO",
                  value: 300,
                },
              ]}
              value="34m"
              isNaira
              isFilter
              percentage={22}
              colors={["#2085C9", "#20C9B5"]}
              caption={[
                "N34,204,343 income made by PTSP",
                "N34,204,343 income made by TMO",
              ]}
            />
          </Card>
        </Col>
        <Col md={12} xs={24} lg={7}>
          <Card>
            <PieChart
              title="TRANSACTIONS"
              data={[
                {
                  name: "PTSP",
                  value: 400,
                },
                {
                  name: "TMO",
                  value: 300,
                },
              ]}
              value="34m"
              isNaira
              isFilter
              percentage={33}
              colors={["#2085C9", "#20C9B5"]}
              caption={[
                "N34,204,343 income made by PTSP",
                "N34,204,343 income made by TMO",
              ]}
            />
          </Card>
        </Col>
        <Col style={{ height: "100%" }} md={24} xs={24} lg={10}>
          <BarChart
            title="Acquirer Performance per card"
            data={[
              {
                name: "MASTERCARD",
                failed: 85,
                successful: 65,
              },
              {
                name: "VERVE CARD",
                failed: 43,
                successful: 82,
              },
              {
                name: "VISA CARD",
                failed: 69,
                successful: 60,
              },
            ]}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: 24 }} align="stretch" wrap gutter={[20, 20]}>
        <Col style={{ height: "100%" }} md={24} lg={12}>
          <ScrollableCard
            selected={bank}
            title="Performance"
            columns={performanceColumns}
            data={performanceData}
            menu={
              <Menu
                items={[
                  {
                    label: "Most performing Banks",
                    key: "0",
                    onClick: () => setBank("Most performing Banks"),
                  },
                ]}
              />
            }
          />
        </Col>
        <Col style={{ height: "100%" }} md={24} lg={12}>
          <ScrollableCard
            selected={bank}
            title="Error"
            columns={errorColumns}
            data={errorData}
            menu={
              <Menu
                items={[
                  {
                    label: "Most performing Banks",
                    key: "0",
                    onClick: () => setBank("Most performing Banks"),
                  },
                ]}
              />
            }
          />
        </Col>
      </Row>
      <Row style={{ marginTop: 24 }} wrap>
        <Col xs={24}>
          <BarChart
            noFilter
            title="Transaction per Bank"
            data={[
              {
                name: "GTB (N2.4m)",
                failed: 85,
                successful: 65,
              },
              {
                name: "FIRSTBANK (N2.4m)",
                failed: 43,
                successful: 82,
              },
              {
                name: "ACCESS (N2.4m)",
                failed: 69,
                successful: 60,
              },
              {
                name: "HERITAGE (N2.4m)",
                failed: 3,
                successful: 10,
              },
              {
                name: "UNION (N2.4m)",
                failed: 20,
                successful: 80,
              },
              {
                name: "FCMB (N2.4m)",
                failed: 33,
                successful: 29,
              },
              {
                name: "KEYSTONE (N2.4m)",
                failed: 9,
                successful: 79,
              },
              {
                name: "BANK PHB (N2.4m)",
                failed: 33,
                successful: 45,
              },
              {
                name: "STERLING (N2.4m)",
                failed: 66,
                successful: 32,
              },
              {
                name: "FIDELITY (N2.4m)",
                failed: 12,
                successful: 33,
              },
              {
                name: "ECOBANK (N2.4m)",
                failed: 22,
                successful: 45,
              },
              {
                name: "KUDA (N2.4m)",
                failed: 8,
                successful: 89,
              },
            ]}
            footer={
              <div className={styles.Transactions}>
                <div className={styles.Transaction}>
                  <h3>TOTAL TRANSACTIONS</h3>
                  <p>&#8358;4.32m</p>
                </div>
                <div className={styles.Transaction}>
                  <h3>TRANSACTION COUNT</h3>
                  <p>22.6k</p>
                </div>
              </div>
            }
          />
        </Col>
      </Row>
      <div className={styles.TableContainer}>
        <Table
          columns={transactionsColumn}
          data={transactionsData}
          title="List of Transaction Summary"
          filterComponent={filterComponent}
        />
      </div>
      <div className={styles.TableContainer}>
        <Table
          columns={columns}
          data={BANKS}
          viewAllLink="/dashboard/banks/all"
          title="List of Banks"
          filterComponent={filterBankComponent}
        />
      </div>
    </DashboardLayout>
  );
};

export default Banks;
