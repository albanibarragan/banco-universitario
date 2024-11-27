import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { green, red } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMovementsAPI } from "../api/modules/movement.js";
import { selectUserLogged } from '../redux/user/userSlice.js';
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
      
        return `$${formattedBalance}`;
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
    const isLogged = useSelector(selectUserLogged);
    const [searchTerm, setSearchTerm] = useState('');

     const getMovements = async () => {
        let apiParams = {
            page_size: rowsPerPage,
            page: page + 1
        }

        if (multiplierFilter !== 0) {
            apiParams.multiplier = multiplierFilter;
          }

          try{
            const response = await getMovementsAPI(apiParams);
            if (response?.errors?.length) {
                throw new Error(getAPIError(response.errors))
            }
            setMovements(response.data);
            setTotalCount(Number(response.headers["x-pagination-total-count"]))
          }catch (error) {
            console.error("Error fetching movements:", error);
          }
    }

    useEffect(() => {
        getMovements()
    }, [page, rowsPerPage, multiplierFilter, searchTerm]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage); 
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const filteredMovements = movements.filter((movement) => 
      movement.id.toString().includes(searchTerm) || 
      movement.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return (
        <TableContainer component={Paper}>
          <input
            type="text"
            placeholder="Referencia"
            onChange={(e) => setSearchTerm(e.target.value)}
           value={searchTerm}
            className="input-transaction-table"
          />
    
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
              {filteredMovements.map((movement) => (
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