import { Button, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import Table from "../Table/Table";
import styles from "./Currency.module.css";

const DATA = [
  {
    key: "1",
    name: "Nigeria",
    abbrevation: "NGN",
    code: "056",
    minorUnit: "02",
  },
  {
    key: "2",
    name: "Nigeria",
    abbrevation: "NGN",
    code: "056",
    minorUnit: "02",
  },
  {
    key: "3",
    name: "Nigeria",
    abbrevation: "NGN",
    code: "056",
    minorUnit: "02",
  },
  {
    key: "4",
    name: "Nigeria",
    abbrevation: "NGN",
    code: "056",
    minorUnit: "02",
  },
  {
    key: "5",
    name: "Nigeria",
    abbrevation: "NGN",
    code: "056",
    minorUnit: "02",
  },
];

const Currency: React.FC = () => {
  const [createModal, setCreateModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [viewModal, setViewModal] = useState<boolean>(false);
  const [disableModal, setDisableModal] = useState<boolean>(false);
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const [country, setCountry] = useState<string>("");
  const [abbrevation, setAbbrevation] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [minorUnit, setMinorUnit] = useState<string>("");

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
      title: "ABBREVATION",
      dataIndex: "abbrevation",
      key: "abbrevation",
    },
    {
      ellipsis: true,
      title: "CODE",
      dataIndex: "code",
      key: "code",
    },
    {
      ellipsis: true,
      title: "MINOR UNIT",
      dataIndex: "minorUnit",
      key: "minorUnit",
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
        <h1>Currency</h1>
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
          Add Currency Type
        </Button>
      </div>
      <p className={styles.Description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        congue auctor est lacinia justo.
      </p>
      <Modal
        title={isEdit ? "Edit Currency" : "Create Currency"}
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
          <Select
            style={{ width: "100%" }}
            value={country}
            onChange={(value) => setCountry(value)}
          >
            <Select.Option value="">Select Country</Select.Option>
            <Select.Option value="Nigeria">Nigeria</Select.Option>
          </Select>
        </div>
        <div className={styles.FormControl}>
          <p>Abbrevation</p>
          <Input
            value={abbrevation}
            onChange={(e) => setAbbrevation(e.target.value)}
          />
        </div>
        <div className={styles.FormControl}>
          <p>Code</p>
          <Input value={code} onChange={(e) => setCode(e.target.value)} />
        </div>
        <div className={styles.FormControl}>
          <p>Minor Unit</p>
          <Input
            value={minorUnit}
            onChange={(e) => setMinorUnit(e.target.value)}
          />
        </div>
      </Modal>
      <Modal
        title="View Currency"
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
          <p>Country</p>
          <Input value={"Nigeria"} />
        </div>
        <div className={styles.FormControl}>
          <p>Abbrevation</p>
          <Input value={"NGN"} />
        </div>
        <div className={styles.FormControl}>
          <p>Code</p>
          <Input value={"203"} />
        </div>
        <div className={styles.FormControl}>
          <p>Minor Unit</p>
          <Input value={"2322"} />
        </div>
      </Modal>
      <Modal
        title="Disable Currency"
        style={{ textAlign: "center" }}
        visible={disableModal}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setDisableModal(false)}
        footer={<Button className={styles.DisableButton}>Disable</Button>}
      >
        <div className={styles.DisableModal}>
          <img src="/images/info.png" />
          <h3>Disable Currency</h3>
          <p>Are you sure you want to disable this currency?</p>
        </div>
      </Modal>
      <Modal
        title="Currency added added successfully"
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
          <h3>Currency Added</h3>
          <p>You have sucessfully added a currency</p>
        </div>
      </Modal>
      <div className={styles.TableContainer}>
        <Table columns={columns} data={DATA} title="List of Currencies" />
      </div>
    </div>
  );
};

export default Currency;
