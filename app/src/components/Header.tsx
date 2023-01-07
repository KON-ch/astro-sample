import styles from "/app/src/styles/header.module.css";
import type React from "react";

export const Header: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <header className={styles.header}>{children}</header>;
};
