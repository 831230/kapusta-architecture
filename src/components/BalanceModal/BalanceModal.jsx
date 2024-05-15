import {
  ModalWindow,
  Backdrop,
  ModalText,
  ModalTitle,
} from "./BalanceModalStyles";

import { useEffect, useState } from "react";

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
      <Backdrop onClick={handleBackdropClick}>
        <ModalWindow>
          <ModalTitle>
            Hello! To get started, enter the current balance of your account!
          </ModalTitle>
          <ModalText>You can't spend money until you have it</ModalText>
        </ModalWindow>
      </Backdrop>
    )
  );
};
export default BalanceModal;
