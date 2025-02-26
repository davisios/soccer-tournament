import { Card, CardContent, Typography } from '@mui/material';
import data from './assets/data/data'; 
import React from 'react';

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
    <div className='md:p-6 xl:p-6 space-y-6'>
      {Object.keys(groupedMatches).map((date, index) => (
        <Card key={index} variant='outlined' className='mb-6'>
          <CardContent>
            <Typography variant='h6' className='text-center mb-4'>
              {`Partidos - ${date}`}
            </Typography>

            <table className='w-full table-auto text-center'>
              <thead>
                <tr>
                  <th className='p-2'>Equipo A</th>
                  <th className='p-2'>Resultado</th>
                  <th className='p-2'>Equipo B</th>
                </tr>
              </thead>
              <tbody>
                {groupedMatches[date].map((match, matchIndex) => (
                  <React.Fragment key={matchIndex}>
                    <tr>
                      <td className='p-2'>
                        <div className='flex items-center justify-center pb-[6px]'>
                          <img
                            src={getTeamLogo(match.teamA)}
                            alt={match.teamA}
                            className='w-8 h-8 mr-2'
                          />
                          {match.teamA}
                        </div>
                        {match.scorersA.length > 0 && (
                          <div>
                            <strong>Goals:</strong>
                            <ul className='list-disc pl-4'>
                              {match.scorersA.map((scorer, index) => (
                                <li key={index}>{scorer}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </td>
                      <td className='p-2'>
                        {match.scoreA} - {match.scoreB}
                      </td>
                      <td className='p-2'>
                        <div className='flex items-center justify-center pb-[6px]'>
                          <img
                            src={getTeamLogo(match.teamB)}
                            alt={match.teamB}
                            className='w-8 h-8 mr-2'
                          />
                          {match.teamB}
                        </div>
                        {match.scorersB.length > 0 && (
                          <div>
                            <strong>Goals:</strong>
                            <ul className='list-disc pl-4'>
                              {match.scorersB.map((scorer, index) => (
                                <li key={index}>{scorer}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
