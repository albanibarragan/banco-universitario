import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./pages/principal/principal";
import Service1 from "./pages/principal/Services/Service1";
import Service2 from "./pages/principal/Services/Service2";
import Service3 from "./pages/principal/Services/Service3";
import Service4 from "./pages/principal/Services/Service4";
import Service5 from "./pages/principal/Services/Service5";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
