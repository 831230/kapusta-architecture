import {
  LoginFormContainer,
  LoginFormWrapper,
  ButtonGoogle,
  InputContainer,
  Label,
  InputField,
  GroupButton,
  ButtonLogin,
  ButtonSignup,
  LoginSecondParagraph,
  LoginFirstParagraph,
  InputValidation,
  Form,
} from "./LoginForm.styles";
import { ReactComponent as GoogleIcon } from "../../assets/Google.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, register } from "../../redux/user/operations";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    star: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "This is a required field";
      newErrors.star = "*";
    }
    if (!formData.password) {
      newErrors.password = "This is a required field";
      newErrors.star = "*  ";
    }
    setErrors(newErrors);

    if (
      Object.keys(newErrors).length === 0 ||
      !formData.email ||
      !formData.password
    ) {
      setFormData({ email: "", password: "" });
    }
  };

  const onLogin = (e) => {
    handleSubmit(e);
    dispatch(login(formData));
  };

  const onSignup = (e) => {
    handleSubmit(e);
    dispatch(register(formData));
  };

  return (
    <LoginFormContainer>
      <LoginFormWrapper>
        <LoginFirstParagraph>
          You can log in with your Google Account:
        </LoginFirstParagraph>
        <ButtonGoogle>
          <GoogleIcon />
          Google
        </ButtonGoogle>
        <LoginSecondParagraph>
          Or log in using an email and password,
          <br /> after registering:
        </LoginSecondParagraph>

        <Form>
          <InputContainer>
            <Label
              required
              // formSubmitted={formSubmitted}
              value={formData.email}
            >
              {errors.email && (
                <InputValidation style={{ margin: "0" }}>
                  {errors.star}
                </InputValidation>
              )}
              Email
            </Label>

            <InputField
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
            />
            {errors.email && <InputValidation>{errors.email}</InputValidation>}
          </InputContainer>

          <InputContainer>
            <Label
              required
              // formSubmitted={formSubmitted}
              value={formData.password}
            >
              {errors.password && (
                <InputValidation style={{ margin: "0" }}>
                  {errors.star}
                </InputValidation>
              )}
              Password
            </Label>

            <InputField
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="your password"
            />
            {errors.password && (
              <InputValidation>{errors.password}</InputValidation>
            )}
          </InputContainer>

          <GroupButton>
            <ButtonLogin type="submit" onClick={onLogin}>
              Log in
            </ButtonLogin>
            <ButtonSignup type="submit" onClick={onSignup}>
              Registration
            </ButtonSignup>
          </GroupButton>
        </Form>
      </LoginFormWrapper>
    </LoginFormContainer>
  );
};

export default LoginForm;
