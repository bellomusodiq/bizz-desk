import { CheckOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Select } from "antd";
import React, { useRef, useState } from "react";
import Table from "../Table/Table";
import styles from "./CardSettings.module.css";

const CARD_KEYS = [
  {
    key: "1",
    name: "Mastercard",
    expiryDate: "00-00-0000",
    exponent: "09",
    aid: "A001",
  },
  {
    key: "2",
    name: "Mastercard",
    expiryDate: "00-00-0000",
    exponent: "09",
    aid: "A001",
  },
  {
    key: "3",
    name: "Mastercard",
    expiryDate: "00-00-0000",
    exponent: "09",
    aid: "A001",
  },
  {
    key: "4",
    name: "Mastercard",
    expiryDate: "00-00-0000",
    exponent: "09",
    aid: "A001",
  },
  {
    key: "5",
    name: "Mastercard",
    expiryDate: "00-00-0000",
    exponent: "09",
    aid: "A001",
  },
];

const CARD_TYPES = [
  {
    key: "1",
    name: "Master Card",
    cardId: "0001",
  },
  {
    key: "2",
    name: "Master Card",
    cardId: "0001",
  },
  {
    key: "3",
    name: "Master Card",
    cardId: "0001",
  },
  {
    key: "4",
    name: "Master Card",
    cardId: "0001",
  },
  {
    key: "5",
    name: "Master Card",
    cardId: "0001",
  },
];

