import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import './styles/ModalRoundRobinStateStepTwo.css';

const ModalRoundRobinStateStepTwo = ({ onNext, onBack, selectedNumber }) => {
  const teams = useSelector((state) => state.teams) || [];
  console.log('Equipos desde Redux:', teams);

  const [tournamentName, setTournamentName] = useState('');
  const [selectedTeams, setSelectedTeams] = useState([]);

  if (!teams || teams.length === 0) {
    return <div>Cargando equipos...</div>;
  }

  const options = teams.map((team) => ({ value: team.id, label: team.name }));

  const handleTeamSelect = (selectedOptions) => {
    if (selectedOptions.length <= selectedNumber) {
      setSelectedTeams(selectedOptions);
    } else {
      alert(`Solo puedes seleccionar hasta ${selectedNumber} equipos.`);
    }
  };

  const handleNext = () => {
    if (!tournamentName.trim()) {
      alert('Por favor, ingresa el nombre del torneo.');
      return;
    }
    if (selectedTeams.length !== selectedNumber) {
      alert(`Debes seleccionar exactamente ${selectedNumber} equipos.`);
      return;
    }
    onNext({ tournamentName, selectedTeams });
  };

  return (
    <div className="round-robin-step-two-container">
      <h2 className="round-robin-title">Información del Torneo</h2>
      <div className="round-robin-input-group">
        <label className="round-robin-label">Nombre del Torneo</label>
        <input
          type="text"
          className="round-robin-input"
          value={tournamentName}
          onChange={(e) => setTournamentName(e.target.value)}
        />
      </div>
      <div className="round-robin-input-group">
        <label className="round-robin-label">
          Selecciona {selectedNumber} equipos
        </label>
        <Select
          className="round-robin-react-select-container"
          classNamePrefix="react-select"
          isMulti
          options={options}
          value={selectedTeams}
          onChange={handleTeamSelect}
        />
      </div>
      <p className="round-robin-selection-info">
        Has seleccionado {selectedTeams.length} de {selectedNumber} equipos.
      </p>
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
