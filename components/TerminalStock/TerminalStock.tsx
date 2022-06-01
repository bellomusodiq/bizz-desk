import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import {
  Button,
  Calendar,
  Col,
  Divider,
  Dropdown,
  Input,
  Menu,
  Modal,
  Row,
} from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Table from "../Table/Table";
import styles from "./TerminalStock.module.css";
import { ITerminalStock } from "./types";

const DATA = [
  {
    key: 1,
    batchName: "Batch A",
    batchNumber: "20220405",
    manufacturer: "Aisino",
    model: "V71",
    totalTerminal: 100,
    dateUploaded: "2022-03-08 12:05:24",
  },
  {
    key: 2,
    batchName: "Batch B",
    batchNumber: "20220405",
    manufacturer: "Aisino",
    model: "V71",
    totalTerminal: 100,
    dateUploaded: "2022-03-08 12:05:24",
  },
  {
    key: 3,
    batchName: "Batch C",
    batchNumber: "20220405",
    manufacturer: "Aisino",
    model: "V71",
    totalTerminal: 100,
    dateUploaded: "2022-03-08 12:05:24",
  },
  {
    key: 4,
    batchName: "Batch D",
    batchNumber: "20220405",
    manufacturer: "Aisino",
    model: "V71",
    totalTerminal: 100,
    dateUploaded: "2022-03-08 12:05:24",
  },
  {
    key: 5,
    batchName: "Batch E",
    batchNumber: "20220405",
    manufacturer: "Aisino",
    model: "V71",
    totalTerminal: 100,
    dateUploaded: "2022-03-08 12:05:24",
  },
];

const ARCHIVED_TERMINALS = [
  {
    key: "1",
    index: "1",
    type: "PAX",
    model: "S90",
    software: "gopos 1.0.0",
    bank: "UBA",
    serial: "3H12345",
    status: "ACTIVE",
    inactiveDays: "12 days",
    batteryLevel: "100",
    power: "Charging",
    printer: "Printer OK",
    network: "GPRS",
    signal: 100,
    reason: "Bad Main board",
  },
  {
    key: "2",
    index: "2",
    type: "PAX",
    model: "S90",
    software: "gopos 1.0.0",
    bank: "UBA",
    serial: "3H12345",
    status: "ACTIVE",
    inactiveDays: "12 days",
    batteryLevel: "100",
    power: "Charging",
    printer: "Printer OK",
    network: "GPRS",
    signal: 100,
    reason: "Bad Main board",
  },
  {
    key: "3",
    index: "3",
    type: "PAX",
    model: "S90",
    software: "gopos 1.0.0",
    bank: "UBA",
    serial: "3H12345",
    status: "ACTIVE",
    inactiveDays: "12 days",
    batteryLevel: "100",
    power: "Charging",
    printer: "Printer OK",
    network: "GPRS",
    signal: 100,
    reason: "Bad Main board",
  },
  {
    key: "4",
    index: "4",
    type: "PAX",
    model: "S90",
    software: "gopos 1.0.0",
    bank: "UBA",
    serial: "3H12345",
    status: "ACTIVE",
    inactiveDays: "12 days",
    batteryLevel: "100",
    power: "Charging",
    printer: "Printer OK",
    network: "GPRS",
    signal: 100,
    reason: "Bad Main board",
  },
  {
    key: "5",
    index: "5",
    type: "PAX",
    model: "S90",
    software: "gopos 1.0.0",
    bank: "UBA",
    serial: "3H12345",
    status: "ACTIVE",
    inactiveDays: "12 days",
    batteryLevel: "100",
    power: "Charging",
    printer: "Printer OK",
    network: "GPRS",
    signal: 100,
    reason: "Bad Main board",
  },
];

