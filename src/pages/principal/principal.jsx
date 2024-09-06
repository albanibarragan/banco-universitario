import "./principal.css";
import Navbar from "../../components/Navbar/Navbar";
import imgLady from "../../assets/img/lady.png";
import Footer from "../../components/Footer/Footer";


function Principal() {
  return (
    <div>
      <Navbar />
      <main>
      <div className="section-start">
      <section className="text-section">
      <h1>Tu banco universitario comprometido con tu futuro financiero</h1>
      <hr/>
      <h2>¡Cada día más cerca de ti!</h2>
        </section>
        <section className="img-section">
        <img className="logo " src={imgLady} alt="imgLady" />
        </section>
      </div>
      </main>
    <Footer />
    </div>
  );
}

export default Principal;
