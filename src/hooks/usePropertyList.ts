import { useSelector } from 'react-redux';
import { propertySelector, useAppDispatch } from "../app/hooks";
import IProperty from '../interfaces/IProperty';
import { useRef, useState } from 'react';
import { propertyChanged, propertyRemoved } from "../features/propertySlice";
import { useHistory } from "react-router-dom";

const usePropertyList = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const propertyIndex = useRef<number>();
  const list = useSelector(propertySelector);
  const [openDialog, setOpenDialog] = useState(false);
  const keys = list.length ? (Object.keys(list[0]) as (keyof IProperty)[]) : [];

  const handleRemove = (index: number) => () => {
    setOpenDialog(true);
    propertyIndex.current = index;
  };

  const handleEdit = (index: number) => () => {
    history.push('/manage/')
  }

  const handleConfirmRemove = () => {
    dispatch(propertyRemoved(propertyIndex.current!));
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return {
    list,
    keys,
    openDialog,
    handleRemove,
    setOpenDialog,
    handleCloseDialog,
    handleConfirmRemove,
  };
};

export default usePropertyList;
