import React, { useState } from 'react';
import './styles/ModalRoundRobinStateStepOne.css';

const ModalRoundRobinStateStepOne = ({ onNext }) => {
  const [selectedNumber, setSelectedNumber] = useState(null);

  const handleNumberSelect = (number) => {
    setSelectedNumber(number);
  };

  const handleNext = () => {
    if (selectedNumber) {
      onNext({ selectedNumber });
    } else {
      alert('Por favor, selecciona un número de equipos.');
    }
  };

  return (
    <div className="round-robin-step-one-container">
      <h2 className="round-robin-title">Selecciona el número de equipos</h2>
      {[4, 6, 8,10,12].map((number) => (
        <button
          key={number}
          onClick={() => handleNumberSelect(number)}
          className={`round-robin-button round-robin-number-button ${
            selectedNumber === number ? 'selected' : ''
          }`}
        >
          {number}
        </button>
      ))}
      <div className="round-robin-next-button">
        <button className="round-robin-button" onClick={handleNext}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ModalRoundRobinStateStepOne;
