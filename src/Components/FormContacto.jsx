import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Styles/FormContacto.css';


const FormContacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_h0nb4nn', 'template_6auff4s', form.current, {
        publicKey: 'WIiJyM8AYmjAYWOy-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <label className="form-label">Nombre</label>
      <input className="form-input" type="text" name="user_name" required />
      <label className="form-label">Correo</label>
      <input className="form-input" type="email" name="user_email" required />
      <label className="form-label">Mensaje</label>
      <textarea className="form-textarea" name="message" required />
      <input className="form-submit" type="submit" value="Enviar" />
    </form>
  );
};


export default FormContacto