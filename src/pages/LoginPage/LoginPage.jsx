// const LoginPage = () => {
//   return (
//     <>
//       <div className="login-page-container">
//         <div>
//           <img src="" alt="kapusta-smart-finance-theme" />
//         </div>
//         <div>
//           <form action="" className="login-form">
//             <input type="text" />
//             <input type="text" />
//             <button>Login</button>
//             <button>Register</button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LoginPage;

import {
  Box,
  HomePageContainer,
  HomePageContent,
  LoginPageBackground,
  LoginPageMobileBackground,
  Logo,
  PairIcon,
  SingleIcon,
  SingleMainIcon,
} from "./LoginPage.styles";
import LoginForm from "../../components/LoginForm/LoginForm";
import { ReactComponent as LogoSVG } from "./Logo.svg";
import { ReactComponent as BackgroundImage } from "./Background.svg";
import { ReactComponent as PairKapusta } from "./SmallBackground.svg";
import { ReactComponent as SingleKapusta } from "./singleKapusta.svg";

const LoginPage = () => {
  return (
    <HomePageContainer>
      <LoginPageMobileBackground>
        <SingleMainIcon>
          <SingleKapusta />
        </SingleMainIcon>
      </LoginPageMobileBackground>
      <LoginPageBackground>
        <BackgroundImage />
      </LoginPageBackground>
      <Box>
        <HomePageContent>
          <Logo>
            <LogoSVG />
          </Logo>
          <LoginForm />
        </HomePageContent>
      </Box>

      <SingleIcon>
        <SingleKapusta />
      </SingleIcon>
      <PairIcon>
        <PairKapusta />
      </PairIcon>
    </HomePageContainer>
  );
};

export default LoginPage;
