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
        <h1 className={styles.Header}>Recover your account</h1>
        <div className={styles.FormControl}>
          <p className={styles.Label}>Email</p>
          <Input style={{ padding: 10, borderRadius: 4 }} type="email" />
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
          onClick={() => router.push("/auth/new-password")}
        >
          Send recovery link
        </Button>
      </div>
    </AuthLayout>
  );
};

export default Login;
