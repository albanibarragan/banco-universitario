import Navbar from "../../../components/Navbar/Navbar";
import imagen from "../../../assets/img/quienessomos.jpg"

function Mision() {
    return (
      <div>
        <Navbar />
        <div>
      <div style={{
        border: "2px solid green #085f63", 
        padding: "20px", 
        borderRadius: "10px", 
        backgroundColor: "#49beb7", 
        margin: "20px 0"
      }}></div>
          <div style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
            <h1>Somos una institución financiera comprometida con apoyar el desarrollo académico y profesional de los estudiantes universitarios.</h1>
          </div>
          <p style={{ fontSize: "16px", marginBottom: "20px" }}>
          Somos una institución financiera comprometida con apoyar el desarrollo académico y profesional de los estudiantes universitarios. 
          Nuestro objetivo es ofrecer soluciones financieras innovadoras, 
          ágiles y adaptadas a las necesidades de los jóvenes en su camino hacia el éxito.
          A través de productos y servicios diseñados específicamente para este segmento, 
          buscamos no solo facilitar el acceso a recursos económicos, 
          sino también promover una cultura de responsabilidad financiera y planificación a largo plazo.
          Estamos comprometidos en ser un aliado estratégico en cada etapa de la formación universitaria, 
          brindando herramientas que contribuyan a una educación accesible y un futuro prometedor.
          </p>
          <img src={imagen} style={{ width: "100%", height: "auto", display: "block", marginTop: "20px" }} alt="Quienes somos" />
          </div>
          </div>
          );
        }

        export default Mision;