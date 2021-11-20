import players from '../player.json';
import matches from '../match.json';
import scoreboards from '../scoreboard.json';

class Match {
  static getUpcomingMatches = () => {
    const upcomingMatches = matches.filter((match) => !match.isLive);
    const matchesWithPlayerData = upcomingMatches.map((match) => {
      return {
        ...match,
        squad1: match.teams.team1.squad.map((player) => {
          return players.find((selectedPlayer) => selectedPlayer.id === player);
        }),
        squad2: match.teams.team2.squad.map((player) => {
          return players.find((selectedPlayer) => selectedPlayer.id === player);
        }),
      };
    });

    return matchesWithPlayerData;
  };

  static getPlayingmatches = () => {
    const scoreboardWithPlayers = scoreboards.map((scoreboard) => {
      return {
        ...scoreboard,
        batsman: {
          nonStriker: {
            ...scoreboard.batsman.nonStriker,
            player: players.find(
              (player) => player.id === scoreboard.batsman.nonStriker.playerId
            ),
          },
          striker: {
            ...scoreboard.batsman.striker,
            player: players.find(
              (player) => player.id === scoreboard.batsman.striker.playerId
            ),
          },
        },
        bowler: {
          ...scoreboard.bowler,
          player: players.find(
            (player) => player.id === scoreboard.bowler.playerId
          ),
        },
      };
    });
    const withScoreBoards = matches
      .filter((match) => match.isLive)
      .map((match) => {
        return {
          ...match,
          scoreBoard: scoreboardWithPlayers.find(
            (scoreboard) => scoreboard.id === match.scoreBoard
          ),
        };
      });

    return withScoreBoards;
  };
}

export default Match;
