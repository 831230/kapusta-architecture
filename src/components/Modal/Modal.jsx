import React from "react";
import { ModalContainer, ModalWrapper, ModalText, ModalButtonContainer, ModalButton, ModalButtonText } from "./ModalStyles";
import useAuth from "../../hooks/useAuth";

const Modal = ({ modalText, isOpen, toggleModal }) => {
  const handleUserLogout = () => {
    toggleModal();
  };

  return (
    isOpen && (
      <ModalContainer>
        <ModalWrapper>
          <ModalText>{modalText}</ModalText>

          <ModalButtonContainer>
            <ModalButton onClick={handleUserLogout}>
              <ModalButtonText>Yes</ModalButtonText>
            </ModalButton>
            <ModalButton onClick={toggleModal}>
              <ModalButtonText>No</ModalButtonText>
            </ModalButton>
          </ModalButtonContainer>
        </ModalWrapper>
      </ModalContainer>
    )
  );
};

export default Modal;
