import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import Navbar from "../../components/Navbar/NavbarBancaOnline";
import "./Login.css"

const Login = () =>{
  return (
    <div>
      {" "}
      <Navbar />
      <div className="contenedor-login-page">
        <div className="login-left"></div>
        <div className="login-right">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;
