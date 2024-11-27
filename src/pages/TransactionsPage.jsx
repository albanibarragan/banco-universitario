import MovementTable from "../components/MovementTable";
import "./TransactionsPage.css";

const TransactionsPage = () => {
  return (
    <div className="transactions-page">
      <h1>Movimientos</h1>
      <div className="transactions-table">
      <MovementTable />
      </div>
    </div>
  );
}

export default TransactionsPage;