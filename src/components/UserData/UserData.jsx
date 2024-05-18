import React from "react";
import useAuth from "../../hooks/useAuth";
import styles from "./UserDataStyles.module.css";

const UserData = () => {
  const { userData } = useAuth();

  return (
    <div className={styles.headerUserData}>
      <img src="https://placehold.co/32x32" alt="User icon" className={styles.headerUserIcon} />
      <p className={styles.headerUserName}>{userData.email ? userData.email : "Email was not found"}</p>
    </div>
  );
};

export default UserData;
