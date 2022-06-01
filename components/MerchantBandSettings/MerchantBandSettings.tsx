import { Button, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import Table from "../Table/Table";
import styles from "./MerchantBandSettings.module.css";

const MERCHANT_BANDS = [
  {
    key: "1",
    band: "Band A",
    noTransactions: 24,
    noMerchants: 23,
  },
  {
    key: "2",
    band: "Band B",
    noTransactions: 25,
    noMerchants: 25,
  },
];

const MerchantBandSettings: React.FC = () => {
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
      title: "BAND",
      dataIndex: "band",
      key: "band",
    },
    {
      ellipsis: true,
      title: "NO OF TRANSACTIONS",
      dataIndex: "noTransactions",
      key: "noTransactions",
    },
    {
      ellipsis: true,
      title: "NO OF MERCHANTS",
      dataIndex: "noMerchants",
      key: "noMerchants",
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
              setViewModal(true);
            }}
            className={styles.View}
          >
            View
          </button>
          <button
            onClick={() => {
              setIsEdit(true);
              setCreateModal(true);
            }}
            className={styles.Edit}
          >
            Edit
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className={styles.MerchantBand}>
      <div className={styles.HeaderContainer}>
        <h1>Merchant Band</h1>
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
          icon={<img style={{ marginRight: 5 }} src="/icons/add-square.svg" />}
        >
          Create Merchant Band
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
        title="Disable Band"
        style={{ textAlign: "center" }}
        visible={disableModal}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setDisableModal(false)}
        footer={<Button className={styles.DisableButton}>Disable</Button>}
      >
        <div className={styles.DisableModal}>
          <img src="/images/info.png" />
          <h3>Disable Band</h3>
          <p>Are you sure you want to disable this band?</p>
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
        <Table columns={columns} data={MERCHANT_BANDS} title="List of Bands" />
      </div>
    </div>
  );
};

export default MerchantBandSettings;
