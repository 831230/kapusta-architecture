import React from 'react';
import arrowLeft from "../../assets/arrowLeft.svg";
import { Link } from 'react-router-dom';
import styles from './ReturnMainPage.module.css';


const ReturnMainpage = () => {
  return (

    <Link to="/transactions/expenses" className={styles.returnLink}>
      <img src={arrowLeft} alt="Reports Icon" className={styles.returnIcon} />
      <p className={styles.returnText}>Main Page</p>
    </Link>

  );
};

export default ReturnMainpage;