import { map, switchMap, takeUntil } from 'rxjs/operators';
import { combineEpics, Epic, ofType } from 'redux-observable';
import {
  ScoreboardActions,
  ScoreboardActionTypes
} from './types';
import { webSocket } from 'rxjs/webSocket';
import { toScoreboardData } from '../../../helpers/scoreboard-data.helper';
import { LolFrame } from '../../../types/WebsocketLolFrame';
import { endMatch, updateScoreboard } from './actions';
import { environment } from '../../../../environments/dev.environment';

export const listenScoreboardData: Epic<ScoreboardActions, ScoreboardActions> = (action$) => {
  return action$.pipe(
    ofType<ScoreboardActions>(ScoreboardActionTypes.LISTEN_DATA),
    switchMap(() =>
      webSocket<LolFrame>(environment.webSocketUrl).pipe(
        map(frameData => {
          if (frameData.game.finished) {
            return endMatch();
          } else {
            return updateScoreboard(toScoreboardData(frameData));
          }
        }),
        takeUntil(action$.ofType(ScoreboardActionTypes.END_MATCH))
      ))
  );
};

const scoreboardEpic = combineEpics(listenScoreboardData);

export default scoreboardEpic;
