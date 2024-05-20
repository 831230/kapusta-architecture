import { ReactComponent as GoogleIcon } from "../../assets/Google.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/user/operations";

//CSS
import css from "./LoginForm.module.css"

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
    dispatch(login(formData));
  };

  return (
    <div className={css.LoginFormContainer}>
      <div className={css.LoginFormWrapper}>
        <p className={css.LoginFirstParagraph}>
          You can log in with your Google Account:
        </p>
        <div className={css.ButtonGoogle}>
          <GoogleIcon />
          Google
        </div>
        <p className={css.LoginSecondParagraph}>
          Or log in using an email and password,
          <br /> after registering:
        </p>
        <form className={css.Form}>
          <div className={css.InputContainer}>
            <label className={css.Label}
              required
              // formSubmitted={formSubmitted}
              value={formData.email}
            >
              {errors.email && (
                <span className={css.InputValidation} style={{ margin: "0" }}>
                  {errors.star}
                </span>
              )}
              Email
            </label>
            <input className={css.InputField}
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
            />
            {errors.email && <span className={css.InputValidation}>{errors.email}</span>}
          </div>

          <div className={css.InputContainer}>
            <label className={css.Label}
              required
              // formSubmitted={formSubmitted}
              value={formData.password}
            >
              {errors.password && (
                <span className={css.InputValidation} style={{ margin: "0" }}>
                  {errors.star}
                </span>
              )}
              Password
            </label>

            <input className={css.InputField}
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="your password"
            />
            {errors.password && (
              <span className={css.InputValidation}>{errors.password}</span>
            )}
          </div>

          <div className={css.GroupButton}>
            <button className={css.ButtonLogin} type="submit" onClick={onLogin}>
              Log in
            </button>
            <button className={css.ButtonSignup} type="submit" onClick={onSignup}>
              Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
