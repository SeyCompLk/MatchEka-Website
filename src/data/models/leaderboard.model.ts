import leaderboards from '../leaderboard.json';
import users from '../user.json';

class Leaderboard {
  static getPastWeek = () => {
    const sortedLeaders = leaderboards.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    const pastWeekData = sortedLeaders[sortedLeaders.length - 1];
    pastWeekData.playerData.forEach((player) => {
      const filteredUser = users.find((user) => user.id === player.user);
      player.userName = filteredUser?.name;
    });
    const sortedFin = pastWeekData.playerData.sort((a, b) => b.score - a.score);
    return sortedFin;
  };

  static getThisWeek = () => {
    const sortedList = users
      .map((user) => ({ id: user.id, name: user.name, points: user.points }))
      .sort((a, b) => b.points - a.points);
    return sortedList;
  };
}

export default Leaderboard;
