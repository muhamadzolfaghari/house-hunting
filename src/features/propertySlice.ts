import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IPropertyState from '../interfaces/IPropertyState';
import IProperty from '../interfaces/IProperty';
import { PROPERTY_STORAGE_KEY } from '../lib/localStorage.const';

const retrieveLocalStorageData = () => {
  const storageItem = localStorage.getItem(PROPERTY_STORAGE_KEY);

  if (!storageItem) return [];

  try {
    return JSON.parse(storageItem) as IProperty[];
  } catch {
    return [];
  }
};

const initialState: IPropertyState = {
  value: retrieveLocalStorageData(),
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
    propertyRemoved(state, action: PayloadAction<number>) {
      state.value = state.value.filter((_, index) => index !== action.payload);
    },
  },
});

export const { propertyChanged, propertyCreated, propertyRemoved } =
  propertySlice.actions;
export default propertySlice.reducer;
