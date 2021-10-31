import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useParams, Switch, Route } from 'react-router-dom';
import Overview from '../../components/Admin/Overview';
import { authContext } from '../../context/authContext';
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
  const ctx = useContext(authContext);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const url = `${process.env.REACT_APP_API_ENDPOINT}admin/matches/${matchId}&token=${ctx.token}`;
    const response = await fetch(url);
    const data: ScoreBoardResponse = await response.json();
    if (!data.isLive) {
      setLoading(false);
    } else {
      setFullData(data);
    }
    setLoading(false);
  }, [matchId, ctx]);

  // 6171734c303f363e5a14c05d
  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYWt5YWltYW5qaXRoMzJAZ21haWwuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjM0ODIzNTc4LCJleHAiOjE2MzQ5OTYzNzh9.0OyJNjs7NDfYlK8DugnTMQAzlIOhIQuuzZNLnWoMH0s

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div></div>
          <Switch>
            <Route path="/" exact>
              <Overview
                team1="Sri Lanka"
                team2="South Africa"
                inning={1}
                score={50}
                wickets={5}
                overs={15}
                bowls={3}
                currStriker={{ name: 'Shakya', score: 25, bowls: 32 }}
                nonStriker={{ name: 'Shakya', score: 25, bowls: 32 }}
                currBowler={{ name: 'Sakithma', overs: 10, wickets: 3 }}
              />
            </Route>
            <Route path="/full-score"></Route>
            <Route path="/toss"></Route>
          </Switch>
        </>
      )}
    </>
  );
};

export default SingleMatch;
