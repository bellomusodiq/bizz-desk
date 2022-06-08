import { Button, Col, Input, Modal, Row, Switch } from "antd";
import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Profile.module.css";

const Profile: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [twoFactor, setTwoFactor] = useState<boolean>(false);
  const [openPasswordModal, setOpenPasswordModal] = useState<boolean>(false);
  return (
    <div>
      <Modal
        style={{ textAlign: "center" }}
        title="Change password"
        visible={openPasswordModal}
        closeIcon={<img src="/icons/close-square.svg" alt="close button" />}
        onCancel={() => setOpenPasswordModal(false)}
        footer={
          <div className={styles.UserModal}>
            <Button
              style={{
                backgroundColor: "#E9F3FA",
                color: "#2085C9",
                width: "90%",
                boxSizing: "content-box",
                marginRight: "2.1%",
                borderRadius: 10,
              }}
            >
              Confirm password change
            </Button>
          </div>
        }
      >
        <div className={styles.FormControl}>
          <p>Enter Old Password</p>
          <Input
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div className={styles.FormControl}>
          <p>Enter New Password</p>
          <Input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className={styles.FormControl}>
          <p>Confirm New Password</p>
          <Input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </Modal>
      <h1 className={styles.Header}>Profile</h1>
      <Row justify="center">
        <Col md={18} sm={12}>
          <Card>
            <div style={{ padding: 20 }}>
              <div className={styles.ProfileImageContainer}>
                <img
                  className={styles.ProfileImage}
                  src="/images/profile.png"
                />
                <span className={styles.UserType}>Super Admin</span>
                <div className={styles.ButtonContainer}>
                  <button className={styles.UploadButton}>Upload Photo</button>
                  <button className={styles.RemoveButton}>Remove Photo</button>
                </div>
              </div>
              <Row gutter={[50, 0]}>
                <Col xs={24} md={12}>
                  <div className={styles.FormControl}>
                    <p>First Name</p>
                    <Input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </Col>
                <Col xs={24} md={12}>
                  <div className={styles.FormControl}>
                    <p>Last Name</p>
                    <Input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </Col>
              </Row>
              <div className={styles.FormControl}>
                <p>Email</p>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.FormControl}>
                <Row gutter={[50, 0]}>
                  <Col xs={6}>
                    <p>Password</p>
                  </Col>
                  <Col xs={18}>
                    <Button onClick={() => setOpenPasswordModal(true)}>
                      Change Password
                    </Button>
                  </Col>
                </Row>
              </div>
              <div className={styles.FormControl}>
                <Row gutter={[50, 0]}>
                  <Col xs={6}>
                    <p>Two-factor Auth</p>
                  </Col>
                  <Col xs={18}>
                    <Switch />
                  </Col>
                </Row>
              </div>
            </div>
            <div
              style={{ display: "flex", justifyContent: "center" }}
              className={styles.FormControl}
            >
              <button style={{ width: "30%" }} className={styles.UploadButton}>
                Submit
              </button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
