import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import { useSelector } from "react-redux";
import { changePasswordAPI } from "../api/modules";
import { selectUserLogged } from "../redux/user/userSlice";
import "./ProfilePage.css";

const ProfilePage = () => {
  const userLogged = useSelector(selectUserLogged); 
  const [password, setPassword] = useState(""); 
  const [newPassword, setNewPassword] = useState(""); 
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleChangePassword = async () => {
    try {
      if (!password || !newPassword || !repeatPassword) {
        enqueueSnackbar("Todos los campos son obligatorios", { variant: "error" });
        return;
      }

      if (newPassword.length < 8) {
        enqueueSnackbar("La nueva contraseña debe tener al menos 8 caracteres", { variant: "error" });
        return;
      }

      if (newPassword !== repeatPassword) {
        enqueueSnackbar("Las nuevas contraseñas no coinciden", { variant: "error" });
        return;
      }

      const data = {
        password: password,
        new_password: newPassword,
      };

      const response = await changePasswordAPI(data);

      if (response?.errors?.length) {
        enqueueSnackbar("Error al cambiar la contraseña, inténtelo de nuevo", { variant: "error" });
        return;
      }

      enqueueSnackbar("Contraseña cambiada exitosamente", { variant: "success" });
      setPassword("");
      setNewPassword("");
      setRepeatPassword("");
    } catch (error) {
      console.error("Error al cambiar la contraseña:", error);
      enqueueSnackbar("Ocurrió un error al cambiar la contraseña", { variant: "error" });
    }
  };

  return (
    <div className="profile-page">
      <h1 className="profile-title">Perfil</h1>
      <div className="profile-data">
        <div className="profile-row">
          <label>Nombre:</label>
          <input type="text" value={userLogged.first_name}  className="input-profile" disabled />
        </div>
        <div className="profile-row">
          <label>Apellido:</label>
          <input type="text" value={userLogged.last_name}  className="input-profile" disabled />
        </div>
        <div className="profile-row">
          <label>Correo:</label>
          <input type="email" value={userLogged.email}  className="input-profile" disabled />
        </div>
        <div className="profile-row">
          <label>Numero de cuenta:</label>
          <input type="text" value={userLogged.account_number}  className="input-profile" disabled />
        </div>
        <div className="profile-row">
          <label>Contraseña actual:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese su contraseña actual"
             className="input-profile"
          />
        </div>
        <div className="profile-row">
          <label>Nueva contraseña:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Ingrese su nueva contraseña"
            className="input-profile"
          />
        </div>
        <div className="profile-row">
          <label>Repetir nueva contraseña:</label>
          <input
            type="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            placeholder="Confirme su nueva contraseña"
             className="input-profile"
          />
        </div>
        <div className="profile-row">
          <button className="change-password-btn" onClick={handleChangePassword}>
            Modificar Contraseña
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
