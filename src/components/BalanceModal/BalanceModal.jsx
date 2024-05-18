import { useState } from "react";

//CSS 
import css from "./BalanceModal.module.css"

const BalanceModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      handleModalClose();
    }
  };

  return (
    isModalOpen && (
      <div className={css.Backdrop} onClick={handleBackdropClick}>
        <div className={css.ModalWindow}>
          <p className={css.ModalTitle}>
            Hello! To get started, enter the current balance of your account!
          </p>
          <p className={css.ModalText}>You can't spend money until you have it</p>
        </div>
      </div>
    )
  );
};
export default BalanceModal;
