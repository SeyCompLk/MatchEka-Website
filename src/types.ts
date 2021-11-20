import {
  ChangeEventHandler,
  CSSProperties,
  FocusEventHandler,
  HTMLAttributes,
  ReactElement,
  RefObject,
} from 'react';

export interface UpcomingCardProps {
  team1: {
    title: string;
    flag: string;
  };
  id: string;
  team2: {
    title: string;
    flag: string;
  };
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
  team1:
    | {
        name: string;
        flag: string;
      }
    | undefined;
  team2:
    | {
        name: string;
        flag: string;
      }
    | undefined;
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
  toss: string;
}

export interface LiveMatchCardProps extends LiveMatchListardProps {
  updateSelected: (team: number, index: number) => void;
  teamSelected: number;
  index: number;
}

export interface LiveMatchListardProps {
  team1: {
    name: string;
    flag: string;
  };
  team2: {
    name: string;
    flag: string;
  };
  inning: 1 | 2;
  inningData: {
    1: {
      score: number | undefined;
      wickets: number | undefined;
      overs: number | undefined;
      bowls: number | undefined;
    };
    2: {
      score: number | undefined;
      wickets: number | undefined;
      overs: number | undefined;
      bowls: number | undefined;
    };
  };
  currStriker: {
    name: string;
    score: number;
    bowls: number;
  };
  nonStriker: {
    name: string;
    score: number;
    bowls: number;
  };
  currBowler: {
    name: string;
    overs: number;
    wickets: number;
  };
  toss: string;
  teamSelected: number;
}

// export interface LiveMatchListHome extends LiveMatchListardProps {
//   ;
// }

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
  inning: number;
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
