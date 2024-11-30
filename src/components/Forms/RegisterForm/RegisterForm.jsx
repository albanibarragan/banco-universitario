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

  const handleChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setFormErrors({ ...formErrors, [event.target.name]: null });
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
    let apiValues = {
      ...form,
      birth_date: new Date(form.birth_date),
    };
    setLoading(true);
    const response = await registerAPI(apiValues);
    console.log("Respuesta de la API:", response);
    setLoading(false);
    if (response.errors.length) {
      return enqueueSnackbar(getAPIError(response.errors), {
        variant: "error",
      });
    }
    const loginForm = {
      email: form.email,
      password: form.password,
    };
    dispatch(login(loginForm));
  };
  

  useEffect(() => {
    if (isLogged) {
      navigate("/checkout/1");
    }
  }, [isLogged]);

  //formulario de registro

  return (
    <div className="form-box-register">
      <h2 className="tittle-register">Registro de usuario</h2>
      <form className="form-register" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Nombre</label>
          <input
            type="text"
            name="first_name"
            value={form.first_name}
            onChange={handleChangeForm}
            className={formErrors.first_name ? "input-error" : "input-success"}
          />
          {formErrors.first_name && <p>{formErrors.first_name}</p>}
        </div>
        <div className="input-group">
          <label>Apellido</label>
          <input
            type="text"
            name="last_name"
            value={form.last_name}
            onChange={handleChangeForm}
            className={formErrors.last_name ? "input-error" : "input-success"}
          />
          {formErrors.last_name && <p>{formErrors.last_name}</p>}
        </div>
        <div className="input-group">
          <label>Cedula</label>
          <input
            type="text"
            name="document_number"
            value={form.document_number}
            onChange={handleChangeForm}
            className={
              formErrors.document_number ? "input-error" : "input-success"
            }
          />
          {formErrors.document_number && <p>{formErrors.document_number}</p>}
        </div>
        <div className="input-group">
          <label>Fecha nacimiento</label>
          <input
            type="date"
            name="birth_date"
            value={form.birth_date}
            onChange={handleChangeForm}
            className={formErrors.birth_date ? "input-error" : "input-success"}
          />
          {formErrors.birth_date && <p>{formErrors.birth_date}</p>}
        </div>
        <div className="input-group">
          <label>Telefono</label>
          <input
            type="number"
            name="phone_number"
            value={form.phone_number}
            onChange={handleChangeForm}
            className={
              formErrors.phone_number ? "input-error" : "input-success"
            }
          />
          {formErrors.phone_number && <p>{formErrors.phone_number}</p>}
        </div>
        <div className="input-group">
          <label>Correo</label>
          <input
            id="email"
            placeholder="correo@example.com"
            name="email"
            value={form.email}
            onChange={handleChangeForm}
            className={formErrors.email ? "input-error" : "input-success"}
          />
          {formErrors.email && <p>{formErrors.email}</p>}
        </div>
        <div className="input-group">
          <label>Contraseña</label>
          <div className="input-wrapper">
            <input
              type={showPwd ? "text" : "password"}
              name="password"
              value={form.password}
              placeholder="Contraseña"
              onChange={handleChangeForm}
              className={formErrors.password ? "input-error" : "input-success"}
            />
            <div onClick={() => setShowPwd(!showPwd)}>
              {showPwd ? (
                <img src={visible} className="icon" alt="Ver contraseña" />
              ) : (
                <img src={oculto} className="icon" alt="Ocultar contraseña" />
              )}
            </div>
          </div>
          {formErrors.password && <p>{formErrors.password}</p>}
        </div>
        <div className="input-group">
          <label>Confirmar contraseña</label>
          <div className="input-wrapper">
            <input
              type={showPwd ? "text" : "password"}
              name="repeatPassword"
              value={form.repeatPassword}
              placeholder="Confirmar contraseña"
              onChange={handleChangeForm}
              className={
                formErrors.repeatPassword ? "input-error" : "input-success"
              }
            />
            <div onClick={() => setShowPwd(!showPwd)}>
              {showPwd ? (
                <img src={visible} className="icon" alt="Ver contraseña" />
              ) : (
                <img src={oculto} className="icon" alt="Ocultar contraseña" />
              )}
            </div>
          </div>
          {formErrors.repeatPassword && <p>{formErrors.repeatPassword}</p>}
        </div>

        {/* Botones */}
        <div className="buttonsgroup-register"> 
          <button type="submit" className="button-register"  onClick={mostrarAlerta1}>
            Registrar
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="button-cancel"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

/*
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

export default RegisterForm;*/
