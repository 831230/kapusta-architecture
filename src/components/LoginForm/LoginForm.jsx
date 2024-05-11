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
import { login } from "../../redux/user/operations";

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
      dispatch(login(formData));
      setFormData({ email: "", password: "" });
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

        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Label
              required
              formSubmitted={formSubmitted}
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
              formSubmitted={formSubmitted}
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
            <ButtonLogin type="submit">Log in</ButtonLogin>
            <ButtonSignup type="submit">Registration</ButtonSignup>
          </GroupButton>
        </Form>
      </LoginFormWrapper>
    </LoginFormContainer>
  );
};

export default LoginForm;
