import { ScoreboardActionTypes, ScoreboardActions, ScoreboardState } from './types';

const initialState: ScoreboardState = {
  timer: 0,
  finished: false,
  blueTeam: {
    id: 0,
    name: '',
    mobsKill: {
      drakes: 0,
      herald: 0,
      nashors: 0
    },
    stats: {
      gold: 0,
      inhibitors: 0,
      kills: 0,
      score: 0,
      towers: 0
    }
  },
  redTeam: {
    id: 0,
    name: '',
    mobsKill: {
      drakes: 0,
      herald: 0,
      nashors: 0
    },
    stats: {
      gold: 0,
      inhibitors: 0,
      kills: 0,
      score: 0,
      towers: 0
    }
  }
};

const scoreboardReducer = (state: ScoreboardState = initialState, action: ScoreboardActions) => {
  switch (action.type) {
    case ScoreboardActionTypes.UPDATE:
      return { ...state, ...action.payload };
    case ScoreboardActionTypes.END_MATCH:
      return { ...state, finished: true };
    default:
      return state;
  }
};

export default scoreboardReducer;
