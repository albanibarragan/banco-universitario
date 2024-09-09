import Navbar from "../../../components/Navbar/Navbar";
import styles from "./Services.module.css";
import imagen from "../../../assets/img/3service3.jpeg";

function Service3() {
  return (
    <div>
      <Navbar />
      <div>
        <div className={styles.title}>
          <h1>Retiros en efectivo</h1>
        </div>
        <img src={imagen} className={styles.img}></img>
        <p className={styles.parrafo}>
          El Banco Universitario también permite a los estudiantes realizar
          retiros en efectivo de manera rápida y segura. Los estudiantes pueden
          realizar retiros en cualquiera de las sucursales del banco, con la
          tranquilidad de que sus fondos están seguros y protegidos.
        </p>
      </div>
    </div>
  );
}

export default Service3;
