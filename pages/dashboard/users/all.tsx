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
    userId: "234451",
    name: "Mr. Olamide",
    email: "utyte@email.com",
    phoneNumber: "09021256322",
    role: "Support",
    dateCreated: "2022-02-02 06:35:24PM",
    status: "ACTIVE",
  },
  {
    key: "2",
    index: "2",
    userId: "234452",
    name: "Mr. John",
    email: "john@email.com",
    phoneNumber: "09021256322",
    role: "Support",
    dateCreated: "2022-02-02 08:35:24PM",
    status: "INACTIVE",
  },
  {
    key: "3",
    index: "3",
    userId: "234451",
    name: "Mr. Olamide",
    email: "utyte@email.com",
    phoneNumber: "09021256322",
    role: "Support",
    dateCreated: "2022-02-02 06:35:24PM",
    status: "ACTIVE",
  },
  {
    key: "4",
    index: "4",
    userId: "234451",
    name: "Mr. Olamide",
    email: "utyte@email.com",
    phoneNumber: "09021256322",
    role: "Support",
    dateCreated: "2022-02-02 06:35:24PM",
    status: "ACTIVE",
  },
  {
    key: "5",
    index: "5",
    userId: "234451",
    name: "Mr. Olamide",
    email: "utyte@email.com",
    phoneNumber: "09021256322",
    role: "Support",
    dateCreated: "2022-02-02 06:35:24PM",
    status: "ACTIVE",
  },
  {
    key: "6",
    index: "6",
    userId: "234451",
    name: "Mr. Olamide",
    email: "utyte@email.com",
    phoneNumber: "09021256322",
    role: "Support",
    dateCreated: "2022-02-02 06:35:24PM",
    status: "ACTIVE",
  },
  {
    key: "7",
    index: "7",
    userId: "234451",
    name: "Mr. Olamide",
    email: "utyte@email.com",
    phoneNumber: "09021256322",
    role: "Support",
    dateCreated: "2022-02-02 06:35:24PM",
    status: "ACTIVE",
  },
  {
    key: "8",
    index: "8",
    userId: "234451",
    name: "Mr. Olamide",
    email: "utyte@email.com",
    phoneNumber: "09021256322",
    role: "Support",
    dateCreated: "2022-02-02 06:35:24PM",
    status: "ACTIVE",
  },
  {
    key: "9",
    index: "9",
    userId: "234451",
    name: "Mr. Olamide",
    email: "utyte@email.com",
    phoneNumber: "09021256322",
    role: "Support",
    dateCreated: "2022-02-02 06:35:24PM",
    status: "ACTIVE",
  },
  {
    key: "10",
    index: "10",
    userId: "234451",
    name: "Mr. Olamide",
    email: "utyte@email.com",
    phoneNumber: "09021256322",
    role: "Support",
    dateCreated: "2022-02-02 06:35:24PM",
    status: "ACTIVE",
  },
  {
    key: "11",
    index: "11",
    userId: "234451",
    name: "Mr. Olamide",
    email: "utyte@email.com",
    phoneNumber: "09021256322",
    role: "Support",
    dateCreated: "2022-02-02 06:35:24PM",
    status: "ACTIVE",
  },
  {
    key: "12",
    index: "12",
    userId: "234451",
    name: "Mr. Olamide",
    email: "utyte@email.com",
    phoneNumber: "09021256322",
    role: "Support",
    dateCreated: "2022-02-02 06:35:24PM",
    status: "ACTIVE",
  },
  {
    key: "13",
    index: "13",
    userId: "234451",
    name: "Mr. Olamide",
    email: "utyte@email.com",
    phoneNumber: "09021256322",
    role: "Support",
    dateCreated: "2022-02-02 06:35:24PM",
    status: "ACTIVE",
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
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const columns = [
    { ellipsis: true, title: "S/N", dataIndex: "index", key: "index" },
    {
      ellipsis: true,
      title: "USER ID",
      dataIndex: "userId",
      key: "userId",
    },
    {
      ellipsis: true,
      title: "NAME",
      dataIndex: "name",
      key: "name",
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
      title: "ROLE",
      dataIndex: "role",
      key: "role",
    },
    {
      ellipsis: true,
      title: "DATE CREATED",
      dataIndex: "dateCreated",
      key: "dateCreated",
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
        title="View User"
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
        <div className={styles.ProfileTitle}>
          <div className={styles.AvatarContainer}></div>
          <div className={styles.ProfileName}>
            <h3>Olamide Orilowo #000121</h3>
            <span>Active</span>
          </div>
        </div>
        <div className={styles.FormControl}>
          <p>Email</p>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.FormControl}>
          <p>Phone number</p>
          <Input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className={styles.FormControl}>
          <p>Role</p>
          <Select
            style={{ width: "100%" }}
            value={role}
            onChange={(value) => setRole(value)}
          >
            <Select.Option value="">Select Role</Select.Option>
            <Select.Option value="Admin - Maker">Admin - Maker</Select.Option>
            <Select.Option value="Admin - Checker">
              Admin - Checker
            </Select.Option>
            <Select.Option value="Sub Admin">Sub Admin</Select.Option>
            <Select.Option value="Support Staff">Support Staff</Select.Option>
          </Select>
          <div className={styles.Link}>
            <a>View the permissions of support here</a>
          </div>
          <p className={styles.Date}>Date Created: 2022-02-02, 06:35:24PM</p>
        </div>
      </Modal>
      <Modal
        title={isEditUser ? "Edit User" : "Create User"}
        style={{ textAlign: "center" }}
        visible={openUserForm}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setOpenUserForm(false)}
        footer={<Button className={styles.ConfirmButton}>Confirm</Button>}
      >
        <div className={styles.FormControl}>
          <p>Name</p>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={styles.FormControl}>
          <p>Email</p>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.FormControl}>
          <p>Phonenumber</p>
          <Input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className={styles.FormControl}>
          <p>Role</p>
          <Select
            style={{ width: "100%" }}
            value={role}
            onChange={(value) => setRole(value)}
          >
            <Select.Option value="">Select Role</Select.Option>
            <Select.Option value="Admin - Maker">Admin - Maker</Select.Option>
            <Select.Option value="Admin - Checker">
              Admin - Checker
            </Select.Option>
            <Select.Option value="Sub Admin">Sub Admin</Select.Option>
            <Select.Option value="Support Staff">Support Staff</Select.Option>
          </Select>
        </div>
      </Modal>
      <Modal
        title="Disable User"
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
          title="List of Users"
          filterComponent={filterComponent}
        />
      </div>
    </DashboardLayout>
  );
};

export default AllUsers;
