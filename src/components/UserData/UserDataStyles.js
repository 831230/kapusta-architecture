import styled from "styled-components";

export const HeaderUserData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  @media screen and (max-width: 768px) {
    gap: 16px;
  }
`;
export const HeaderUserIcon = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const HeaderUserName = styled.p`
  margin: 0;
  font-size: 12px;
  letter-spacing: 0.48px;
  @media screen and (max-width: 320px) {
    display: none;
  }
`;
