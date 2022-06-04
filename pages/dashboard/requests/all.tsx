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
  Select,
  Space,
  Tag,
} from "antd";
import { NextPage } from "next";
import React, { useState } from "react";
import Card from "../../../components/Card/Card";
import Pagination from "../../../components/Pagination/Pagination";
import SummaryCard from "../../../components/SummaryCard/SummaryCard";
import { ISummaryItem } from "../../../components/SummaryCard/types";
import Table from "../../../components/Table/Table";
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import styles from "./transactions.module.css";

const CardItem: React.FC<{ title: string; value: string }> = ({
  title,
  value,
}) => (
  <Card>
    <div className={styles.CardItem}>
      <p className={styles.CardItemTitle}>{title}</p>
      <p className={styles.CardItemValue}>{value}</p>
    </div>
  </Card>
);

const USERS = [
  {
    key: "1",
    index: "1",
    adminName: "Olu and Sons",
    category: "Users",
    action: "Create",
    description: "this is a description",
    dateCreated: "2022-02-02 06:35:24PM",
  },
  {
    key: "2",
    index: "2",
    adminName: "Olu and Sons",
    category: "Users",
    action: "Create",
    description: "this is a description",
    dateCreated: "2022-02-02 06:35:24PM",
  },
  {
    key: "3",
    index: "3",
    adminName: "Olu and Sons",
    category: "Users",
    action: "Create",
    description: "this is a description",
    dateCreated: "2022-02-02 06:35:24PM",
  },
  {
    key: "4",
    index: "4",
    adminName: "Olu and Sons",
    category: "Users",
    action: "Create",
    description: "this is a description",
    dateCreated: "2022-02-02 06:35:24PM",
  },
  {
    key: "5",
    index: "5",
    adminName: "Olu and Sons",
    category: "Users",
    action: "Create",
    description: "this is a description",
    dateCreated: "2022-02-02 06:35:24PM",
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
  const [isEditUser, setIsEditUser] = useState<boolean>(false);
  const [openUserForm, setOpenUserForm] = useState<boolean>(false);
  const [delineModal, setDeclineModal] = useState<boolean>(false);
  const [approvedModal, setApprovedModal] = useState<boolean>(false);
  const [key, setKey] = useState<string>("");

  const columns = [
    { ellipsis: true, title: "S/N", dataIndex: "index", key: "index" },
    {
      ellipsis: true,
      title: "ADMIN NAME",
      dataIndex: "adminName",
      key: "adminName",
    },
    {
      ellipsis: true,
      title: "CATEGORY",
      dataIndex: "category",
      key: "category",
    },
    {
      ellipsis: true,
      title: "ACTION",
      dataIndex: "action",
      key: "action",
    },
    {
      ellipsis: true,
      title: "DESCRIPTION",
      dataIndex: "description",
      key: "description",
    },
    {
      ellipsis: true,
      title: "DATE CREATED",
      dataIndex: "dateCreated",
      key: "dateCreated",
    },

    {
      ellipsis: true,
      title: "",
      render: (text: string, record: any) => (
        <div className={styles.Actions}>
          <button
            onClick={() => {
              setApprovedModal(true);
            }}
            className={styles.View}
          >
            Approve
          </button>
          <button
            onClick={() => {
              setDeclineModal(true);
            }}
            className={styles.Disable}
          >
            Decline
          </button>
          <button
            onClick={() => {
              setOpenUserForm(true);
              setIsEditUser(false);
            }}
            className={styles.Edit}
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
    <DashboardLayout>
      <Modal
        title="Request Approved"
        style={{ textAlign: "center" }}
        visible={approvedModal}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setApprovedModal(false)}
        footer={
          <Button
            onClick={() => setApprovedModal(false)}
            className={styles.ProceedButton}
          >
            Proceed
          </Button>
        }
      >
        <div className={styles.DisableModal}>
          <img src="/images/success.png" />
          <h3>Request Approved</h3>
          <p>You have Approved Ola Eniorirufoko’s request to edit user.</p>
        </div>
      </Modal>
      <Modal
        title="Request Declined"
        style={{ textAlign: "center" }}
        visible={delineModal}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setDeclineModal(false)}
        footer={<Button className={styles.DisableButton}>Proceed</Button>}
      >
        <div className={styles.DisableModal}>
          <img src="/images/info.png" />
          <h3>Request Declined</h3>
          <p>You have denied Ola Eniorirufoko’s request to edit user.</p>
        </div>
      </Modal>
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
        title="View Request"
        style={{ textAlign: "center" }}
        visible={openUserForm}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setOpenUserForm(false)}
        footer={<Button className={styles.ConfirmButton}>Confirm</Button>}
      >
        <div className={styles.FormControl}>
          <p>Admin</p>
          <Input value={"Ola Eniorirufoko"} />
        </div>
        <div className={styles.FormControl}>
          <p>Category</p>
          <Input value={"Users"} />
        </div>
        <div className={styles.FormControl}>
          <p>Action</p>
          <Input value={"edit"} />
        </div>
        <div className={styles.FormControl}>
          <p>Key</p>
          <Input value={key} onChange={(e) => setKey(e.target.value)} />
        </div>
        <div className={styles.FormControl}>
          <p>Description</p>
          <Input.TextArea
            value={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh commodo, eget sit fringilla odio dolor, in ullamcorper. Sed enim sed mattis dolor id hac in. Quis vel elementum habitant sagittis, vitae. Tristique sit consectetur justo elementum, tempor metus sed neque. Lorem amet leo nunc arcu, quam non nulla nisi, nulla."
            }
            autoSize={{ minRows: 6, maxRows: 6 }}
          />
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
          viewAllLink="/dashboard/requests/all"
          title="List of Requests"
          filterComponent={filterComponent}
        />
      </div>
      <Pagination />
    </DashboardLayout>
  );
};

export default Users;
