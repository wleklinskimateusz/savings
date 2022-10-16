import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface Fund {
  value: number;
  timestamp: number;
}

interface FundsState {
  funds: Fund[];
}

const initialState: FundsState = {
  funds: [],
};

export const fundsSlice = createSlice({
  name: "funds",
  initialState,
  reducers: {
    addFund: (state, { payload }: PayloadAction<Fund>) => {
      state.funds.push(payload);
    },
    clearFunds: (state) => {
      state.funds = [];
    },
  },
});

export const { addFund, clearFunds } = fundsSlice.actions;
export const fundsSelector = (state: RootState) => state.funds.funds;
export default fundsSlice.reducer;
