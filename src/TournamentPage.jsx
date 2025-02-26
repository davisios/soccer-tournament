import { Card, CardContent } from "@mui/material";
import { teamaLogo, teambLogo, teamcLogo, teamdLogo } from './assets/images';

const standings = [
  { team: "Team A", logo: teamaLogo, points: 9, G: 3, E: 0, P: 1, GF: 10, GC: 5, GD: 5 },
  { team: "Team B", logo: teambLogo, points: 6, G: 2, E: 0, P: 2, GF: 8, GC: 7, GD: 1 },
  { team: "Team C", logo: teamcLogo, points: 3, G: 1, E: 0, P: 3, GF: 4, GC: 9, GD: -5 },
  { team: "Team D", logo: teamdLogo, points: 1, G: 0, E: 1, P: 3, GF: 3, GC: 12, GD: -9 },
];

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
  return (
    <div>
      <div className="p-6 space-y-6">
        {/* Standings Table */}
        <Card variant="outlined">
          <CardContent>
            <h2 className="text-xl font-bold text-center mb-4">Posiciones</h2>
            <table className="w-full text-center">
              <thead>
                <tr className="border-b">
                  <th className="p-2">Equipo</th>
                  <th className="p-2">Puntos</th>
                  <th className="p-2">G</th>
                  <th className="p-2">E</th>
                  <th className="p-2">P</th>
                  <th className="p-2">GF</th>
                  <th className="p-2">GC</th>
                  <th className="p-2">GD</th>
                </tr>
              </thead>
              <tbody>
                {standings.map((team, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2 flex items-center justify-center">
                      <img src={team.logo} alt={`${team.team} logo`} className="w-8 h-8 mr-2" />
                      {team.team}
                    </td>
                    <td className="p-2">{team.points}</td>
                    <td className="p-2">{team.G}</td>
                    <td className="p-2">{team.E}</td>
                    <td className="p-2">{team.P}</td>
                    <td className="p-2">{team.GF}</td>
                    <td className="p-2">{team.GC}</td>
                    <td className="p-2">{team.GD}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Glosario */}
        <Card variant="outlined" className="mt-6">
          <CardContent>
            <h3 className="text-lg font-bold mb-4">Glosario de Términos</h3>
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
    </div>
  );
}
