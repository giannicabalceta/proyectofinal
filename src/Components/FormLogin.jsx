import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import '../Styles/Login.css'; // Importa el archivo de estilos
import GetUsers from '../Services/GetUsers'; // Servicio para obtener usuarios
import { useNavigate } from 'react-router-dom'; // Hook para la navegación
import PostUsers from '../Services/PostUsers';

function FormLogin() {
   // Estados para almacenar el nombre de usuario, el email y la contraseña
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();
 
   // Función para manejar el cambio en el email
   const cargaEmail = (event) => {
     setEmail(event.target.value);
   };
 
   // Función para manejar el cambio en la contraseña
   const cargaContra = (event) => {
     setPassword(event.target.value);
   };
 
   // Función para manejar el registro
   async function btnLogin() {
     // Verifica que todos los campos estén completos
     if (!email || !password) {
       Swal.fire({
         title: 'Error!',
         text: 'Completa la información',
         icon: 'error',
         confirmButtonText: 'Aceptar'
       });
       return;
     }

     // Llama a la función PostUsers
     PostUsers(email, password);
 
     // Muestra un mensaje de éxito
     Swal.fire({
       title: 'Registrado',
       text: 'Registro exitoso',
       icon: 'success',
       confirmButtonText: 'Aceptar'
     });
 
     // Redirige al usuario después de un breve retraso
     setTimeout(() => {
       navigate('/Administracion');
     }, 2500);
 
     // Función asincrónica para obtener usuarios 
     const ObtenerUsuarios = async () => {
       const users = await GetUsers();
       console.log(users);
     };
     ObtenerUsuarios();
   }
 
   // Renderizado del componente
   return (
     <div className='conte'>
       <h2 className='titu'>Login</h2>

 
       <div className='informacion2'>
         <label className='email' htmlFor="email">Email</label>
         <input className='inpt2'
           type="text"
           id="email"
           name="email"
           placeholder="Email"
           value={email}
           onChange={cargaEmail}
           required
         />
       </div>
 
       <div className='informacion3'>
         <label className='contrasena1' htmlFor="password">Contraseña</label>
         <input className='inpt3' type="password" id="password" name="password" placeholder="Ingrese su contraseña"
           value={password}
           onChange={cargaContra}
           required
         />
       </div>
       <button className='botonR' onClick={btnLogin}>Iniciar Sesion</button>
     </div>
  );
}

export default FormLogin; // Exporta el componente
