import "./RegisterForm.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import visible from "../../../assets/img/visible.png";
import oculto from "../../../assets/img/oculto.png";
import swal from "sweetalert";

const RegisterForm =() =>{

  //funciones para hacer diferentes tipos de validacion

  const {register, handleSubmit, trigger, watch, formState:{errors} } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    mostrarAlerta1();
  }

  const [showPwd, setShowPwd] = useState(false);

  const mostrarAlerta1=()=>{swal({
    text: "¡Tus datos han sido registrados exitosamente!",
    icon: "success",
    button: "Aceptar",
  }).then((respuesta) => {
    if (respuesta) {
      window.location.href = "/login";
    }
  });;}

  const mostrarAlerta2 = () => {
    swal({
      text: "¿Estas seguro que desea cancelar el proceso?",
      icon: "info",
      buttons: ["No", "Si"]
    }).then(respuesta=>{if(respuesta){window.location.href = "/";}});
  };

  //formulario de registro

    return (
      <div className="form-box-register">
        <h2 className="tittle-register">Registro de usuario</h2>
        <form className="form-register" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <label>Nombre</label>
            <input
              type="text"
              {...register("nombre", {
                required: true,
                pattern: {
                  value: /^[^\d]*$/,
                  message: "No puedes usar números en este campo",
                },
              })}
              onChange={() => trigger("nombre")}
              className={errors.nombre ? "input-error" : "input-success"}
            />
            {errors.nombre?.type === "required" && (
              <p>El nombre es requerido</p>
            )}
            {errors.nombre?.type === "pattern" && (
              <p>{errors.nombre.message}</p>
            )}
          </div>
          <div className="input-group">
            <label>Apellido</label>
            <input
              type="text"
              {...register("apellido", {
                required: true,
                pattern: {
                  value: /^[^\d]*$/,
                  message: "No puedes usar números en este campo",
                },
              })}
              onChange={() => trigger("apellido")}
              className={errors.apellido ? "input-error" : "input-success"}
            />
            {errors.apellidp?.type === "required" && (
              <p>El apellido es requerido</p>
            )}
            {errors.apellido?.type === "pattern" && (
              <p>{errors.apellido.message}</p>
            )}
          </div>
          <div className="input-group">
            <label>Cedula</label>
            <input
              type="text"
              {...register("cedula", { required: true })}
              onChange={() => trigger("cedula")}
              className={errors.cedula ? "input-error" : "input-success"}
            />
            {errors.cedula?.type === "required" && (
              <p>La cedula es requerida</p>
            )}
          </div>
          <div className="input-group">
            <label>Fecha nacimiento</label>
            <input
              type="date"
              {...register("fechanacimiento")}
              className={
                errors.fechanacimiento ? "input-error" : "input-success"
              }
            />
          </div>
          <div className="input-group">
            <label>Telefono</label>
            <input
              type="number"
              {...register("telefono", {
                required: true,
                pattern: {
                  required: true,
                  value: /^\d+$/,
                  message: "No puedes utilizar letras",
                },
              })}
              onChange={() => trigger("telefono")}
              className={errors.telefono ? "input-error" : "input-success"}
            />
            {errors.telefono?.type === "required" && (
              <p>El telefono es requerido</p>
            )}
            {errors.telefono?.type === "pattern" && (
              <p>{errors.telefono.message}</p>
            )}
          </div>
          <div className="input-group">
            <label>Correo</label>
            <input
              id="email"
              placeholder="correo@example.com"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Email no válido",
                },
              })}
              onChange={() => trigger("email")}
              className={errors.email ? "input-error" : "input-success"}
            />
            {errors.email?.type === "required" && <p>El email es requerido</p>}
            {errors.email?.type === "pattern" && <p>{errors.email.message}</p>}
          </div>
          <div className="input-group">
            <label>Contraseña</label>
            <div className="input-wrapper">
              <input
                type={showPwd ? "text" : "password"}
                id="password"
                placeholder="password"
                {...register("contraseña", {
                  required: true,
                  validate: (value) =>
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/.test(value),
                })}
                onChange={() => trigger("contraseña")}
                className={errors.contraseña ? "input-error" : "input-success"}
              />
              <div onClick={() => setShowPwd(!showPwd)}>
                {showPwd ? (
                  <img src={visible} className="icon" />
                ) : (
                  <img src={oculto} className="icon" />
                )}
              </div>
            </div>
            {errors.contraseña?.type === "required" && (
              <p>Defina una contraseña, es requerido</p>
            )}
            {errors.contraseña?.type === "validate" && (
              <p>
                La contraseña debe contener al menos un caracter especial, debe
                contener mayusculas, minusculas y numeros
              </p >
            )}
          </div>
          <div className="input-group">
            <label>Confirmar contraseña</label>
            <div className="input-wrapper">
              <input
                type={showPwd ? "text" : "password"}
                id="password"
                placeholder="password"
                {...register("confirmarcontraseña", {
                  required: true,
                  validate: (value) =>
                    value === watch("contraseña") ||
                    "Las contraseñas no coinciden",
                })}
                onChange={() => trigger("confirmar ")}
                className={
                  errors.confirmarcontraseña ? "input-error" : "input-success"
                }
              />
              <div onClick={() => setShowPwd(!showPwd)}>
                {showPwd ? (
                  <img src={visible} className="icon" />
                ) : (
                  <img src={oculto} className="icon" />
                )}
              </div>
            </div>
            {errors.confirmarcontraseña?.type === "required" && (
              <p>Es requerida</p>
            )}
            {errors.confirmarcontraseña?.type === "validate" && (
              <p>{errors.confirmarcontraseña.message}</p>
            )}
          </div>
          <div className="buttonsgroup-register">
            <button
              type="submit"
              className="button-register"
            >
              Registrar
            </button>
            <button onClick={() => mostrarAlerta2()} className="button-cancel">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    );
}

export default RegisterForm;