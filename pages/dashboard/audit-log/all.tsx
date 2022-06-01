import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, Menu, Modal } from "antd";
import { NextPage } from "next";
import React, { useState } from "react";
import Table from "../../../components/Table/Table";
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import styles from "./audit-logs.module.css";

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
  {
    key: "2",
    bank: "UBA",
    bankCode: "025",
    status: "ACTIVE",
  },
  {
    key: "2",
    bank: "UBA",
    bankCode: "025",
    status: "ACTIVE",
  },
  {
    key: "2",
    bank: "UBA",
    bankCode: "025",
    status: "ACTIVE",
  },
  {
    key: "2",
    bank: "UBA",
    bankCode: "025",
    status: "ACTIVE",
  },
  {
    key: "2",
    bank: "UBA",
    bankCode: "025",
    status: "ACTIVE",
  },
  {
    key: "2",
    bank: "UBA",
    bankCode: "025",
    status: "ACTIVE",
  },
  {
    key: "2",
    bank: "UBA",
    bankCode: "025",
    status: "ACTIVE",
  },
  {
    key: "2",
    bank: "UBA",
    bankCode: "025",
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
      <div className={styles.TableContainer}>
        <Table
          columns={columns}
          data={BANKS}
          title="List of Banks"
          filterComponent={filterBankComponent}
        />
      </div>
    </DashboardLayout>
  );
};

export default Banks;
