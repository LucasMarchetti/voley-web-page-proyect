import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateMatchResult, fetchTournaments } from '../../../redux/reducers/torneoSlice';  // Asegúrate de importar fetchTournaments
import Modal from 'react-modal';
import './styles/ModalTournamentsInProcessState.css'; 

const ModalTournamentsInProcessState = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMatch, setCurrentMatch] = useState(null);
  const [currentTournament, setCurrentTournament] = useState(null);
  const [sets, setSets] = useState([
    { player1Score: '', player2Score: '' },
    { player1Score: '', player2Score: '' },
    { player1Score: '', player2Score: '' },
  ]);

  // Obtener torneos en proceso desde el estado
  const inProcessTournaments = useSelector((state) => 
    state.torneo?.tournaments?.filter(
      (tournament) =>
        new Date(tournament.startDate) <= new Date() &&
        new Date(tournament.endDate) >= new Date()
    ) || [] // Garantiza que siempre sea un array
  );

  useEffect(() => {
    dispatch(fetchTournaments());  // Despacha la acción para cargar los torneos al montar el componente
  }, [dispatch]);

  const openMatchModal = (tournament, match) => {
    setCurrentTournament(tournament);
    setCurrentMatch(match);
    setIsModalOpen(true);
    // Si el partido ya tiene resultados, cargarlos en el estado
    if (match.results) {
      const loadedSets = match.results.map((set) => ({
        player1Score: set.player1Score.toString(),
        player2Score: set.player2Score.toString(),
      }));
      setSets(loadedSets);
    } else {
      setSets([
        { player1Score: '', player2Score: '' },
        { player1Score: '', player2Score: '' },
        { player1Score: '', player2Score: '' },
      ]);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentMatch(null);
    setCurrentTournament(null);
  };

  const addSet = () => {
    if (sets.length < 5) {
      setSets([...sets, { player1Score: '', player2Score: '' }]);
    }
  };

  const handleSetScoreChange = (e, index, player) => {
    const updatedSets = sets.map((set, i) =>
      i === index ? { ...set, [`${player}Score`]: e.target.value } : set
    );
    setSets(updatedSets);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const results = sets.map((set) => ({
      player1Score: parseInt(set.player1Score) || 0,
      player2Score: parseInt(set.player2Score) || 0,
    }));
    dispatch(
      updateMatchResult({
        tournamentId: currentTournament.id,
        matchId: currentMatch.id,
        results: results,
      })
    );
    closeModal();
  };

  return (
    <div className="modal-tournaments-in-process">
      <h1>Torneos en Proceso</h1>

      {inProcessTournaments.length === 0 ? (
        <p>No hay torneos en proceso en este momento.</p>
      ) : (
        inProcessTournaments.map((tournament) => (
          <div key={tournament.id} className="tournament">
            <h2>{tournament.name}</h2>
            <div className="matches">
              {tournament.matches.map((match) => (
                <button
                  key={match.id}
                  className="round-robin-matchup-summary"
                  onClick={() => openMatchModal(tournament, match)}
                >
                  {tournament.players.find((p) => p.id === match.player1Id).name} vs{' '}
                  {tournament.players.find((p) => p.id === match.player2Id).name}
                </button>
              ))}
            </div>
            <div className="standings">
              <h3>Tabla de Posiciones</h3>
              <table>
                <thead>
                  <tr>
                    <th>Jugador</th>
                    <th>Ganados</th>
                    <th>Perdidos</th>
                    <th>Sets Ganados</th>
                    <th>Sets Perdidos</th>
                  </tr>
                </thead>
                <tbody>
                  {tournament.standings.map((player) => (
                    <tr key={player.playerId}>
                      <td>{player.playerName}</td>
                      <td>{player.wins}</td>
                      <td>{player.losses}</td>
                      <td>{player.setsWon}</td>
                      <td>{player.setsLost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))
      )}

      {isModalOpen && currentMatch && (
        <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="match-modal">
          <h2>
            Ingresar Resultados: {currentTournament.players.find((p) => p.id === currentMatch.player1Id).name} vs{' '}
            {currentTournament.players.find((p) => p.id === currentMatch.player2Id).name}
          </h2>
          <form onSubmit={handleSubmit}>
            {sets.map((set, index) => (
              <div key={index} className="set-input">
                <label>Set {index + 1}</label>
                <input
                  type="number"
                  min="0"
                  value={set.player1Score}
                  onChange={(e) => handleSetScoreChange(e, index, 'player1')}
                  placeholder="Jugador 1"
                  required
                />
                <input
                  type="number"
                  min="0"
                  value={set.player2Score}
                  onChange={(e) => handleSetScoreChange(e, index, 'player2')}
                  placeholder="Jugador 2"
                  required
                />
              </div>
            ))}
            {sets.length < 5 && (
              <button type="button" onClick={addSet} className="add-set-button">
                Agregar Set
              </button>
            )}
            <div className="modal-buttons">
              <button type="submit" className="save-button">
                Guardar Resultados
              </button>
              <button type="button" onClick={closeModal} className="cancel-button">
                Cancelar
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default ModalTournamentsInProcessState;
