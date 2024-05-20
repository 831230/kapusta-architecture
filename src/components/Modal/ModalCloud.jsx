import React from 'react';
import styles from './ModalCloud.module.css';

const ModalCloud = () => {
  return (
    <>
      <div className={styles.speechBubbleContainer}>
        <div className={styles.speechBubbleWrapper}>
          <p>Hello! To get started, enter the current balance of your account!</p>
          <p>You can't spend money until you have it :D</p>
        </div>
      </div>
    </>
  );
};

export default ModalCloud;
