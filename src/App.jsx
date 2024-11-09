import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Principal from "./pages/Landing page/Principal";
import HomePage from "./pages/HomePage"
import ContainerBank from "./components/ContainerBank"
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
    {/*Componente principal encargado del enrutamiento de la aplicación. */}
    return (
     <Router>
        <nav>
            <li><Link to="/">Principal</Link></li>
            <li><Link to="/Home">Container</Link></li>
        </nav>
         {/* Contenedor para definir las diferentes rutas de la aplicación.*/}
     <Routes>
     <Route path="/" element={<Principal />} />
       {/* Rutas de la banca en línea (con Header y Footer fijos) */}
     <Route element={<ContainerBank />}>
          <Route path="/Home" element={<HomePage />} />       {/* Principal de la banca en linea */}
         
         </Route>


    </Routes>
     </Router>
    );
  }
  
  export default App;