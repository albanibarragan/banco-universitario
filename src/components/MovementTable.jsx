import { MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Typography } from "@mui/material";
import { green, red } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { getMovementsAPI } from "../api/modules/movement.js";
import { getAPIError } from "../utils/helpers.js";
import "./styles/TransactionTable.css";

  //formateo de fecha
  const formatDate = (date) => {
    return new Date(date).toLocaleString("es")
  }

     //formatear el balance 
     const formatBalance = (balance) => {
        if (typeof balance !== 'number') {
          return 'Saldo no disponible';
        }
      
        const formattedBalance = balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      
        return `${formattedBalance} Bs.S`;
      };

      const printAmount = (amount, multiplier) => {
        const color = multiplier === -1 ? red[500] : green[500]
        return <Typography sx={{ color }}>
             {formatBalance(amount)} 
        </Typography>
    }

const MovementTable = () => {

    const [page, setPage] = useState(0); 
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [multiplierFilter, setMultiplierFilter] = useState(0);
    const [movements, setMovements] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    const getMovements = async () => {
      let apiParams = {
          page_size: rowsPerPage,
          page: page + 1,
          multiplier: multiplierFilter !== 0 ? multiplierFilter : undefined,
          search: searchTerm || undefined,
      };
  
      try {
          const response = await getMovementsAPI(apiParams);
          if (response?.errors?.length) {
              throw new Error(getAPIError(response.errors));
          }
          setMovements(response.data);
          setTotalCount(Number(response.headers["x-pagination-total-count"]));
      } catch (error) {
          console.error("Error fetching movements:", error);
      }
  };

  useEffect(() => {
    getMovements();
}, [page, rowsPerPage, multiplierFilter, searchTerm]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage); 
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const availableMultiplierFilters = [
      {
          value: 0,
          label: "Todos"
      },
      {
          value: 1,
          label: "Créditos"
      },
      {
          value: -1,
          label: "Débitos"
      }
  ]

    return (
      <TableContainer component={Paper}>
      <TextField
          name="filter"
          value={multiplierFilter}
          onChange={(e) => setMultiplierFilter(Number(e.target.value))}
          select
          fullWidth
          margin="normal"
          label="Filtrar por tipo"
      >
          {availableMultiplierFilters.map((filter) => (
              <MenuItem key={filter.value} value={filter.value}>
                  {filter.label}
              </MenuItem>
          ))}
      </TextField>
          <Table>
        <TableHead className="transaction-table">
            <TableRow className="transaction-table-head">
                <TableCell>Fecha</TableCell>
                <TableCell>Descripción</TableCell>
                <TableCell>Referencia</TableCell>
                <TableCell>Monto</TableCell>
                <TableCell>Balance</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {movements.map((movement) => (
                <TableRow key={movement.id} className="transaction-row">
                    <TableCell>{formatDate(movement.created_at)}</TableCell>
                    <TableCell>{movement.description}</TableCell>
                    <TableCell>{movement.id}</TableCell>
                    <TableCell>
                        {printAmount(movement.amount, movement.multiplier)}
                    </TableCell>
                    <TableCell>{formatBalance(movement.balance)}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
          {/* Paginación */}
          <TablePagination
             rowsPerPageOptions={[5, 10, 25]}
             count={totalCount}
             rowsPerPage={rowsPerPage}
             page={page}
             onPageChange={handleChangePage}
             onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      );
    };

export default MovementTable;