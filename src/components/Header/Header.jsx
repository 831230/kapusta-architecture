import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import UserData from "../UserData/UserData.jsx";
import ExitButton from "../ExitButton/ExitButton.jsx";
import logo from "./logo.svg";
import styles from "./HeaderStyles.module.css";

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <Link to="/" className={styles.headerLogoLink}>
          <img src={logo} alt="Logo" />
        </Link>
        {isLoggedIn && (
          <div className={styles.headerUserContainer}>
            <UserData />
            <div className={styles.headerUserDivider} />
            <ExitButton />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
