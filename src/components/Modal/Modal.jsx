import { ModalContainer, ModalWrapper, ModalText, ModalButtonContainer, ModalButton } from "./ModalStyles";
import useAuth from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { getUserData } from "../../redux/user/operations";

const Modal = ({ modalText }) => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  const handleUserLogout = () => {
    dispatch(getUserData.pending());
  };

  console.log(isLoggedIn, "Modal");
  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalText>{modalText}</ModalText>

        <ModalButtonContainer>
          <ModalButton onClick={handleUserLogout}>Yes</ModalButton>
          <ModalButton>No</ModalButton>
        </ModalButtonContainer>
      </ModalWrapper>
    </ModalContainer>
  );
};

export default Modal;
