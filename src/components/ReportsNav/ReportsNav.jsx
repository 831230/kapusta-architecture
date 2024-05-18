import React from "react";
import { Link } from "react-router-dom";
import reportsLogo from "./reportsLogo.svg";
import styles from "./ReportsNavStyles.module.css";

const ReportsNav = () => {
  return (
    <Link to="/reports" className={styles.reportsNavLink}>
      <p className={styles.reportsNavText}>Reports</p>
      <img src={reportsLogo} alt="Reports Icon" className={styles.reportsNavIcon} />
    </Link>
  );
};

export default ReportsNav;
