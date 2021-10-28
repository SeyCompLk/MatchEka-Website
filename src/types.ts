import {
  ChangeEventHandler,
  CSSProperties,
  FocusEventHandler,
  HTMLAttributes,
  ReactElement,
  RefObject,
} from 'react';

export interface versusTileProps {
  team1: string;
  team2: string;
  team1Image: string;
  team2Image: string;
  date: string;
  time: string;
}

export interface upcomingMatchProps {
  matches: {
    team1: string;
    team2: string;
    team1Image: string;
    team2Image: string;
    date: string;
    time: string;
    _id: string;
  }[];
}

export interface authContextTypes {
  login: (token: string, isAdmin: boolean, expiresOn: string) => void;
  logout: () => void;
  token: string | null;
  isAdmin: boolean;
}

export interface InputProps {
  label: string | undefined;
  type: string | undefined;
  value: number | string | undefined;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
  style: CSSProperties;
  placeholder: string | undefined;
  hasError: boolean;
  errorMessage: string;
  ref: RefObject<HTMLInputElement>;
}

export interface ButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  style: HTMLAttributes<HTMLButtonElement> | undefined;
  children: ReactElement;
}

export interface LeaderboardProps {
  competitors: {
    name: string;
    pos: number;
    points: number;
  }[];
  prevWinners: {
    name: string;
    pos: number;
    points: number;
  }[];
  currMonth: string;
  currWeek: string;
  prevMonth: string;
  prevWeek: string;
}

export interface MatchOverviewProps {
  team1: string | undefined;
  team2: string | undefined;
  inning: number | undefined;
  score: number | undefined;
  wickets: number | undefined;
  overs: number | undefined;
  bowls: number | undefined;
  currStriker:
    | {
        name: string;
        score: number;
        bowls: number;
      }
    | undefined;
  nonStriker:
    | {
        name: string;
        score: number;
        bowls: number;
      }
    | undefined;
  currBowler:
    | {
        name: string;
        overs: number;
        wickets: number;
      }
    | undefined;
}

interface Player {
  _id: string;
  name: string;
  imageUrl: string;
  role: string;
  battingArm: string;
  bowlingArm: string;
}

interface PlayingPlayer extends Player {
  playerId: string;
}

interface InningData {
  battingTeam: number;
  bowlingTeam: number;

  bat: {
    name: string;
    status: string;
    score: number;
    bowlsFaced: number;
  }[];
  bowl: {
    name: string;
    overs: number;
    wickets: number;
  }[];
  overs: number;
  wickets: number;
  totalScore: number;
  bowls: number;
}

export interface ScoreBoardResponse {
  title: string;
  venue: string;
  date: string;
  teams: {
    team1: {
      country: string;
      flag: string;
      squad: Player[];
    };
    team2: {
      country: string;
      flag: string;
      squad: Player[];
    };
  };
  scoreBoard: {
    inning: number;
    tossWon: number;
    toss: {
      team1: string;
      team2: string;
    };
    teams: {
      team1: PlayingPlayer[];
      team2: PlayingPlayer[];
    };
    scores: {
      inn1: InningData;
      inn2: InningData;
    };
    batsman: {
      striker: {
        name: string;
        score: number;
        bowls: number;
      };
      nonStriker: {
        name: string;
        score: number;
        bowls: number;
      };
    };
    currBowler: {
      name: string;
      overs: number;
      wickets: number;
    };
  };
  isLive: boolean;
  overs: number;
}
