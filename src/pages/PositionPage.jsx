import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getBalanceAPI } from "../api/modules";
import { selectUserLogged } from "../redux/user/userSlice";
import { getAPIError } from "../utils/helpers";
import "./PositionPage.css";

export function ccyFormat(num) {
    return num.toLocaleString('es-VE', { style: 'currency', currency: 'VES', minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

function PositionPage() {
    const [balance, setBalance] = useState(null);  
    const userLogged  = useSelector(selectUserLogged);

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
        <div className="position-page">
          <h2 className="title-position">Posición Consolidada</h2>
          <div className="info-position">
            <div className="info-item">
              <span className="label">Nombre:</span>
              <span className="value">{userLogged?.first_name || 'N/A'}</span>
            </div>
            
            <div className="info-item">
              <span className="label">Apellido:</span>
              <span className="value">{userLogged?.last_name || 'N/A'}</span>
            </div>
    
            <div className="info-item">
              <span className="label">Número de Cuenta:</span>
              <span className="value">{userLogged?.account_number || 'N/A'}</span>
            </div>
    
            <div className="info-item">
              <span className="label">Saldo Disponible:</span>
              <span className="value">{balance !== null ? `${ccyFormat(balanceValue)}` : "0.00"} Bs</span>
            </div>
          </div>
        </div>
      );
  }
  
  export default PositionPage;