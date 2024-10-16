// ModalRoundRobinStateStepOne.js
import React, { useState } from 'react';
import './styles/ModalRoundRobinStateStepOne.css';

const ModalRoundRobinStateStepOne = ({ onNext }) => {
  const [selectedNumber, setSelectedNumber] = useState('');

  const handleNext = () => {
    const number = parseInt(selectedNumber);
    if (number && number > 0) {
      onNext({ selectedNumber: number });
    } else {
      alert('Por favor, ingrese un número válido de equipos.');
    }
  };

  return (
    <div className="round-robin-step-one-container">
      <h2 className="round-robin-title">Ingrese el número de equipos</h2>
      <input
        type="number"
        min="1"
        placeholder="Ingrese un número de equipos"
        value={selectedNumber}
        onChange={(e) => setSelectedNumber(e.target.value)}
        className="round-robin-input"
      />
      <div className="round-robin-next-button">
        <button className="round-robin-button" onClick={handleNext}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ModalRoundRobinStateStepOne;

