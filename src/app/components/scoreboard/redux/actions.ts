import {
  ListenScoreboardDataAction,
  ScoreboardActionTypes,
  ScoreboardState,
  UpdateScoreboardAction,
  EndScoreboardMatch
} from './types';

export const updateScoreboard = (value: ScoreboardState): UpdateScoreboardAction => ({
  type: ScoreboardActionTypes.UPDATE,
  payload: value
});

export const startMatchDataListening = (): ListenScoreboardDataAction => ({
  type: ScoreboardActionTypes.LISTEN_DATA
});

export const endMatch = (): EndScoreboardMatch => ({
  type: ScoreboardActionTypes.END_MATCH
});
