// store.js
// import { configureStore, applyMiddleware } from 'redux';
import { configureStore,applyMiddleware } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
