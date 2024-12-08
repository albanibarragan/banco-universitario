


const NewContact = () => {

        return (
        <div className="form-box-transfer">
            <form className="form-transfer">
                <div className="input-group">
                    <label htmlFor="cardNumber">Numero de cuenta</label>
                    <input 
                     type="text" 
                     id="cardNumber"
                     placeholder="8628 **** **** ****"
                    />
                </div>
              <div className="input-group">
                <label>Alias</label>
                <input
                  type="text"
                  id="alias"
                  placeholder="John Dae"
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
                <button className="button-transfer" type="submit">Guardar</button>
                <button type="button">
                Cancelar
              </button>
              </div> 
            </form>
        </div>
    );
}

export default NewContact;
