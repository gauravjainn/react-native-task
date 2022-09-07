import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import auth from "./Reducers/Auth";
const reducers = combineReducers({ auth });
const middleware = [thunk];
const store = configureStore({ reducer: reducers, middleware });
export type RootState = ReturnType<typeof reducers>;

export default store;
