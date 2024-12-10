import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { deleteContactAPI, getContactListAPI, getUserAPI } from "../api/modules";
import edit from "../assets/img/editar.png";
import delet from "../assets/img/eliminar.png";
import lupa from "../assets/img/lupa.png";
import see from "../assets/img/visible.png";
import "./../components/styles/ContactsTable.css";

function ContactsTable() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);

  const columns = [
    { name: "Alias", selector: (row) => row.alias },
    { name: "Cuenta", selector: (row) => row.account_number },
    { name: "Descripción", selector: (row) => row.description },
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
          <button onClick={() => handleDeleteContact(row.id)}>
            <img src={delet} className="icon-info" alt="Eliminar" />
          </button>
        </div>
      ),
    },
  ];

  // Estilo personalizado para la tabla
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

  // Obtener la lista de contactos desde la API
  const getContactList = async () => {
    try {
      const response = await getContactListAPI();
      console.log("Datos recibidos:", response?.data);
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
  const getUser = async (contactId) => {
    try {
      const response = await getUserAPI(contactId); 
      if (response?.errors?.length) {
        throw new Error(response.errors[0].message); 
      }
  
      if (response?.data) {
        const user = response.data.user;
        const contactDetails = `
          Alias: ${response.data.alias || "No especificado"}
          Número de Cuenta: ${response.data.account_number || "No especificado"}
          Correo: ${user?.email || "No especificado"}
          Teléfono: ${user?.phone_number || "No especificado"}
          Descripción: ${response.data.description || "No especificado"}
        `;
  
        swal({
          title: "Información del contacto",
          text: contactDetails,
          icon: "info",
          buttons: ["Cerrar"]
        });
      } else {
        swal("No se pudo obtener la información del contacto.", "", "error");
      }
    } catch (error) {
      console.error("Error al obtener los detalles del contacto:", error);
      swal("Error al obtener los detalles del contacto.", "", "error");
    }
  };
  

  const handleView = (row) => {
    console.log("Datos seleccionados:", row);  
  
    getUser(row.id);  
  };

  const handleEdit = (row) => {
    alert(`Editar: ${row.alias}`);
  };


  const handleDeleteContact = async (contactID) => {
    try {
      await deleteContactAPI(contactID);
      getContactList();
    } catch (error) {
      console.error('Error al eliminar contacto:', error);
      return enqueueSnackbar('error insperado al eliminar contacto', { variant: "error" })
    }
  }

  useEffect(() => {
    getContactList();
  }, []);

  return (
    <div>
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
