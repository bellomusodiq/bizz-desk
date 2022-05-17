import { Col, Row } from "antd";
import React from "react";
import styles from "./AuthLayout.module.css";

const AuthLayout: React.FC<any> = ({ children }) => (
  <div className={styles.Container}>
    <Row justify="center">
      <Col lg={8} xl={6} md={10} xs={22}>
        {children}
      </Col>
    </Row>
  </div>
);

export default AuthLayout;
