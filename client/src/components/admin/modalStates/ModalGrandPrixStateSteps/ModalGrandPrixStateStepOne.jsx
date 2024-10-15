// ModalGrandPrixStateStepOne.js
import React, { useState } from 'react';
import './styles/ModalGrandPrixStateStepOne.css';

const ModalGrandPrixStateStepOne = ({ onNext }) => {
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
    <div className="grand-prix-step-one-container">
      <h2 className="grand-prix-title">Ingrese el número de equipos</h2>
      <input
        type="number"
        min="1"
        placeholder="Ingrese un número de equipos"
        value={selectedNumber}
        onChange={(e) => setSelectedNumber(e.target.value)}
        className="grand-prix-input"
      />
      <div className="grand-prix-next-button">
        <button className="grand-prix-button" onClick={handleNext}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ModalGrandPrixStateStepOne;
