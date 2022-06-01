import { CheckOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Select } from "antd";
import React, { useRef, useState } from "react";
import Table from "../Table/Table";
import styles from "./Reciept.module.css";

const RECEIPT_TYPES = [
  {
    key: "1",
    name: "UBA Reciept",
    footerNote: "Thanks for Coming",
    logo: "Enabled",
    barCode: "Enabled",
    qrCode: "Disabled",
  },
  {
    key: "2",
    name: "UBA Reciept",
    footerNote: "Thanks for Coming",
    logo: "Enabled",
    barCode: "Enabled",
    qrCode: "Disabled",
  },
  {
    key: "3",
    name: "UBA Reciept",
    footerNote: "Thanks for Coming",
    logo: "Enabled",
    barCode: "Enabled",
    qrCode: "Disabled",
  },
  {
    key: "4",
    name: "UBA Reciept",
    footerNote: "Thanks for Coming",
    logo: "Enabled",
    barCode: "Enabled",
    qrCode: "Disabled",
  },
  {
    key: "5",
    name: "UBA Reciept",
    footerNote: "Thanks for Coming",
    logo: "Enabled",
    barCode: "Enabled",
    qrCode: "Disabled",
  },
];

const RECEIPT_LOGOS = [
  {
    key: "1",
    name: "UBA",
    version: "1.0.3",
  },
  {
    key: "2",
    name: "UBA",
    version: "1.0.3",
  },
  {
    key: "3",
    name: "UBA",
    version: "1.0.3",
  },
  {
    key: "4",
    name: "UBA",
    version: "1.0.3",
  },
  {
    key: "5",
    name: "UBA",
    version: "1.0.3",
  },
  {
    key: "6",
    name: "UBA",
    version: "1.0.3",
  },
];

const Reciept: React.FC = () => {
  const [createModal, setCreateModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [viewModal, setViewModal] = useState<boolean>(false);
  const [disableModal, setDisableModal] = useState<boolean>(false);
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const [viewType, setViewType] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [footerNote, setFooterNote] = useState<string>("");
  const [version, setVersion] = useState<string>("");

  const uploadRef = useRef<any>();

  const receiptTypeColumns = [
    { ellipsis: true, title: "S/N", dataIndex: "key", key: "key" },
    {
      ellipsis: true,
      title: "NAME",
      dataIndex: "name",
      key: "name",
    },
    {
      ellipsis: true,
      title: "FOOTER NOTE",
      dataIndex: "footerNote",
      key: "footerNote",
    },
    {
      ellipsis: true,
      title: "LOGO",
      dataIndex: "logo",
      key: "logo",
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
      title: "BAR CODE",
      dataIndex: "barCode",
      key: "barCode",
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
      title: "QR CODE",
      dataIndex: "qrCode",
      key: "qrCode",
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
              setViewModal(true);
              setViewType("type");
            }}
            className={styles.View}
          >
            View
          </button>
        </div>
      ),
    },
  ];

  const receiptLogoColumns = [
    { ellipsis: true, title: "S/N", dataIndex: "key", key: "key" },
    {
      ellipsis: true,
      title: "NAME",
      dataIndex: "name",
      key: "name",
    },
    {
      ellipsis: true,
      title: "VERSION",
      dataIndex: "version",
      key: "version",
    },
    {
      ellipsis: true,
      title: "",
      render: (text: string, record: any) => (
        <div className={styles.Actions}>
          <button
            style={{ display: "flex", alignItems: "center" }}
            className={styles.View}
          >
            <img src="/icons/download.svg" style={{ marginRight: 5 }} />
            <span>Download</span>
          </button>
          <button
            onClick={() => {
              setViewModal(true);
              setViewType("logo");
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
        <h1>Reciept</h1>
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
          Create New Reciept Type
        </Button>
      </div>
      <p className={styles.Description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        congue auctor est lacinia justo.
      </p>
      <Modal
        title={
          isEdit
            ? `Edit ${viewType === "type" ? "Reciept Type" : "Reciept Logo"}`
            : `Create ${viewType === "type" ? "Reciept Type" : "Reciept Logo"}`
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
              <p>Footer note</p>
              <Input.TextArea
                value={footerNote}
                onChange={(e) => setFooterNote(e.target.value)}
              />
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
              <span>Enable Logo</span>
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
              <span>Enable QR Code</span>
            </div>
            <div
              style={{ display: "flex", alignItems: "center" }}
              className={styles.FormControl}
            >
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
              <span>Enable Bar code</span>
            </div>
          </>
        ) : (
          <>
            <div className={styles.FormControl}>
              <p>Version</p>
              <Input
                value={version}
                onChange={(e) => setVersion(e.target.value)}
              />
            </div>
            <div className={styles.FormControl}>
              <input type="file" ref={uploadRef} hidden />
              <button
                onClick={() => uploadRef.current.click()}
                className={styles.UploadButton}
              >
                <img
                  src="/icons/folder-add.svg"
                  alt="floter add"
                  style={{ marginBottom: 10 }}
                />
                <p>Click here to choose logo</p>
                <p>or drap and drop it.</p>
              </button>
            </div>
          </>
        )}
      </Modal>
      <Modal
        title={`View ${viewType === "type" ? "Reciept Type" : "Reciept Logo"}`}
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
        {viewType === "type" ? (
          <>
            <div className={styles.FormControl}>
              <p>Name</p>
              <Input value={"UBA"} />
            </div>
            <div className={styles.FormControl}>
              <p>Footer note</p>
              <Input.TextArea value={"Thanks for Coming"} />
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
              <span>Enable Logo</span>
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
              <span>Enable QR Code</span>
            </div>
            <div
              style={{ display: "flex", alignItems: "center" }}
              className={styles.FormControl}
            >
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
              <span>Enable Bar code</span>
            </div>
          </>
        ) : (
          <>
            <div className={styles.FormControl}>
              <p>Version</p>
              <Input value={"1.0.3"} />
            </div>
            <div className={styles.FormControl}>
              <div className={styles.LogoContainer} />
            </div>
          </>
        )}
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
          columns={receiptTypeColumns}
          data={RECEIPT_TYPES}
          title="List of Receipt Types"
        />
      </div>
      <div style={{ marginTop: 50 }} className={styles.HeaderContainer}>
        <h1>Reciept Logo</h1>
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
          Create New Reciept Logo
        </Button>
      </div>
      <p className={styles.Description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        congue auctor est lacinia justo.
      </p>
      <div className={styles.TableContainer}>
        <Table
          columns={receiptLogoColumns}
          data={RECEIPT_LOGOS}
          title="List of Receipt Logo"
        />
      </div>
    </div>
  );
};

export default Reciept;
