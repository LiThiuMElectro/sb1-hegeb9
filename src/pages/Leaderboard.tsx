import React, { useState, useEffect } from 'react';
import { TrophyIcon, AwardIcon, MedalIcon } from 'lucide-react';

interface LeaderboardEntry {
  id: number;
  playername: string;
  wager: number;
  date: string;
}

const Leaderboard: React.FC = () => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    fetchLeaderboardData();
  }, []);

  const fetchLeaderboardData = async () => {
    try {
      // In a real application, this would be an API call
      // For now, we'll simulate an API response
      const response = await new Promise<LeaderboardEntry[]>((resolve) => {
        setTimeout(() => {
          resolve([
            { id: 1, playername: 'Player A', wager: 10000, date: '2023-03-15 14:30:00' },
            { id: 2, playername: 'Player B', wager: 9500, date: '2023-03-15 15:45:00' },
            { id: 3, playername: 'Player C', wager: 9000, date: '2023-03-15 16:20:00' },
            { id: 4, playername: 'Player D', wager: 8500, date: '2023-03-15 17:10:00' },
            { id: 5, playername: 'Player E', wager: 8000, date: '2023-03-15 18:05:00' },
            { id: 6, playername: 'Player F', wager: 7500, date: '2023-03-15 19:30:00' },
            { id: 7, playername: 'Player G', wager: 7000, date: '2023-03-15 20:15:00' },
            { id: 8, playername: 'Player H', wager: 6500, date: '2023-03-15 21:00:00' },
            { id: 9, playername: 'Player I', wager: 6000, date: '2023-03-15 22:30:00' },
            { id: 10, playername: 'Player J', wager: 5500, date: '2023-03-15 23:45:00' },
          ]);
        }, 500); // Simulate network delay
      });
      setLeaderboardData(response);
    } catch (error) {
      console.error('Error fetching leaderboard data:', error);
    }
  };

  return (
    <div className="leaderboard">
      <h1 className="text-center mb-4">Leaderboard</h1>
      <div className="podium">
        <div className="place second">
          <div className="icon"><AwardIcon /></div>
          <h3>2nd</h3>
          <p>{leaderboardData[1]?.playername}</p>
        </div>
        <div className="place first">
          <div className="icon"><TrophyIcon /></div>
          <h3>1st</h3>
          <p>{leaderboardData[0]?.playername}</p>
        </div>
        <div className="place third">
          <div className="icon"><MedalIcon /></div>
          <h3>3rd</h3>
          <p>{leaderboardData[2]?.playername}</p>
        </div>
      </div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Wager</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((player, index) => (
            <tr key={player.id}>
              <td>{index + 1}</td>
              <td>{player.playername}</td>
              <td>${player.wager}</td>
              <td>{player.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;