import { NextPage } from "next";
import React from "react";
import TerminalStock from "../../../../components/TerminalStock/TerminalStock";
import DashboardLayout from "../../../../layouts/DashboardLayout/DashboardLayout";
import styles from "./batch.module.css";

const Batch: NextPage = () => {
  return (
    <DashboardLayout>
      <TerminalStock isBatch />
    </DashboardLayout>
  );
};

export default Batch;
