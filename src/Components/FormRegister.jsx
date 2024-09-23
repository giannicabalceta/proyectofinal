import React, { useState } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import '../Styles/Register.css';
import PostUsers from '../Services/PostUsers';
import GetUsers from '../Services/GetUsers';
import { useNavigate } from 'react-router-dom';

function FormRegister() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function cargaUsuario(event) {
    setUsername(event.target.value);
  }

  const cargaEmail = (event) => {
    setEmail(event.target.value);
  };

  const cargaContra = (event) => {
    setPassword(event.target.value);
  };

  async function emailYaRegistrado(email) {
    const users = await GetUsers();
    return users.some(user => user.email === email);
  }

  async function btnRegistrar() {
    if (!username || !email || !password) {
      Swal.fire({
        title: 'Error!',
        text: 'Completa la información',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return;
    }

    const emailExists = await emailYaRegistrado(email);
    if (emailExists) {
      Swal.fire({
        title: 'Error!',
        text: 'El email ya está registrado',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return;
    }

    // Llama a la función PostUsers y espera su resultado
    const registroExitoso = await PostUsers(username, email, password);

    if (registroExitoso) {
      Swal.fire({
        title: 'Registrado',
        text: 'Registro exitoso',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });

      // Redirige al usuario después de un breve retraso
      setTimeout(() => {
        navigate('/Home');
      }, 2500);
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Hubo un problema al registrar al usuario',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  }

  return (
    <div className='conte'>
      <h2 className='titu'>Registro de usuarios</h2>
      <div className='informacion1'>
        <label className='name' htmlFor="username">Nombre</label>
        <input className='inpt1'
          type="text"
          id="username"
          name="username"
          placeholder="Ingrese su nombre de usuario"
          value={username}
          onChange={cargaUsuario}
          required
        />
      </div>

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
      <button className='botonR' onClick={btnRegistrar}>Registrar</button>
    </div>
  );
}

export default FormRegister;