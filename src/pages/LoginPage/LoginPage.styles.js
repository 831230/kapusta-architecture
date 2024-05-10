import styled from "styled-components";

export const PairIcon = styled.div`
  position: absolute;
  left: 230px;
  top: 677px;

  @media screen and (max-width: 768px) {
    left: 103px;
    top: 826px;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const SingleIcon = styled.div`
  display: none;

  @media screen and (max-width: 480px) {
    display: block;
    position: absolute;
    left: 35px;
    top: 767px;
  }
`;

export const Logo = styled.div`
  svg {
    width: 377px;
    height: auto;

    @media screen and (max-width: 768px) {
      width: 306px;
      top: 136px;
      left: 171px;
    }

    @media screen and (max-width: 480px) {
      width: 183px;
      top: 142px;
      left: 20px;
    }
  }
`;

export const HomePageContainer = styled.div`
  height: 850px;
  width: 100%;

  @media screen and (max-width: 768px) {
    max-width: 768px;
    height: 1024px;
  }

  @media screen and (max-width: 480px) {
    height: 856px;
  }
`;

export const HomePageContent = styled.div`
  width: 958px;
  display: flex;
  align-items: center;
  gap: 155px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    gap: 80px;
    // width: 426px;
  }

  @media screen and (max-width: 480px) {
    gap: 50px;
    width: 280px;
  }
`;

export const Box = styled.div`
  position: absolute;
  left: 229px;
  top: 177px;

  @media screen and (max-width: 768px) {
    left: 171px;
    top: 136px;
  }

  @media screen and (max-width: 480px) {
    left: 20px;
    top: 142px;
  }
`;

export const LoginPageBackground = styled.div`
  padding-top: 28px;
  background: #f5f6fb;
  border-radius: 0 0 0 55px;
  height: 582.5px;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const LoginPageMobileBackground = styled.div`
  display: none;

  @media screen and (max-width: 480px) {
    display: block;
    height: 342px;
    width: 100%;
    background: #f5f6fb;
    border-radius: 0 0 0 55px;
  }
`;

export const SingleMainIcon = styled.div`
  display: none;

  @media screen and (max-width: 480px) {
    display: block;
    position: absolute;
    left: 275px;
    top: 160px;
    transform: rotate(180deg);
  }
`;
