import styled from "styled-components";

const BaseTextStyles = `
  font-family: var(--primary-font);
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.04em;
`;

export const LoginFormContainer = styled.div`
  display: flex;
  z-index: 100;
  align-items: center;
  max-height: 552px;
  max-width: 426px;
  border-radius: 30px;
  box-shadow: rgba(170, 178, 197, 0.2) 0px 10px 60px 0px;
  background: rgb(255, 255, 255);
  border-radius: 30px;
  fill: var(--text-white);
  box-shadow: var(--box-shadow-form);

  @media screen and (max-width: 480px) {
    max-width: 280px;
    max-height: 496px;
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

  ${BaseTextStyles}
  width: 259px;
  height: 440px;

  @media screen and (max-width: 480px) {
    padding: 20px 10px;
    width: 240px;
    height: 416px;
  }
`;

export const LoginFirstParagraph = styled.div`
  ${BaseTextStyles}
  text-align: center;

  @media screen and (max-width: 480px) {
    width: 220px;
  }
`;

export const LoginSecondParagraph = styled.div`
  ${BaseTextStyles}
  width: 258px;

  @media screen and (max-width: 480px) {
    width: 240px;
  }
`;

export const ButtonBaseStyles = `
  border-radius: 16px;
  font-family: var(--primary-font);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-align: center;
`;

export const ButtonGoogle = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 26px;
  width: 119px;
  height: 40px;
  background: var(--secondary-bg-color);
  color: var(--text-black);
  box-shadow: 1px 2px 3px 0 rgba(170, 178, 197, 0.2);

  ${ButtonBaseStyles}
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
  ${BaseTextStyles}
  margin-bottom: 12px;
  text-align: start;
  display: flex;
  align-items: flex-end;
`;

export const InputField = styled.input`
  border-radius: 30px;
  border: 0px;
  padding: 17px 19px;
  background: var(--secondary-bg-color);
  font-family: var(--primary-font);
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.04em;
  color: #a6abb9;
`;

export const InputValidation = styled.span`
  ${BaseTextStyles}
  text-align: start;
  font-size: 10px;
  color: var(--text-red);
  margin-top: 4px;
  margin-bottom: -12px;
`;

export const GroupButton = styled.div`
  margin-top: 8px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ButtonLogin = styled.button`
  ${ButtonBaseStyles}
  border: none;
  width: 122px;
  height: 44px;
  background: var(--text-orange);
  box-shadow: 1px 3px 5px 0 rgba(255, 107, 8, 0.35);

  @media screen and (max-width: 480px) {
    width: 116px;
  }
`;

export const ButtonSignup = styled.button`
  ${ButtonBaseStyles}
  background: var(--secondary-bg-color);
  border: none;
  width: 122px;
  height: 44px;
  box-shadow: 1px 3px 5px 0 rgba(82, 85, 95, 0.15);

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
