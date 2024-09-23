import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Administracion from '../Pages/Administracion';
import Contacto from '../Pages/Contacto';
import AcercaNosotros from '../Pages/AcercaNosotros';




const Routing = () => {
  return (
    
    <Router>
     <Routes>
       <Route path="/Home" element={<Home />} />
       <Route path="/Register" element={<Register />} />
       <Route path="/" element={<Login />} />
       <Route path="/Administracion" element= {<Administracion />} /> 
       <Route path="/Contacto" element={<Contacto />} />
       <Route path="/AcercaNosotros" element={<AcercaNosotros />} />
     </Routes>
    </Router>
 
   );
};
export default Routing
