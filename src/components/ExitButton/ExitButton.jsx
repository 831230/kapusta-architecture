import React, { useState } from "react";
import LogoutModal from "../LogoutModal/LogoutModal";
import logoutIcon from "../../assets/logout-icon.svg";
import styles from "./ExitButtonStyles.module.css";

const ExitButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <button className={styles.headerExitButton} onClick={toggleModal}>
        <p className={styles.headerExitButtonText}>Exit</p>
      </button>

      <button className={styles.headerExitButtonMobile} onClick={toggleModal}>
        <img src={logoutIcon} alt="Logout Icon" />
      </button>

      <LogoutModal modalText="Are you sure?" isOpen={isModalOpen} toggleModal={toggleModal} />
    </>
  );
};

export default ExitButton;
