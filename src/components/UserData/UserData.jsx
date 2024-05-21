import React from "react";
import useAuth from "../../hooks/useAuth";
import styles from "./UserDataStyles.module.css";
import icon from '../../assets/profile_711769.svg'

const UserData = () => {
  const { userData } = useAuth();

  return (
    <div className={styles.headerUserData}>
      <img src={icon} alt="User icon" className={styles.headerUserIcon} />
      <p className={styles.headerUserName}>{userData.email ? userData.email : "Email was not found"}</p>
    </div>
  );
};

export default UserData;
