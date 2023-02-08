import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addShop: (state, action) => {
      let a = state.findIndex((ele) => {
        return ele.cid === action.payload.cid;
      });
      if (a !== -1) {
        state[a].count = action.payload.count + state[a].count;
        return state;
      } else {
        return [action.payload, ...state];
      }
    },
    deleteShop: (state, action) => {
      return state.filter((ele) => {
        return ele.cid !== action.payload.cid;
      });
    },
  },
});

// reducer方法的每一个case都会生成一个Action
export const { addShop, deleteShop } = counterSlice.actions;

export default counterSlice.reducer;
