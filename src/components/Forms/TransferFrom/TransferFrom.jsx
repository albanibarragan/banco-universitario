import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import swal from "sweetalert";
import { createMovementAPI, getContactListAPI } from '../../../api/modules';
import { selectUserLogged } from '../../../redux/user/userSlice';
import "./TransferFrom.css";

const TransferFrom = () => {
  const [isUsingContacts, setIsUsingContacts] = useState(false); 
  const userLogged = useSelector(selectUserLogged);
  const [accountNumber, setAccountNumber] = useState('');
  const [selectedContact, setSelectedContact] = useState('');
  const [contacts, setContacts] = useState([]);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    mode: 'onSubmit', // Validar solo al enviar
  });

  const mostrarAlerta1 = () => {
    swal({
      text: "¡Tu transferencia se realizó exitosamente!",
      icon: "success",
      button: "Aceptar",
    }).then((respuesta) => {
      if (respuesta) {
        window.location.href = "/Home";
      }
    });
  };

  const mostrarAlerta2 = () => {
    swal({
      text: "¿Estás seguro que deseas cancelar el proceso?",
      icon: "info",
      buttons: ["No", "Sí"]
    }).then(respuesta => {
      if (respuesta) {
        window.location.href = "/Home"; 
      }
    });
  };

  const getContactList = async () => {
    try {
      const response = await getContactListAPI(); 
      if (response?.data) {
        setContacts(response.data);
      } else {
        console.error("No se pudieron obtener los contactos.");
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
      setContacts([]); 
    }
  };

  const handleSwitchChange = (event) => {
    setIsUsingContacts(event.target.checked);
    if (event.target.checked) {
      setAccountNumber(''); 
    }
  };

  const handleContactChange = (event) => {
    const selectedId = event.target.value;
    setSelectedContact(selectedId);
  
    const selectedContactInfo = contacts.find(contact => contact.id === parseInt(selectedId));
  
    if (selectedContactInfo) {
      setAccountNumber(selectedContactInfo.account_number);
      setValue('account_number', selectedContactInfo.account_number); 
    }
  };
  const handleAccountChange = (event) => {
    setAccountNumber(event.target.value);
    setValue('account_number', event.target.value); 
  };

  const onSubmit = async (data) => {
    console.log(data);
    if (!data.account_number || !data.amount || !data.description) {
      swal("Error", "Todos los campos son obligatorios", "error");
      return;
    }

    try {
      const transferData = {
        account_number: data.account_number,
        amount: parseFloat(data.amount), 
        description: data.description,
      };

      const response = await createMovementAPI(transferData);
      if (response?.data) {
        console.log("Respuesta de la API de transferencia:", response.data);
        mostrarAlerta1();  
      } else {
        swal("Error", "Hubo un problema con la transferencia.", "error");
      }
    } catch (error) {
      console.error("Error al realizar la transferencia:", error);
      swal("Error", "Error al realizar la transferencia.", "error");
    }
  };

  useEffect(() => {
    if (isUsingContacts) {
      getContactList();
    } else {
      setContacts([]); 
    }
  }, [isUsingContacts]);

  return (
    <div className="form-box-transfer">
      <h2 className="tittle-transfer">Realizar transferencia</h2>
      <form className="form-transfer" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <label htmlFor="cardNumber">Número de cuenta</label>
          <input
            type="text"
            id="cardNumber"
            {...register("account_number", {
              required: "El número de cuenta es obligatorio",
              validate: isUsingContacts ? value => true : value => value.trim() !== '' || "El número de cuenta es obligatorio"
            })}
            value={accountNumber}
            onChange={handleAccountChange}
            placeholder="4242 **** **** ****"
            disabled={isUsingContacts}
          />
          {errors.account_number && <span>{errors.account_number.message}</span>}
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
           <select className="trans-select-contact" value={selectedContact} onChange={handleContactChange}>
           <option value="">Selecciona un contacto</option>
           {contacts.length > 0 ? (
             contacts.map((contact) => (
               <option key={contact.id} value={contact.id}>
                 {contact.alias}
               </option>
             ))
           ) : (
             <option disabled>No hay contactos disponibles</option>
           )}
         </select>
          ) : (
            <div className="input-group">
              <label>Número de cuenta</label>
              <input
                value={accountNumber}
                onChange={handleAccountChange}
                type="text"
                name="account_number"
                placeholder="9012 **** **** 5678"
              />
            </div>
          )}
        </div>

        <div className="input-group">
          <label>Monto</label>
          <input
            type="text"
            name="amount"
            {...register("amount", { required: "El monto es obligatorio" })}
            placeholder="0.00 Bs"
          />
          {errors.amount && <span>{errors.amount.message}</span>}
        </div>

        <div className="input-group">
          <label>Descripción</label>
          <input
            type="text"
            name="description"
            {...register("description", { required: "La descripción es obligatoria" })}
            placeholder="Descripción"
          />
          {errors.description && <span>{errors.description.message}</span>}
        </div>

        <div className="buttons-transfer">
          <button className="button-transfer" type="submit">Pagar</button>
          <button type="button" onClick={mostrarAlerta2}>Cancelar</button>
        </div> 
      </form>
    </div>
  );
}

export default TransferFrom;
