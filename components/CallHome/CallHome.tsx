import { Button, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import Table from "../Table/Table";
import styles from "./CallHome.module.css";

const DATA = [
  {
    key: "1",
    name: "Call Home PAX",
    ip: "192.168.943.32",
    port: "9000",
    interval: "1000s",
  },
  {
    key: "2",
    name: "Call Home PAX",
    ip: "192.168.943.32",
    port: "9000",
    interval: "1000s",
  },
  {
    key: "3",
    name: "Call Home PAX",
    ip: "192.168.943.32",
    port: "9000",
    interval: "1000s",
  },
  {
    key: "4",
    name: "Call Home PAX",
    ip: "192.168.943.32",
    port: "9000",
    interval: "1000s",
  },
  {
    key: "5",
    name: "Call Home PAX",
    ip: "192.168.943.32",
    port: "9000",
    interval: "1000s",
  },
];

const CallHome: React.FC = () => {
  const [createModal, setCreateModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [viewModal, setViewModal] = useState<boolean>(false);
  const [disableModal, setDisableModal] = useState<boolean>(false);
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [ip, setIP] = useState<string>("");
  const [port, setPort] = useState<string>("");
  const [interval, setCallInterval] = useState<string>("");

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
      title: "IP",
      dataIndex: "ip",
      key: "ip",
    },
    {
      ellipsis: true,
      title: "PORT",
      dataIndex: "port",
      key: "port",
    },
    {
      ellipsis: true,
      title: "INTERVAL",
      dataIndex: "interval",
      key: "interval",
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
        <h1>Call Home</h1>
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
          Create New Call Home
        </Button>
      </div>
      <p className={styles.Description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        congue auctor est lacinia justo.
      </p>
      <Modal
        title={isEdit ? "Edit Call Home" : "Create Call Home"}
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
          <p>IP</p>
          <Input value={ip} onChange={(e) => setIP(e.target.value)} />
        </div>
        <div className={styles.FormControl}>
          <p>Port</p>
          <Input value={port} onChange={(e) => setPort(e.target.value)} />
        </div>
        <div className={styles.FormControl}>
          <p>Interval</p>
          <Input
            value={interval}
            onChange={(e) => setCallInterval(e.target.value)}
          />
        </div>
      </Modal>
      <Modal
        title="View Call Home"
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
          <p>IP</p>
          <Input value={"192.168.0.2"} />
        </div>
        <div className={styles.FormControl}>
          <p>Port</p>
          <Input value={"8080"} />
        </div>
        <div className={styles.FormControl}>
          <p>Interval</p>
          <Input value={"3000ms"} />
        </div>
      </Modal>
      <Modal
        title="Disable Call Home"
        style={{ textAlign: "center" }}
        visible={disableModal}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setDisableModal(false)}
        footer={<Button className={styles.DisableButton}>Disable</Button>}
      >
        <div className={styles.DisableModal}>
          <img src="/images/info.png" />
          <h3>Disable Call Home</h3>
          <p>Are you sure you want to disable this call home?</p>
        </div>
      </Modal>
      <Modal
        title="Call Home added successfully"
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
          <h3>Call Home Added</h3>
          <p>You have sucessfully added a call home</p>
        </div>
      </Modal>
      <div className={styles.TableContainer}>
        <Table columns={columns} data={DATA} title="List of Call Homes" />
      </div>
    </div>
  );
};

export default CallHome;
