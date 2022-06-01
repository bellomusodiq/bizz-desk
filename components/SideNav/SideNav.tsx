import { Divider } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./SideNav.module.css";
import { ISideNav, LinkItemProps } from "./types";

const LinkItem: React.FC<LinkItemProps> = ({
  path,
  title,
  onClick,
  icon,
  active,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return path ? (
    <Link href={path}>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={styles.LinkItem}
        style={{ background: isHover || active ? "#E9F3FA" : "transparent" }}
      >
        {icon && (
          <img
            src={`/icons/${isHover || active ? icon + "-hilight" : icon}.svg`}
            alt={title}
            className={styles.Icon}
          />
        )}
        <span
          className={styles.Title}
          style={{ color: isHover || active ? "#2085C9" : "#556977" }}
        >
          {title}
        </span>
      </div>
    </Link>
  ) : (
    <button
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={styles.Button}
      onClick={onClick}
      style={{ background: isHover || active ? "#E9F3FA" : "transparent" }}
    >
      <img
        src={`/icons/${isHover || active ? icon + "-hilight" : icon}.svg`}
        alt={title}
        className={styles.Icon}
      />
      <span
        className={styles.Title}
        style={{ color: isHover || active ? "#2085C9" : "#556977" }}
      >
        {title}
      </span>
    </button>
  );
};

const SideNav: React.FC<ISideNav> = ({ show, closeSideNav }) => {
  const router = useRouter();

  const LINKS = (
    <>
      <LinkItem
        title="Dashboard"
        icon="dashboard"
        path="/dashboard"
        active={"/dashboard" === router.pathname}
      />
      <Divider />
      <LinkItem
        title="Requests"
        icon="message-question"
        path="/dashboard/requests"
        active={"/dashboard/requests" === router.pathname}
      />
      <LinkItem
        title="Users"
        icon="profile-circle"
        path="/dashboard/users"
        active={"/dashboard/users" === router.pathname}
      />
      <LinkItem
        title="Merchants"
        icon="shop"
        path="/dashboard/merchants"
        active={"/dashboard/merchants" === router.pathname}
      />
      <LinkItem
        title="Banks"
        icon="bank"
        path="/dashboard/banks"
        active={"/dashboard/banks" === router.pathname}
      />
      <LinkItem
        title="Terminals"
        icon="card-pos"
        path="/dashboard/terminals"
        active={"/dashboard/terminals" === router.pathname}
      />
      <LinkItem
        title="Notification Services"
        icon="notification"
        path="/dashboard/notifications"
        active={"/dashboard/notifications" === router.pathname}
      />
      <LinkItem
        title="NIPS Settlement"
        icon="transaction-minus"
        path="/dashboard/nips-settlement"
        active={"/dashboard/nips-settlement" === router.pathname}
      />
      <LinkItem
        title="Reversal"
        icon="back-square"
        path="/dashboard/reversal"
        active={"/dashboard/reversal" === router.pathname}
      />
      <LinkItem
        title="Chargeback"
        icon="money-change"
        path="/dashboard/chargeback"
        active={"/dashboard/chargeback" === router.pathname}
      />
      <LinkItem
        title="POS Transactions"
        icon="card-pos"
        path="/dashboard/transactions"
        active={"/dashboard/transactions" === router.pathname}
      />
      <LinkItem
        title="Merchant Support"
        icon="money-change"
        path="/dashboard/merchant-support"
        active={"/dashboard/merchant-support" === router.pathname}
      />
      <Divider />
      <LinkItem
        title="Settings"
        icon="setting"
        path="/dashboard/settings"
        active={"/dashboard/settings" === router.pathname}
      />
      <LinkItem
        title="Audit Log"
        path="/dashboard/audit-log"
        active={"/dashboard/audit-log" === router.pathname}
      />
      <LinkItem title="Logout" icon="logout" onClick={() => {}} />
    </>
  );

  return (
    <>
      {show && (
        <div
          style={{ display: show ? "block" : "none" }}
          onClick={closeSideNav}
          className={styles.Backdrop}
        />
      )}
      <div className={styles.SideNav}>{LINKS}</div>
      <div
        style={{ transform: show ? "translateX(0)" : "translateX(-100vw)" }}
        className={styles.SideNavMobile}
      >
        {LINKS}
      </div>
    </>
  );
};

export default SideNav;
