import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomeContent from "./components/HomeContent";
import InitContent from './components/InitContent';
import LandingContent from './components/LandingContent';
import HomePage from "./pages/HomePage";
import InfoPage from './pages/InfoPage';
import LandingPage from './pages/LandingPage';
import Login from './pages/login/Login';
import Register from './pages/register/register';
import TransferPage from './pages/TransferPage';

function App() {
    {/*Componente principal encargado del enrutamiento de la aplicación. */}
    return (
       <Router>
         {/* Contenedor para definir las diferentes rutas de la aplicación.*/}
     <Routes>
      {/* Rutas de la Landing page (con Header y Footer fijos) */}
     <Route element={<LandingContent />}>  {/* Contenedor principal de la landing page  */}
          <Route path="/" element={<LandingPage />} />  {/* Contenido de la landing page  */}
          <Route path="/:page" element={<InfoPage />} />      {/* Contenedor del contenido de las paginas de servicios, mision y demás cambia dependiendo el parametro  */}  
     </Route>
          {/* Rutas de la banca en línea (con Header y Footer fijos) */}
          <Route element={<HomeContent />}>
            <Route path="/Home" element={<HomePage />} />{" "}
            <Route path="/transferencia" element={<TransferPage />} /> 
            {/* Principal de la banca en linea */}
          </Route>
          <Route element={<InitContent />}>
          <Route path="/login" element={<Login />} />{" "}
          <Route path="/register" element={<Register />} />{" "}
          </Route>
        </Routes>
      </Router>
    );
  }
  
  export default App;