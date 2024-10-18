import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './styles/ModalGrandPrixStateStepFour.css';

const ModalGrandPrixStateStepFour = ({
  onNext,
  onBack,
  tournamentData,
}) => {
  const estadios = useSelector((state) => state.estadios) || [];
  const [matchups, setMatchups] = useState([]);
  const [filteredMatchups, setFilteredMatchups] = useState([]);
  const [selectedZone, setSelectedZone] = useState(Object.keys(tournamentData.zones)[0]);
  const [selectedFecha, setSelectedFecha] = useState('1');
  const [selectedCategory, setSelectedCategory] = useState(
    tournamentData.selectedCategories[0]?.value || ''
  );

  useEffect(() => {
    generateMatchups();
  }, []);

  useEffect(() => {
    filterMatchups();
  }, [selectedZone, selectedFecha, selectedCategory, matchups]);

  const generateMatchups = () => {
    let matchId = 1;
    const allMatchups = [];

    tournamentData.selectedCategories.forEach((category) => {
      for (const [zoneName, teams] of Object.entries(tournamentData.zones)) {
        const teamList = teams;
        const numTeams = teamList.length;
        const rounds = numTeams - 1;
        const half = Math.floor(numTeams / 2);

        let teamIndexes = teamList.map((_, i) => i);

        for (let round = 0; round < rounds * tournamentData.numberOfRounds; round++) {
          const fecha = round + 1;
          for (let j = 0; j < half; j++) {
            const homeIndex = teamIndexes[j];
            const awayIndex = teamIndexes[numTeams - 1 - j];
            const home = teamList[homeIndex];
            const away = teamList[awayIndex];

            allMatchups.push({
              id: matchId++,
              teamA: home,
              teamB: away,
              date: '',
              time: '',
              stadium: null,
              fecha: fecha,
              category: category,
              zone: zoneName,
            });
          }
          teamIndexes.splice(1, 0, teamIndexes.pop());
        }
      }
    });

    setMatchups(allMatchups);
  };

  const filterMatchups = () => {
    setFilteredMatchups(
      matchups.filter(
        (match) =>
          match.zone === selectedZone &&
          match.fecha.toString() === selectedFecha &&
          match.category.value === selectedCategory
      )
    );
  };

  const handleMatchupChange = (matchId, field, value) => {
    const updatedMatchups = matchups.map((matchup) => {
      if (matchup.id === matchId) {
        return { ...matchup, [field]: value };
      } else {
        return matchup;
      }
    });
    setMatchups(updatedMatchups);
  };

  const handleNext = () => {
    onNext({ matchups });
  };

  const handleZoneChange = (e) => {
    setSelectedZone(e.target.value);
  };

  const handleFechaChange = (e) => {
    setSelectedFecha(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  if (!estadios || estadios.length === 0) {
    return <div>Cargando estadios...</div>;
  }

  if (!matchups || matchups.length === 0) {
    return <div>Cargando enfrentamientos...</div>;
  }

  const fechasSet = new Set();
  matchups.forEach((match) => {
    if (match.zone === selectedZone) {
      fechasSet.add(match.fecha);
    }
  });
  const fechaOptions = Array.from(fechasSet).sort((a, b) => a - b);

  return (
    <div className="grand-prix-step-four-container">
      <h2 className="grand-prix-title">Configura los Enfrentamientos</h2>
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
      {filteredMatchups.map((matchup) => (
        <div key={matchup.id} className="grand-prix-matchup">
          <h3>
            {matchup.teamA.label} vs {matchup.teamB.label} (ID: {matchup.id})
          </h3>
          <p>
            Fecha: {matchup.fecha} - Categoría: {matchup.category.label} - {matchup.zone}
          </p>
          <label className="grand-prix-label">
            Fecha:
            <input
              type="date"
              className="grand-prix-input"
              value={matchup.date}
              onChange={(e) =>
                handleMatchupChange(matchup.id, 'date', e.target.value)
              }
            />
          </label>
          <label className="grand-prix-label">
            Hora:
            <input
              type="time"
              className="grand-prix-input"
              value={matchup.time}
              onChange={(e) =>
                handleMatchupChange(matchup.id, 'time', e.target.value)
              }
            />
          </label>
          <label className="grand-prix-label">
            Estadio:
            <select
              className="grand-prix-select"
              value={matchup.stadium ? matchup.stadium.id : ''}
              onChange={(e) => {
                const selectedStadium = estadios.find(
                  (stadium) => stadium.id === e.target.value
                );
                handleMatchupChange(matchup.id, 'stadium', selectedStadium);
              }}
            >
              <option value="">Selecciona un estadio</option>
              {estadios.map((stadium) => (
                <option key={stadium.id} value={stadium.id}>
                  {stadium.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      ))}
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

export default ModalGrandPrixStateStepFour;
