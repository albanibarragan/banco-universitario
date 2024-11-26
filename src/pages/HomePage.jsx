import imgLady from "../assets/img/lady.png";
import AccountBox from '../components/AccountBox';
import ButtonsBox from '../components/ButtonsBox';
import './HomePage.css';

function HomePage() {
  
  return (
    <div className="home-page">
      <header className='header-home'>
        Bienvenidos a la banca en Linea.
      </header>
     <main className='main-home'>
     <section className='welcome-section'>
      <div className="welcome-text">
        <h1>¡Buenas noches,!</h1>
        <div className="app-invitation">
        <h2>¡Ahora puedes usar la Banca desde tu Telefono!</h2>
        <p>Te invitamos a hacer uso en la web, el futuro de nuestra banca en línea ha llegado, brindándote la rapidez y seguridad que mereces. ¡Gracias por preferirnos!</p>
      </div>
      </div>
      <div className="welcome-img">
        <img className="welcome-img-lady" src={imgLady} alt="Imagen de una mujer" />
      </div>
     </section>
      <AccountBox />
      <ButtonsBox />
     </main>
    </div>
  );
}

export default HomePage;