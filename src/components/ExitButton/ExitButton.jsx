import React, { useState } from "react";
import { HeaderExitButton, HeaderExitButtonText, HeaderExitButtonMobile } from "./ExitButtonStyles";
import Modal from "../Modal/Modal";

import logoutIcon from "./logout-icon.svg";

const ExitButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <HeaderExitButton onClick={toggleModal}>
        <HeaderExitButtonText>Exit</HeaderExitButtonText>
      </HeaderExitButton>

      <HeaderExitButtonMobile onClick={toggleModal}>
        <img src={logoutIcon} alt="Logout Icon" />
      </HeaderExitButtonMobile>

      <Modal modalText="Are you sure?" isOpen={isModalOpen} toggleModal={toggleModal} />
    </>
  );
};

export default ExitButton;
