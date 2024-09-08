import imagen from "../../assets/img/ladyimg.png";
import styles from "./principal.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { NavLink, /*Routes, Route*/ } from "react-router-dom";
/*import Service1 from "../../components/Services/Service1";*/
import icon1 from "../../assets/img/iconservice1.png";
import icon2 from "../../assets/img/iconservice2.png";
import icon3 from "../../assets/img/iconservice3.png";
import icon4 from "../../assets/img/iconservice4.png";
import icon5 from "../../assets/img/iconservice5.png";
import icon6 from "../../assets/img/iconservice6.png";
import Footer from "../../components/Footer/Footer";

function Principal() {
  return (
    <div>
      <Navbar></Navbar>

      <div className="container-fluid">
        <div className={styles.mensajeCentral}>
          <div className={styles.titulos}>
            <h1>Tu banco Universitario</h1>
            <h2>Comprometido con tu futuro financiero.</h2>
            <h3>¡Cada dia mas cerca de ti!</h3>
          </div>
          <div className={styles.imgPrincipal}>
            <img src={imagen} alt="imagen" />
          </div>
        </div>
        <h1 className={styles.titleSeccion2}>Nuestros Servicios</h1>
        <div className={styles.container} id="services">
          <div className={styles.containerServ1}>
            <div className={styles.circle}>
              <img src={icon1} className={styles.img}></img>
            </div>
            <NavLink to="services/service1" className={styles.text}>
              Transferencias entre estudiantes sin comision
            </NavLink>
          </div>
          <div className={styles.containerServ2}>
            <div className={styles.circle}>
              <img src={icon2} className={styles.img}></img>
            </div>
            <NavLink to="services/service2" className={styles.text}>
              Depositos en efectivo
            </NavLink>
          </div>
          <div className={styles.containerServ3}>
            <div className={styles.circle}>
              <img src={icon3} className={styles.img}></img>
            </div>
            <NavLink to="services/service3" className={styles.text}>
              Retiros en efectivo
            </NavLink>
          </div>
          <div className={styles.containerServ4}>
            <div className={styles.circle}>
              <img src={icon4} className={styles.img}></img>
            </div>
            <NavLink to="services/service4" className={styles.text}>
              Pago de matricula estudiantil
            </NavLink>
          </div>
          <div className={styles.containerServ5}>
            <div className={styles.circle}>
              <img src={icon5} className={styles.img}></img>
            </div>
            <NavLink to="services/service5" className={styles.text}>
              Cobro de beca estudiantil
            </NavLink>
          </div>
          <div className={styles.containerServ6}>
            <div className={styles.circle}>
              <img src={icon6} className={styles.img}></img>
            </div>
            <p className={styles.text}>Consulta de movimientos y ¡mucho mas!</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Principal;
