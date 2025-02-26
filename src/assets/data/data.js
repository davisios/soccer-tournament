
import { teamaLogo, teambLogo, teamcLogo, teamdLogo } from '../images';

const data  =  {
    "matches": [
      {
        "date": "2025-02-25",
        "teamA": "Team A",
        "teamB": "Team B",
        "scoreA": 3,
        "scoreB": 1,
        "scorersA": ["Player A1", "Player A2", "Player A3"],
        "scorersB": ["Player B1"]
      },
      {
        "date": "2025-02-25",
        "teamA": "Team A",
        "teamB": "Team C",
        "scoreA": 2,
        "scoreB": 2,
        "scorersA": ["Player A1", "Player A2"],
        "scorersB": ["Player C1", "Player C2"]
      },
      {
        "date": "2025-01-25",
        "teamA": "Team A",
        "teamB": "Team D",
        "scoreA": 4,
        "scoreB": 0,
        "scorersA": ["Player A1", "Player A2", "Player A3", "Player A4"],
        "scorersB": []
      },
      {
        "date": "2025-01-25",
        "teamA": "Team B",
        "teamB": "Team C",
        "scoreA": 1,
        "scoreB": 3,
        "scorersA": ["Player B1"],
        "scorersB": ["Player C1", "Player C2", "Player C3"]
      },
      {
        "date": "2025-03-25",
        "teamA": "Team B",
        "teamB": "Team D",
        "scoreA": 2,
        "scoreB": 2,
        "scorersA": ["Player B1", "Player B2"],
        "scorersB": ["Player D1", "Player D2"]
      },
      {
        "date": "2025-03-25",
        "teamA": "Team C",
        "teamB": "Team D",
        "scoreA": 0,
        "scoreB": 1,
        "scorersA": [],
        "scorersB": ["Player D1"]
      }
    ],
    "standings": [
      {
        "team": "Team A",
        "points": 9,
        "G": 3,
        "E": 0,
        "P": 1,
        "GF": 10,
        "GC": 5,
        "GD": 5
      },
      {
        "team": "Team B",
        "points": 6,
        "G": 2,
        "E": 0,
        "P": 2,
        "GF": 8,
        "GC": 7,
        "GD": 1
      },
      {
        "team": "Team C",
        "points": 3,
        "G": 1,
        "E": 0,
        "P": 3,
        "GF": 4,
        "GC": 9,
        "GD": -5
      },
      {
        "team": "Team D",
        "points": 1,
        "G": 0,
        "E": 1,
        "P": 3,
        "GF": 3,
        "GC": 12,
        "GD": -9
      }
    ],
    "teams": {
      "Team A": {
        "logo": teamaLogo,
        "players": ["Player A1", "Player A2", "Player A3", "Player A4"]
      },
      "Team B": {
        "logo": teambLogo,
        "players": ["Player B1", "Player B2"]
      },
      "Team C": {
        "logo": teamcLogo,
        "players": ["Player C1", "Player C2", "Player C3"]
      },
      "Team D": {
        "logo": teamdLogo,
        "players": ["Player D1", "Player D2"]
      }
    }
  }
  
   
      export default data;