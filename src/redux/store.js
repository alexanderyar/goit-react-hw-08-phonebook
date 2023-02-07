import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import { contactsSlice } from "./contactsSlice/contactsSlice";
import { filterSlice } from "./filterSlice/filterSlice";
import { authReducer } from "./auth/authSlice";


// config for redux-persist;
const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer)


export const store = configureStore({
  reducer: {
    // contacts: contactsReducer,
    contacts:contactsSlice.reducer,
    filter: filterSlice.reducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);