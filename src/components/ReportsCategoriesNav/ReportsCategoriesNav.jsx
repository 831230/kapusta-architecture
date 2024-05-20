import React from "react";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";
import styles from "./ReportsCategoriesNav.module.css";

const ReportsCategoriesNav = ({ currentView, toggleView }) => {
  return (
    <div className={styles.reportsCategoriesNavContainer}>
      <button className={styles.reportsCategoriesNavNextButton} onClick={toggleView}>
        <img src={arrowLeft} alt="Previous" />
      </button>
      <p className={styles.reportsCategoriesNavView}>{currentView === "expenses" ? "Expenses" : "Income"}</p>
      <button className={styles.reportsCategoriesNavNextButton} onClick={toggleView}>
        <img src={arrowRight} alt="Next" />
      </button>
    </div>
  );
};

export default ReportsCategoriesNav;
