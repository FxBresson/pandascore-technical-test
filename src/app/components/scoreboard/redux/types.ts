import { ScoreboardActionTypes } from './constants';

export interface ScoreboardState {

}

export interface UpdateScoreboardAction {
  type: ScoreboardActionTypes.UPDATE,
  payload: ScoreboardState
}

export type ScoreboardActions = UpdateScoreboardAction
