import { Link } from "react-router-dom";

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
      <Link to="/"><img src="" alt="logo_kapusta" /></Link>
      <ToggleTheme />
      <div className="header-user-space">
        {isLoggedIn && <UserData/>}
        {isLoggedIn && <ExitButton/>}
      </div>
      
      
    </header>
   );
}
 
export default Header;