import { Button, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import Table from "../Table/Table";
import styles from "./Communication.module.css";

const DATA = [
  {
    key: "1",
    name: "GPRS",
    type: "GPRS",
    apn: "web.pgrs.mtnnigeria.net",
  },
  {
    key: "2",
    name: "GPRS",
    type: "GPRS",
    apn: "web.pgrs.mtnnigeria.net",
  },
  {
    key: "3",
    name: "GPRS",
    type: "GPRS",
    apn: "web.pgrs.mtnnigeria.net",
  },
  {
    key: "4",
    name: "GPRS",
    type: "GPRS",
    apn: "web.pgrs.mtnnigeria.net",
  },
  {
    key: "5",
    name: "GPRS",
    type: "GPRS",
    apn: "web.pgrs.mtnnigeria.net",
  },
];

const Communication: React.FC = () => {
  const [createModal, setCreateModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [viewModal, setViewModal] = useState<boolean>(false);
  const [disableModal, setDisableModal] = useState<boolean>(false);
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [apn, setApn] = useState<string>("");

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
      title: "TYPE",
      dataIndex: "type",
      key: "type",
    },
    {
      ellipsis: true,
      title: "APN",
      dataIndex: "apn",
      key: "apn",
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
        <h1>Communication</h1>
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
          Create New Communication
        </Button>
      </div>
      <p className={styles.Description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        congue auctor est lacinia justo.
      </p>
      <Modal
        title={isEdit ? "Edit Communication" : "Create Communication"}
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
          <p>Type</p>
          <Input value={type} onChange={(e) => setType(e.target.value)} />
        </div>
        <div className={styles.FormControl}>
          <p>APN</p>
          <Input value={apn} onChange={(e) => setApn(e.target.value)} />
        </div>
      </Modal>
      <Modal
        title="View Communication"
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
          <Input value={"GPRS"} />
        </div>
        <div className={styles.FormControl}>
          <p>Type</p>
          <Input value={"GPRS"} />
        </div>
        <div className={styles.FormControl}>
          <p>APN</p>
          <Input value={"net.mtnonline.net"} />
        </div>
      </Modal>
      <Modal
        title="Disable Communication"
        style={{ textAlign: "center" }}
        visible={disableModal}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setDisableModal(false)}
        footer={<Button className={styles.DisableButton}>Disable</Button>}
      >
        <div className={styles.DisableModal}>
          <img src="/images/info.png" />
          <h3>Disable Communication</h3>
          <p>Are you sure you want to disable this communication?</p>
        </div>
      </Modal>
      <Modal
        title="Communication added successfully"
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
          <h3>Communication Added</h3>
          <p>You have sucessfully added a new communication</p>
        </div>
      </Modal>
      <div className={styles.TableContainer}>
        <Table columns={columns} data={DATA} title="List of Communications" />
      </div>
    </div>
  );
};

export default Communication;
