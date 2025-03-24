import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import counterReducer from "./counter/reducer";
import authReducer from "./login/reducer";
import { loadState, saveState } from "../utils/localStorage";

// Combine reducers for a scalable architecture
const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  // Add more reducers here
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
    auth: store.getState().auth,
    // You can choose which slices to persist.
  });
});

export default store;
