import React from "react";
import styles from "./Card.module.css";

const Card: React.FC<any> = ({ children }) => (
  <div className={styles.Card}>{children}</div>
);

export default Card;
