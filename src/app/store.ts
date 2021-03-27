import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer } from './root';

const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
