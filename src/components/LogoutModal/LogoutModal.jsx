import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/user/operations";
import styles from "./LogoutModalStyles.module.css";

const LogoutModal = ({ modalText, isOpen, toggleModal }) => {
  const dispatch = useDispatch();

  const handleUserLogout = () => {
    dispatch(logout());
    toggleModal();
  };

  return (
    isOpen && (
      <div className={styles.logoutModalContainer}>
        <div className={styles.logoutModalWrapper}>
          <p className={styles.logoutModalText}>{modalText}</p>
          <div className={styles.logoutModalButtonContainer}>
            <button className={styles.logoutModalButton} onClick={handleUserLogout}>
              <span className={styles.logoutModalButtonText}>Yes</span>
            </button>
            <button className={styles.logoutModalButton} onClick={toggleModal}>
              <span className={styles.logoutModalButtonText}>No</span>
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default LogoutModal;
