import { useState, useEffect } from "react";

const EditContact = ({ contact, handleSave, setIsEditing }) => {
  const [editedContact, setEditedContact] = useState(contact);

  useEffect(() => {
    setEditedContact(contact); 
  }, [contact]);

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setEditedContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(editedContact); // Guardamos los cambios
  };

  return (
    <div className="edit-form">
      <h2>Editar Contacto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Alias:
          <input
            type="text"
            name="alias"
            value={editedContact.alias}
            onChange={handleChangeForm}
          />
        </label>
        <label>
          Cuenta:
          <input
            type="text"
            name="account_number"
            value={editedContact.account_number}
            onChange={handleChangeForm}
          />
        </label>
        <label>
          Descripción:
          <input
            type="text"
            name="description"
            value={editedContact.description}
            onChange={handleChangeForm}
          />
        </label>
        <div className="buttons-transfer">
          <button type="submit">Guardar Cambios</button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditContact;
