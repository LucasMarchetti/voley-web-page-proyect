import React from 'react';
import { FaCircle } from 'react-icons/fa'; // Cambia el icono si es necesario
import './styles/RoundRobinCard.css'; // Importa el archivo de estilos

const RoundRobinCard = () => {
  return (
    <div className="container">
      <h3 className="subtitle">Nuevo torneo</h3>
      <h1 className="title">Round Robin</h1>
    </div>
  );
};

export default RoundRobinCard;