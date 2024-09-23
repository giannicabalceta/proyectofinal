import React from 'react';
import './Servicios.css'; 

function Servicios() {
  return (
    <div className="servicios-container">
      <h1 className="servicios-title">Nuestros Servicios</h1>
      <p className="servicios-description">
        En Señor Limón, abastecemos hoteles, bares, pulperías y restaurantes con productos frescos y de alta calidad. 
        <br />
        Distribuimos limones y naranjas, así como jugos 100% naturales ideales para cocteles en bares, y deliciosos jugos para el desayuno en hoteles y restaurantes. También proveemos a tiendas con nuestra fruta fresca.
      </p>
      <p className="servicios-order">
        ¡Haz tu pedido hoy y lo llevaremos hasta la puerta de tu negocio!
      </p>
      <p className="servicios-delivery">
        Contamos con un eficiente servicio de transporte para asegurar que tu entrega sea rápida y confiable.
      </p>
    </div>
  );
}

export default Servicios;
