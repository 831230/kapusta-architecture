// HOOKS:
import useAuth from "../../hooks/useAuth";

// COMPONENTS:
import UserData from "../UserData/UserData";
import ExitButton from "../ExitButton/ExitButton";

const Header = () => {
  const { isLoggedIn } = useAuth(); 
  return ( 
    <header>
      <div><img src="" alt="logo_kapusta" /></div>
      {isLoggedIn && <UserData/>}
      {isLoggedIn && <ExitButton/>}
      
    </header>
   );
}
 
export default Header;