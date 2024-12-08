import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getBalanceAPI } from "../api/modules/user";
import { selectUserLogged } from "../redux/user/userSlice";
import { getAPIError } from "../utils/helpers";
import "./styles/AccountBox.css";

// Función para formatear el número a dos decimales con comas para miles
export function ccyFormat(num) {
  return num.toLocaleString('es-VE', { style: 'currency', currency: 'VES', minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

const AccountBox = () => {
  const userLogged = useSelector(selectUserLogged);
  const [balance, setBalance] = useState(null);  

  const getBalance = async () => {
    try {
      const response = await getBalanceAPI();
      if (response?.errors?.length) {
        throw new Error(getAPIError(response.errors));
      }
      setBalance(response.data);  
    } catch (error) {
      console.error("Error fetching balance:", error);
      setBalance(null);  
    }
  };

  useEffect(() => {
    if (userLogged) {
      getBalance();
    }
  }, [userLogged]);

  const balanceValue = balance?.balance ?? 0; 

  return (
    <div className="account-balance-box">
      <p>Balance actual (Bs.)</p>
      <p>{balance !== null ? `${ccyFormat(balanceValue)}` : "Cargando..."}</p>
    </div>
  );
};

export default AccountBox;
