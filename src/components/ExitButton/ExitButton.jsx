import React, { useState } from "react";
import { HeaderExitButton, HeaderExitButtonText, HeaderExitButtonMobile } from "./ExitButtonStyles";
import Modal from "../Modal/Modal";

const ExitButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLogout = () => {
    toggleModal();
  };

  return (
    <>
      <HeaderExitButton onClick={toggleModal}>
        <HeaderExitButtonText>Exit</HeaderExitButtonText>
      </HeaderExitButton>
      <HeaderExitButtonMobile>
        {/* Placeholder svg do podmianki */}
        <svg width="16" height="16">
          <rect width="16" height="16" stroke="gray" fill="gray" />
        </svg>
      </HeaderExitButtonMobile>

      <Modal modalText="Are you sure?" isOpen={isModalOpen} toggleModal={toggleModal} />
    </>
  );
};

export default ExitButton;
