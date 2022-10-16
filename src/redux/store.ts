import { configureStore } from "@reduxjs/toolkit";
import fundsReducer from "./features/funds/fundsSlice";

const store = configureStore({
  reducer: {
    funds: fundsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
