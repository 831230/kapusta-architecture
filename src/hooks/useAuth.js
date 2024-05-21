import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserData, selectLoading } from "../redux/user/selectors";

const useAuth = () => {
  const userData = useSelector(selectUserData); 
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const loadingUser = useSelector(selectLoading);

  return {
    userData,
    isLoggedIn,
    loadingUser
  }
};

export default useAuth;