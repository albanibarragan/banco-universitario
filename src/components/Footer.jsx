import { useLocation } from "react-router-dom";
import iconemail from "../assets/img/correo.png";
import icondirection from "../assets/img/direccion.png";
import iconFax from "../assets/img/fax.png";
import facebook from "../assets/img/logofacebook.png";
import instagram from "../assets/img/logoinstagram.png";
import twitter from "../assets/img/logotwitter.png";
import iconPhone from "../assets/img/telefono.png";
import "./styles/Footer.css";

let now = new Date();
let year = now.getFullYear();

function Footer() {
  const location = useLocation(); // Obtener la ruta actual

  // Comprobar si estamos en la página de login o register
  const isLoginOrRegisterPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <footer className="footer-landing">
      {/* Solo mostrar el título h1 si no estamos en login o register */}
      {!isLoginOrRegisterPage && <h1>BANCO UNIVERSITARIO</h1>}

      <div className="content">
        <section className="section-info">
          <ul className="info-list">
            <li>
              <img
                src={icondirection}
                alt="icono de Dirección"
                className="icon-info"
              />
              <address>
                <a href="#">
                  Av. Universidad, Edificio Banco Universitario, piso 12,
                  Caracas, Venezuela.
                </a>
              </address>
            </li>
            <li>
              <img
                src={iconPhone}
                alt="icono de Teléfono"
                className="icon-info"
              />
              <a href="tel:+582125555555">+58 212-555-5555</a>
            </li>
            <li>
              <img src={iconFax} alt="icono de Fax" className="icon-info" />
              <a href="#">+58 212-555-5556</a>
            </li>
            <li>
              <img
                src={iconemail}
                alt="icono de Correo"
                className="icon-info"
              />
              <a href="mailto:info@bancouniversitario.com.ve">
                info@bancouniversitario.com.ve
              </a>
            </li>
          </ul>
        </section>

        {/* Solo mostrar la sección de redes sociales si no estamos en login o register */}
        {!isLoginOrRegisterPage && (
          <section className="section-socialMedia">
            <h2>¡CONTÁCTANOS!</h2>
            <div>
              <a
                href="https://facebook.com/bancouniversatariove"
                target="_blank"
                aria-label="Facebook"
              >
                <img src={facebook} alt="Facebook" className="icon-media" />
              </a>
              <a
                href="https://instagram.com/bancouniversatariove"
                target="_blank"
                aria-label="Instagram"
              >
                <img src={instagram} alt="Instagram" className="icon-media" />
              </a>
              <a
                href="https://X.com/bancouniversatariove"
                target="_blank"
                aria-label="Twitter"
              >
                <img src={twitter} alt="Twitter" className="icon-media" />
              </a>
            </div>
          </section>
        )}
      </div>

      <p className="copyringht">Copyright © Banco Universitario {year}</p>
    </footer>
  );
}

export default Footer;
