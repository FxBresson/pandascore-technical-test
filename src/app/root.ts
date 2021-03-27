import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import scoreboardReducer from './components/scoreboard/redux/reducer';
import scoreboardEpic from './components/scoreboard/redux/epic';

export const rootEpic = combineEpics(
  scoreboardEpic
);

export const rootReducer = combineReducers({
  scoreboard: scoreboardReducer
});
