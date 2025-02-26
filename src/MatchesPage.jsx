import { Card, CardContent } from "@mui/material";
import data from './assets/data/data'; // Import your data

export default function MatchesPage() {
  const matches = data.matches;

  const groupedMatches = matches.reduce((acc, match) => {
    const { date } = match;
    if (!acc[date]) {
      acc[date] = []; 
    }
    acc[date].push(match); 
    return acc;
  }, {});

  const getTeamLogo = (teamName) => {
    const team = data.teams[teamName];
    return team ? team.logo : ''; 
  };

  return (
    <div className="p-6 space-y-6">
      {Object.keys(groupedMatches).map((date, index) => (
        <Card key={index} variant="outlined" className="mb-6">
          <CardContent>
            <h2 className="text-xl font-bold text-center mb-4">{`Partidos - ${date}`}</h2>

            <table className="w-full text-center">
              <thead>
                <tr className="border-b">
                  <th className="p-2">Equipo A</th>
                  <th className="p-2">Resultado</th>
                  <th className="p-2">Equipo B</th>
                  <th className="p-2">Goleadores A</th>
                  <th className="p-2">Goleadores B</th>
                </tr>
              </thead>
              <tbody>
                {groupedMatches[date].map((match, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">
                      <img src={getTeamLogo(match.teamA)} alt={match.teamA} className="w-8 h-8 mr-2 inline-block" />
                      {match.teamA}
                    </td>
                    <td className="p-2">
                      {match.scoreA} - {match.scoreB}
                    </td>
                    <td className="p-2">
                      <img src={getTeamLogo(match.teamB)} alt={match.teamB} className="w-8 h-8 mr-2 inline-block" />
                      {match.teamB}
                    </td>
                    <td className="p-2">{match.scorersA.join(", ")}</td>
                    <td className="p-2">{match.scorersB.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
