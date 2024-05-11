import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserData, selectLoading } from "../redux/user/selectors";

const useAuth = () => {
  const userData = useSelector(selectUserData); 
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const loading = useSelector(selectLoading);

  return {
    userData,
    isLoggedIn,
    loading
  }
};

export default useAuth;