import { combineReducers, createStore } from 'redux';
import scoreboardReducer from './components/scoreboard/redux/state';

const rootReducer = combineReducers({
  scoreboard: scoreboardReducer
});

const store = createStore(rootReducer);

export default store;
