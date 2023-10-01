import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartslice";
import breakReducer from "./breakslice"; // import the new break reducer
import branchslice from "./branchslice";
import {
  persistStore,
  persistReducer,
  PERSIST,
  REHYDRATE,
  PAUSE,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  cart: cartReducer,
  break: breakReducer, // add the break reducer here
  branch: branchslice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, REHYDRATE, PAUSE, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
