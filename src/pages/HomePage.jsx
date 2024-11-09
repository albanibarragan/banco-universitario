import React from 'react';
import { useParams } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const { id } = useParams(); 
  return (
    <div className="home-page">
      <h1>¡Buenas noches estimada Albani!</h1>
      <p>Bienvenida a BNCNET</p>
      <div className="app-invitation">
        <h2>¡Actívate y descarga ya la App BNC!</h2>
        <p>Te invitamos a descargar y hacer uso de la App BNC, el futuro de nuestra banca en línea ha llegado, brindándote la rapidez y seguridad que mereces. ¡Gracias por preferirnos!</p>
      </div>
    </div>
  );
}

export default HomePage;