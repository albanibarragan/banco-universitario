import NewContact from "../components/Forms/ContactsForm/NewContact";
import "./CreateContact.css";

const CreateContact = () => {
  return (
    <div className="newcontact">
      <h1>Nuevo contacto</h1>
      <div className="newcontact-container">
        <NewContact />
      </div>
    </div>
  );
};

export default CreateContact;
