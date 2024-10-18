import React, { useState } from 'react';
import './styles/ModalRoundRobinStateStepFour.css';

const ModalRoundRobinStateStepFour = ({ onConfirm, onBack, tournamentData }) => {
  const [selectedFecha, setSelectedFecha] = useState('1');
  const [selectedCategory, setSelectedCategory] = useState(
    tournamentData.selectedCategories[0]?.value || ''
  );

  const totalFechas =
    (tournamentData.selectedTeams.length - 1) * tournamentData.numberOfRounds;

  const fechaOptions = [];
  for (let i = 1; i <= totalFechas; i++) {
    fechaOptions.push(i);
  }

  const filteredMatchups = tournamentData.matchups.filter(
    (match) =>
      match.fecha.toString() === selectedFecha &&
      match.category.value === selectedCategory
  );

  const handleFechaChange = (e) => {
    setSelectedFecha(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="round-robin-summary">
      <h2 className="round-robin-title">Resumen del Torneo</h2>
      <p>
        <strong>Nombre del Torneo:</strong> {tournamentData.tournamentName}
      </p>
      <p>
        <strong>Número de Vueltas:</strong> {tournamentData.numberOfRounds}
      </p>
      <p>
        <strong>Categorías:</strong>{' '}
        {tournamentData.selectedCategories.map((c) => c.label).join(', ')}
      </p>
      <p>
        <strong>Equipos Participantes:</strong>
      </p>
      <ul className="round-robin-summary-list">
        {tournamentData.selectedTeams.map((team) => (
          <li key={team.value}>{team.label}</li>
        ))}
      </ul>
      <div className="round-robin-filters">
        <label className="round-robin-label">
          Fecha:
          <select
            className="round-robin-select"
            value={selectedFecha}
            onChange={handleFechaChange}
          >
            {fechaOptions.map((fecha) => (
              <option key={fecha} value={fecha}>
                Fecha {fecha}
              </option>
            ))}
          </select>
        </label>
        <label className="round-robin-label">
          Categoría:
          <select
            className="round-robin-select"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {tournamentData.selectedCategories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <p>
        <strong>Enfrentamientos:</strong>
      </p>
      {filteredMatchups.map((matchup) => (
        <div key={matchup.id} className="round-robin-matchup-summary">
          <p>
            {matchup.teamA.label} vs {matchup.teamB.label} (ID: {matchup.id})
          </p>
          <p>
            Fecha: {matchup.date} Hora: {matchup.time}
          </p>
          <p>
            Estadio: {matchup.stadium ? matchup.stadium.name : 'No asignado'}
          </p>
          <p>
            Fecha Número: {matchup.fecha} - Categoría: {matchup.category.label}
          </p>
        </div>
      ))}
      <div className="round-robin-button-group">
        <button className="round-robin-button" onClick={onBack}>
          Anterior
        </button>
        <button className="round-robin-button" onClick={onConfirm}>
          Confirmar y Crear Torneo
        </button>
      </div>
    </div>
  );
};

export default ModalRoundRobinStateStepFour;
