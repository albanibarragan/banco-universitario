import styles from "./Services.module.css";
import icon1 from "../../assets/img/iconservice1.png";
import icon2 from "../../assets/img/iconservice2.png";
import icon3 from "../../assets/img/iconservice3.png";
import icon4 from "../../assets/img/iconservice4.png";
import icon5 from "../../assets/img/iconservice5.png";
import icon6 from "../../assets/img/iconservice6.png";

function Services() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titleSeccion2}>Nuestros Servicios</h1>
      <div className={styles.containerServ1}>
        <div className={styles.circle}>
          <img src={icon1} className={styles.img}></img>
        </div>
        <p className={styles.text}>
          Transferencias entre estudiantes sin comision
        </p>
      </div>
      <div className={styles.containerServ2}>
        <div className={styles.circle}>
          <img src={icon2} className={styles.img}></img>
        </div>
        <p className={styles.text}>Depositos en efectivo</p>
      </div>
      <div className={styles.containerServ3}>
        <div className={styles.circle}>
          <img src={icon3} className={styles.img}></img>
        </div>
        <p className={styles.text}>Retiros en efectivo</p>
      </div>
      <div className={styles.containerServ4}>
        <div className={styles.circle}>
          <img src={icon4} className={styles.img}></img>
        </div>
        <p className={styles.text}>Pago de matricula estudiantil</p>
      </div>
      <div className={styles.containerServ5}>
        <div className={styles.circle}>
          <img src={icon5} className={styles.img}></img>
        </div>
        <p className={styles.text}>Cobro de beca estudiantil</p>
      </div>
      <div className={styles.containerServ6}>
        <div className={styles.circle}>
          <img src={icon6} className={styles.img}></img>
        </div>
        <p className={styles.text}>Consulta de movimientos y ¡mucho mas!</p>
      </div>
    </div>
  );
}

export default Services;
