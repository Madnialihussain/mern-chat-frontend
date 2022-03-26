import { configureStore } from '@redux/toolkit';
import userSlice from './features/userSlice';
import appApi from './services/appApi';

//Persist our Store

import storage from "redux-persist/lib/storage";
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

//reducers

const reducer = combineReducers({
  user: userSlice,
  [appApi.reducerPath]: appApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklisted: [appApi.reducerPath],
};


//persist the store

const perstedReducer = persistReducer(persistConfig, reducer);