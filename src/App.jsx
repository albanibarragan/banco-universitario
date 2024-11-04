import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./pages/Landing page/Principal";
import Service1 from "./pages/Servicios/Service1";
import Service2 from "./pages/Servicios/Service2";
import Service3 from "./pages/Servicios/Service3";
import Service4 from "./pages/Servicios/Service4";
import Service5 from "./pages/Servicios/Service5";
import Mision from "./pages/Quienes-somos/Mision";
import Vision from "./pages/Quienes-somos/Vision";
import Objetivos from "./pages/Quienes-somos/Objetivos";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />}></Route>
        <Route path="services/service1" element={<Service1 />}></Route>
        <Route path="services/service2" element={<Service2 />}></Route>
        <Route path="services/service3" element={<Service3 />}></Route>
        <Route path="services/service4" element={<Service4 />}></Route>
        <Route path="services/service5" element={<Service5 />}></Route>
        <Route path="Quienes-somos/mision" element={<Mision />}></Route>
        <Route path="Quienes-somos/vision" element={<Vision />}></Route>
        <Route path="Quienes-somos/objetivos" element={<Objetivos />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
