import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

// HOOKS:
import useAuth from "../../hooks/useAuth";

const ProtectedRoute = ({Component, redirectTo}) => {
  const { isLoggedIn } = useAuth(); 
  return isLoggedIn ? Component : <Navigate to={redirectTo} />
};

ProtectedRoute.propTypes = {
  Component: PropTypes.object,
  redirectTo: PropTypes.string,
};
 
export default ProtectedRoute;