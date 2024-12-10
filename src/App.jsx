import { Box, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, BrowserRouter as Router, Routes, useLocation, useNavigate } from 'react-router-dom';
import HomeContent from "./components/HomeContent";
import InitContent from './components/InitContent';
import LandingContent from './components/LandingContent';
import ContactsPage from './pages/ContactsPage';
import CreateContact from './pages/CreateContact';
import HomePage from "./pages/HomePage";
import InfoPage from './pages/InfoPage';
import LandingPage from './pages/LandingPage';
import Login from './pages/login/Login';
import PositionPage from './pages/PositionPage';
import ProfilePage from './pages/ProfilePage';
import Register from './pages/register/register';
import TransactionsPage from './pages/TransactionsPage';
import TransferPage from './pages/TransferPage';
import { selectIsLogged, whoAmI } from './redux/user/userSlice';
import { getJWT } from './utils/localStorage';


function RequireAuth({ children }) {
  const isLogged = useSelector(selectIsLogged);
  let location = useLocation();

  if (!isLogged) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function KeepLogged({ children }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isLogged = useSelector(selectIsLogged);
  const jwt = getJWT()

  if (jwt && !isLogged) { 
    dispatch(whoAmI())
    .unwrap()
    .catch(() => {
      navigate("/login")
    })


    return <Box sx={{ display: 'flex', justifyContent: "center", mt: 5 }}>
      <CircularProgress size={100} />
    </Box>
  }
  return children
}

function NotFound() {
  const isLogged = useSelector(selectIsLogged);

  if (isLogged) {
    return <Navigate replace to="/Movimientos" />
  }
  return <Navigate replace to="/login" />
}


function App() {
    {/*Componente principal encargado del enrutamiento de la aplicación. */}
    return (
       <Router>
         {/* Contenedor para definir las diferentes rutas de la aplicación.*/}
    <KeepLogged>
     <Routes>
      {/* Rutas de la Landing page (con Header y Footer fijos) */}
     <Route element={<LandingContent />}>  {/* Contenedor principal de la landing page  */}
          <Route path="/" element={<LandingPage />} />  {/* Contenido de la landing page  */}
          <Route path="/:page" element={<InfoPage />} />      {/* Contenedor del contenido de las paginas de servicios, mision y demás cambia dependiendo el parametro  */}  
     </Route>
          {/* Rutas de la banca en línea (con Header y Footer fijos) */}
          <Route element={<HomeContent />}>
            <Route path="/Home" element={<RequireAuth><HomePage /></RequireAuth>} />{" "}
            <Route path="/Posicion" element={<RequireAuth><PositionPage /></RequireAuth>} /> 
            <Route path="/Transferencia" element={<RequireAuth><TransferPage /></RequireAuth>} /> 
            <Route path="/Movimientos" element={<RequireAuth><TransactionsPage /></RequireAuth>} /> 
            <Route path="/Contactos" element={<RequireAuth><ContactsPage /></RequireAuth>} />
            <Route path="/Perfil" element={<RequireAuth><ProfilePage /></RequireAuth>} /> 
            <Route path="/Agregar-Contacto" element={<RequireAuth><CreateContact/></RequireAuth>} />
            <Route path="*" element={<NotFound/>} />
            {/* Principal de la banca en linea */}
          </Route>
          <Route element={<InitContent />}>
          <Route path="/login" element={<Login />} />{" "}
          <Route path="/register" element={<Register />} />{" "}
          </Route>
        </Routes>
        </KeepLogged>
      </Router>
    );
  }
  
  export default App;