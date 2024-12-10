import { useState } from "react";
import { ContactAddAPI } from "../../../api/modules/contact";
import { useSnackbar } from "notistack";
import { getAPIError } from "../../../utils/helpers";

const NewContact = () => {
  // Definir los estados para cada campo
  const [accountNumber, setAccountNumber] = useState("");
  const [alias, setAlias] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false); 
  const { enqueueSnackbar } = useSnackbar();

  // Función para manejar el cambio en los inputs
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "account_number") setAccountNumber(value);
    if (id === "alias") setAlias(value);
    if (id === "description") setDescription(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiValues = {
      account_number: accountNumber, 
      alias,
      description,
    };

    setLoading(true);
    try {
      const response = await ContactAddAPI(apiValues);
      console.log("Respuesta:", response.data);

      setLoading(false);

      if (response.errors && response.errors.length > 0) {
        enqueueSnackbar(getAPIError(response.errors), {
          variant: "error",
        });
        return;
      }

      enqueueSnackbar("Contacto agregado correctamente", {
        variant: "success",
      });
    } catch (error) {
      setLoading(false);
      enqueueSnackbar("Hubo un error al agregar el contacto", {
        variant: "error",
      });
      console.error(error);
    }
  };

  const handleCancel = () => {
    setAccountNumber("");
    setAlias("");
    setDescription("");
  };

  return (
    <div className="form-box-transfer">
      <form className="form-transfer" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Numero de cuenta</label>
          <input
            type="text"
            id="account_number"
            placeholder="8628************"
            value={accountNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label>Alias</label>
          <input
            type="text"
            id="alias"
            placeholder="John Dae"
            value={alias}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label>Descripción</label>
          <input
            type="text"
            id="description"
            placeholder="Descripción"
            value={description}
            onChange={handleInputChange}
          />
        </div>
        <div className="buttons-transfer">
          <button className="button-transfer" type="submit" disabled={loading}>
            {loading ? "Guardando..." : "Guardar"}
          </button>
          <button type="button" onClick={handleCancel}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewContact;
