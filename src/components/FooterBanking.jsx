import iconocorreo from "../assets/img/correo.png";
import iconotelefono from "../assets/img/telefono.png";
import "./styles/FooterBanking.css";


let now = new Date();
let year = now.getFullYear();

function FooterBanking() {
  return (
    <footer className="footer-banking">
      <div className="banking-left">
      <h1>BANCO UNIVERSITARIO</h1>
      <p>Si tienes más dudas, contáctanos por los siguientes medios:</p>
      <p>© {year} Banco Universitario</p>
      </div>
      <div className="banking-right">
      <ul className="banking-contact">
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
      </div>
      
    </footer>
  );
}

export default FooterBanking;
