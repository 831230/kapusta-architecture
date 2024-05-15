import styled, { css } from "styled-components";

const MediaMinWidth481px = css`
  @media screen and (min-width: 481px) {
    display: none;
  }
`;

export const PairIcon = styled.div`
  display: none;

  @media screen and (min-width: 481px) {
    display: block;
    position: absolute;
    left: 103px;
    top: 826px;
  }

  @media screen and (min-width: 1025px) {
    left: 230px;
    top: 677px;
  }
`;

export const SingleIcon = styled.div`
  display: block;
  position: absolute;
  left: 35px;
  top: 767px;

  ${MediaMinWidth481px}
`;

export const Logo = styled.div`
  svg {
    width: 183px;
    // height: auto;

    @media screen and (min-width: 481px) {
      width: 306px;
    }

    @media screen and (min-width: 1025px) {
      width: 377px;
    }
  }
`;

export const HomePageContainer = styled.div`
  width: 100%;
  height: 856px;
`;

export const HomePageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media screen and (min-width: 481px) {
    align-items: start;
    gap: 80px;
  }

  @media screen and (min-width: 1025px) {
    flex-direction: row;
    align-items: center;
    gap: 155px;
  }
`;

export const Box = styled.div`
  position: absolute;
  top: 142px;
  left: 50%;
  transform: translate(-50%);
  z-index: 2;

  @media screen and (min-width: 768px) {
    top: 136px;
  }

  @media screen and (min-width: 1025px) {
    top: 177px;
  }
`;

export const LoginPageBackground = styled.div`
  display: none;

  @media screen and (min-width: 481px) {
    display: block;
    padding-top: 28px;
    background: var(--secondary-bg-color);
    border-radius: 0 0 0 55px;
    height: 582.5px;
  }
`;
export const LoginPageMobileBackground = styled.div`
  display: block;
  height: 342px;
  width: 100%;
  background: var(--secondary-bg-color);
  border-radius: 0 0 0 55px;

  ${MediaMinWidth481px}
`;

export const SingleMainIcon = styled.div`
  display: block;
  position: absolute;
  left: 275px;
  top: 160px;
  transform: rotate(180deg);

  ${MediaMinWidth481px}
`;
