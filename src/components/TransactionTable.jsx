import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { useState } from "react";
import { data } from "./movimientos.js"; // Asegúrate de que 'data' es un array de objetos
import "./styles/TransactionTable.css";

const TransactionTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(0); // Página actual
    const [rowsPerPage, setRowsPerPage] = useState(10); // Filas por página

    let sortedData = data.sort((a, b) =>{
        const dateA = new Date(a.fecha.split("-").reverse().join("-"))
        const dateB = new Date(b.fecha.split("-").reverse().join("-"))

        return dateB - dateA; //para comparar cual esta primero
    })

    // Filtrar los datos según el término de búsqueda
    const filteredData = sortedData.filter((row) => {
        return row.referencia.toString().includes(searchTerm); // Filtrar por referencia
    });

    // Manejo de cambio de página
    const handleChangePage = (event, newPage) => {
        setPage(newPage); // Cambia la página actual
    };

    // Manejo del cambio de filas por página
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10)); // Cambia las filas por página
        setPage(0); // Vuelve a la primera página
    };

    // Datos paginados
    const paginatedData = filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <TableContainer component={Paper}>
            <input type="text"
             placeholder="Referencia"
             onChange={(e) => setSearchTerm(e.target.value)}
             value={searchTerm}
             className="input-transaction-table"/>
            <Table>
                <TableHead  className="transaction-table">
                    <TableRow className="transaction-table-head">
                        <TableCell>Fecha</TableCell>
                        <TableCell>Descripción</TableCell>
                        <TableCell>Referencia</TableCell>
                        <TableCell>Monto</TableCell>
                        <TableCell>Balance</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {paginatedData.map((data, index) => (
                        <TableRow key={index} className="transaction-row">
                            <TableCell>{data.fecha}</TableCell> 
                            <TableCell>{data.descripcion}</TableCell>
                            <TableCell>{data.referencia}</TableCell>
                            <TableCell>{data.monto}</TableCell>
                            <TableCell>{data.balance}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TablePagination
                 rowsPerPageOptions={[5, 10, 25]} 
                 count={filteredData.length}
                 rowsPerPage={rowsPerPage}
                 page={page}
                 onPageChange={handleChangePage}
                 onRowsPerPageChange={handleChangeRowsPerPage}
                 />
            </Table>
        </TableContainer>
    );
};

export default TransactionTable;