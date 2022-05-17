import { Col, Row } from "antd";
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import styles from "./DashboardLayout.module.css";

const DashboardLayout: React.FC<any> = ({ children }) => {
  const [showSizeNav, setShowSideNav] = useState<boolean>(false);

  return (
    <div className={styles.Container}>
      <Header onMenuClick={() => setShowSideNav(true)} />
      <Row className={styles.Main} justify="space-between" gutter={1}>
        <Col lg={4}>
          <SideNav
            show={showSizeNav}
            closeSideNav={() => setShowSideNav(false)}
          />
        </Col>
        <Col lg={20}>{children}</Col>
      </Row>
    </div>
  );
};

export default DashboardLayout;
