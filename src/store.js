import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/userSlice';
import appApi from './services/appApi';

//Persist our Store

import storage from "redux-persist/lib/storage";
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

//reducers

const reducer  = combineReducers({
  user: userSlice,
  [appApi.reducerPath]: appApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklisted: [appApi.reducerPath],
};


//persist the store

const persistedReducer = persistReducer(persistConfig, reducer);

//create the store

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, appApi.middleware],
});

export default store;