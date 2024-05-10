import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1280px;

  padding: 12px;

  @media screen and (max-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (max-width: 320px) {
    width: 320px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const HeaderLogoLink = styled(Link)`
  width: 90px;
  height: 31px;
`;

export const HeaderUserContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 320px) {
    gap: 16px;
  }
`;

export const HeaderUserDivider = styled.div`
  width: 1px;
  height: 36px;
  flex-grow: 0;
  margin: 0 19.5px;
  background-color: #e0e5eb;

  position: absolute;
  right: 25px;

  @media screen and (max-width: 320px) {
    display: none;
  }
`;

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

export const HeaderExitIcon = styled.button`
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
