import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import scoreboardReducer from './components/Scoreboard/redux/reducer';
import scoreboardEpic from './components/Scoreboard/redux/epic';

export const rootEpic = combineEpics(
  scoreboardEpic
);

export const rootReducer = combineReducers({
  scoreboard: scoreboardReducer
});