const CardSettings: React.FC = () => {
  const [createModal, setCreateModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [viewModal, setViewModal] = useState<boolean>(false);
  const [disableModal, setDisableModal] = useState<boolean>(false);
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const [viewType, setViewType] = useState<string>("");
  const [card, setCard] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("");
  const [exponent, setExponent] = useState<string>("");
  const [aid, setAid] = useState<string>("");
  const [cardId, setCardId] = useState<string>("");

  const uploadRef = useRef<any>();

  const cardKeyColumns = [
    { ellipsis: true, title: "S/N", dataIndex: "key", key: "key" },
    {
      ellipsis: true,
      title: "NAME",
      dataIndex: "name",
      key: "name",
    },
    {
      ellipsis: true,
      title: "EXPIRY DATE",
      dataIndex: "expiryDate",
      key: "expiryDate",
    },
    {
      ellipsis: true,
      title: "EXPONENT",
      dataIndex: "exponent",
      key: "exponent",
    },
    {
      ellipsis: true,
      title: "AID",
      dataIndex: "aid",
      key: "aid",
    },
    {
      ellipsis: true,
      title: "",
      render: (text: string, record: any) => (
        <div className={styles.Actions}>
          <button
            onClick={() => {
              setDisableModal(true);
              setViewType("cardKey");
            }}
            className={styles.Disable}
          >
            Disable
          </button>
          <button
            onClick={() => {
              setViewModal(true);
              setViewType("cardKey");
            }}
            className={styles.View}
          >
            View
          </button>
          <button
            onClick={() => {
              setIsEdit(true);
              setCreateModal(true);
              setViewType("cardKey");
            }}
            className={styles.Edit}
          >
            Edit
          </button>
        </div>
      ),
    },
  ];

  const cardTypeColumns = [
    { ellipsis: true, title: "S/N", dataIndex: "key", key: "key" },
    {
      ellipsis: true,
      title: "NAME",
      dataIndex: "name",
      key: "name",
    },
    {
      ellipsis: true,
      title: "CARD ID",
      dataIndex: "cardId",
      key: "cardId",
    },
    {
      ellipsis: true,
      title: "",
      render: (text: string, record: any) => (
        <div className={styles.Actions}>
          <button
            onClick={() => {
              setDisableModal(true);
              setViewType("cardType");
            }}
            className={styles.Disable}
          >
            Disable
          </button>
          <button
            onClick={() => {
              setViewModal(true);
              setViewType("cardType");
            }}
            className={styles.View}
          >
            View
          </button>
          <button
            onClick={() => {
              setIsEdit(true);
              setCreateModal(true);
              setViewType("cardType");
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
        <h1>Card Key</h1>
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
            setViewType("cardKey");
          }}
          icon={<img style={{ marginRight: 5 }} src="/icons/add-square.svg" />}
        >
          Create Card Key
        </Button>
      </div>
      <p className={styles.Description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        congue auctor est lacinia justo.
      </p>
      <Modal
        title={
          isEdit
            ? `Edit ${viewType === "cardKey" ? "Card Key" : "Card Type"}`
            : `Create ${viewType === "cardKey" ? "Card Key" : "Card Type"}`
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
        {viewType === "cardKey" ? (
          <>
            <div className={styles.FormControl}>
              <p>Card</p>
              <Select
                style={{ width: "100%" }}
                value={card}
                onChange={(value) => setCard(value)}
              >
                <Select.Option value="">Select Card</Select.Option>
                <Select.Option value="Mastercard">Mastercard</Select.Option>
                <Select.Option value="Visa">Visa</Select.Option>
              </Select>
            </div>
            <div className={styles.FormControl}>
              <p>Expiry Date</p>
              <Input
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
            </div>
            <div className={styles.FormControl}>
              <p>Exponent</p>
              <Input
                value={exponent}
                onChange={(e) => setExponent(e.target.value)}
              />
            </div>
            <div className={styles.FormControl}>
              <p>AID</p>
              <Input value={aid} onChange={(e) => setAid(e.target.value)} />
            </div>
          </>
        ) : (
          <>
            <div className={styles.FormControl}>
              <p>Card</p>
              <Select
                style={{ width: "100%" }}
                value={card}
                onChange={(value) => setCard(value)}
              >
                <Select.Option value="">Select Card</Select.Option>
                <Select.Option value="Mastercard">Mastercard</Select.Option>
                <Select.Option value="Visa">Visa</Select.Option>
              </Select>
            </div>
            <div className={styles.FormControl}>
              <p>Card ID</p>
              <Input
                value={cardId}
                onChange={(e) => setCardId(e.target.value)}
              />
            </div>
          </>
        )}
      </Modal>
      <Modal
        title={`View ${viewType === "cardKey" ? "Card Key" : "Card Type"}`}
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
        {viewType === "cardKey" ? (
          <>
            <div className={styles.FormControl}>
              <p>Card</p>
              <Input value={"Mastercard"} />
            </div>
            <div className={styles.FormControl}>
              <p>Expiry Date</p>
              <Input value={"00-00-0000"} />
            </div>
            <div className={styles.FormControl}>
              <p>Exponent</p>
              <Input value={"09"} />
            </div>
            <div className={styles.FormControl}>
              <p>AID</p>
              <Input value={"0001"} />
            </div>
          </>
        ) : (
          <>
            <div className={styles.FormControl}>
              <p>Card</p>
              <Input value={"Mastercard"} />
            </div>
            <div className={styles.FormControl}>
              <p>Card ID</p>
              <Input value={"0001"} />
            </div>
          </>
        )}
      </Modal>
      <Modal
        title={`Disable ${viewType === "cardKey" ? "Card Key" : "Card Type"}`}
        style={{ textAlign: "center" }}
        visible={disableModal}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setDisableModal(false)}
        footer={<Button className={styles.DisableButton}>Disable</Button>}
      >
        <div className={styles.DisableModal}>
          <img src="/images/info.png" />
          <h3>Disable {viewType === "cardKey" ? "Card Key" : "Card Type"}</h3>
          <p>
            Are you sure you want to disable this{" "}
            {viewType === "cardKey" ? "card key" : "card type"}?
          </p>
        </div>
      </Modal>
      <Modal
        title={`${
          viewType === "cardKey" ? "Card Key" : "Card Type"
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
          <h3>{viewType === "cardKey" ? "Card Key" : "Card Type"} Added</h3>
          <p>
            You have sucessfully added a{" "}
            {viewType === "cardKey" ? "card key" : "card type"}
          </p>
        </div>
      </Modal>
      <div className={styles.TableContainer}>
        <Table
          columns={cardKeyColumns}
          data={CARD_KEYS}
          title="List of Card Key"
        />
      </div>
      <div style={{ marginTop: 50 }} className={styles.HeaderContainer}>
        <h1>Card Type</h1>
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
          Add Card Type
        </Button>
      </div>
      <p className={styles.Description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        congue auctor est lacinia justo.
      </p>
      <div className={styles.TableContainer}>
        <Table
          columns={cardTypeColumns}
          data={CARD_TYPES}
          title="List of Card Type"
        />
      </div>
    </div>
  );
};

export default CardSettings;
