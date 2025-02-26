import { Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Box } from "@mui/material";
import data from './assets/data/data';

// Glosario de términos
const glosario = {
  PJ: "Partidos Jugados - Número total de partidos que un equipo ha jugado.",
  GT: "Triunfos - Número de partidos ganados por un equipo.",
  EE: "Empates - Número de partidos que han terminado en empate.",
  PD: "Derrotas - Número de partidos perdidos por un equipo.",
  GF: "Goles Marcados - Número total de goles marcados por un equipo.",
  GC: "Goles en Contra - Número total de goles recibidos por un equipo.",
  GD: "Diferencia de Goles - Se calcula restando los goles en contra (GC) a los goles marcados (GF).",
  Puntos: "Puntos - Cada victoria otorga 3 puntos, cada empate 1 punto y cada derrota 0 puntos.",
};

export default function TournamentPage() {
  const standings = data.standings;

  const getTeamLogo = (teamName) => {
    const team = data.teams[teamName];
    return team ? team.logo : ''; 
  };

  return (
    <div className="p-6 space-y-6">
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" align="center" className="mb-4">
            Posiciones
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Equipo</TableCell>
                  <TableCell align="center">Puntos</TableCell>
                  <TableCell align="center">G</TableCell>
                  <TableCell align="center">E</TableCell>
                  <TableCell align="center">P</TableCell>
                  <TableCell align="center">GF</TableCell>
                  <TableCell align="center">GC</TableCell>
                  <TableCell align="center">GD</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {standings.map((team, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">
                      <Box display="flex" justifyContent="center" alignItems="center">
                        <img
                          src={getTeamLogo(team.team)}
                          alt={`${team.team} logo`}
                          className="w-8 h-8 mr-2"
                        />
                        {team.team}
                      </Box>
                    </TableCell>
                    <TableCell align="center">{team.points}</TableCell>
                    <TableCell align="center">{team.G}</TableCell>
                    <TableCell align="center">{team.E}</TableCell>
                    <TableCell align="center">{team.P}</TableCell>
                    <TableCell align="center">{team.GF}</TableCell>
                    <TableCell align="center">{team.GC}</TableCell>
                    <TableCell align="center">{team.GD}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      <Card variant="outlined" className="mt-6">
        <CardContent>
          <Typography variant="h6" className="mb-4">
            Glosario de Términos
          </Typography>
          <ul className="list-disc pl-5">
            {Object.entries(glosario).map(([term, definition], index) => (
              <li key={index} className="mb-2">
                <strong>{term}:</strong> {definition}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
