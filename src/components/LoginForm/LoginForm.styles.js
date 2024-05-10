import styled from "styled-components";

export const LoginFormContainer = styled.div`
  display: flex;
  z-index: 100;
  align-items: center
  max-height: 552px;
  max-width: 426px;
  border-radius: 30px;
  box-shadow: rgba(170, 178, 197, 0.2) 0px 10px 60px 0px;
  background: rgb(255, 255, 255);
  border-radius: 30px;
fill: #fff;
box-shadow: 0 10px 60px 0 rgba(170, 178, 197, 0.2);



 @media screen and (max-width: 480px) {
  max-width: 280px;
max- height: 496px;
 }
`;

export const LoginFormWrapper = styled.div`
  padding: 56px 83.5px;
  width: 259px;
  height: 440px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 480px) {
    padding: 20px 10px;
    width: 240px;
    height: 416px;
  }
`;

export const LoginFirstParagraph = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: #52555f;
  text-align: center;

  @media screen and (max-width: 480px) {
    width: 220px;
  }
`;

export const LoginSecondParagraph = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: #52555f;
  width: 258px;

  @media screen and (max-width: 480px) {
    width: 240px;
  }
`;

export const ButtonGoogle = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 26px;
  width: 119px;
  height: 40px;
  background: #f6f7fb;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #000;
  box-shadow: 1px 2px 3px 0 rgba(170, 178, 197, 0.2);
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 258px;

  @media screen and (max-width: 480px) {
    width: 240px;
  }
`;

export const Label = styled.label`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: #000;
  margin-bottom: 12px;
  text-align: start;

  &:before {
    content: "*";
    color: ${({ required, formSubmitted, value }) =>
      required && formSubmitted && !value ? "red" : "transparent"};
    display: ${({ formSubmitted }) => (formSubmitted ? "none" : "inline")};
  }
`;

export const InputField = styled.input`
  border-radius: 30px;
  border: 0px;
  padding: 17px 19px;

  background: #f6f7fb;

  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.04em;
  color: #a6abb9;
`;

export const InputValidation = styled.p`
  text-align: start;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 10px;
  letter-spacing: 0.04em;
  color: #eb5757;
  margin-top: 4px;
`;

export const GroupButton = styled.div`
  margin-top: 8px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ButtonLogin = styled.button`
  border-radius: 16px;
  border: none;
  width: 122px;
  height: 44px;
  background: #ff751d;
  box-shadow: 1px 3px 5px 0 rgba(255, 107, 8, 0.35);
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-align: center;
  color: #fff;

  @media screen and (max-width: 480px) {
    width: 116px;
  }
`;
export const ButtonSignup = styled.button`
  background: #f5f6fb;
  border: none;
  border-radius: 16px;
  width: 122px;
  height: 44px;
  box-shadow: 1px 3px 5px 0 rgba(82, 85, 95, 0.15);
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-align: center;
  color: #52555f;

  @media screen and (max-width: 480px) {
    width: 116px;
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 32px;
  flex-direction: column;
  align-items: start;

  @media screen and (max-width: 480px) {
    gap: 20px;
  }
`;