import "./register.css";
import Navbar from "../../components/Navbar/NavbarBancaOnline";
import Footer from "../../components/Footer/Footer";
import imgform from "../../assets/img/imgform.jpg";

function Register() {
  return (
    <div>
      <Navbar />
      <div className="containerGeneral">
        <div className="containerLeft">
          <img src={imgform} className="imgform"></img>
        </div>
        <div className="containerRigth">
          <div className="form-box">
            <h2 className="tittle-register">Registro de usuario</h2>
            <form className="form-register">
              <div className="input-group">
                <label> Nombre</label>
                <input type="text" />
              </div>
              <div className="input-group">
                <label>Apellido</label>
                <input type="text" />
              </div>
              <div className="input-group">
                <label>Cedula</label>
                <input type="text" />
              </div>
              <div className="input-group">
                <label>Fecha nacimiento</label>
                <input type="date" />
              </div>
              <div className="input-group">
                <label>Telefono</label>
                <input type="number" />
              </div>
              <div className="input-group">
                <label>Correo</label>
                <input type="email" />
              </div>
              <div className="input-group">
                <label>Contraseña</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder=""
                />
              </div>
              <div className="input-group">
                <label>Confirmar contraseña</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder=""
                />
              </div>
              <div className="buttons">
                <button className="button-register">Registrar</button>
                <button className="button-cancel">Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
