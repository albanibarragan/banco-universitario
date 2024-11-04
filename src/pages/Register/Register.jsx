import "./Register.css";
import Navbar from "../../components/Navbar/NavbarBancaOnline";
import FooterDashboard from "../../components/Footer/FooterDashboard/FooterDashboard";
import RegisterForm from "../../components/Forms/RegisterForm/RegisterForm";

function Register() {
  return (
    <div>
        <Navbar />
      <div className="contenedor-register-page">
        <div className="register-left">
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
