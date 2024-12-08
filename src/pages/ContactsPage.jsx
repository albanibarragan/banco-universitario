import ContactsTable from "../components/ContactsTable";
import "./ContactsPage.css";

const ContactsPage = () => {
  return (
    <div className="contacts-page">
      <h1>Contactos</h1>
      <div className="contacts-table">
        <ContactsTable />
      </div>
    </div>
  );
};

export default ContactsPage;
