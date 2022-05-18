import { Col, Row } from "antd";
import { NextPage } from "next";
import React from "react";
import Card from "../../components/Card/Card";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import styles from "./index.module.css";
import AreaChart from "../../components/Charts/AreaChart/AreaChart";
import PieChart from "../../components/Charts/PieChart/PieChart";
import { ISummaryItem } from "../../components/SummaryCard/types";
import SummaryCard from "../../components/SummaryCard/SummaryCard";

const DATA: ISummaryItem[] = [
  {
    title: "TOTAL BANKS",
    percentage: 3.5,
    totalCount: 450,
  },
  {
    title: "TOTAL TERMINALS",
    percentage: 3.1,
    totalCount: 480,
  },
  {
    title: "TOTAL ACTIVE TERMINALS",
    percentage: 3.6,
    totalCount: 460,
  },
  {
    title: "TOTAL INACTIVE TERMINALS",
    percentage: 3.5,
    totalCount: 450,
  },
  {
    title: "TOTAL USERS",
    percentage: 2.5,
    totalCount: 432,
  },
  {
    title: "TOTAL NOTIFICATION SERVICE",
    percentage: 3.6,
    totalCount: 420,
  },
  {
    title: "TOTAL MERCHANTS",
    percentage: 3.5,
    totalCount: 452,
  },
  {
    title: "TOTAL TRANSACTION",
    percentage: 3.2,
    totalCount: 3.2,
    isNaira: true,
  },
];

const DashboardHome: NextPage = () => {
  return (
    <DashboardLayout>
      <div className={styles.Container}>
        <h1 className={styles.Title}>Dashboard</h1>
        <Row wrap gutter={[20, 20]}>
          {DATA.map((summary, i) => (
            <SummaryCard
              key={i}
              title={summary.title}
              totalCount={summary.totalCount}
              isNaira={summary.isNaira}
              percentage={summary.percentage}
              xs={24}
              sm={24}
              md={12}
              lg={8}
              xl={6}
            />
          ))}
        </Row>
        <Row wrap style={{ marginTop: 24 }} gutter={[20, 20]}>
          <Col xs={24} lg={24} xl={12}>
            <Card>
              <AreaChart
                title="TRANSACTIONS"
                amount="4.23m"
                percentage={3.5}
                totalCount="22.6k"
              />
            </Card>
          </Col>
          <Col xs={24} lg={24} xl={12}>
            <Card>
              <AreaChart
                title="INCOME"
                amount="4.23m"
                percentage={3.5}
                totalCount="22.6k"
              />
            </Card>
          </Col>
        </Row>
        <Row align="stretch" style={{ marginTop: 20 }} gutter={[20, 20]}>
          <Col xs={24} md={12} lg={8}>
            <Card>
              <PieChart
                title="TRANSACTIONS"
                data={[
                  {
                    name: "Approved Transactions",
                    value: 400,
                  },
                  {
                    name: "Declined Transaction",
                    value: 300,
                  },
                ]}
                value="4.3k"
                percentage={32}
                colors={["#91EDE2", "#FF7766"]}
                caption={[
                  "204,849 declined transaction",
                  "4,343 declined transaction",
                ]}
              />
            </Card>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <Card>
              <PieChart
                title="INCOME"
                data={[
                  {
                    name: "PTSP",
                    value: 400,
                  },
                  {
                    name: "TMO",
                    value: 300,
                  },
                ]}
                value="34m"
                isNaira
                percentage={22}
                colors={["#2085C9", "#20C9B5"]}
                caption={[
                  "N34,204,343 income made by PTSP",
                  "N34,204,343 income made by TMO",
                ]}
              />
            </Card>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <Card>
              <PieChart
                title="TRANSACTIONS"
                data={[
                  {
                    name: "PTSP",
                    value: 400,
                  },
                  {
                    name: "TMO",
                    value: 300,
                  },
                ]}
                value="34m"
                isNaira
                percentage={33}
                colors={["#2085C9", "#20C9B5"]}
                caption={[
                  "N34,204,343 income made by PTSP",
                  "N34,204,343 income made by TMO",
                ]}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </DashboardLayout>
  );
};

export default DashboardHome;
