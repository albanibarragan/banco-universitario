import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { registerAPI } from "../../../api/modules/user";
import oculto from "../../../assets/img/oculto.png";
import visible from "../../../assets/img/visible.png";
import { selectIsLogged } from "../../../redux/user/userSlice";
import "./RegisterForm.css";

const RegisterForm = () => {

  const isLogged = useSelector(selectIsLogged);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPwd, setShowPwd] = useState(false);

  const mostrarAlerta1 = () => {
    swal({
      text: "¡Tus datos han sido registrados exitosamente!",
      icon: "success",
      button: "Aceptar",
    }).then((respuesta) => {
      if (respuesta) {
        window.location.href = "/home";
      }
    });
  };

  const mostrarAlerta2 = () => {
    swal({
      text: "¿Estas seguro que desea cancelar el proceso?",
      icon: "info",
      buttons: ["No", "Si"]
    }).then(respuesta => {
      if (respuesta) {
        window.location.href = "/";
      }
    });
  };

  // Enviar datos al backend
  const onSubmit = async (data) => {
    console.log("Formulario enviado con los datos:", data);

    // Ajustar los datos antes de enviarlos
    const adjustedData = {
      ...data,
      birth_date: new Date(data.birth_date).toISOString(),
      phone_number: data.phone_number.startsWith("+")
        ? data.phone_number
        : `+${data.phone_number}`, 
    };

    try {
      setLoading(true);
      const response = await registerAPI(adjustedData);
      setLoading(false)
      console.log("Respuesta del servidor:", response.data);
      if (response.errors.length) {
        console.error("API Errors:", response.errors);
        return;
    }
      if (response.status === 201) {
        mostrarAlerta1();
      }
    } catch (error) {
      if (error.response) {
        console.error("Respuesta del servidor con error:", error.response.data);
        swal({
          text: "Error en el registro: " + (error.response.data.errors[0]?.message || "Datos inválidos"),
          icon: "error",
          button: "Aceptar",
        });
      } else if (error.request) {
        console.error("No se recibió respuesta del servidor:", error.request);
        swal({
          text: "No se pudo conectar con el servidor. Intenta nuevamente.",
          icon: "error",
          button: "Aceptar",
        });
      } else {
        console.error("Error desconocido:", error.message);
        swal({
          text: "Ocurrió un error inesperado: " + error.message,
          icon: "error",
          button: "Aceptar",
        });
      }
    }
  };
  

  return (
    <div className="form-box-register">
      <h2 className="tittle-register">Registro de usuario</h2>
      <form className="form-register" onSubmit={handleSubmit(onSubmit)}>
        {/* Campo: Nombre */}
        <div className="input-group">
          <label>Nombre</label>
          <input
            type="text"
            {...register("first_name", {
              required: "El nombre es requerido",
              pattern: {
                value: /^[^\d]*$/,
                message: "No puedes usar números en este campo",
              },
            })}
            className={errors.first_name ? "input-error" : "input-success"}
          />
          {errors.first_name && <p>{errors.first_name.message}</p>}
        </div>

        {/* Campo: Apellido */}
        <div className="input-group">
          <label>Apellido</label>
          <input
            type="text"
            {...register("last_name", {
              required: "El apellido es requerido",
              pattern: {
                value: /^[^\d]*$/,
                message: "No puedes usar números en este campo",
              },
            })}
            className={errors.last_name ? "input-error" : "input-success"}
          />
          {errors.last_name && <p>{errors.last_name.message}</p>}
        </div>

        {/* Campo: Cédula */}
        <div className="input-group">
          <label>Cédula</label>
          <input
            type="text"
            {...register("document_number", { required: "La cédula es requerida" })}
            className={errors.document_number ? "input-error" : "input-success"}
          />
          {errors.document_number && <p>{errors.document_number.message}</p>}
        </div>

        {/* Campo: Fecha de nacimiento */}
        <div className="input-group">
          <label>Fecha de nacimiento</label>
          <input
            type="date"
            {...register("birth_date", { required: "La fecha de nacimiento es requerida" })}
            className={errors.birth_date ? "input-error" : "input-success"}
          />
          {errors.birth_date && <p>{errors.birth_date.message}</p>}
        </div>

        {/* Campo: Teléfono */}
        <div className="input-group">
          <label>Teléfono</label>
          <input
            type="text"
            {...register("phone_number", {
              required: "El teléfono es requerido",
              pattern: {
                value: /^\+?\d+$/,
                message: "Formato de teléfono no válido",
              },
            })}
            className={errors.phone_number ? "input-error" : "input-success"}
          />
          {errors.phone_number && <p>{errors.phone_number.message}</p>}
        </div>

        {/* Campo: Correo */}
        <div className="input-group">
          <label>Correo</label>
          <input
            type="email"
            {...register("email", {
              required: "El correo es requerido",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Email no válido",
              },
            })}
            className={errors.email ? "input-error" : "input-success"}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        {/* Campo: Contraseña */}
        <div className="input-group">
          <label>Contraseña</label>
          <div className="input-wrapper">
            <input
              type={showPwd ? "text" : "password"}
              {...register("password", {
                required: "La contraseña es requerida",
              })}
              className={errors.password ? "input-error" : "input-success"}
            />
            <div onClick={() => setShowPwd(!showPwd)}>
              <img src={showPwd ? visible : oculto} className="icon" alt="icono" />
            </div>
          </div>
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        {/* Botones */}
        <div className="buttonsgroup-register"> 
          <button type="submit" className="button-register"  onClick={mostrarAlerta1}>
            Registrar
          </button>
          <button type="button" onClick={mostrarAlerta2} className="button-cancel">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
