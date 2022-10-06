import Logo from "../../assets/logo.png";
import CardRegister from "./CardRegister";
import "../../css/auth/auth.css";

const Register = () => {
  return (
    <div className="register-component">
      <div className="auth-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <CardRegister />
    </div>
  );
};

export default Register;
