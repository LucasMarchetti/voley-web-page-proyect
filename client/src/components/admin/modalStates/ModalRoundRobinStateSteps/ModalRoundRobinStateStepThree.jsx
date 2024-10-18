import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './styles/ModalRoundRobinStateStepThree.css';

const ModalRoundRobinStateStepThree = ({
  onNext,
  onBack,
  selectedTeams,
  selectedCategories,
  numberOfRounds,
  matchups,
  setMatchups,
}) => {
  const estadios = useSelector((state) => state.estadios) || [];
  const [filteredMatchups, setFilteredMatchups] = useState([]);
  const [selectedFecha, setSelectedFecha] = useState('1');
  const [selectedCategory, setSelectedCategory] = useState(
    selectedCategories[0]?.value || ''
  );

  useEffect(() => {
    if (
      !selectedTeams ||
      selectedTeams.length === 0 ||
      !selectedCategories ||
      selectedCategories.length === 0
    ) {
      return;
    }

    if (matchups.length === 0) {
      generateMatchups();
    }
  }, [selectedTeams, selectedCategories, numberOfRounds]);

  useEffect(() => {
    filterMatchups();
  }, [selectedFecha, selectedCategory, matchups]);

  const generateMatchups = () => {
    let matchId = 1;
    const allMatchups = [];

    selectedCategories.forEach((category) => {
      for (let round = 1; round <= numberOfRounds; round++) {
        const teams = [...selectedTeams];
        const numTeams = teams.length;

        const rounds = numTeams - 1;
        const half = numTeams / 2;

        let teamIndexes = teams.map((_, i) => i);

        for (let i = 0; i < rounds; i++) {
          const fecha = i + 1 + (round - 1) * rounds;
          for (let j = 0; j < half; j++) {
            const home = teams[teamIndexes[j]];
            const away = teams[teamIndexes[numTeams - 1 - j]];

            allMatchups.push({
              id: matchId++,
              teamA: home,
              teamB: away,
              date: '',
              time: '',
              stadium: null,
              fecha: fecha,
              category: category,
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
    onNext({});
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

  const fechaOptions = [];
  const totalFechas = (selectedTeams.length - 1) * numberOfRounds;
  for (let i = 1; i <= totalFechas; i++) {
    fechaOptions.push(i);
  }

  return (
    <div className="round-robin-step-three-container">
      <h2 className="round-robin-title">Configura los Enfrentamientos</h2>
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
            {selectedCategories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      {filteredMatchups.map((matchup) => (
        <div key={matchup.id} className="round-robin-matchup">
          <h3>
            {matchup.teamA.label} vs {matchup.teamB.label} (ID: {matchup.id})
          </h3>
          <p>
            Fecha: {matchup.fecha} - Categoría: {matchup.category.label}
          </p>
          <label className="round-robin-label">
            Fecha:
            <input
              type="date"
              className="round-robin-input"
              value={matchup.date}
              onChange={(e) =>
                handleMatchupChange(matchup.id, 'date', e.target.value)
              }
            />
          </label>
          <label className="round-robin-label">
            Hora:
            <input
              type="time"
              className="round-robin-input"
              value={matchup.time}
              onChange={(e) =>
                handleMatchupChange(matchup.id, 'time', e.target.value)
              }
            />
          </label>
          <label className="round-robin-label">
            Estadio:
            <select
              className="round-robin-select"
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
