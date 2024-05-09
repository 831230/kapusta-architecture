import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserData } from "../redux/user/selectors";

const useAuth = () => {
  const userData = useSelector(selectUserData);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return {
    userData,
    isLoggedIn
  }
};

export default useAuth;