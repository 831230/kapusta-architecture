import { ModalContainer, ModalWrapper, ModalText, ModalButtonContainer, ModalButton } from "./ModalStyles";

const Modal = ({ text }) => {
  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalText>{text}</ModalText>

        <ModalButtonContainer>
          <ModalButton>Yes</ModalButton>
          <ModalButton>No</ModalButton>
        </ModalButtonContainer>
      </ModalWrapper>
    </ModalContainer>
  );
};

export default Modal;
