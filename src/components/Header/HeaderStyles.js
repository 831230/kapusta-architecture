import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;

  background-color: #fff;
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
