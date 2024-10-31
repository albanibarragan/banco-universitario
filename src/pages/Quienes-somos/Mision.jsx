import Navbar from "../../components/Navbar/Navbar";
import styles from "./Quienes-somos.module.css";
import imagen from "../../assets/img/Mision.jpeg";
import Footer from "../../components/Footer/Footer";

function Mision() {
    return (
      <div>
        <Navbar />
        <div>
        <div className={styles.title}>
            <h1> Misión </h1>
          </div>
        <img src={imagen} className={styles.img}></img>
        <p className={styles.parrafo}>
          Somos una institución financiera comprometida con apoyar el desarrollo académico y profesional de los estudiantes universitarios. 
          Nuestro objetivo es ofrecer soluciones financieras innovadoras, 
          ágiles y adaptadas a las necesidades de los jóvenes en su camino hacia el éxito.
          A través de productos y servicios diseñados específicamente para este segmento, 
          buscamos no solo facilitar el acceso a recursos económicos, 
          sino también promover una cultura de responsabilidad financiera y planificación a largo plazo.
          Estamos comprometidos en ser un aliado estratégico en cada etapa de la formación universitaria, 
          brindando herramientas que contribuyan a una educación accesible y un futuro prometedor.
          </p>
          </div>
          <Footer />
          </div>
          );
}

export default Mision;