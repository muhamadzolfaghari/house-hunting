import { PROPERTY_STORAGE_KEY } from '../localStorage.const';
import IProperty from '../../interfaces/IProperty';

const getPropertyFromStorage = () => {
  const storageItem = localStorage.getItem(PROPERTY_STORAGE_KEY);

  if (storageItem) {
    try {
      return JSON.parse(storageItem) as IProperty[];
    } catch {
    }
  }
};


export default getPropertyFromStorage;
