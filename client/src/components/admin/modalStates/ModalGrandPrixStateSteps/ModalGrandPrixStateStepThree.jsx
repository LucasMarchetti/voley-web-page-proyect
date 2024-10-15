import React, { useState, useEffect } from 'react';
import './styles/ModalGrandPrixStateStepThree.css';

const ModalGrandPrixStateStepThree = ({
  onNext,
  onBack,
  selectedTeams,
  maxTeamsPerZone,
}) => {
  const [zones, setZones] = useState({});
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    initializeZones();
  }, [selectedTeams]);

  const initializeZones = () => {
    // Calcular el número de zonas necesarias
    const numZones = Math.ceil(selectedTeams.length / maxTeamsPerZone);

    const initialZones = {};
    let teamIndex = 0;
    for (let i = 0; i < numZones; i++) {
      const zoneName = `Zona ${String.fromCharCode(65 + i)}`;
      initialZones[zoneName] = selectedTeams.slice(
        teamIndex,
        teamIndex + maxTeamsPerZone
      );
      teamIndex += maxTeamsPerZone;
    }
    setZones(initialZones);
  };

  const handleTeamClick = (zoneName, team, teamIndex) => {
    if (selectedTeam) {
      // Ya hay un equipo seleccionado, así que intercambiamos
      const updatedZones = JSON.parse(JSON.stringify(zones));

      // Intercambiamos los equipos seleccionados
      const sourceZone = selectedTeam.zoneName;
      const sourceIndex = selectedTeam.index;

      const targetZone = zoneName;
      const targetIndex = teamIndex;

      // Realizar el intercambio de equipos
      const temp = updatedZones[sourceZone][sourceIndex];
      updatedZones[sourceZone][sourceIndex] = updatedZones[targetZone][targetIndex];
      updatedZones[targetZone][targetIndex] = temp;

      // Restablecer el estado de selección
      setSelectedTeam(null);
      setZones(updatedZones);
    } else {
      // No hay equipo seleccionado, seleccionamos este
      setSelectedTeam({ zoneName, team, index: teamIndex });
    }
  };

  const handleNext = () => {
    // Verificar que todas las zonas tengan al menos 2 equipos
    for (const zoneName in zones) {
      if (zones[zoneName].length < 2) {
        alert(`La ${zoneName} debe tener al menos 2 equipos.`);
        return;
      }
    }
    onNext({ zones });
  };

  return (
    <div className="grand-prix-step-three-container">
      <h2 className="grand-prix-title">Asignar Equipos a Zonas</h2>
      <div className="grand-prix-zones-container">
        {Object.entries(zones).map(([zoneName, teams]) => (
          <div key={zoneName} className="grand-prix-zone">
            <h3>{zoneName}</h3>
            {teams.map((team, index) => (
              <div
                key={team.value}
                className={`grand-prix-team-card ${
                  selectedTeam &&
                  selectedTeam.zoneName === zoneName &&
                  selectedTeam.index === index
                    ? 'selected'
                    : ''
                }`}
                onClick={() => handleTeamClick(zoneName, team, index)}
              >
                {team.label}
              </div>
            ))}
            <p>
              {teams.length} / {maxTeamsPerZone} equipos
            </p>
          </div>
        ))}
      </div>
      <div className="grand-prix-button-group">
        <button className="grand-prix-button" onClick={onBack}>
          Anterior
        </button>
        <button className="grand-prix-button" onClick={handleNext}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ModalGrandPrixStateStepThree;