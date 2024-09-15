import Navbar from "../../../components/Navbar/Navbar";
import imagen from "../../../assets/img/quienessomos.jpg"

function Objetivos() {
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
            <h1>Brindar a los estudiantes universitarios un servicio eficiente y
            de calidad</h1>
          </div>
          <p style={{ fontSize: "16px", marginBottom: "20px" }}>
          Brindar a los estudiantes universitarios un servicio eficiente y
                de calidad en la gestión de sus recursos financieros, a través
                de nuestros canales digitales y nuestros puntos de atención
                presencial. Fomentar el uso de nuestras plataformas digitales
                para hacer transferencias entre estudiantes sin comisión,
                depósitos y retiros en efectivo, ofreciendo herramientas
                tecnológicas fáciles y seguras...
          </p>
          <img src={imagen} style={{ width: "100%", height: "auto", display: "block", marginTop: "20px" }} alt="Quienes somos" />
          </div>
          </div>
          );
        }

        export default Objetivos;


