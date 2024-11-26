import { useState } from "react";
import DataTable from "react-data-table-component";


function Contacts() {

    const columns = [
      { name: "Alias", selector: (row) => row.alias },
      { name: "Cuenta", selector: (row) => row.cuenta },
      { name: "Descripcion", selector: (row) => row.descripcion},
    ];

    const data = [
      { alias: "chela", cuenta: "123456789", descripcion: "cantina" },
      { alias: "lucia", cuenta: "123456889", descripcion: "panaaa" },
      { alias: "lucas", cuenta: "123456789", descripcion: "canthhhhina" },
      { alias: "marcos", cuenta: "123456889", descripcion: "panaiiiaa" },
    ];

    const [records, setRecords] = useState(data)

    const handleChange = (e) => {
        const filteredRecords = data.filter(record => {
            return record.alias.toLowerCase().includes(e.target.value.toLowerCase())})
        setRecords(filteredRecords)
    }

  return (
    <div>
      <h1>Contactos frecuentes</h1>
      <input type="text" onChange={handleChange}/>
      <DataTable
        columns={columns}
        data={records}
        selectableRows
        pagination
        paginationPerPage={2}
        onSelectedRowsChange={data=> console.log(data)}
        fixedHeader
        />
    </div>
  );
}

export default Contacts;
