import { HeaderUserData, HeaderUserIcon, HeaderUserName } from "./UserDataStyles";
import useAuth from "../../hooks/useAuth";

const UserData = () => {
  const { userData } = useAuth();

  return (
    <HeaderUserData>
      {/* Placeholder img do podmianki z db*/}
      <HeaderUserIcon src="https://placehold.co/32x32" alt="User icon" />
      <HeaderUserName>{userData.email ? userData.email : "User Email"}</HeaderUserName>
    </HeaderUserData>
  );
};

export default UserData;
