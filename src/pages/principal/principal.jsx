import "./principal.css";
import Navbar from "../../components/Navbar/Navbar";
import imgLady from "../../assets/img/lady.png";
import Footer from "../../components/Footer/Footer";
import icon1 from "../../assets/img/iconservice1.png";
import icon2 from "../../assets/img/iconservice2.png";
import icon3 from "../../assets/img/iconservice3.png";
import icon4 from "../../assets/img/iconservice4.png";
import icon5 from "../../assets/img/iconservice5.png";
import icon6 from "../../assets/img/iconservice6.png";
import { NavLink, /*Routes, Route*/ } from "react-router-dom";

function Principal() {
  return (
    <div>
      <Navbar />
      <main>
        <section className="section-start">
          <div className="text-section">
            <h1>
              Tu banco universitario comprometido con tu futuro financiero
            </h1>
            <hr />
            <h2>¡Cada día más cerca de ti!</h2>
          </div>
          <div className="img-section">
            <img className="logo" src={imgLady} alt="Imagen de una mujer" />
          </div>
        </section>
        <section className="section-service" id="services">
          <h2 className="title-service">Nuestros Servicios</h2>
          <div className="container-service">
            <div className="service">
              <div className="service-circle">
                <img src={icon1} className="icon-service"></img>
              </div>
              <NavLink to="services/service1" className="text-service">
                Transferencias entre estudiantes sin comision
              </NavLink>
            </div>
            <div className="service">
              <div className="service-circle">
                <img src={icon2} className="icon-service"></img>
              </div>
              <NavLink to="services/service2" className="text-service">
                Depositos en efectivo
              </NavLink>
            </div>
            <div className="service">
              <div className="service-circle">
                <img src={icon3} className="icon-service"></img>
              </div>
              <NavLink to="services/service3" className="text-service">
                Retiros en efectivo
              </NavLink>
            </div>
            <div className="service">
              <div className="service-circle">
                <img src={icon4} className="icon-service"></img>
              </div>
              <NavLink to="services/service4" className="text-service">
                Pago de matricula estudiantil
              </NavLink>
            </div>
            <div className="service">
              <div className="service-circle">
                <img src={icon5} className="icon-service"></img>
              </div>
              <NavLink to="services/service5" className="text-service">
                Cobro de beca estudiantil
              </NavLink>
            </div>
            <div className="service">
              <div className="service-circle">
                <img src={icon6} className="icon-service"></img>
              </div>
              <p className="text-service">
                Consulta de movimientos y ¡mucho mas!
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Principal;
