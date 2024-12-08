import { NavLink } from "react-router-dom";

const Service = ({ icon, link, text }) => {
  return (
    <div className="service">
      <div className="service-icon-container">
        <img 
          src={icon} 
          className="service-icon" 
          loading="lazy" 
          alt={text || "Icon"} 
        />
      </div>
      {link ? (
        <NavLink to={link} className="service-text">
          {text}
        </NavLink>
      ) : (
        <p className="service-text">{text}</p>
      )}
    </div>
  );
};

export default Service;