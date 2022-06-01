import { CheckOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Select } from "antd";
import React, { useRef, useState } from "react";
import Table from "../Table/Table";
import styles from "./Host.module.css";

const HOSTS = [
  {
    key: "1",
    name: "NIBSS LIVE",
    ip: "192.168.120.0",
    port: "8080",
    ssl: "Enabled",
  },
  {
    key: "2",
    name: "NIBSS LIVE",
    ip: "192.168.120.0",
    port: "8080",
    ssl: "Enabled",
  },
  {
    key: "3",
    name: "NIBSS LIVE",
    ip: "192.168.120.0",
    port: "8080",
    ssl: "Enabled",
  },
  {
    key: "4",
    name: "NIBSS LIVE",
    ip: "192.168.120.0",
    port: "8080",
    ssl: "Enabled",
  },
  {
    key: "5",
    name: "NIBSS LIVE",
    ip: "192.168.120.0",
    port: "8080",
    ssl: "Enabled",
  },
];

const HOST_KEYS = [
  {
    key: "1",
    name: "NIBSS LIVE	",
    component1: "0000000ty",
    component2: "Ftfd45544",
  },
  {
    key: "2",
    name: "NIBSS LIVE	",
    component1: "0000000ty",
    component2: "Ftfd45544",
  },
  {
    key: "3",
    name: "NIBSS LIVE	",
    component1: "0000000ty",
    component2: "Ftfd45544",
  },
  {
    key: "4",
    name: "NIBSS LIVE	",
    component1: "0000000ty",
    component2: "Ftfd45544",
  },
  {
    key: "5",
    name: "NIBSS LIVE	",
    component1: "0000000ty",
    component2: "Ftfd45544",
  },
];

