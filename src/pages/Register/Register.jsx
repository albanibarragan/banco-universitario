import "./Register.css";
import Navbar from "../../components/Navbar/NavbarBancaOnline";
import Footer from "../../components/Footer/Footer";
import imgform from "../../assets/img/imgform.jpg";
import RegisterForm from "../../components/Forms/RegisterForm/RegisterForm";

function Register() {
  return (
    <div>
      <div className="contenedor-register-page">
        <Navbar />
        <div className="register-left">
          <img src={imgform} className="imgform"></img>
        </div>
        <div className="register-rigth">
          <RegisterForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
