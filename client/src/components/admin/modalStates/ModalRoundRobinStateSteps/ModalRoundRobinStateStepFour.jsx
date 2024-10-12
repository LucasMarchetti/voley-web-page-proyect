import React from 'react';
import './styles/ModalRoundRobinStateStepFour.css';

const ModalRoundRobinStateStepFour = ({ onConfirm, onBack, tournamentData }) => {
  return (
    <div className="round-robin-summary">
      <h2 className="round-robin-title">Resumen del Torneo</h2>
      <p>
        <strong>Nombre del Torneo:</strong> {tournamentData.tournamentName}
      </p>
      <p>
        <strong>Equipos Participantes:</strong>
      </p>
      <ul className="round-robin-summary-list">
        {tournamentData.selectedTeams.map((team) => (
          <li key={team.value}>{team.label}</li>
        ))}
      </ul>
      <p>
        <strong>Enfrentamientos:</strong>
      </p>
      {tournamentData.matchups.map((matchup, index) => (
        <div key={index} className="round-robin-matchup-summary">
          <p>
            {matchup.teamA.label} vs {matchup.teamB.label}
          </p>
          <p>
            Fecha: {matchup.date} Hora: {matchup.time}
          </p>
          <p>
            Estadio: {matchup.stadium ? matchup.stadium.name : 'No asignado'}
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
