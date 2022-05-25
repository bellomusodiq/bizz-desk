import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import {
  Button,
  Calendar,
  Dropdown,
  Input,
  Menu,
  Modal,
  Select,
  Row,
  Col,
  Divider,
} from "antd";
import { NextPage } from "next";
import React, { useState } from "react";
import Table from "../../../components/Table/Table";
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import styles from "./terminals.module.css";

const TERMINALS = [
  {
    key: "1",
    index: "1",
    type: "PAX",
    model: "S90",
    software: "gopos 1.0.0",
    bank: "UBA",
    merchantName: "Obinna",
    terminalId: "2033AJM7",
    serial: "3H12345",
    lastSeen: "2022-03-08 12:05:24",
    lastTransaction: "2022-03-08 12:05:24",
    status: "ACTIVE",
    batteryLevel: "100",
    power: "Charged",
    printer: "Printer OK",
    network: "GPRS",
    transactionToday: "34,500,222",
    inactiveDays: "",
    signal: 100,
  },
  {
    key: "2",
    index: "2",
    type: "PAX",
    model: "S90",
    software: "gopos 1.0.0",
    bank: "UBA",
    merchantName: "Obinna",
    terminalId: "2033AJM7",
    serial: "3H12345",
    lastSeen: "2022-03-08 12:05:24",
    lastTransaction: "2022-03-08 12:05:24",
    status: "ACTIVE",
    batteryLevel: "100",
    power: "Charging",
    printer: "Printer OK",
    network: "GPRS",
    transactionToday: "34,500,222",
    inactiveDays: "",
    signal: 100,
  },
  {
    key: "3",
    index: "3",
    type: "PAX",
    model: "S90",
    software: "gopos 1.0.0",
    bank: "UBA",
    merchantName: "Obinna",
    terminalId: "2033AJM7",
    serial: "3H12345",
    lastSeen: "2022-03-08 12:05:24",
    lastTransaction: "2022-03-08 12:05:24",
    status: "ACTIVE",
    batteryLevel: "100",
    power: "Charged",
    printer: "Printer OK",
    network: "GPRS",
    transactionToday: "34,500,222",
    inactiveDays: "",
    signal: 100,
  },
  {
    key: "4",
    index: "4",
    type: "PAX",
    model: "S90",
    software: "gopos 1.0.0",
    bank: "UBA",
    merchantName: "Obinna",
    terminalId: "2033AJM7",
    serial: "3H12345",
    lastSeen: "2022-03-08 12:05:24",
    lastTransaction: "2022-03-08 12:05:24",
    status: "ACTIVE",
    batteryLevel: "100",
    power: "Charged",
    printer: "Printer OK",
    network: "GPRS",
    transactionToday: "34,500,222",
    inactiveDays: "",
    signal: 100,
  },
  {
    key: "5",
    index: "5",
    type: "PAX",
    model: "S90",
    software: "gopos 1.0.0",
    bank: "UBA",
    merchantName: "Obinna",
    terminalId: "2033AJM7",
    serial: "3H12345",
    lastSeen: "2022-03-08 12:05:24",
    lastTransaction: "2022-03-08 12:05:24",
    status: "ACTIVE",
    batteryLevel: "100",
    power: "Charged",
    printer: "Printer OK",
    network: "GPRS",
    transactionToday: "34,500,222",
    inactiveDays: "",
    signal: 100,
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
  const [uploadModal, setUploadModal] = useState<boolean>(false);
  const [previewModal, setPreviewModal] = useState<boolean>(false);
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const [user, setUser] = useState<any>();
  const [isEditUser, setIsEditUser] = useState<boolean>(false);
  const [openUserForm, setOpenUserForm] = useState<boolean>(false);
  const [terminalFilter, setTerminalFilter] = useState<string>("High");
  const [terminalDisabled, setTerminalDisabled] = useState<boolean>(false);
  const [serialNumber, setSerialNumber] = useState<string>("");
  const [manufacturer, setManufacturer] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [OSType, setOSType] = useState<string>("");
  const [terminalId, setTerminalId] = useState<string>("");
  const [bank, setBank] = useState<string>("");
  const [assignedMerchant, setAssignedMerchant] = useState<string>("");

  const columns = [
    { ellipsis: true, title: "S/N", dataIndex: "index", key: "index" },
    { ellipsis: true, title: "TYPE", dataIndex: "type", key: "type" },
    { ellipsis: true, title: "MODEL", dataIndex: "model", key: "model" },
    {
      ellipsis: true,
      title: "SOFTWARE",
      dataIndex: "software",
      key: "software",
    },
    { ellipsis: true, title: "BANK", dataIndex: "bank", key: "bank" },
    {
      ellipsis: true,
      title: "MERCHANT NAME",
      dataIndex: "merchantName",
      key: "merchantName",
    },
    {
      ellipsis: true,
      title: "TERMINAL ID",
      dataIndex: "terminalId",
      key: "terminalId",
    },
    {
      ellipsis: true,
      title: "SERIAL",
      dataIndex: "serial",
      key: "serial",
    },
    {
      ellipsis: true,
      title: "LAST SEEN",
      dataIndex: "lastSeen",
      key: "lastSeen",
    },
    {
      ellipsis: true,
      title: "LAST TRANSACTION",
      dataIndex: "lastTransaction",
      key: "lastTransaction",
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
      title: "BATTERY LEVEL",
      dataIndex: "batteryLevel",
      key: "batteryLevel",
    },
    {
      ellipsis: true,
      title: "POWER",
      dataIndex: "power",
      key: "power",
      render: (text: string) => (
        <p
          className={
            text === "Charged" ? styles.PowerCharged : styles.PowerCharging
          }
        >
          {text}
        </p>
      ),
    },
    {
      ellipsis: true,
      title: "PRINTER",
      dataIndex: "printer",
      key: "printer",
    },
    {
      ellipsis: true,
      title: "NETWORK",
      dataIndex: "network",
      key: "network",
    },
    {
      ellipsis: true,
      title: "SIGNAL",
      dataIndex: "signal",
      key: "signal",
    },
    {
      ellipsis: true,
      title: "INACTIVE DAYS",
      dataIndex: "inactiveDays",
      key: "inactiveDays",
      render: (text: string) => (
        <p style={{ margin: 0, color: "#ED6A5A" }}>
          {text === "" ? "-" : text}
        </p>
      ),
    },
    {
      ellipsis: true,
      title: "TRANSACTION TODAY",
      dataIndex: "transactionToday",
      key: "transactionToday",
      render: (text: string) => <p style={{ margin: 0 }}>&#8358;{text}</p>,
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
        title="View Terminal"
        visible={openUserModal}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setOpenUserModal(false)}
        footer={
          <div className={styles.UserModal}>
            <Button style={{ backgroundColor: "#E9F3FA", color: "#2085C9" }}>
              Edit
            </Button>
            <Button
              style={{
                backgroundColor: terminalDisabled ? "#136F63" : "#ED6A5A",
                color: "white",
              }}
            >
              {terminalDisabled ? "Restore" : "Disable"}
            </Button>
          </div>
        }
      >
        <div className={styles.TerminalHeader}>
          <h3>2033AJM7</h3>
          <p
            style={{
              padding: "4px 8px",
              borderRadius: 4,
              backgroundColor: terminalDisabled ? "#FCEAE8" : "#E9FBF9",
              width: "fit-content",
              textAlign: "center",
              margin: "auto",
              color: terminalDisabled ? "#ED6A5A" : "#136F63",
            }}
          >
            {terminalDisabled ? "DISABLED" : "ACTIVE"}
          </p>
          <p
            style={{
              fontWeight: 500,
              fontSize: 12,
              lineHeight: "14px",
              color: "#425D8A",
              marginTop: 20,
            }}
          >
            Last Seen: Currently Active
          </p>
        </div>
        <h4 className={styles.OverviewHeader}>Overview</h4>
        <Row gutter={[20, 20]} className={styles.OverviewContainer}>
          <Col xs={8}>
            <p className={styles.OverviewTitle}>Battery & Power</p>
            <div className={styles.BatteryContainer}>
              <div className={styles.Battery}>
                <div className={styles.BarFull}></div>
                <div className={styles.BarFull}></div>
                <div className={styles.BarFull}></div>
                <div className={styles.BarEmpty}></div>
              </div>
              <p className={styles.OverviewText}>75%</p>
            </div>
            <div className={styles.Charging}>
              <img src="/icons/battery-charging.svg" />
              <span style={{ color: "#EDA95A" }}>Charging</span>
            </div>
          </Col>
          <Col xs={8}>
            <p className={styles.OverviewTitle}>Network</p>
            <p className={styles.OverviewText}>GPRS</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: 12,
                textAlign: "left",
              }}
            >
              <div className={styles.NetworkBar}>
                <div
                  className={styles.NetworkBarFill}
                  style={{ width: "15%" }}
                />
                <div className={styles.NetworkBarEmpty} style={{ flex: 1 }} />
              </div>
              <span style={{ marginLeft: 5, color: "#ED6A5A" }}>Weak</span>
            </div>
          </Col>
          <Col xs={8}>
            <p className={styles.OverviewTitle}>Printer</p>
            <p className={styles.OverviewText} style={{ color: "#ED6A5A" }}>
              Error
            </p>
          </Col>
        </Row>
        <Divider />
        <h4 className={styles.TransactionHeader}>Transactions</h4>
        <Row gutter={[20, 20]}>
          <Col xs={8}>
            <div className={styles.TransactionContainer}>
              <p className={styles.TransactionTitle}>Transaction Today</p>
              <p className={styles.TransactionBody}>&#8358;34,342,323</p>
            </div>
          </Col>
          <Col xs={8}>
            <div className={styles.TransactionContainer}>
              <p className={styles.TransactionTitle}>Last Transaction</p>
              <p className={styles.TransactionBody}>Today, 12:05:24</p>
            </div>
          </Col>
        </Row>
        <Divider />
        <h4 className={styles.TransactionHeader}>Details</h4>
        <div className={styles.MerchantDetail}>
          <p className={styles.MerchantDetailTitle}>Merchant</p>
          <Row gutter={20} justify="space-between">
            <Col style={{ width: 50 }}>
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "gray",
                }}
              ></div>
            </Col>
            <Col style={{ flex: 0.98, textAlign: "left" }}>
              <p className={styles.MerchantName}>Mr. Olamide Aderibigbe</p>
              <p className={styles.MerchantId}>#021233</p>
            </Col>
          </Row>
          <Row gutter={[20, 20]} style={{ marginTop: 24 }}>
            <Col xs={12}>
              <div className={styles.FormControl}>
                <p>Type</p>
                <Input value={"PAX"} />
              </div>
            </Col>
            <Col xs={12}>
              <div className={styles.FormControl}>
                <p>Model</p>
                <Input value={"S90"} />
              </div>
            </Col>
          </Row>
          <Row gutter={[20, 20]}>
            <Col xs={24}>
              <div className={styles.FormControl}>
                <p>Software</p>
                <Input value={"gopos 1.0.0"} />
              </div>
            </Col>
          </Row>
        </div>
      </Modal>
      <Modal
        title={isEditUser ? "Edit Terminal" : "Create Terminal"}
        style={{ textAlign: "center" }}
        visible={openUserForm}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setOpenUserForm(false)}
        footer={<Button className={styles.ConfirmButton}>Confirm</Button>}
      >
        <div className={styles.FormControl}>
          <p>Serial Number</p>
          <Input
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
          />
        </div>
        <div className={styles.FormControl}>
          <p>Manufacturer</p>
          <Input
            type="email"
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          />
        </div>
        <div className={styles.FormControl}>
          <p>Modal</p>
          <Input value={model} onChange={(e) => setModel(e.target.value)} />
        </div>
        <div className={styles.FormControl}>
          <p>OS Type</p>
          <Input value={OSType} onChange={(e) => setOSType(e.target.value)} />
        </div>
        <div className={styles.FormControl}>
          <p>Terminal ID</p>
          <Input
            value={terminalId}
            onChange={(e) => setTerminalId(e.target.value)}
          />
        </div>
        <div className={styles.FormControl}>
          <p>Bank</p>
          <Select
            style={{ width: "100%" }}
            value={bank}
            onChange={(value) => setBank(value)}
          >
            <Select.Option value="">Select Bank</Select.Option>
            <Select.Option value="GTB">GTB</Select.Option>
            <Select.Option value="UBA">UBA</Select.Option>
            <Select.Option value="Access Bank">Access Bank</Select.Option>
            <Select.Option value="First Bank">First Bank</Select.Option>
          </Select>
        </div>
        <div className={styles.FormControl}>
          <p>Assigned Merchant</p>
          <Select
            style={{ width: "100%" }}
            value={assignedMerchant}
            onChange={(value) => setAssignedMerchant(value)}
          >
            <Select.Option value="">Select Merchant</Select.Option>
            <Select.Option value="John Doe">John Doe</Select.Option>
          </Select>
        </div>
      </Modal>
      <Modal
        title="Bulk Upload"
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
          <h3>Upload Successful</h3>
          <p>You have sucessfully added 32 Terminals</p>
        </div>
      </Modal>
      <Modal
        title="Bulk Upload"
        style={{ textAlign: "center" }}
        visible={disableModal}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setDisableModal(false)}
        footer={<Button className={styles.DisableButton}>Disable</Button>}
      >
        <div className={styles.DisableModal}>
          <img src="/images/info.png" />
          <h3>Disable Terminal</h3>
          <p>Are you sure you want to disable this terminal</p>
        </div>
      </Modal>
      <div className={styles.TableContainer}>
        <Table
          columns={columns}
          data={TERMINALS}
          viewAllLink="/dashboard/terminals/all"
          title="List of Terminals"
          filterComponent={filterComponent}
        />
      </div>
    </DashboardLayout>
  );
};

export default AllUsers;
