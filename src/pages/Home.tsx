import React, { useCallback, useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Matches from '../data/models/match.model';
import UpcomingMatches from '../components/Home/UpcomingMatchList';
import AdSlide from '../components/Home/AdSlide';
import LiveMatchList from '../components/Home/LiveMatchList';
import Chat from './Chat';
import classes from '../styles/Home.module.css';
import {
  LiveMatchListardProps as LiveMatchProps,
  UpcomingCardProps,
} from '../types';

const Home: React.FC = () => {
  const [liveMatches, setLiveMatches] = useState(Matches.getPlayingmatches());
  const [upcomingMatches, setUpcomingMatches] = useState(
    Matches.getUpcomingMatches()
  );
  const [isLive, setIsLive] = useState<boolean>(true);

  const [liveProps, setLiveProps] = useState<LiveMatchProps[]>(
    liveMatches.map((match) => {
      const data: LiveMatchProps = {
        team1: {
          name: match.teams.team1.country,
          flag: match.teams.team1.flag,
        },
        team2: {
          name: match.teams.team2.country,
          flag: match.teams.team2.flag,
        },
        inning: match.scoreBoard?.inning === 1 ? 1 : 2,
        inningData: {
          1: {
            score: match.scoreBoard?.scores.inn1.totalScore,
            wickets: match.scoreBoard?.scores.inn1.wickets,
            overs: match.scoreBoard?.scores.inn1.overs,
            bowls: match.scoreBoard?.scores.inn1.bowls,
          },
          2: {
            score: match.scoreBoard?.scores.inn2?.totalScore,
            wickets: match.scoreBoard?.scores.inn2?.totalScore,
            overs: match.scoreBoard?.scores.inn2?.totalScore,
            bowls: match.scoreBoard?.scores.inn2?.totalScore,
          },
        },
        currStriker: {
          name: match.scoreBoard?.batsman.striker.player?.name!,
          score: match.scoreBoard?.batsman.striker.score!,
          bowls: match.scoreBoard?.batsman.striker.bowlsFaced!,
        },
        nonStriker: {
          name: match.scoreBoard?.batsman.nonStriker.player?.name!,
          score: match.scoreBoard?.batsman.nonStriker.score!,
          bowls: match.scoreBoard?.batsman.nonStriker.bowlsFaced!,
        },
        currBowler: {
          name: match.scoreBoard?.bowler.player?.name!,
          overs: match.scoreBoard?.bowler.overs!,
          wickets: match.scoreBoard?.bowler.wickets!,
        },
        toss: match.toss,
        teamSelected: 0,
      };
      return data;
    })
  );

  const upcomingProps: UpcomingCardProps[] = upcomingMatches.map((match) => {
    return {
      team1: {
        title: match.teams.team1.country,
        flag: match.teams.team1.flag,
      },
      team2: {
        title: match.teams.team2.country,
        flag: match.teams.team2.flag,
      },
      id: match.id.toString(),
      date: match.date.split('T')[0],
      time: match.date.split('T')[1],
    };
  });

  const [updatableData, setUpdatableData] = useState<{
    index: number;
    team: number;
  } | null>(null);

  const fetchData = useCallback(() => {
    setLiveMatches(Matches.getPlayingmatches());
    setUpcomingMatches(Matches.getUpcomingMatches());
  }, []);

  // Asking confirmation for selected team
  const setTeam = (team: number, index: number) => {
    const temp = { ...liveProps[index!] };
    if (temp.teamSelected !== 0) {
      return 0;
    }
    setUpdatableData({ index, team });
  };

  // Update selected team
  const updateData = () => {
    const temp = { ...liveProps[updatableData?.index!] };
    if (temp.teamSelected !== 0) {
      return 0;
    }
    temp.teamSelected = updatableData?.team as number;
    const allMatches = [...liveProps];
    allMatches[updatableData?.index!] = temp;
    setLiveProps(allMatches);
    setUpdatableData(null);
    console.log(upcomingMatches);
    // send a PUT request to backend on selected team
  };

  // Fetchinig initial data from the backend
  useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, [fetchData]);

  return (
    <div className={classes.Container}>
      {!isLive && (
        <div
          className={`${classes.LeftContainer} ${classes.Hidden}`}
          data-testid="resp-upcoming-tile"
        >
          <UpcomingMatches matches={upcomingProps} />
          <div className={classes.LeftAdvertisement}>
            <AdSlide />
          </div>
        </div>
      )}
      <div className={classes.LeftContainer}>
        <UpcomingMatches matches={upcomingProps} />
        <div className={classes.LeftAdvertisement}>
          <AdSlide />
        </div>
      </div>

      {isLive && (
        <div className={classes.RightContainer} data-testid="resp-live-tile">
          <div className={classes.RightAdvertisement}>
            <AdSlide />
          </div>
          <LiveMatchList
            matchData={liveProps}
            updateData={updateData}
            setTeam={setTeam}
            updatableData={updatableData}
            setUpdatableData={setUpdatableData}
          />
        </div>
      )}
      <div className={classes.Paginator}>
        <span
          onClick={() => {
            setIsLive(true);
          }}
        >
          Live
        </span>
        <span>|</span>
        <span
          data-testid="upcoming-btn"
          onClick={() => {
            setIsLive(false);
          }}
        >
          Upcoming
        </span>
      </div>
      <div className={classes.MobileAd}>
        <AdSlide />
      </div>
    </div>
  );
};

const HomeRoutes = () => {
  return (
    <>
      <Home />
      <Switch>
        <Route path="/chat">
          <Chat />
        </Route>
      </Switch>
    </>
  );
};

export default HomeRoutes;
