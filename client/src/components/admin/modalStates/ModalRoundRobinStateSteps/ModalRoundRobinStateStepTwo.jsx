import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import './styles/ModalRoundRobinStateStepTwo.css';

const ModalRoundRobinStateStepTwo = ({ onNext, onBack, selectedNumber }) => {
  const equipos = useSelector((state) => state.equipos) || [];
  const categorias = useSelector((state) => state.categorias) || [];

  const [tournamentName, setTournamentName] = useState('');
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [numberOfRounds, setNumberOfRounds] = useState(1);

  if (!equipos || equipos.length === 0) {
    return <div>Cargando equipos...</div>;
  }

  const teamOptions = equipos.map((team) => ({ value: team.id, label: team.name }));
  const categoryOptions = categorias.map((category) => ({ value: category.id, label: category.name }));

  const handleTeamSelect = (selectedOptions) => {
    if (selectedOptions.length <= selectedNumber) {
      setSelectedTeams(selectedOptions);
    } else {
      alert(`Solo puedes seleccionar hasta ${selectedNumber} equipos.`);
    }
  };

  const handleCategorySelect = (selectedOptions) => {
    setSelectedCategories(selectedOptions);
  };

  const handleNext = () => {
    if (!tournamentName.trim()) {
      alert('Por favor, ingresa el nombre del torneo.');
      return;
    }
    if (selectedTeams.length !== parseInt(selectedNumber)) {
      alert(`Debes seleccionar exactamente ${selectedNumber} equipos.`);
      return;
    }
    if (selectedCategories.length === 0) {
      alert('Por favor, selecciona al menos una categoría.');
      return;
    }
    if (numberOfRounds <= 0) {
      alert('Por favor, ingresa un número válido de vueltas.');
      return;
    }
    onNext({ tournamentName, selectedTeams, selectedCategories, numberOfRounds });
  };

  return (
    <div className="round-robin-step-two-container">
      <h2 className="round-robin-title">Información del Torneo</h2>
      <div className="round-robin-input-group">
        <input
          placeholder='Escribe el Nombre del Torneo'
          type="text"
          className="round-robin-input"
          value={tournamentName}
          onChange={(e) => setTournamentName(e.target.value)}
        />
      </div>
      <div className="round-robin-input-group">
        <Select
          className="round-robin-react-select-container"
          placeholder={`Selecciona ${selectedNumber} equipos`}
          classNamePrefix="react-select"
          isMulti
          options={teamOptions}
          value={selectedTeams}
          onChange={handleTeamSelect}
        />
      </div>
      <p className="round-robin-selection-info">
        Has seleccionado {selectedTeams.length} de {selectedNumber} equipos.
      </p>
      <div className="round-robin-input-group">
        
        <Select
          className="round-robin-react-select-container"
          placeholder={`Selecciona categorias`}
          classNamePrefix="react-select"
          isMulti
          options={categoryOptions}
          value={selectedCategories}
          onChange={handleCategorySelect}
        />
      </div>
      <p className="round-robin-selection-info">
        Has seleccionado {selectedCategories.length} categorías.
      </p>
      <div className="round-robin-input-group">
        <label className="round-robin-label">Número de Vueltas</label>
        <input
          type="number"
          min="1"
          className="round-robin-input"
          value={numberOfRounds}
          onChange={(e) => setNumberOfRounds(e.target.value)}
        />
      </div>
      <div className="round-robin-button-group">
        <button className="round-robin-button" onClick={onBack}>
          Anterior
        </button>
        <button className="round-robin-button" onClick={handleNext}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ModalRoundRobinStateStepTwo;