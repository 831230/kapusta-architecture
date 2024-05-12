import { useDispatch } from "react-redux";

// REDUX ACTIONS:
import { logout } from "../../redux/user/operations";

const ExitButton = () => {
  const dispatch = useDispatch();

  return ( 
    <button type="button" onClick={() => dispatch(logout())}>Exit</button>
   );
}
 
export default ExitButton;