const Host: React.FC = () => {
  const [createModal, setCreateModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [viewModal, setViewModal] = useState<boolean>(false);
  const [disableModal, setDisableModal] = useState<boolean>(false);
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const [viewType, setViewType] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [ip, setIP] = useState<string>("");
  const [port, setPort] = useState<string>("");
  const [component, setComponent] = useState<string>("");
  const [component1, setComponent1] = useState<string>("");

  const uploadRef = useRef<any>();

  const hostColumns = [
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
      title: "SSL",
      dataIndex: "ssl",
      key: "ssl",
      render: (text: string) => (
        <span
          className={text === "Enabled" ? styles.GreenText : styles.RedText}
        >
          {text}
        </span>
      ),
    },

    {
      ellipsis: true,
      title: "",
      render: (text: string, record: any) => (
        <div className={styles.Actions}>
          <button
            onClick={() => {
              setDisableModal(true);
              setViewType("host");
            }}
            className={styles.Disable}
          >
            Disable
          </button>
          <button
            onClick={() => {
              setViewModal(true);
              setViewType("host");
            }}
            className={styles.View}
          >
            View
          </button>
          <button
            onClick={() => {
              setIsEdit(true);
              setCreateModal(true);
              setViewType("host");
            }}
            className={styles.Edit}
          >
            Edit
          </button>
        </div>
      ),
    },
  ];

  const hostKeyColumns = [
    { ellipsis: true, title: "S/N", dataIndex: "key", key: "key" },
    {
      ellipsis: true,
      title: "NAME",
      dataIndex: "name",
      key: "name",
    },
    {
      ellipsis: true,
      title: "COMPONENT 1",
      dataIndex: "component1",
      key: "component1",
    },
    {
      ellipsis: true,
      title: "COMPONENT 2",
      dataIndex: "component2",
      key: "component2",
    },
    {
      ellipsis: true,
      title: "",
      render: (text: string, record: any) => (
        <div className={styles.Actions}>
          <button
            onClick={() => {
              setDisableModal(true);
              setViewType("hostKey");
            }}
            className={styles.Disable}
          >
            Disable
          </button>
          <button
            onClick={() => {
              setViewModal(true);
              setViewType("hostKey");
            }}
            className={styles.View}
          >
            View
          </button>
          <button
            onClick={() => {
              setIsEdit(true);
              setCreateModal(true);
              setViewType("hostKey");
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
        <h1>Host</h1>
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
            setViewType("type");
          }}
          icon={<img style={{ marginRight: 5 }} src="/icons/add-square.svg" />}
        >
          Create New Host
        </Button>
      </div>
      <p className={styles.Description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        congue auctor est lacinia justo.
      </p>
      <Modal
        title={
          isEdit
            ? `Edit ${viewType === "host" ? "Host" : "Host Key"}`
            : `Create ${viewType === "host" ? "Host" : "Host Key"}`
        }
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
        {viewType === "type" ? (
          <>
            <div className={styles.FormControl}>
              <p>Name</p>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className={styles.FormControl}>
              <p>IP</p>
              <Input value={ip} onChange={(e) => setIP(e.target.value)} />
            </div>
            <div className={styles.FormControl}>
              <p>PORT</p>
              <Input value={port} onChange={(e) => setPort(e.target.value)} />
            </div>
            <div style={{ display: "flex" }} className={styles.FormControl}>
              <div
                style={{
                  border: "none",
                  borderRadius: 4,
                  backgroundColor: "#4C6FFF",
                  marginRight: 5,
                  width: 20,
                  height: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className={styles.TableCheckContainer}
              >
                <CheckOutlined style={{ color: "white" }} />
              </div>
              <span>Enable SSL</span>
            </div>
          </>
        ) : (
          <>
            <div className={styles.FormControl}>
              <p>Name</p>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className={styles.FormControl}>
              <p>Component 1</p>
              <Input
                value={component1}
                onChange={(e) => setComponent1(e.target.value)}
              />
            </div>
            <div className={styles.FormControl}>
              <p>Component</p>
              <Input
                value={component}
                onChange={(e) => setComponent(e.target.value)}
              />
            </div>
          </>
        )}
      </Modal>
      <Modal
        title={`View ${viewType === "type" ? "Host" : "Host Key"}`}
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
        {viewType === "host" ? (
          <>
            <div className={styles.FormControl}>
              <p>Name</p>
              <Input value={"NIBSS LIVE"} />
            </div>
            <div className={styles.FormControl}>
              <p>IP</p>
              <Input value={"192.168.0.1"} />
            </div>
            <div className={styles.FormControl}>
              <p>Port</p>
              <Input value={"8080"} />
            </div>
            <div style={{ display: "flex" }} className={styles.FormControl}>
              <div
                style={{
                  border: "none",
                  borderRadius: 4,
                  backgroundColor: "#4C6FFF",
                  marginRight: 5,
                  width: 20,
                  height: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className={styles.TableCheckContainer}
              >
                <CheckOutlined style={{ color: "white" }} />
              </div>
              <span>Enable SSL</span>
            </div>
          </>
        ) : (
          <>
            <div className={styles.FormControl}>
              <p>Name</p>
              <Input value={"NIBSS LIVE"} />
            </div>
            <div className={styles.FormControl}>
              <p>Component 1</p>
              <Input value={"Component 1"} />
            </div>
            <div className={styles.FormControl}>
              <p>Component</p>
              <Input value={"Component"} />
            </div>
          </>
        )}
      </Modal>
      <Modal
        title={`Disable ${viewType === "host" ? "Host" : "Host Key"}`}
        style={{ textAlign: "center" }}
        visible={disableModal}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setDisableModal(false)}
        footer={<Button className={styles.DisableButton}>Disable</Button>}
      >
        <div className={styles.DisableModal}>
          <img src="/images/info.png" />
          <h3>Disable {viewType === "host" ? "Host" : "Host Key"}</h3>
          <p>
            Are you sure you want to disable this{" "}
            {viewType === "host" ? "host" : "host type"}?
          </p>
        </div>
      </Modal>
      <Modal
        title={`${
          viewType === "host" ? "Host" : "Host key"
        } added successfully`}
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
          <h3>{viewType === "host" ? "Host" : "Host key"} Added</h3>
          <p>
            You have sucessfully added a{" "}
            {viewType === "host" ? "host" : "host key"}
          </p>
        </div>
      </Modal>
      <div className={styles.TableContainer}>
        <Table columns={hostColumns} data={HOSTS} title="List of Host" />
      </div>
      <div style={{ marginTop: 50 }} className={styles.HeaderContainer}>
        <h1>Host Key</h1>
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
            setViewType("logo");
          }}
          icon={<img style={{ marginRight: 5 }} src="/icons/add-square.svg" />}
        >
          Add Host Key
        </Button>
      </div>
      <p className={styles.Description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        congue auctor est lacinia justo.
      </p>
      <div className={styles.TableContainer}>
        <Table
          columns={hostKeyColumns}
          data={HOST_KEYS}
          title="List of Host Key"
        />
      </div>
    </div>
  );
};

export default Host;
