import { AppDispatch, RootState } from "./store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const selectRef = (state: RootState) => state;

export const userSelector = createSelector(selectRef, (state) => state.user);

export const propertySelector = createSelector(
  selectRef,
  (state) => state.property.value
);
