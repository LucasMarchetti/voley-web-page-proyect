import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Estado inicial
const initialState = {
    tournaments: [
        {
          id: '1',
          name: 'Torneo Prueba',
          startDate: '2024-10-15',
          endDate: '2024-10-29',
          players: [
            { id: 'p1', name: 'Jugador 1' },
            { id: 'p2', name: 'Jugador 2' }
          ],
          matches: [
            {
              id: 'm1',
              player1Id: 'p1',
              player2Id: 'p2',
              results: null
            }
          ],
          standings: [
            { playerId: 'p1', playerName: 'Jugador 1', wins: 0, losses: 0, setsWon: 0, setsLost: 0 },
            { playerId: 'p2', playerName: 'Jugador 2', wins: 0, losses: 0, setsWon: 0, setsLost: 0 }
          ]
        }
      ],
  status: 'idle',
  error: null,
};

// Thunk asíncrono para cargar torneos desde una API simulada
export const fetchTournaments = createAsyncThunk(
  'torneo/fetchTournaments',
  async () => {
    const response = await fetch('/api/tournaments');
    const data = await response.json();
    return data;
  }
);

const torneoSlice = createSlice({
  name: 'torneo',
  initialState,
  reducers: {
    updateMatchResult(state, action) {
      const { tournamentId, matchId, results } = action.payload;
      const tournament = state.tournaments.find(
        (t) => t.id === tournamentId
      );
      if (tournament) {
        const match = tournament.matches.find((m) => m.id === matchId);
        if (match) {
          match.results = results;
          // Actualizar la tabla de posiciones
          updateStandings(tournament);
        }
      }
    },
    addTournament(state, action) {  // <-- Nueva acción
        state.tournaments.push(action.payload);
    }

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTournaments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTournaments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Agregar torneos al estado
        state.tournaments = action.payload;
      })
      .addCase(fetchTournaments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Función para actualizar la tabla de posiciones
function updateStandings(tournament) {
  // Reiniciar estadísticas de cada jugador
  tournament.standings = tournament.players.map((player) => ({
    playerId: player.id,
    playerName: player.name,
    wins: 0,
    losses: 0,
    setsWon: 0,
    setsLost: 0,
  }));

  // Actualizar estadísticas basadas en resultados de los partidos
  tournament.matches.forEach((match) => {
    if (match.results) {
      const player1 = tournament.standings.find(
        (p) => p.playerId === match.player1Id
      );
      const player2 = tournament.standings.find(
        (p) => p.playerId === match.player2Id
      );

      const player1SetsWon = match.results.filter(
        (set) => set.player1Score > set.player2Score
      ).length;
      const player2SetsWon = match.results.filter(
        (set) => set.player2Score > set.player1Score
      ).length;

      player1.setsWon += player1SetsWon;
      player1.setsLost += player2SetsWon;
      player2.setsWon += player2SetsWon;
      player2.setsLost += player1SetsWon;

      if (player1SetsWon > player2SetsWon) {
        player1.wins += 1;
        player2.losses += 1;
      } else {
        player2.wins += 1;
        player1.losses += 1;
      }
    }
  });

  // Ordenar la tabla de posiciones
  tournament.standings.sort((a, b) => {
    if (b.wins !== a.wins) return b.wins - a.wins;
    if (b.setsWon - b.setsLost !== a.setsWon - a.setsLost)
      return b.setsWon - b.setsLost - (a.setsWon - a.setsLost);
    return a.playerName.localeCompare(b.playerName);
  });
}

export const { updateMatchResult , addTournament} = torneoSlice.actions;
export default torneoSlice.reducer;