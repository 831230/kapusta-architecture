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
import { ReactComponent as LogoSVG } from "../../assets/Logo.svg";
import { ReactComponent as BackgroundImage } from "../../assets/Background.svg";
import { ReactComponent as PairKapusta } from "../../assets/SmallBackground.svg";
import { ReactComponent as SingleKapusta } from "../../assets/singleKapusta.svg";

const LoginPage = () => {
  return (
    <HomePageContainer>
      <LoginPageMobileBackground>
        <SingleMainIcon>
          <SingleKapusta />
        </SingleMainIcon>
      </LoginPageMobileBackground>
      <LoginPageBackground>
        <BackgroundImage style={{ width: "100%" }} />
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
