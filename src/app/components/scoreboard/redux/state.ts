import { ScoreboardActionTypes } from './constants';
import { ScoreboardActions, ScoreboardState } from './types';

const initialState: ScoreboardState = {};

const scoreboardReducer = (state: ScoreboardState = initialState, { type, payload }: ScoreboardActions) => {
  switch (type) {
    case ScoreboardActionTypes.UPDATE:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default scoreboardReducer;
