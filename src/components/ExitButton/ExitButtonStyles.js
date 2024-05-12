import styled from "styled-components";

export const HeaderExitButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;

  cursor: pointer;

  @media screen and (max-width: 320px) {
    display: none;
  }
`;

export const HeaderExitButtonText = styled.p`
  color: #52555f;

  font-size: 12px;
  letter-spacing: 0.48px;

  border-bottom: 1px solid #52555f;
`;

export const HeaderExitButtonMobile = styled.button`
  display: none;
  border: none;
  background: none;
  padding: 0;
  margin: 0;

  width: 16px;
  height: 16px;

  @media screen and (max-width: 320px) {
    display: block;
  }
`;
