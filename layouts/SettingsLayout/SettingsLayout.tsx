import { Col, Row } from "antd";
import React, { useState } from "react";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import styles from "./SettingsLayout.module.css";
import { ISettingsItem, ISettingsLayout } from "./types";

const SettingsItem: React.FC<ISettingsItem> = ({
  title,
  icon,
  active,
  onClick,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const navigate = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick();
  };
  return (
    <a
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={active ? styles.SettingsItemActive : styles.SettingsItem}
      onClick={navigate}
    >
      {icon && (
        <img
          src={`/icons/${icon}${active || isHover ? "-hilight" : ""}.svg`}
          alt={title}
          className={styles.Icon}
        />
      )}
      <span>{title}</span>
    </a>
  );
};

const SettingsLayout: React.FC<ISettingsLayout> = ({
  children,
  current,
  setCurrent,
}) => {
  const SIDE_NAV = [
    {
      title: "Merchant Band",
      icon: "category",
      key: "merchant-band",
    },
    {
      title: "Roles and Permission",
      icon: "shield",
      key: "roles",
    },
    {
      title: "Bank Profile",
      icon: "bank2",
      key: "bank",
    },
    {
      title: "Acquiring Institution",
      icon: "buildings",
      key: "acquiring-institution",
    },
    {
      title: "Communication",
      icon: "call",
      key: "communication",
    },
    {
      title: "Reciept",
      icon: "receipt",
      key: "receipt",
    },
    {
      title: "Call Home",
      icon: "call-add",
      key: "call",
    },
    {
      title: "Host",
      icon: "user-circle-add",
      key: "host",
    },
    {
      title: "Card",
      icon: "card2",
      key: "card",
    },
    {
      title: "Currency",
      icon: "dollar-circle",
      key: "currency",
    },
    {
      title: "Transactions",
      icon: "transaction-minus2",
      key: "transactions",
    },
  ];
  return (
    <DashboardLayout>
      <Row gutter={20}>
        <Col md={6}>
          <nav className={styles.SettingsNav}>
            {SIDE_NAV.map((item) => (
              <SettingsItem
                icon={item.icon}
                key={item.key}
                title={item.title}
                active={Boolean(current === item.key)}
                onClick={() => setCurrent(item.key)}
              />
            ))}
          </nav>
        </Col>
        <Col md={18}>{children}</Col>
      </Row>
    </DashboardLayout>
  );
};

export default SettingsLayout;
