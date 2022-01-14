import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middlware = [thunk];

if(process.env.NODE_ENV === "developement") {
    middlware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlware))