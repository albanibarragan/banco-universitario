import LoginForm from "../../components/Forms/LoginForm";
import imgform from "../../assets/img/imgform.jpg";
import "./Login.css";
import Navbar from "../../components/Navbar/NavbarBancaOnline";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="container-login">
        <div className="containerLeft">
          <img src={imgform} className="imgform"></img>
        </div>
        <div className="containerRigth">
          <div className="login-formulario">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
