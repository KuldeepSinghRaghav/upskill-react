// src/redux/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import counterReducer from './counter/reducer';
import postsReducer from './posts/reducer';
import { loadState, saveState } from '../utils/localStorage';

// Combine reducers for a scalable architecture
const rootReducer = combineReducers({
  counter: counterReducer,
  posts: postsReducer,
});

// Load persisted state from Local Storage
const persistedState = loadState();

// Create store with middleware (thunk for async actions) and preloaded state
const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

// Subscribe to store changes and persist part of the state
store.subscribe(() => {
  saveState({
    counter: {
      count: store.getState().counter.count,
    },
    // You can choose which slices to persist.
  });
});

export default store;
