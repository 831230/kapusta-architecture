import styled from "styled-components";

export const SpeechBubbleContainer = styled.div`
  position: relative;
  

  color: #000;
  background: #1D346A;
  // background: linear-gradient(155deg, #1d346a 0%, #031634 100%);
  //   box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
 background-image: linear-gradient(to bottom right, #1D346A, #031634);


  border-radius: 30px;
width: 288px;
height: 152px;
  

  :after {
        content: "";
    position: absolute;
      border-style: solid;
     display: block;
    width: 0;
    top: -15px;
    right: 210px;
    bottom: auto;
    left: auto;
    border-width: 0 15px 15px;
    border-color: #1D346A transparent;
}
  }
`;

export const SpeechBubbleWrapper = styled.div`
  padding: 30px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;

  line-height: 20px;
  line-height: 1.42857;
  color: #fff;

  & > :first-child {
    margin: 0;
    margin-bottom: 20px;
  }

  & > :last-child {
    font-weight: 350;
    font-size: 12px;
    line-height: 16px;
    line-height: 1.33333;
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  width: fit-content;
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

  @media screen and (max-width: 768px) {
    right: 50%;
    top: 30%;
    transform: translate(50%, -50%);
  }
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
