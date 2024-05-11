import UserData from "../UserData/UserData.jsx";
import { HeaderContainer, HeaderWrapper, HeaderLogoLink, HeaderUserContainer, HeaderUserDivider } from "./HeaderStyles.js";

import useAuth from "../../hooks/useAuth";
import ExitButton from "../ExitButton/ExitButton.jsx";
import Modal from "../Modal/Modal.jsx";

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <HeaderContainer>
        <HeaderWrapper>
          {/* Placeholder svg do podmianki */}
          <HeaderLogoLink>
            <svg width="90" height="31">
              <rect width="90" height="31" stroke="orange" fill="orange" />
            </svg>
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

      <Modal text={"Are You sure?"} />
    </>
  );
};

export default Header;
