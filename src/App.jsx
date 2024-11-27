import { useDispatch, useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';
import HomeContent from "./components/HomeContent";
import InitContent from './components/InitContent';
import LandingContent from './components/LandingContent';
import HomePage from "./pages/HomePage";
import InfoPage from './pages/InfoPage';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login/Login';
import Register from './pages/register/register';
import TransactionsPage from './pages/TransactionsPage';
import TransferPage from './pages/TransferPage';
import { selectIsLogged } from './redux/user/userSlice';
import { getJWT } from './utils/localStorage';



function KeepLogged({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogged = useSelector(selectIsLogged);//selectIsLogged
  const jwt = getJWT(); // Obtiene el JWT almacenado en localStorage
  console.log("hola: " + jwt);

 /* if (jwt && !isLogged) { 
    // Si hay un JWT pero el usuario no está autenticado en Redux,
    // se hace una solicitud al servidor para verificar al usuario
    dispatch(whoAmI()) // Acción para verificar la identidad del usuario
      .unwrap()
      .catch(() => {
        navigate("/login"); // Si no se puede verificar, redirige al login
      });

    // Muestra un indicador de carga mientras se verifica el JWT
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <CircularProgress size={100} />
      </Box>
    )
  }
  */
  // Si el usuario ya está autenticado o no es necesario verificar el JWT, renderiza los hijos
  return children;
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
            <Route path="/Home" element={<HomePage />} />
            <Route path="/Transferencia" element={<TransferPage />} /> 
               <Route path="/Movimientos" element={<TransactionsPage />} /> 
            {/* Principal de la banca en linea */}
          </Route>
          <Route element={<InitContent />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </KeepLogged>
      </Router>
    );
  }
  
  export default App;