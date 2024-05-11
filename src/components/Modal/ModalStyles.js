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
  gap: 20px;

  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
`;

export const ModalText = styled.p`
  margin: 0;
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  gap: 15px;
`;
export const ModalButton = styled.button`
  color: #52555f;
  background-color: #fff;

  border: none;
  padding: 10px;
  width: 125px;

  cursor: pointer;
  border-radius: 10px;

  &:hover {
    color: #fff;
    background-color: #ff751d;
    transition: background-color 0.3s ease;
  }
`;
export const ModalButtonText = styled.span`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.24px;
`;