const TerminalStock: React.FC<ITerminalStock> = ({ isBatch }) => {
  const router = useRouter();
  const [formModal, setFormModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [viewModal, setViewModal] = useState<boolean>(false);
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const [restoreModal, setRestoreModal] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [status, setStatus] = useState<string>("All");
  const [batchName, setBatchName] = useState<string>("");
  const [batchNumber, setBatchNumber] = useState<string>("");
  const [manufacturer, setManufacturer] = useState<string>("");
  const [model, setModel] = useState<string>("");

  const [terminalFilter, setTerminalFilter] = useState<string>("High");
  const [terminalDisabled, setTerminalDisabled] = useState<boolean>(false);

  const columns = [
    { ellipsis: true, title: "S/N", dataIndex: "key", key: "key" },
    {
      ellipsis: true,
      title: "BATCH NAME",
      dataIndex: "batchName",
      key: "batchName",
    },
    {
      ellipsis: true,
      title: "BATCH NUMBER",
      dataIndex: "batchNumber",
      key: "batchNumber",
    },
    {
      ellipsis: true,
      title: "MANUFACTURER",
      dataIndex: "manufacturer",
      key: "manufacturer",
    },
    {
      ellipsis: true,
      title: "MODEL",
      dataIndex: "model",
      key: "model",
    },
    {
      ellipsis: true,
      title: "TOTAL TERMINAL",
      dataIndex: "totalTerminal",
      key: "totalTerminal",
    },
    {
      ellipsis: true,
      title: "DATE UPLOADED",
      dataIndex: "dateUploaded",
      key: "dateUploaded",
    },
    {
      ellipsis: true,
      title: "",
      render: (text: string, record: any) => (
        <div className={styles.Actions}>
          <button
            onClick={() => {
              router.push("/dashboard/terminals/batch/batch-a");
            }}
            className={styles.View}
          >
            View
          </button>
        </div>
      ),
    },
  ];

  const archivedColumns = [
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
      title: "SERIAL",
      dataIndex: "serial",
      key: "serial",
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
      title: "REASON",
      dataIndex: "reason",
      key: "reason",
    },
    {
      ellipsis: true,
      render: (text: string, record: any) => (
        <button
          onClick={() => {
            setRestoreModal(true);
          }}
          className={styles.RestoreButton}
        >
          Enable
        </button>
      ),
    },
    {
      ellipsis: true,
      title: "",
      render: (text: string, record: any) => (
        <div className={styles.Actions}>
          <button
            onClick={() => {
              setViewModal(true);
              setTerminalDisabled(true);
            }}
            className={styles.View}
          >
            View
          </button>
        </div>
      ),
    },
  ];

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

  return (
    <>
      <Modal
        title="Terminal Enabled"
        style={{ textAlign: "center" }}
        visible={restoreModal}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setRestoreModal(false)}
        footer={
          <Button
            onClick={() => setRestoreModal(false)}
            className={styles.ProceedButton}
          >
            Proceed
          </Button>
        }
      >
        <div className={styles.DisableModal}>
          <img src="/images/success.png" />
          <h3>Terminal Enabled</h3>
          <p>You have successfully enabled the termial</p>
        </div>
      </Modal>
      <Modal
        style={{ textAlign: "center" }}
        title="View Terminal"
        visible={viewModal}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setViewModal(false)}
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
              {terminalDisabled ? "Enable" : "Disable"}
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
          <p className={styles.MerchantDetailTitle}>
            {terminalDisabled ? "Bank" : "Merchant"}
          </p>
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
              <p className={styles.MerchantName}>
                {terminalDisabled ? "UBA" : "Mr. Olamide Aderibigbe"}
              </p>
              {!terminalDisabled && (
                <p className={styles.MerchantId}>#021233</p>
              )}
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
              {terminalDisabled ? (
                <div className={styles.FormControl}>
                  <p>Reason</p>
                  <Input.TextArea value={"Bad main board"} />
                </div>
              ) : (
                <div className={styles.FormControl}>
                  <p>Software</p>
                  <Input value={"gopos 1.0.0"} />
                </div>
              )}
            </Col>
          </Row>
          <p className={styles.DateCreated}>
            Date Created: 2022-02-02, 06:35:24PM
          </p>
        </div>
      </Modal>
      <Modal
        title="Create Batch"
        style={{ textAlign: "center" }}
        visible={formModal}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setFormModal(false)}
        footer={<Button className={styles.ConfirmButton}>Confirm</Button>}
      >
        <div className={styles.FormControl}>
          <p>Batch Name</p>
          <Input
            value={batchName}
            onChange={(e) => setBatchName(e.target.value)}
          />
        </div>
        <div className={styles.FormControl}>
          <p>Batch Number</p>
          <Input
            value={batchNumber}
            onChange={(e) => setBatchNumber(e.target.value)}
          />
        </div>
        <div className={styles.FormControl}>
          <p>Manufacturer</p>
          <Input
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          />
        </div>
        <div className={styles.FormControl}>
          <p>Model</p>
          <Input value={model} onChange={(e) => setModel(e.target.value)} />
        </div>
      </Modal>
      <div className={styles.TerminalStock}>
        <div className={styles.TitleContainer}>
          <h1 className={styles.Title}>
            {isBatch ? "Batch A" : "Terminal Stock Inventory"}
          </h1>
          <div className={styles.CreateButtonContainer}>
            <Button
              style={{
                backgroundColor: "#2085C9",
                color: "white",
                display: "flex",
                alignItems: "center",
                borderRadius: 8,
                padding: 20,
                border: "none",
              }}
              onClick={() => {
                setFormModal(true);
              }}
              icon={
                <img style={{ marginRight: 5 }} src="/icons/add-square.svg" />
              }
            >
              Create Batch
            </Button>
          </div>
        </div>
        <div className={styles.TableContainer}>
          <Table
            columns={isBatch ? archivedColumns : columns}
            data={isBatch ? ARCHIVED_TERMINALS : DATA}
            // viewAllLink="/dashboard/terminals/all"
            title={isBatch ? "List of Terminals" : "List of Batches"}
            filterComponent={filterComponent}
          />
        </div>
      </div>
    </>
  );
};

export default TerminalStock;
