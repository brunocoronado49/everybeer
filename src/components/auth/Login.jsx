import Logo from "../../assets/logo.png";
import CardLogin from "./CardLogin";
import "../../css/auth/auth.css";

const Login = () => {
  return (
    <div className="login-component">
      <div className="auth-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <CardLogin />
    </div>
  );
};

export default Login;
