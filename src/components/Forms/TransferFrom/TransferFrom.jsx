import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState } from "react";
import "./TransferFrom.css";

const TransferFrom = () => {

  const [isUsingContacts, setIsUsingContacts] = useState(false); 
  const [accountNumber, setAccountNumber] = useState('');
  const [selectedContact, setSelectedContact] = useState('');

  const handleSwitchChange  = (event) => {
    setIsUsingContacts(event.target.checked);
    if (event.target.checked) {
      setAccountNumber(''); 
    }
  };

  const handleContactChange = (event) => {
    setSelectedContact(event.target.value);
  };

  const handleAccountChange = (event) => {
    setAccountNumber(event.target.value);
  };

    return (
        <div className="form-box-transfer">
            <h2 className="tittle-transfer">Realizar transferencia</h2>
            <form className="form-transfer">
                <div className="input-group">
                    <label htmlFor="cardNumber">Numero de cuenta</label>
                    <input 
                     type="text" 
                     id="cardNumber"
                     placeholder="4242 **** **** ****"
                    />
                </div>
              <div className="input-group transfer-contact">
              <FormControlLabel
                  control={
                    <Switch
                      checked={isUsingContacts}
                      onChange={handleSwitchChange}
                      inputProps={{ 'aria-label': 'controlled' }}
                      color="warning"
                    />
                  }
                  label="Desde mis contactos"
                />
                {isUsingContacts ? (
                  <select className="trans-select-contact" value={selectedContact}  onChange={handleContactChange} >
                    <option value="1">Albani</option>
                    <option value="2">Maria</option>
                    <option value="3">Juana</option>
                  </select>
                ) : (
                  <div className="input-group">
                  <label>Número de cuenta</label>
                      <input
                        value={accountNumber}
                         onChange={handleAccountChange}
                        type="text"
                        name="accountNumber"
                        placeholder="9012 **** **** 5678"
                      />
                  </div>
                )
                }
              </div>
              <div className="input-group">
                <label>Monto</label>
                <input
                  type="text"
                  name="amount"
                  placeholder="0.00 Bs"
                />
              </div>
              <div className="input-group">
                <label>Descripción</label>
                <input
                  type="text"
                  name="description"
                  placeholder="Descripción"
                />
              </div>
              <div className="buttons-transfer">
                <button className="button-transfer" type="submit">Pagar</button>
                <button type="button">
                Cancelar
              </button>
              </div> 
            </form>
        </div>
    );
}

export default TransferFrom;