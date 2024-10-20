import React, { useState } from 'react';
import { addTournament } from '../../../../redux/reducers/torneoSlice';
import { useDispatch } from 'react-redux';
import './styles/ModalGrandPrixStateStepFive.css';

const ModalGrandPrixStateStepFive = ({ onConfirm, onBack, tournamentData }) => {
  const [selectedZone, setSelectedZone] = useState(Object.keys(tournamentData.zones)[0]);
  const [selectedFecha, setSelectedFecha] = useState('1');
  const [selectedCategory, setSelectedCategory] = useState(
    tournamentData.selectedCategories[0]?.value || ''
  );

  const allMatchups = tournamentData.matchups;

  const handleZoneChange = (e) => {
    setSelectedZone(e.target.value);
  };

  const handleFechaChange = (e) => {
    setSelectedFecha(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const dispatch = useDispatch();

  const handleConfirm = () => {
    const newTournament = {
      id: `${Date.now()}`,  // Genera un ID único, o usa uno real si tienes
      tournamentName: tournamentData.tournamentName,
      numberOfRounds: tournamentData.numberOfRounds,
      selectedCategories: tournamentData.selectedCategories,
      zones: tournamentData.zones,
      matchups: tournamentData.matchups,
    };

    // Despachar acción para agregar el torneo
    dispatch(addTournament(newTournament));

    // Ejecutar cualquier otra lógica de confirmación (navegar, etc.)
    if (onConfirm) {
      onConfirm();
    }
  };

  const filteredMatchups = allMatchups.filter(
    (match) =>
      match.zone === selectedZone &&
      match.fecha.toString() === selectedFecha &&
      match.category.value === selectedCategory
  );

  const fechasSet = new Set();
  allMatchups.forEach((match) => {
    if (match.zone === selectedZone) {
      fechasSet.add(match.fecha);
    }
  });
  const fechaOptions = Array.from(fechasSet).sort((a, b) => a - b);

  return (
    <div className="grand-prix-summary">
      <h2 className="grand-prix-title">Resumen del Torneo</h2>
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
        <strong>Zonas y Equipos:</strong>
      </p>
      {Object.entries(tournamentData.zones).map(([zoneName, teams]) => (
        <div key={zoneName}>
          <h3>{zoneName}</h3>
          <ul className="grand-prix-summary-team-list">
            {teams.map((team) => (
              <li key={team.value}>{team.label}</li>
            ))}
          </ul>
        </div>
      ))}
      <div className="grand-prix-filters">
        <label className="grand-prix-label">
          Zona:
          <select
            className="grand-prix-select"
            value={selectedZone}
            onChange={handleZoneChange}
          >
            {Object.keys(tournamentData.zones).map((zoneName) => (
              <option key={zoneName} value={zoneName}>
                {zoneName}
              </option>
            ))}
          </select>
        </label>
        <label className="grand-prix-label">
          Fecha:
          <select
            className="grand-prix-select"
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
        <label className="grand-prix-label">
          Categoría:
          <select
            className="grand-prix-select"
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
        <div key={matchup.id} className="grand-prix-matchup-summary">
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
            Fecha Número: {matchup.fecha} - Categoría: {matchup.category.label} - Zona: {matchup.zone}
          </p>
        </div>
      ))}
      <div className="grand-prix-button-group">
        <button className="grand-prix-button" onClick={onBack}>
          Anterior
        </button>
        <button className="grand-prix-button" onClick={handleConfirm}>
          Confirmar y Crear Torneo
        </button>
      </div>
    </div>
  );
};

export default ModalGrandPrixStateStepFive;
