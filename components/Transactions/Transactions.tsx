import { Button, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import Table from "../Table/Table";
import styles from "./Transactions.module.css";

const DATA = [
  {
    key: "1",
    name: "Purchase",
    commonName: "Purchase",
    code: "Card",
    position: 1,
  },
  {
    key: "2",
    name: "Purchase",
    commonName: "Purchase",
    code: "Card",
    position: 1,
  },
  {
    key: "3",
    name: "Purchase",
    commonName: "Purchase",
    code: "Card",
    position: 1,
  },
  {
    key: "4",
    name: "Purchase",
    commonName: "Purchase",
    code: "Card",
    position: 1,
  },
  {
    key: "5",
    name: "Purchase",
    commonName: "Purchase",
    code: "Card",
    position: 1,
  },
];

const Transactions: React.FC = () => {
  const [createModal, setCreateModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [viewModal, setViewModal] = useState<boolean>(false);
  const [disableModal, setDisableModal] = useState<boolean>(false);
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const [position, setPosition] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [commonName, setCommonName] = useState<string>("");

  const columns = [
    { ellipsis: true, title: "S/N", dataIndex: "key", key: "key" },
    {
      ellipsis: true,
      title: "NAME",
      dataIndex: "name",
      key: "name",
    },
    {
      ellipsis: true,
      title: "COMMON NAME",
      dataIndex: "commonName",
      key: "commonName",
    },
    {
      ellipsis: true,
      title: "CODE",
      dataIndex: "code",
      key: "code",
    },
    {
      ellipsis: true,
      title: "POSITION",
      dataIndex: "position",
      key: "position",
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
        <h1>Transactions</h1>
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
          Create Transaction type
        </Button>
      </div>
      <p className={styles.Description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        congue auctor est lacinia justo.
      </p>
      <Modal
        title={isEdit ? "Edit Transaction Type" : "Create Transaction Type"}
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
          <p>Name</p>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={styles.FormControl}>
          <p>Common Name</p>
          <Input
            value={commonName}
            onChange={(e) => setCommonName(e.target.value)}
          />
        </div>
        <div className={styles.FormControl}>
          <p>Code</p>
          <Input value={code} onChange={(e) => setCode(e.target.value)} />
        </div>
        <div className={styles.FormControl}>
          <p>Postion</p>
          <Input
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
      </Modal>
      <Modal
        title="View Transaction Type"
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
          <p>Name</p>
          <Input value={"Purchase"} />
        </div>
        <div className={styles.FormControl}>
          <p>Common Name</p>
          <Input value={"Purchase"} />
        </div>
        <div className={styles.FormControl}>
          <p>Code</p>
          <Input value={"Card"} />
        </div>
        <div className={styles.FormControl}>
          <p>Postion</p>
          <Input value={1} />
        </div>
      </Modal>
      <Modal
        title="Disable Transaction Type"
        style={{ textAlign: "center" }}
        visible={disableModal}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setDisableModal(false)}
        footer={<Button className={styles.DisableButton}>Disable</Button>}
      >
        <div className={styles.DisableModal}>
          <img src="/images/info.png" />
          <h3>Disable Transaction Type</h3>
          <p>Are you sure you want to disable this transaction type?</p>
        </div>
      </Modal>
      <Modal
        title="Transaction type added successfully"
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
          <h3>Transaction type Added</h3>
          <p>You have sucessfully added a transaction type</p>
        </div>
      </Modal>
      <div className={styles.TableContainer}>
        <Table
          columns={columns}
          data={DATA}
          title="List of Transaction Types"
        />
      </div>
    </div>
  );
};

export default Transactions;
