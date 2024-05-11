import styled from "styled-components";

export const HeaderExitButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  font-size: 12px;
  letter-spacing: 0.48px;

  color: #52555f;
  cursor: pointer;
  border-bottom: 1px solid #52555f;

  @media screen and (max-width: 320px) {
    display: none;
  }
`;
