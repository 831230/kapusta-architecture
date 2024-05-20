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

//CSS
import css from "./LoginPage.module.css"

const LoginPage = () => {
  return (
    <div className={css.HomePageContainer}>
      <div className={css.LoginPageMobileBackground}>
        <div className={css.SingleMainIcon}>
          <SingleKapusta />
        </div>
      </div>
      <div className={css.LoginPageBackground}>
        <BackgroundImage style={{ width: "100%" }} />
      </div>
      <div className={css.Box}>
        <div className={css.HomePageContent}>
          <div className={css.Logo}>
            <LogoSVG />
          </div>
          <LoginForm />
        </div>
      </div>

      <div className={css.SingleIcon}>
        <SingleKapusta />
      </div>
      <div className={css.PairIcon}>
        <PairKapusta />
      </div>
    </div>
  );
};

export default LoginPage;
