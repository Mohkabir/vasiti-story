
import { createStore } from "redux";
import { rootReducers } from "./reducers/combineReducers";

export const store = createStore(rootReducers);