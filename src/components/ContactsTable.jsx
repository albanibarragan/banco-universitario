import { useState } from "react";
import edit from "../assets/img/editar.png";
import delet from "../assets/img/eliminar.png";
import lupa from "../assets/img/lupa.png";
import see from "../assets/img/visible.png";
import "./../components/styles/ContactsTable.css";

function ContactsTable() {
  const columns = [
    { name: "Alias", selector: (row) => row.alias },
    { name: "Cuenta", selector: (row) => row.cuenta },
    { name: "Descripcion", selector: (row) => row.descripcion },
    {
      name: "Acciones",
      cell: (row) => (
        <div className="section-start">
          <button onClick={() => handleView(row)}>
            <img src={see} className="icon-info" />
          </button>
          <button onClick={() => handleEdit(row)}>
            <img src={edit} className="icon-info" />
          </button>
          <button onClick={() => handleDelete(row)}>
            <img src={delet} className="icon-info" />
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

  const data = [
    { alias: "chela", cuenta: "123456789", descripcion: "cantina" },
    { alias: "lucia", cuenta: "123456889", descripcion: "panaaa" },
    { alias: "lucas", cuenta: "123456789", descripcion: "copias" },
    { alias: "marcos", cuenta: "123456889", descripcion: "panitaa" },
  ];

  const [records, setRecords] = useState(data);

  const handleChange = (e) => {
    const filteredRecords = data.filter((record) => {
      return record.alias.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setRecords(filteredRecords);
  };

  /* eventos de las acciones*/

  const handleView = (row) => {
    alert(`Ver: ${row.alias}`);
  };

  const handleEdit = (row) => {
    alert(`Editar: ${row.alias}`);
  };

  const handleDelete = (row) => {
    const updatedRecords = records.filter((record) => record !== row);
    setRecords(updatedRecords);
    alert(`Eliminar: ${row.alias}`);
  };

  return (
    <div>
      <div className="input">
        <input
          className="input-transaction-table"
          type="text"
          onChange={handleChange}
          placeholder="alias"
        />
        <img className="icon" src={lupa}></img>
      </div>
      <div className="transaction-table">
       {/* <DataTable
          columns={columns}
          data={records}
          customStyles={customStyles}
          selectableRows
          pagination
          paginationPerPage={10}
          onSelectedRowsChange={(data) => console.log(data)}
          fixedHeader
        />*/}
      </div>
    </div>
  );
}

export default ContactsTable;
