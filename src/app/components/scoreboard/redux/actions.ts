import { ScoreboardActionTypes } from './constants';
import { ScoreboardState, UpdateScoreboardAction } from './types';

export const updateScoreboard = (value: ScoreboardState): UpdateScoreboardAction => ({
  type: ScoreboardActionTypes.UPDATE,
  payload: value
});
