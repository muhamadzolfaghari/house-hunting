import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IPropertyState from '../interfaces/IPropertyState';
import IProperty from '../interfaces/IProperty';
import getPropertyFromStorage from '../lib/utils/getPropertyFromStorage';

const initialState: IPropertyState = {
  value: getPropertyFromStorage() ?? [],
};

export const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    propertyChanged(state, action: PayloadAction<IProperty[]>) {
      state.value = action.payload;
    },
    propertyCreated(state, action: PayloadAction<IProperty>) {
      state.value = [...state.value, action.payload];
    },
    propertyUpdated(
      state,
      action: PayloadAction<{ index: number; property: IProperty }>
    ) {
      const { index, property } = action.payload;
      state.value[index] = property;
    },
    propertyRemoved(state, action: PayloadAction<number>) {
      state.value = state.value.filter((_, index) => index !== action.payload);
    },
  },
});

export const {
  propertyChanged,
  propertyCreated,
  propertyRemoved,
  propertyUpdated,
} = propertySlice.actions;
export default propertySlice.reducer;
