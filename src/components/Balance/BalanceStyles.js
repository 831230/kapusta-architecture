import styled from "styled-components";

export const BalanceForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background-color: #f2f5fc;
  margin-bottom: 20px;
`;

export const BalanceLabel = styled.label`
  font-family: "Roboto", sans-serif;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  color: rgba(82, 85, 95, 0.7);
`;

export const BalanceInput = styled.input`
  font-family: "roboto" sans-serif;
  text-align: center;
  width: 125px;
  height: 40px;
  padding: 0px;
  font-size: 12px;
  letter-spacing: 0.02em;
  font-weight: 700;
  line-height: 1.17;
  text-align: right;
  border-radius: 16px;
  border: 2px solid #ffffff;
  background-color: #f2f5fc;

  &::placeholder {
    color: #000;
    letter-spacing: 0.02em;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.17;
  }
`;

export const BalanceButton = styled.button`
  font-family: "roboto" sans-serif;
  width: 125px;
  height: 44px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  border-radius: 16px;
  border: 2px solid #ffffff;
  background-color: #f2f5fc;
  color: rgba(82, 85, 95, 0.7);
  padding: 0px;
`;
