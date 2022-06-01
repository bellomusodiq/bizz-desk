import { Button, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import Table from "../Table/Table";
import styles from "./BankProfile.module.css";

const BANK_PROFILES = [
  {
    key: "1",
    profileName: "Zenith",
    profileId: "24",
    acquiringInstution: "Zenith Bank",
  },
  {
    key: "2",
    profileName: "Access",
    profileId: "25",
    acquiringInstution: "Access Bank",
  },
];

const BankProfile: React.FC = () => {
  const [createModal, setCreateModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [viewModal, setViewModal] = useState<boolean>(false);
  const [disableModal, setDisableModal] = useState<boolean>(false);
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const [profileName, setProfileName] = useState<string>("");
  const [profileID, setProfileID] = useState<string>("");
  const [acquiringInstitution, setAcquiringInstitution] = useState<string>("");

  const columns = [
    { ellipsis: true, title: "S/N", dataIndex: "key", key: "key" },
    {
      ellipsis: true,
      title: "PROFILE NAME",
      dataIndex: "profileName",
      key: "profileName",
    },
    {
      ellipsis: true,
      title: "PROFILE ID",
      dataIndex: "profileId",
      key: "profileId",
    },
    {
      ellipsis: true,
      title: "ACQUIRING INSTITUTION",
      dataIndex: "acquiringInstution",
      key: "acquiringInstution",
    },
    {
      ellipsis: true,
      title: "",
      render: (text: string, record: any) => (
        <div className={styles.Actions}>
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
        <h1>Bank Profile</h1>
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
          Create Profile
        </Button>
      </div>
      <p className={styles.Description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        congue auctor est lacinia justo.
      </p>
      <Modal
        title={isEdit ? "Edit Bank Profile" : "Create Bank Profile"}
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
          <p>Profile Name</p>
          <Input
            value={profileName}
            onChange={(e) => setProfileName(e.target.value)}
          />
        </div>
        <div className={styles.FormControl}>
          <p>Profile ID</p>
          <Input
            value={profileID}
            onChange={(e) => setProfileID(e.target.value)}
          />
        </div>
        <div className={styles.FormControl}>
          <p>Acquiring Institution</p>
          <Select
            style={{ width: "100%" }}
            value={acquiringInstitution}
            onChange={(value) => setAcquiringInstitution(value)}
          >
            <Select.Option value="">Select Category</Select.Option>
            <Select.Option value="Zenith">Zenith</Select.Option>
            <Select.Option value="First Bank">First Bank</Select.Option>
          </Select>
        </div>
      </Modal>
      <Modal
        title="View Bank Profile"
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
          <p>Profile Name</p>
          <Input value={"Zenith"} />
        </div>
        <div className={styles.FormControl}>
          <p>Profile ID</p>
          <Input value={"05"} />
        </div>
        <div className={styles.FormControl}>
          <p>Acquring Institution</p>
          <Input value={"Zenith bank"} />
        </div>
      </Modal>
      <Modal
        title="Bank profile added successfully"
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
          <h3>Bank Profile Added</h3>
          <p>You have sucessfully added a new bank profile</p>
        </div>
      </Modal>
      <div className={styles.TableContainer}>
        <Table
          columns={columns}
          data={BANK_PROFILES}
          title="List of Bank Profile"
        />
      </div>
    </div>
  );
};

export default BankProfile;
