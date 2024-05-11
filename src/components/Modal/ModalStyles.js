import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;

  right: 0;
  top: 0;

  background-color: rgba(0, 0, 0, 0.5);

  width: 100%;
  height: 100%;
  z-index: 999;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 50px;

  border-radius: 30px;

  z-index: 9999;

  width: 380px;
  height: 194px;
  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ModalText = styled.p``;

export const ModalButtonContainer = styled.div`
  display: flex;
`;
export const ModalButton = styled.button``;
