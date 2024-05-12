import { ModalContainer, ModalWrapper, ModalText, ModalButtonContainer, ModalButton, ModalButtonText } from "./ModalStyles";

import { useDispatch } from "react-redux";

// REDUX ACTIONS:
import { logout } from "../../redux/user/operations";

const Modal = ({ modalText, isOpen, toggleModal }) => {
  const dispatch = useDispatch();

  const handleUserLogout = () => {
    dispatch(logout());
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
