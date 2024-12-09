import React, { useState, useEffect } from "react";
import { apiHttp, API_URL_BACKEND } from "../apiAxios";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    nombre: "",
    apellido: "",
    cedula: "",
    telefono: "",
    cuenta: "",
    correo: "",
  });
  const [password, setPassword] = useState("********");
  const [showAccountNumber, setShowAccountNumber] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Cargar datos del perfil desde el backend
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await apiHttp("GET", `${API_URL_BACKEND}/perfil`);
        setProfileData(response.data);
      } catch (error) {
        console.error("Error al cargar los datos del perfil:", error);
      }
    };

    fetchProfileData();
  }, []);

  // Manejar actualización de contraseña
  const handlePasswordChange = async () => {
    const newPassword = prompt("Ingrese la nueva contraseña:");
    if (newPassword) {
      try {
        await apiHttp("PUT", `${API_URL_BACKEND}/perfil/cambiar-contraseña`, {
          nuevaContraseña: newPassword,
        });
        alert("Contraseña actualizada con éxito");
        setPassword("********"); // Restablecer la visualización protegida
      } catch (error) {
        console.error("Error al cambiar la contraseña:", error);
        alert("No se pudo actualizar la contraseña");
      }
    }
  };

  // Mostrar u ocultar número de cuenta
  const toggleAccountNumberVisibility = () =>
    setShowAccountNumber(!showAccountNumber);

  // Mostrar u ocultar contraseña
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="profile-page">
      <h1>Perfil</h1>
      <div className="profile-data">
        <div className="profile-row">
          <label>Nombre:</label>
          <span>{profileData.nombre}</span>
        </div>
        <div className="profile-row">
          <label>Apellido:</label>
          <span>{profileData.apellido}</span>
        </div>
        <div className="profile-row">
          <label>Cédula:</label>
          <span>{profileData.cedula}</span>
        </div>
        <div className="profile-row">
          <label>Teléfono:</label>
          <span>{profileData.telefono}</span>
        </div>
        <div className="profile-row">
          <label>Número de Cuenta:</label>
          <span>
            {showAccountNumber ? profileData.cuenta : "**** **** **** 1234"}
            <button onClick={toggleAccountNumberVisibility}>
              {showAccountNumber ? "Ocultar" : "Mostrar"}
            </button>
          </span>
        </div>
        <div className="profile-row">
          <label>Correo:</label>
          <span>{profileData.correo}</span>
        </div>
        <div className="profile-row">
          <label>Contraseña:</label>
          <span>
            {showPassword ? "miContraseña123" : password}
            <button onClick={togglePasswordVisibility}>
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          </span>
        </div>
        <div className="profile-row">
          <button className="change-password-btn" onClick={handlePasswordChange}>
            Modificar Contraseña
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
