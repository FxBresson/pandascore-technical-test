import { ScoreboardMatchData } from '../../../types/ScoreboardData';

export type ScoreboardState = ScoreboardMatchData

export enum ScoreboardActionTypes {
  UPDATE = 'UPDATE',
  LISTEN_DATA = 'LISTEN_DATA',
  END_MATCH = 'END_MATCH'
}

export interface ListenScoreboardDataAction {
  type: ScoreboardActionTypes.LISTEN_DATA
}

export interface EndScoreboardMatch {
  type: ScoreboardActionTypes.END_MATCH
}

export interface UpdateScoreboardAction {
  type: ScoreboardActionTypes.UPDATE,
  payload: ScoreboardState
}

export type ScoreboardActions =
  | UpdateScoreboardAction
  | EndScoreboardMatch
  | ListenScoreboardDataAction
