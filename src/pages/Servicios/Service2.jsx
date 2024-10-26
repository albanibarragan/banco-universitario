import Navbar from "../../components/Navbar/Navbar";
import styles from "./Services.module.css";
import imagen from "../../assets/img/2service2.jpeg";
import Footer from "../../components/Footer/Footer";

function Service2() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Depósitos en efectivo</h1>
        </div>
        <img src={imagen} className={styles.img}></img>
        <p className={styles.parrafo}>
          El Banco Universitario permite a los estudiantes realizar depósitos en
          efectivo de manera sencilla y cómoda en cualquiera de sus sucursales.
          Este servicio está disponible las 24 horas del día, los 7 días de la
          semana, lo que permite a los estudiantes realizar sus depósitos en
          cualquier momento que lo necesiten.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Service2;
