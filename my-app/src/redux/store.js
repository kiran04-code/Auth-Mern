import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./createSlice/slice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // should be lowercase 'storage'

const rootReducer = combineReducers({ user: userReducer });

const persistConfig = {
  key: 'root',
  version: 1,
  storage, // not 'Storage'
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // ✅ renamed

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
