import { Button, Input, Radio, Space } from "antd";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import AuthLayout from "../../../layouts/AuthLayout/AuthLayout";
import styles from "./successful.module.css";

const Successful: NextPage = () => {
  const router = useRouter();

  return (
    <AuthLayout>
      <div className={styles.Container}>
        <img src="/icons/logo.svg" className={styles.Logo} />
        <h1 className={styles.Header}>Hello John</h1>
        <p>You password has been created</p>
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
          onClick={() => router.push("/auth/login")}
        >
          Login to your account
        </Button>
      </div>
    </AuthLayout>
  );
};

export default Successful;
