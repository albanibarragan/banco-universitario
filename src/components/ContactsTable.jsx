import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getContactListAPI } from "../api/modules";
import { ContactUpdateAPI } from "../api/modules";
import edit from "../assets/img/editar.png";
import delet from "../assets/img/eliminar.png";
import lupa from "../assets/img/lupa.png";
import see from "../assets/img/visible.png";
import "./../components/styles/ContactsTable.css";
import EditContact from "../components/Forms/ContactsForm/EditContact";

function ContactsTable() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [isEditing, setIsEditing] = useState(false); 
  const [selectedContact, setSelectedContact] = useState(null); 
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const columns = [
    { name: "Alias", selector: (row) => row.alias },
    { name: "Cuenta", selector: (row) => row.account_number },
    { name: "Descripcion", selector: (row) => row.description },
    {
      name: "Acciones",
      cell: (row) => (
        <div className="section-start">
          <button onClick={() => handleView(row)}>
            <img src={see} className="icon-info" alt="Ver" />
          </button>
          <button onClick={() => handleEdit(row)}>
            <img src={edit} className="icon-info" alt="Editar" />
          </button>
          <button onClick={() => handleDelete(row)}>
            <img src={delet} className="icon-info" alt="Eliminar" />
          </button>
        </div>
      ),
    },
  ];

  /* Estilos de la cabecera */
  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#085f63",
        color: "white",
        fontWeight: "bold",
        fontSize: "16px",
      },
    },
  };

  const getContactList = async () => {
    try {
      const response = await getContactListAPI();
      console.log("Datos recibidos:", response.data);
      if (response?.data) {
        setContacts(response.data);
        setFilteredContacts(response.data);
      } else {
        console.error("No se pudieron obtener los contactos.");
      }
    } catch (error) {
      console.error("Error al obtener los contactos:", error);
    }
  };

  const handleChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredRecords = contacts.filter((record) =>
      record.alias.toLowerCase().includes(searchTerm)
    );
    setFilteredContacts(filteredRecords);
  };

  const handleView = (row) => {
    alert(`Ver: ${row.alias}`);
  };

  const handleEdit = (row) => {
    setSelectedContact(row); 
    setIsEditing(true); 
  };

  const handleSave = async (updatedContact) => {
      try {
    // Llamada a la API para actualizar el contacto
    const response = await ContactUpdateAPI(updatedContact.id, updatedContact);
    if (response?.data) {
      setContacts(
        contacts.map((contact) =>
          contact.id === updatedContact.id ? updatedContact : contact
        )
      );
      setFilteredContacts(
        filteredContacts.map((contact) =>
          contact.id === updatedContact.id ? updatedContact : contact
        )
      );
      setIsEditing(false); 

      setConfirmationMessage("¡Contacto actualizado correctamente!");
       setTimeout(() => {
         setConfirmationMessage(""); // El mensaje se limpia después de 3 segundos
       }, 3000);

    } else {
      console.error("No se pudo actualizar el contacto.");
    }
  } catch (error) {
    console.error("Error al guardar los cambios:", error);
  }
  };

  const handleDelete = (row) => {
    const updatedContacts = contacts.filter((record) => record !== row);
    setContacts(updatedContacts);
    setFilteredContacts(updatedContacts);
    alert(`Eliminar: ${row.alias}`);
  };

  useEffect(() => {
    getContactList();
  }, []);

  return (
    <div>
      {isEditing && confirmationMessage && (
        <div className="confirmation-message">{confirmationMessage}</div>
      )}
      {isEditing && (
        <EditContact
          contact={selectedContact}
          handleSave={handleSave}
          setIsEditing={setIsEditing}
        />
      )}

      <div className="input">
        <input
          className="input-transaction-table"
          type="text"
          onChange={handleChange}
          placeholder="Buscar por alias"
        />
        <img className="icon" src={lupa} alt="Buscar" />
      </div>
      <div className="transaction-table">
        <DataTable
          columns={columns}
          data={filteredContacts}
          customStyles={customStyles}
          selectableRows
          pagination
          paginationPerPage={10}
          fixedHeader
        />
      </div>
    </div>
  );
}

export default ContactsTable;
