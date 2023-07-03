// store.js
// import { configureStore, applyMiddleware } from 'redux';
// import { configureStore,applyMiddleware } from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from "redux";

import thunk from 'redux-thunk';
import rootReducer from './reducer';
const store = createStore(rootReducer, applyMiddleware(thunk));

// const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
