import "./Principal.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import icon1 from "../../assets/img/iconservice1.png";
import icon2 from "../../assets/img/iconservice2.png";
import icon3 from "../../assets/img/iconservice3.png";
import icon4 from "../../assets/img/iconservice4.png";
import icon5 from "../../assets/img/iconservice5.png";
import icon6 from "../../assets/img/iconservice6.png";
import { NavLink} from "react-router-dom";
import Sucursal from "../../components/sucursales/Sucursal";
import Start from "../../components/Seccion start/Start";


function Principal() {
  return (
    <div>
      <Navbar />
      <main>
        <Start />
        <section className="section-service" id="services">
          <h2 className="title-service">Nuestros Servicios</h2>
          <div className="container-service">
            <div className="service">
              <div className="service-circle">
                <img  src={icon1} className="icon-service" loading="lazy" ></img>
              </div>
              <NavLink to="services/service1" className="text-service">
                Transferencias entre estudiantes sin comision
              </NavLink>
            </div>
            <div className="service">
              <div className="service-circle">
                <img src={icon2} className="icon-service" loading="lazy" ></img>
              </div>
              <NavLink to="services/service2" className="text-service">
                Depositos en efectivo
              </NavLink>
            </div>
            <div className="service">
              <div className="service-circle">
                <img loading="lazy" src={icon3} className="icon-service"></img>
              </div>
              <NavLink to="services/service3" className="text-service">
                Retiros en efectivo
              </NavLink>
            </div>
            <div className="service">
              <div className="service-circle">
                <img loading="lazy" src={icon4} className="icon-service"></img>
              </div>
              <NavLink to="services/service4" className="text-service">
                Pago de matricula estudiantil
              </NavLink>
            </div>
            <div className="service">
              <div className="service-circle">
                <img loading="lazy" src={icon5} className="icon-service"></img>
              </div>
              <NavLink to="services/service5" className="text-service">
                Cobro de beca estudiantil
              </NavLink>
            </div>
            <div className="service">
              <div className="service-circle">
                <img loading="lazy" src={icon6} className="icon-service"></img>
              </div>
              <p className="text-service">
                Consulta de movimientos y ¡mucho mas!
              </p>
            </div>
          </div>
        </section>
        <section className="section-quienessomos" id="quienes">
          <h2 className="title-quienes">¿Quienes somos?</h2>
          <div className="container-quienes">
            <div className="mision">
<<<<<<< HEAD:src/pages/principal/principal.jsx
              <h2>Misión</h2>
=======
              <h3>Mision</h3>
>>>>>>> bc84bb35c027720e4ef002ddbd650a5e3a171cd6:src/pages/Landing page/Principal.jsx
              <p>
                Somos una institución financiera comprometida con los
                estudiantes universitarios, brindando soluciones financieras
                ágiles y eficientes.
              </p>
              <NavLink className="btn-somos" to="Quienes-somos/Mision">Ver mas...</NavLink>
            </div>
            <div className="vision">
<<<<<<< HEAD:src/pages/principal/principal.jsx
              <h2>Visión</h2>
=======
              <h3>Vision</h3>
>>>>>>> bc84bb35c027720e4ef002ddbd650a5e3a171cd6:src/pages/Landing page/Principal.jsx
              <p>
                Queremos ser la mejor opción financiera para estudiantes
                universitarios en el país. Deseamos ser reconocidos por nuestros
                servicios innovadores.
              </p>
              <NavLink className="btn-somos" to="Quienes-somos/Vision">Ver mas...</NavLink>
            </div>
            <div className="objetivos">
              <h3>Objetivos</h3>
              <p>
                Brindar a los estudiantes universitarios un servicio eficiente y
                de calidad en la gestión de sus recursos financieros, a través
                de nuestros canales digitales y nuestros puntos de atención
                presencial. Fomentar el uso de nuestras plataformas digitales
                para hacer transferencias entre estudiantes sin comisión,
                depósitos y retiros en efectivo, ofreciendo herramientas
                tecnológicas fáciles y seguras...
              </p>
              <NavLink  className="btn-somos" to="Quienes-somos/Objetivos">Ver mas...</NavLink>
            </div>
          </div>
        </section>
        <section className="sucursales">
         <Sucursal />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Principal;
