import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleware from "redux-promise";
import appReducer from "./reducers/index";

const ReduxStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    appReducer,
    composeEnhancers(applyMiddleware(promiseMiddleware))
  );
  return store;
};

export default ReduxStore;
