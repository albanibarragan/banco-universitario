import "./RegisterForm.css";
import { useForm } from "react-hook-form";

const RegisterForm =() =>{

  const {register, handleSubmit, formState:{errors} } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }


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
                validate: (value) => !/\d/.test(value),
              })}
            />
            {errors.nombre?.type === "required" && (
              <p>El nombre es requerido</p>
            )}
            {errors.nombre?.type === "validate" && (
              <p>No puedes usar numeros en este campo</p>
            )}
          </div>
          <div className="input-group">
            <label>Apellido</label>
            <input
              type="text"
              {...register("apellido", {
                required: true,
                validate: (value) => !/\d/.test(value),
              })}
            />
            {errors.nombre?.type === "required" && (
              <p>El apellido es requerido</p>
            )}
            {errors.apellido?.type === "validate" && (
              <p>No puedes usar numeros en este campo</p>
            )}
          </div>
          <div className="input-group">
            <label>Cedula</label>
            <input type="text" {...register("cedula", { required: true })} />
            {errors.cedula?.type === "required" && (
              <p>La cedula es requerida</p>
            )}
          </div>
          <div className="input-group">
            <label>Fecha nacimiento</label>
            <input type="date" {...register("fecha nacimiento")} />
          </div>
          <div className="input-group">
            <label>Telefono</label>
            <input
              type="number"
              {...register("telefono", {
                validate: (value) => /^\d+$/.test(value),
              })}
            />
            {errors.telefono?.type === "validate" && (
              <p>No puedes utilizar letras</p>
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
            />
          </div>
          <div className="input-group">
            <label>Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder=""
              {...register("contraseña", {
                required: true,
                validate: (value) =>
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/.test(value),
              })}
            />
            {errors.contraseña?.type === "required" && (
              <p>Defina una contraseña, es requerido</p>
            )}
            {errors.contraseña?.type === "validate" &&
              ((
                <p>
                  La contraseña debe contener al menos un caracter especial, debe contener mayusculas, minusculas y numeros
                </p>
              ))}
          </div>
          <div className="input-group">
            <label>Confirmar contraseña</label>
            <input
              type="password"
              id="password"
              placeholder=""
              {...register("confirmar contraseña", { required: true })}
            />
          </div>
          <div className="buttonsgroup-register">
            <button className="button-register">Registrar</button>
            <button className="button-cancel">Cancelar</button>
          </div>
        </form>
      </div>
    );
}

export default RegisterForm;