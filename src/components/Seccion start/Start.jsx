import "./Start.css"
import imgLady from "../../assets/img/lady.png";

const Start = () =>{
    return(
        <section className="section-start">
          <div className="text-section">
            <h1>
              Tu banco universitario comprometido con tu futuro financiero
            </h1>
            <hr />
            <h2>¡Cada día más cerca de ti!</h2>
          </div>
          <div className="img-section">
            <img className="img-lady" src={imgLady} alt="Imagen de una mujer" />
          </div>
        </section>
    );
}

export default Start;