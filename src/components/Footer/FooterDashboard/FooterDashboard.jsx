import "./FooterDashboard.css";
import iconocorreo from "../../../assets/img/correo.png";
import iconotelefono  from "../../../assets/img/telefono.png";

let now = new Date();
let year = now.getFullYear();

function FooterDashboard() {
  return (
    <footer className="footer-reducido">
      <h1>BANCO UNIVERSITARIO</h1>
      <p>Si tienes más dudas, contáctanos por los siguientes medios:</p>
      <ul className="contacto-reducido">
        <li>
          <img src={iconocorreo} alt="Correo" className="icono-reducido" />
          <a href="mailto:info@bancouniversitario.com.ve">
            info@bancouniversitario.com.ve
          </a>
        </li>
        <li>
          <img src={iconotelefono} alt="Teléfono" className="icono-reducido" />
          <a href="tel:+582125555555">+58 212-555-5555</a>
        </li>
      </ul>
      <p>© {year} Banco Universitario</p>
    </footer>
  );
}

export default FooterDashboard;