import { Button, Input, Radio, Space } from "antd";
import { NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";
import AuthLayout from "../../../layouts/AuthLayout/AuthLayout";
import styles from "./login.module.css";

const Login: NextPage = () => {
  const [remember, setRemember] = useState<boolean>(false);

  const toggleRemember = () => setRemember(!remember);

  return (
    <AuthLayout>
      <div className={styles.Container}>
        <img src="/icons/logo.svg" className={styles.Logo} />
        <h1 className={styles.Header}>Hello, Ozenua 👋🏼</h1>
        <p className={styles.SubHeader}>
          Login to your account to continue using Bizz-desk
        </p>
        <div className={styles.FormControl}>
          <p className={styles.Label}>Email</p>
          <Input
            style={{ padding: 10, borderRadius: 4 }}
            placeholder="ozenua@hisemail.example"
            type="email"
          />
        </div>
        <Button
          style={{
            backgroundColor: "#2085C9",
            color: "white",
            marginTop: 15,
            padding: 10,
            height: "fit-content",
            borderRadius: 4,
          }}
          block
        >
          Login to your account
        </Button>
      </div>
    </AuthLayout>
  );
};

export default Login;
