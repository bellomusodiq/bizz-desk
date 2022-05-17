import { DownOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";
import styles from "./Header.module.css";
import { IHeader } from "./types";

const Header: React.FC<IHeader> = ({ onMenuClick }) => {
  return (
    <div className={styles.Header}>
      <button onClick={onMenuClick} className={styles.Menu}>
        <MenuOutlined color="white" size={38} />
      </button>
      <img src="/icons/logo.svg" alt="logo" className={styles.Logo} />
      <div className={styles.Right}>
        <span className={styles.UserType}>Super Admin</span>
        <Avatar icon={<UserOutlined />} size={36} />
        <div className={styles.DownOutlined}>
          <DownOutlined color="black" />
        </div>
      </div>
    </div>
  );
};

export default Header;
