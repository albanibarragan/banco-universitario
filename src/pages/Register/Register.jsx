import "./Register.css";
import Navbar from "../../components/Navbar/NavbarBancaOnline";
import FooterDashboard from "../../components/Footer/FooterDashboard/FooterDashboard";
import imgform from "../../assets/img/imgform.jpg";
import RegisterForm from "../../components/Forms/RegisterForm/RegisterForm";

function Register() {
  return (
    <div>
      
      <div className="contenedor-register-page">
        <div className="register-left">
        <Navbar />
          <img src={imgform} className="imgform"></img>
        </div>
        <div className="register-rigth">
          <RegisterForm />
          <FooterDashboard />
        </div>
      </div> 
    </div>
  );
}

export default Register;
