import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./pages/principal/principal";
import Service1 from "./pages/principal/Services/Service1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />}></Route>
        <Route path="/service1" element={<Service1 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
