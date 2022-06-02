import { CheckOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Select } from "antd";
import React, { useRef, useState } from "react";
import Table from "../Table/Table";
import styles from "./RemoteUpdate.module.css";

const DATA = [
  {
    key: "1",
    brand: "PAX",
    model: "PAX - S80",
    version: "1.0.3",
  },
  {
    key: "2",
    brand: "PAX",
    model: "PAX - S80",
    version: "1.0.3",
  },
  {
    key: "3",
    brand: "PAX",
    model: "PAX - S80",
    version: "1.0.3",
  },
  {
    key: "4",
    brand: "PAX",
    model: "PAX - S80",
    version: "1.0.3",
  },
  {
    key: "5",
    brand: "PAX",
    model: "PAX - S80",
    version: "1.0.3",
  },
  {
    key: "6",
    brand: "PAX",
    model: "PAX - S80",
    version: "1.0.3",
  },
];

const RemoteUpdate: React.FC = () => {
  const [createModal, setCreateModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [viewModal, setViewModal] = useState<boolean>(false);
  const [disableModal, setDisableModal] = useState<boolean>(false);
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [version, setVersion] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [fix, setFix] = useState<string>("");
  const [specificTerminals, setSpecificTerminals] = useState<string>("");
  const [remarks, setRemarks] = useState<string>("");

  const uploadRef = useRef<any>();

  const comumns = [
    { ellipsis: true, title: "S/N", dataIndex: "key", key: "key" },
    {
      ellipsis: true,
      title: "BRAND",
      dataIndex: "brand",
      key: "brand",
    },
    {
      ellipsis: true,
      title: "MODEL",
      dataIndex: "model",
      key: "model",
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
      <Modal
        title={isEdit ? `Edit Remote update` : `Create Remote update`}
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
          <p>Version</p>
          <Input value={version} onChange={(e) => setVersion(e.target.value)} />
        </div>
        <div className={styles.FormControl}>
          <p>Description</p>
          <Input.TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={styles.FormControl}>
          <p>Brand</p>
          <Select
            style={{ width: "100%" }}
            value={brand}
            onChange={(value) => setBrand(value)}
          >
            <Select.Option value="">Select Brand</Select.Option>
            <Select.Option value="PAX">PAX</Select.Option>
          </Select>
        </div>
        <div className={styles.FormControl}>
          <p>Model</p>
          <Select
            style={{ width: "100%" }}
            value={model}
            onChange={(value) => setModel(value)}
          >
            <Select.Option value="">Select Model</Select.Option>
            <Select.Option value="PAX - S80">PAX - S80</Select.Option>
          </Select>
        </div>
        <div className={styles.FormControl}>
          <p>Fix</p>
          <Input value={fix} onChange={(e) => setFix(e.target.value)} />
        </div>
        <div className={styles.FormControl}>
          <p>Specific Terminals</p>
          <Input
            value={specificTerminals}
            onChange={(e) => setSpecificTerminals(e.target.value)}
          />
        </div>
        <div className={styles.FormControl}>
          <p>Remarks</p>
          <Input.TextArea
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />
        </div>

        <div className={styles.FormControl}>
          <p>Application</p>
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
            <p>Click here to choose file</p>
            <p>or drap and drop it.</p>
          </button>
        </div>
      </Modal>
      <Modal
        title={`View Remote update`}
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
          <p>Version</p>
          <Input value={1.03} />
        </div>
        <div className={styles.FormControl}>
          <p>Description</p>
          <Input.TextArea value={"This is a remote update description"} />
        </div>
        <div className={styles.FormControl}>
          <p>Brand</p>
          <Input value={"PAX"} />
        </div>
        <div className={styles.FormControl}>
          <p>Model</p>
          <Input value="PAX - S80" />
        </div>
        <div className={styles.FormControl}>
          <p>Fix</p>
          <Input value={"patch update"} />
        </div>
        <div className={styles.FormControl}>
          <p>Specific Terminals</p>
          <Input value={"John"} />
        </div>
        <div className={styles.FormControl}>
          <p>Remarks</p>
          <Input.TextArea value={"this is a remark"} />
        </div>
        <div className={styles.FormControl}>
          <p>Application</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ marginBottom: 0, marginRight: 5 }}>file name</p>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "transparent",
                border: "none",
              }}
              className={styles.View}
            >
              <img src="/icons/download.svg" style={{ marginRight: 5 }} />
              <span>Download</span>
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        title="Disable Remote UPdate"
        style={{ textAlign: "center" }}
        visible={disableModal}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setDisableModal(false)}
        footer={<Button className={styles.DisableButton}>Disable</Button>}
      >
        <div className={styles.DisableModal}>
          <img src="/images/info.png" />
          <h3>Disable Remote Update</h3>
          <p>Are you sure you want to disable this remote update?</p>
        </div>
      </Modal>
      <Modal
        title="Remote update added successfully"
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
          <h3>Remote update Added</h3>
          <p>You have sucessfully added a remote update</p>
        </div>
      </Modal>
      <div className={styles.HeaderContainer}>
        <h1>Remote update</h1>
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
          Create New Remote Update
        </Button>
      </div>
      <p className={styles.Description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        congue auctor est lacinia justo.
      </p>
      <div className={styles.TableContainer}>
        <Table columns={comumns} data={DATA} title="List of Remote updates" />
      </div>
    </div>
  );
};

export default RemoteUpdate;
