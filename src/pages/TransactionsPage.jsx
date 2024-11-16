import TransactionTable from "../components/TransactionTable";
import "./TransactionsPage.css";

const TransactionsPage = () => {
  return (
    <div className="transactions-page">
      <h1>Movimientos</h1>
      <div className="transactions-table">
      <TransactionTable />
      </div>
    </div>
  );
}

export default TransactionsPage;