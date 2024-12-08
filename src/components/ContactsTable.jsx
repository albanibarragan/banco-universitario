import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getContactListAPI } from "../api/modules";
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
    { name: "Cuenta", selector: (row) => row.account_number},
    { name: "Descripcion", selector: (row) => row.description},
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

  /*estilos de la cabecera */
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

  useEffect(() => {
    getContactList();
  }, []);


  const handleView = (row) => {
    alert(`Ver: ${row.alias}`);
  };

  const handleEdit = (row) => {
    alert(`Editar: ${row.alias}`);
  };

  const handleDelete = (row) => {
    const updatedContacts = contacts.filter((record) => record !== row);
    setContacts(updatedContacts);
    setFilteredContacts(updatedContacts);
    alert(`Eliminar: ${row.alias}`);
  };

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
