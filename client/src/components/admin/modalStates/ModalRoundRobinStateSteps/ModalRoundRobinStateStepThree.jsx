import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './styles/ModalRoundRobinStateStepThree.css';

const ModalRoundRobinStateStepThree = ({ onNext, onBack, selectedTeams }) => {
  const stadiums = useSelector((state) => state.stadiums) || [];
  const [matchups, setMatchups] = useState([]);

  console.log('selectedTeams:', selectedTeams);
  console.log('stadiums:', stadiums);

  useEffect(() => {
    if (!selectedTeams || selectedTeams.length === 0) {
      return;
    }

    const generateMatchups = () => {
      const combinations = [];
      for (let i = 0; i < selectedTeams.length; i++) {
        for (let j = i + 1; j < selectedTeams.length; j++) {
          combinations.push({
            teamA: selectedTeams[i],
            teamB: selectedTeams[j],
            date: '',
            time: '',
            stadium: null,
          });
        }
      }
      setMatchups(combinations);
    };

    generateMatchups();
  }, [selectedTeams]);

  console.log('matchups:', matchups);

  const handleMatchupChange = (index, field, value) => {
    const updatedMatchups = [...matchups];
    updatedMatchups[index][field] = value;
    setMatchups(updatedMatchups);
  };

  const handleNext = () => {
    onNext({ matchups });
  };

  if (!stadiums || stadiums.length === 0) {
    return <div>Cargando estadios...</div>;
  }

  if (!matchups || matchups.length === 0) {
    return <div>Cargando enfrentamientos...</div>;
  }

  return (
    <div className="round-robin-step-three-container">
      <h2 className="round-robin-title">Configura los Enfrentamientos</h2>
      {matchups.map((matchup, index) => (
        <div key={index} className="round-robin-matchup">
          <h3>
            {matchup.teamA.label} vs {matchup.teamB.label}
          </h3>
          <label className="round-robin-label">
            Fecha:
            <input
              type="date"
              className="round-robin-input"
              value={matchup.date}
              onChange={(e) => handleMatchupChange(index, 'date', e.target.value)}
            />
          </label>
          <label className="round-robin-label">
            Hora:
            <input
              type="time"
              className="round-robin-input"
              value={matchup.time}
              onChange={(e) => handleMatchupChange(index, 'time', e.target.value)}
            />
          </label>
          <label className="round-robin-label">
            Estadio:
            <select
              className="round-robin-select"
              value={matchup.stadium ? matchup.stadium.id : ''}
              onChange={(e) => {
                const selectedStadium = stadiums.find(
                  (stadium) => stadium.id === e.target.value
                );
                handleMatchupChange(index, 'stadium', selectedStadium);
              }}
            >
              <option value="">Selecciona un estadio</option>
              {stadiums.map((stadium) => (
                <option key={stadium.id} value={stadium.id}>
                  {stadium.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      ))}
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

export default ModalRoundRobinStateStepThree;