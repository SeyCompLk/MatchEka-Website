import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchOverviewProps, ScoreBoardResponse } from '../../types';

const SingleMatch = () => {
  const { matchId }: { matchId: string } = useParams();

  //score
  const [fullData, setFullData] = useState<ScoreBoardResponse>();
  const getMatchData = () => {
    const inning = fullData?.scoreBoard.inning;
    const score =
      inning === 1
        ? fullData?.scoreBoard.scores.inn1.totalScore
        : fullData?.scoreBoard.scores.inn2.totalScore;
    const wickets =
      inning === 1
        ? fullData?.scoreBoard.scores.inn1.wickets
        : fullData?.scoreBoard.scores.inn2.wickets;
    const overs =
      inning === 1
        ? fullData?.scoreBoard.scores.inn1.overs
        : fullData?.scoreBoard.scores.inn2.overs;
    const bowls =
      inning === 1
        ? fullData?.scoreBoard.scores.inn1.bowls
        : fullData?.scoreBoard.scores.inn2.bowls;
    return { score, wickets, overs, bowls };
  };

  const overview: MatchOverviewProps = {
    team1: fullData?.teams.team1.country,
    team2: fullData?.teams.team2.country,
    inning: fullData?.scoreBoard.inning,
    score: getMatchData().score,
    wickets: getMatchData().wickets,
    overs: getMatchData().overs,
    bowls: getMatchData().bowls,
    currStriker: fullData?.scoreBoard.batsman.striker,
    nonStriker: fullData?.scoreBoard.batsman.nonStriker,
    currBowler: fullData?.scoreBoard.currBowler,
  };

  //data fetcing
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const url = `${process.env.REACT_APP_API_ENDPOINT}admin/matches/${matchId}`;
    const response = await fetch(url);
    const data: ScoreBoardResponse = await response.json();
    setFullData(data);
    setLoading(false);
  }, [matchId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        overview && (
          <div>
            <h1>
              {overview.team1} vs {overview.team2}
            </h1>
          </div>
        )
      )}
    </>
  );
};

export default SingleMatch;
