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
import SummaryCard from "../../../components/SummaryCard/SummaryCard";
import { ISummaryItem } from "../../../components/SummaryCard/types";
import Table from "../../../components/Table/Table";
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import styles from "./merchants.module.css";

const DATA: ISummaryItem[] = [
  {
    title: "TOTAL MERCHANTS",
    percentage: 3.5,
    totalCount: 450,
  },
  {
    title: "ACTIVE MERCHANTS",
    percentage: 3.1,
    totalCount: 480,
  },
  {
    title: "INACTIVE MERCHANTS",
    percentage: 3.6,
    totalCount: 460,
  },
];

const BAND_CARD: IBandCard[] = [
  {
    title: "Band A",
    totalTitle: "TOTAL MERCHANTS",
    totalValue: 231,
    onTargetTitle: "ON TARGET",
    onTargetValue: 240,
    offTargetTitle: "OFF TARGET",
    offTargetValue: 31,
  },
  {
    title: "Band B",
    totalTitle: "TOTAL MERCHANTS",
    totalValue: 231,
    onTargetTitle: "ON TARGET",
    onTargetValue: 240,
    offTargetTitle: "OFF TARGET",
    offTargetValue: 31,
  },
  {
    title: "Band C",
    totalTitle: "TOTAL MERCHANTS",
    totalValue: 231,
    onTargetTitle: "ON TARGET",
    onTargetValue: 240,
    offTargetTitle: "OFF TARGET",
    offTargetValue: 31,
  },
];

const USERS = [
  {
    key: "1",
    index: "1",
    merchantId: "234451",
    name: "Mr. Olamide",
    email: "utyte@email.com",
    phoneNumber: "09021256322",
    band: "Band A",
    bank: "GTB",
    dateCreated: "2022-02-02 06:35:24PM",
    supportStaff: "Vera A",
    status: "ACTIVE",
  },
  {
    key: "2",
    index: "2",
    merchantId: "234452",
    name: "Mr. John",
    email: "john@email.com",
    phoneNumber: "09021256322",
    band: "Band B",
    bank: "GTB",
    dateCreated: "2022-02-02 08:35:24PM",
    supportStaff: "Vera B",
    status: "INACTIVE",
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
      title: "MERCHANT ID",
      dataIndex: "merchantId",
      key: "merchantId",
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
      title: "BAND",
      dataIndex: "band",
      key: "band",
    },
    {
      ellipsis: true,
      title: "BANK",
      dataIndex: "bank",
      key: "bank",
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
      title: "SUPPORT STAFF",
      dataIndex: "supportStaff",
      key: "supportStaff",
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
        title="View Merchant"
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
            value={"email@mail.com"}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.FormControl}>
          <p>Phone number</p>
          <Input
            value={"08122222222"}
            // onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className={styles.FormControl}>
          <p>Account</p>
          <Input value="239589340343" />
        </div>
        <div className={styles.FormControl}>
          <p>Bank</p>
          <Input value="Guarantee Trust Bank" />
        </div>
        <div className={styles.FormControl}>
          <p>Band</p>
          <Input value="Band A" />
        </div>
        <div className={styles.FormControl}>
          <p>Support Staff</p>
          <Input value="Guarantee Trust Bank" />
        </div>
        <p className={styles.Date}>Date Created: 2022-02-02, 06:35:24PM</p>
      </Modal>
      <Modal
        title={isEditUser ? "Edit Merchant" : "Create Merchant"}
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
          <p>Account</p>
          <Input value={account} onChange={(e) => setAccount(e.target.value)} />
        </div>
        <div className={styles.FormControl}>
          <p>Bank</p>
          <Select
            style={{ width: "100%" }}
            value={bank}
            onChange={(value) => setBank(value)}
          >
            <Select.Option value="">Select Bank</Select.Option>
            <Select.Option value="GTBank">Gurantee Trust Bank</Select.Option>
          </Select>
        </div>
        <div className={styles.FormControl}>
          <p>Band</p>
          <Select
            style={{ width: "100%" }}
            value={band}
            onChange={(value) => setBand(value)}
          >
            <Select.Option value="">Select Band</Select.Option>
            <Select.Option value="Band A">Band A</Select.Option>
            <Select.Option value="Band B">Band B</Select.Option>
          </Select>
        </div>
        <div className={styles.FormControl}>
          <p>Support Staff</p>
          <Select
            style={{ width: "100%" }}
            value={supportStaff}
            onChange={(value) => setSupportStaff(value)}
          >
            <Select.Option value="">Select Support Staff</Select.Option>
            <Select.Option value="Mr. Olamide Aderibigbe">
              Mr. Olamide Aderibigbe
            </Select.Option>
          </Select>
        </div>
      </Modal>
      <Modal
        title="Disable Merchant"
        style={{ textAlign: "center" }}
        visible={disableModal}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setDisableModal(false)}
        footer={<Button className={styles.DisableButton}>Disable</Button>}
      >
        <div className={styles.DisableModal}>
          <img src="/images/info.png" />
          <h3>Disable Merchant</h3>
          <p>Are you sure you want to disable this merchant?</p>
        </div>
      </Modal>
      <Modal
        title="Merchant added successfully"
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
          <h3>Merchant Added</h3>
          <p>You have sucessfully added a new merchant</p>
        </div>
      </Modal>
      <div className={styles.TitleContainer}>
        <h1 className={styles.Title}>Merchants</h1>
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
          }}
          icon={<img style={{ marginRight: 5 }} src="/icons/add-square.svg" />}
        >
          Add Merchant
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
      <Row style={{ marginTop: 24 }} wrap gutter={[20, 20]}>
        {BAND_CARD.map((band: IBandCard, i: number) => (
          <Col key={i} md={12} xs={24} lg={8}>
            <BandCard {...band} />
          </Col>
        ))}
      </Row>
      <div className={styles.TableContainer}>
        <Table
          columns={columns}
          data={USERS}
          viewAllLink="/dashboard/merchants/all"
          title="List of Merchants"
          filterComponent={filterComponent}
        />
      </div>
    </DashboardLayout>
  );
};

export default Users;
