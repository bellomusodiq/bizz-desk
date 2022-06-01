import { CheckOutlined } from "@ant-design/icons";
import { Button, Checkbox, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import Table from "../Table/Table";
import styles from "./RolesSettings.module.css";

const MERCHANT_BANDS = [
  {
    key: "1",
    role: "Admin (Maker)",
    permissions: 24,
  },
  {
    key: "2",
    role: "Admin (Checker)",
    permissions: 25,
  },
  {
    key: "3",
    role: "Sub Admin",
    permissions: 25,
  },
  {
    key: "4",
    role: "Support Staff",
    permissions: 25,
  },
  {
    key: "5",
    role: "Merchant",
    permissions: 25,
  },
];
const ROLES_DATA = [
  {
    key: "1",
    create: true,
    delete: true,
    feature: "Requests",
  },
  {
    key: "2",
    list: true,
    update: true,
    feature: "Users",
  },
  {
    key: "3",
    print: true,
    add: true,
    feature: "Merchants",
  },
  {
    key: "4",
    view: true,
    attach: true,
    feature: "NIPS Settlement",
  },
  {
    key: "5",
    view: true,
    attach: true,
    list: true,
    update: true,
    create: true,
    delete: true,
    print: true,
    add: true,
    all: true,
    feature: "Transaction",
  },
  {
    key: "6",
    view: true,
    attach: true,
    list: true,
    update: true,
    create: true,
    delete: true,
    print: true,
    add: true,
    all: true,
    feature: "Terminals",
  },
  {
    key: "7",
    view: true,
    attach: true,
    list: true,
    update: true,
    create: true,
    delete: true,
    print: true,
    add: true,
    all: true,
    feature: "Notification Services",
  },
];

const RolesSettings: React.FC = () => {
  const [createModal, setCreateModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [viewModal, setViewModal] = useState<boolean>(false);
  const [disableModal, setDisableModal] = useState<boolean>(false);
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const [brandName, setBrandName] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const columns = [
    { ellipsis: true, title: "S/N", dataIndex: "key", key: "key" },
    {
      ellipsis: true,
      title: "ROLE",
      dataIndex: "role",
      key: "role",
    },
    {
      ellipsis: true,
      title: "PERMISSIONS",
      dataIndex: "permissions",
      key: "permissions",
    },
    {
      ellipsis: true,
      title: "",
      render: (text: string, record: any) => (
        <div className={styles.Actions}>
          <button
            onClick={() => {
              setIsEdit(true);
              setCreateModal(true);
            }}
            className={styles.Edit}
          >
            Edit
          </button>
          <button
            onClick={() => setDisableModal(true)}
            className={styles.Disable}
          >
            Remove
          </button>
        </div>
      ),
    },
  ];

  const roleColumns = [
    { ellipsis: true, title: "Feature", dataIndex: "feature", key: "key" },
    {
      ellipsis: true,
      title: "View",
      dataIndex: "view",
      key: "key",
      render: (_: string, record: any) => (
        <div
          style={{
            border: !record.view ? "2px solid #BCB3E2" : "none",
            borderRadius: 4,
            backgroundColor: record.view ? "#4C6FFF" : "white",
          }}
          className={styles.TableCheckContainer}
        >
          {record.view && <CheckOutlined style={{ color: "white" }} />}
        </div>
      ),
    },
    {
      ellipsis: true,
      title: "Update",
      dataIndex: "update",
      key: "key",
      render: (_: string, record: any) => (
        <div
          style={{
            border: !record.update ? "2px solid #BCB3E2" : "none",
            borderRadius: 4,
            backgroundColor: record.update ? "#4C6FFF" : "white",
          }}
          className={styles.TableCheckContainer}
        >
          {record.update && <CheckOutlined style={{ color: "white" }} />}
        </div>
      ),
    },
    {
      ellipsis: true,
      title: "Delete",
      dataIndex: "delete",
      key: "key",
      render: (_: string, record: any) => (
        <div
          style={{
            border: !record.delete ? "2px solid #BCB3E2" : "none",
            borderRadius: 4,
            backgroundColor: record.delete ? "#4C6FFF" : "white",
          }}
          className={styles.TableCheckContainer}
        >
          {record.delete && <CheckOutlined style={{ color: "white" }} />}
        </div>
      ),
    },
    {
      ellipsis: true,
      title: "Create",
      dataIndex: "create",
      key: "key",
      render: (_: string, record: any) => (
        <div
          style={{
            border: !record.create ? "2px solid #BCB3E2" : "none",
            borderRadius: 4,
            backgroundColor: record.create ? "#4C6FFF" : "white",
          }}
          className={styles.TableCheckContainer}
        >
          {record.create && <CheckOutlined style={{ color: "white" }} />}
        </div>
      ),
    },
    {
      ellipsis: true,
      title: "List",
      dataIndex: "list",
      key: "key",
      render: (_: string, record: any) => (
        <div
          style={{
            border: !record.list ? "2px solid #BCB3E2" : "none",
            borderRadius: 4,
            backgroundColor: record.list ? "#4C6FFF" : "white",
          }}
          className={styles.TableCheckContainer}
        >
          {record.list && <CheckOutlined style={{ color: "white" }} />}
        </div>
      ),
    },
    {
      ellipsis: true,
      title: "Print",
      dataIndex: "print",
      key: "key",
      render: (_: string, record: any) => (
        <div
          style={{
            border: !record.print ? "2px solid #BCB3E2" : "none",
            borderRadius: 4,
            backgroundColor: record.print ? "#4C6FFF" : "white",
          }}
          className={styles.TableCheckContainer}
        >
          {record.print && <CheckOutlined style={{ color: "white" }} />}
        </div>
      ),
    },
    {
      ellipsis: true,
      title: "Add",
      dataIndex: "add",
      key: "key",
      render: (_: string, record: any) => (
        <div
          style={{
            border: !record.add ? "2px solid #BCB3E2" : "none",
            borderRadius: 4,
            backgroundColor: record.add ? "#4C6FFF" : "white",
          }}
          className={styles.TableCheckContainer}
        >
          {record.add && <CheckOutlined style={{ color: "white" }} />}
        </div>
      ),
    },
    {
      ellipsis: true,
      title: "Attach",
      dataIndex: "attach",
      key: "key",
      render: (_: string, record: any) => (
        <div
          style={{
            border: !record.attach ? "2px solid #BCB3E2" : "none",
            borderRadius: 4,
            backgroundColor: record.attach ? "#4C6FFF" : "white",
          }}
          className={styles.TableCheckContainer}
        >
          {record.attach && <CheckOutlined style={{ color: "white" }} />}
        </div>
      ),
    },
    {
      ellipsis: true,
      title: "",
      dataIndex: "all",
      key: "key",
      render: (_: string, record: any) => (
        <div
          style={{
            border: !record.all ? "2px solid #BCB3E2" : "none",
            borderRadius: 4,
            backgroundColor: record.all ? "#4C6FFF" : "white",
          }}
          className={styles.TableCheckContainer}
        >
          {record.all && <CheckOutlined style={{ color: "white" }} />}
        </div>
      ),
    },
  ];

  return (
    <div className={styles.MerchantBand}>
      {createModal ? (
        <>
          <a className={styles.BackButton}>Back</a>
          <h1 className={styles.FormHeader}>Create permissions</h1>
          <div className={styles.BandFormTitle}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                width: "100%",
              }}
            >
              <div style={{ width: "50%" }} className={styles.BandFormControl}>
                <p>Title</p>
                <Input />
              </div>
              <button className={styles.AllowAll}>
                <div className={styles.Checkbox}>
                  <CheckOutlined style={{ color: "#ED6A5A" }} size={18} />
                </div>
                <span>Allow all permissions</span>
              </button>
            </div>
            <Button
              style={{
                backgroundColor: "#2085C9",
                color: "white",
                display: "flex",
                alignItems: "center",
                borderRadius: 8,
                padding: "18px 40px",
              }}
              onClick={() => {
                setIsEdit(false);
                setCreateModal(true);
              }}
            >
              Save
            </Button>
          </div>
          <div className={styles.TableContainer}>
            <Table columns={roleColumns} data={ROLES_DATA} />
          </div>
        </>
      ) : (
        <>
          <div className={styles.HeaderContainer}>
            <h1>Roles and Permission</h1>
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
                setIsEdit(false);
                setCreateModal(true);
              }}
              icon={
                <img style={{ marginRight: 5 }} src="/icons/add-square.svg" />
              }
            >
              Add Permission
            </Button>
          </div>
          <p className={styles.Description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            congue auctor est lacinia justo.
          </p>
          <Modal
            title={isEdit ? "Edit Band" : "Create Band"}
            style={{ textAlign: "center" }}
            visible={createModal}
            closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
            onCancel={() => setCreateModal(false)}
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
              <p>Merchant Band</p>
              <Input
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
              />
            </div>
            <div className={styles.FormControl}>
              <p>Merchant Band Category</p>
              <Select
                style={{ width: "100%" }}
                value={category}
                onChange={(value) => setCategory(value)}
              >
                <Select.Option value="">Select Category</Select.Option>
                <Select.Option value="Admin - Maker">
                  Admin - Maker
                </Select.Option>
                <Select.Option value="Admin - Checker">
                  Admin - Checker
                </Select.Option>
                <Select.Option value="Sub Admin">Sub Admin</Select.Option>
                <Select.Option value="Support Staff">
                  Support Staff
                </Select.Option>
              </Select>
            </div>
          </Modal>
          <Modal
            title="View Band"
            style={{ textAlign: "center" }}
            visible={viewModal}
            closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
            onCancel={() => setViewModal(false)}
            footer={
              <Button
                onClick={() => setViewModal(false)}
                className={styles.ConfirmButton}
              >
                Proceed
              </Button>
            }
          >
            <div className={styles.FormControl}>
              <p>Merchant Band</p>
              <Input value={"Band A"} />
            </div>
            <div className={styles.FormControl}>
              <p>Merchant Band Category</p>
              <Input value={"Category A"} />
            </div>
          </Modal>
          <Modal
            title="Remove permission"
            style={{ textAlign: "center" }}
            visible={disableModal}
            closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
            onCancel={() => setDisableModal(false)}
            footer={<Button className={styles.DisableButton}>Remove</Button>}
          >
            <div className={styles.DisableModal}>
              <img src="/images/info.png" />
              <h3>Remove permission</h3>
              <p>Are you sure you want to remove this permission?</p>
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
              data={MERCHANT_BANDS}
              title="List of Bands"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default RolesSettings;
