import { useState } from "react";
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
import { ReactComponent as GoogleIcon } from "./Google.svg";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    setFormSubmitted(true);

    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "This is a required field";
    }
    if (!formData.password) {
      newErrors.password = "This is a required field";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Wykonaj logikę logowania
      console.log("Logged in!");
    }
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

        <Form onSubmit={handleLogin}>
          <InputContainer>
            <Label
              required
              formSubmitted={formSubmitted}
              value={formData.email}
            >
              Email
            </Label>

            <InputField
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            {errors.email && <InputValidation>{errors.email}</InputValidation>}
          </InputContainer>

          <InputContainer>
            <Label
              required
              formSubmitted={formSubmitted}
              value={formData.password}
            >
              Password
            </Label>

            <InputField
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
            {errors.password && (
              <InputValidation>{errors.password}</InputValidation>
            )}
          </InputContainer>

          <GroupButton>
            <ButtonLogin type="submit">Log in</ButtonLogin>
            <ButtonSignup type="submit">Registration</ButtonSignup>
          </GroupButton>
        </Form>
      </LoginFormWrapper>
    </LoginFormContainer>
  );
};

export default LoginForm;
