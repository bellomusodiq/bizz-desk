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
        <h1 className={styles.Header}>Login to your dashboard</h1>
        <div className={styles.FormControl}>
          <p className={styles.Label}>Email</p>
          <Input
            style={{ padding: 10, borderRadius: 4 }}
            placeholder="ozenua@hisemail.example"
            type="email"
          />
        </div>
        <div className={styles.FormControl}>
          <p className={styles.Label}>Password</p>
          <Input.Password
            style={{ padding: 10, borderRadius: 4 }}
            type="email"
            placeholder="******************"
          />
        </div>
        <div className={styles.RememberContainer}>
          <div className={styles.Radio}>
            <Radio
              checked={remember}
              onClick={toggleRemember}
              style={{ color: "#191716", fontSize: 13 }}
            >
              Remember me
            </Radio>
          </div>
          <div className={styles.Link}>
            <Link href="/">Forgotten password</Link>
          </div>
        </div>
        <Button
          style={{
            backgroundColor: "#2085C9",
            color: "white",
            marginTop: 35,
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
