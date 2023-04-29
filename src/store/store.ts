import {
  configureStore,
  combineReducers,
} from "@reduxjs/toolkit";
import currentweatherSliceReducer from "./slices/currentWeatherSlice";

const rootReducer = combineReducers({
  currentweatherSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispath = AppStore["dispatch"];
