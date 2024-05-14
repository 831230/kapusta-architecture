import UserData from "../UserData/UserData.jsx";
import { HeaderContainer, HeaderWrapper, HeaderLogoLink, HeaderUserContainer, HeaderUserDivider } from "./HeaderStyles.js";

import useAuth from "../../hooks/useAuth";
import ExitButton from "../ExitButton/ExitButton.jsx";

import logo from "./logo.svg";

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <HeaderContainer>
        <HeaderWrapper>
          <HeaderLogoLink to="/">
            <img src={logo} alt="Logo" />
          </HeaderLogoLink>
          {isLoggedIn && (
            <HeaderUserContainer>
              <UserData />
              <HeaderUserDivider />
              <ExitButton></ExitButton>
            </HeaderUserContainer>
          )}
        </HeaderWrapper>
      </HeaderContainer>
    </>
  );
};

export default Header;
