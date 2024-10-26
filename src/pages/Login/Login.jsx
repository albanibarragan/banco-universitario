import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import "./Login.css";

const Login = () =>{
    return(
        <div className="container-login">
            <div className="login-img">

            </div>
            <div className="login-formulario">
            <LoginForm />
            </div>
        </div>
    );
}

export default Login;