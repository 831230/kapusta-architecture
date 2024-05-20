import React from "react";
import leftIcon from "../../assets/arrow-left.svg"
import rightIcon from "../../assets/arrow-right.svg";
import styles from "./CurrentPeriod.module.css";

const CurrentPeriod = ({ currentPeriod, setCurrentPeriod }) => {
  const goToPreviousMonth = () => {
    setCurrentPeriod((prevPeriod) => {
      const [year, month] = prevPeriod.split("-").map(Number);
      const previousMonth = new Date(year, month - 2);
      return `${previousMonth.getFullYear()}-${String(previousMonth.getMonth() + 1).padStart(2, "0")}`;
    });
  };

  const goToNextMonth = () => {
    setCurrentPeriod((prevPeriod) => {
      const [year, month] = prevPeriod.split("-").map(Number);
      const nextMonth = new Date(year, month);
      const today = new Date();
      if (nextMonth <= new Date(today.getFullYear(), today.getMonth())) {
        return `${nextMonth.getFullYear()}-${String(nextMonth.getMonth() + 1).padStart(2, "0")}`;
      }
      return prevPeriod;
    });
  };

  const [year, month] = currentPeriod.split("-").map(Number);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthName = months[month - 1];

  return (
    <div className={styles.currentPeriodContainer}>
      <h2 className={styles.currentPeriodLabel}>Current period:</h2>
      <div className={styles.currentPeriodWrapper}>
        <button className={styles.currentPeriodButton} onClick={goToPreviousMonth}>
          <img src={leftIcon} alt="Previous month" className={styles.currentPeriodButtonIcon} />
        </button>
        <p className={styles.currentPeriodDate}>
          {monthName} {year}
        </p>
        <button className={styles.currentPeriodButton} onClick={goToNextMonth}>
          <img src={rightIcon} alt="Next month" className={styles.currentPeriodButtonIcon} />
        </button>
      </div>
    </div>
  );
};

export default CurrentPeriod;
