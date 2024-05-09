// HOOKS:
import useAuth from "../../hooks/useAuth";

// COMPONENTS:
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import UserData from "../UserData/UserData";
import ExitButton from "../ExitButton/ExitButton";

const Header = () => {
  const { isLoggedIn } = useAuth(); 
  return ( 
    <header>
      <div><img src="" alt="logo_kapusta" /></div>
      <ToggleTheme />
      {isLoggedIn && <UserData/>}
      {isLoggedIn && <ExitButton/>}
      
    </header>
   );
}
 
export default Header;