import { Button, Input, Radio, Space } from "antd";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import AuthLayout from "../../../layouts/AuthLayout/AuthLayout";
import styles from "./login.module.css";

const Login: NextPage = () => {
  const [remember, setRemember] = useState<boolean>(false);

  const toggleRemember = () => setRemember(!remember);

  const router = useRouter();

  return (
    <AuthLayout>
      <div className={styles.Container}>
        <img src="/icons/logo.svg" className={styles.Logo} />
        <h1 className={styles.Header}>Create new password</h1>
        <div className={styles.FormControl}>
          <p className={styles.Label}>Enter new password</p>
          <Input.Password style={{ padding: 10, borderRadius: 4 }} />
        </div>
        <div className={styles.FormControl}>
          <p className={styles.Label}>Confirm new password</p>
          <Input.Password
            style={{ padding: 10, borderRadius: 4 }}
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
          onClick={() => router.push("/auth/successful")}
        >
          Create new password
        </Button>
      </div>
    </AuthLayout>
  );
};

export default Login;
