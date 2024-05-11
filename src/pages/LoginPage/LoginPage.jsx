import { useState } from "react";
import { useDispatch } from "react-redux";

// REDUX ACTIONS:
import { login } from "../../redux/user/operations";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = { email, password };

  const dispatch = useDispatch();

  const loginUser = () => dispatch(login(data))

  return (
    <>
      <div className="login-page-container">
        <div>
          <img src="" alt="kapusta-smart-finance-theme" />
        </div>
        <div>
          <form action="" className="login-form">
            <input type="text" onChange={(e) => setEmail(e.target.value)} value={email}/>
            <input type="text" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <button type="button" onClick={loginUser}>Login</button>
            <button>Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
