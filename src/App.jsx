import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./pages/principal/principal";
import Service1 from "./pages/principal/Services/Service1";
import Service2 from "./pages/principal/Services/Service2";
import Service3 from "./pages/principal/Services/Service3";
import Service4 from "./pages/principal/Services/Service4";
import Service5 from "./pages/principal/Services/Service5";
import Sucursal from "./components/sucursales/sucursal";
import LoginForm from "./components/Forms/LoginForm";



function App() {
  return (
    <BrowserRouter>
     <LoginForm />
    </BrowserRouter>
  );
}

export default App;
