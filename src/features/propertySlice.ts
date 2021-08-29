import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IPropertyState from "../interfaces/IPropertyState";
import IProperty from "../interfaces/IProperty";

const initialState: IPropertyState = {
  value: [],
};

export const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    changed(state, action: PayloadAction<IProperty[]>) {
      state.value = action.payload;
    },
    created(state, action: PayloadAction<IProperty>) {
      state.value = [...state.value, action.payload];
    },
  },
});

export const propertyActions = propertySlice.actions;
export default propertySlice.reducer;
