import players from '../player.json';
import matches from '../match.json';
import scoreboards from '../scoreboard.json';
import users from '../user.json';

const getTossDetails = (
  tossWon: number,
  toss: { team1: string; team2: string },
  teams: {
    team1: string;
    team2: string;
  }
) => {
  if (tossWon === 1) {
    return `${teams.team1} choose to ${toss.team1}`;
  }

  return `${teams.team2} choose to ${toss.team2}`;
};

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
          chat: match.chat?.map((message) => {
            return {
              ...message,
              user: users.find((user) => user.id === message.user),
            };
          }),
          scoreBoard: scoreboardWithPlayers.find(
            (scoreboard) => scoreboard.id === match.scoreBoard
          ),
        };
      });

    return withScoreBoards.map((matchData) => {
      return {
        ...matchData,
        toss: getTossDetails(
          matchData.scoreBoard?.tossWon!,
          matchData.scoreBoard?.toss!,
          {
            team1: matchData.teams.team1.country,
            team2: matchData.teams.team2.country,
          }
        ),
      };
    });
  };
}

export default Match;
