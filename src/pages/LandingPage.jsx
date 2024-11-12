import { NavLink } from "react-router-dom";
import icon1 from "../assets/img/iconservice1.png";
import icon2 from "../assets/img/iconservice2.png";
import icon3 from "../assets/img/iconservice3.png";
import icon4 from "../assets/img/iconservice4.png";
import icon5 from "../assets/img/iconservice5.png";
import icon6 from "../assets/img/iconservice6.png";
import imgLady from "../assets/img/lady.png";
import BranchMap from "../assets/img/mapa-sucursal.jpg";
import Service from "../components/services";
import "./LandingPage.css";

function LandingPage() {

    const services = [
        { icon: icon1, link: "/Service1", text: "Transferencias entre estudiantes sin comisión" },
        { icon: icon2, link: "services/service2", text: "Depósitos en efectivo" },
        { icon: icon3, link: "services/service3", text: "Retiros en efectivo" },
        { icon: icon4, link: "services/service4", text: "Pago de matrícula estudiantil" },
        { icon: icon5, link: "services/service5", text: "Cobro de beca estudiantil" },
        { icon: icon6, link: null, text: "Consulta de movimientos y ¡mucho más!" },
      ];
      
  return (
    <div>
      <main>
      <section className="section-start">
          <div className="start-text">
            <h1>
              Tu banco universitario comprometido con tu futuro financiero
            </h1>
            <hr />
            <h2>¡Cada día más cerca de ti!</h2>
          </div>
          <div className="star-img">
            <img className="image-lady" src={imgLady} alt="Imagen de una mujer" />
          </div>
        </section>
        <section className="section-service" id="services">
          <h2 className="title-services">Nuestros Servicios</h2>
          <div className="container-services">
            {services.map((service, index) => (
                <Service key={index} {...service} />
        ))}
        </div>
        </section>
        <section className="section-about" id="about">
          <h2 className="title-about">¿Quienes somos?</h2>
          <div className="container-about">
            <div className="mission">
              <h2>Misión</h2>
              <p>
                Somos una institución financiera comprometida con los
                estudiantes universitarios, brindando soluciones financieras
                ágiles y eficientes.
              </p>
              <NavLink className="about-button" to="/Mission">Ver mas...</NavLink>
            </div>
            <div className="vision">
              <h2>Visión</h2>
              <p>
                Queremos ser la mejor opción financiera para estudiantes
                universitarios en el país. Deseamos ser reconocidos por nuestros
                servicios innovadores.
              </p>
              <NavLink className="about-button" to="/Vision">Ver mas...</NavLink>
            </div>
            <div className="objectives">
              <h2>Objetivos</h2>
              <p>
                Brindar a los estudiantes universitarios un servicio eficiente y
                de calidad en la gestión de sus recursos financieros, a través
                de nuestros canales digitales y nuestros puntos de atención
                presencial. Fomentar el uso de nuestras plataformas digitales
                para hacer transferencias entre estudiantes sin comisión,
                depósitos y retiros en efectivo, ofreciendo herramientas
                tecnológicas fáciles y seguras...
              </p>
              <NavLink  className="about-button" to="/Objectives ">Ver mas...</NavLink>
            </div>
          </div>
        </section>
        <section className="section-brances">
        <div className="container-branches" id="sucursales">
      <h2 className="title-branches">Nuestras Sucursales</h2>
      <div className="branch-info">
        <div className="branch-features">
          <p>
            Conoce las diferentes oficinas de atención al público que ponemos a disposición de los usuarios en todo el país.
          </p>
        </div>
        <div >
          <img src={BranchMap} className="map-image" alt="Mapa de sucursales del banco" />
        </div>
        <div className="branch-description">
          <h3>Nuestras oficinas cuentan con:</h3>
          <ul>
            <li>Taquillas para depósitos y retiros</li>
            <li>Atención personalizada</li>
            <li>Seguridad bancaria</li>
          </ul>
        </div>
      </div>
      <div className="branch-contact ">
        <h3>¿Tienes preguntas?</h3>
        <p>Puedes contactarnos para más información sobre nuestras sucursales.</p>
      </div>
    </div>
        </section>
      </main>
    </div>
  );
}

export default LandingPage;