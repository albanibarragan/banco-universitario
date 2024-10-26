import Navbar from "../../components/Navbar/Navbar";
import styles from "./Services.module.css";
import imagen from "../../assets/img/5service5.jpeg";
import Footer from "../../components/Footer/Footer";

function Service5() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Cobro de becas estudiantiles</h1>
        </div>
        <img src={imagen} className={styles.img}></img>
        <p className={styles.parrafo}>
          El Banco Universitario también permite a los estudiantes
          universitarios cobrar sus becas estudiantiles de manera sencilla y
          eficiente. Este servicio está disponible en cualquiera de las
          sucursales del banco, lo que permite a los estudiantes acceder a sus
          fondos de manera rápida y segura.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Service5;
