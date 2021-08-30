import { useSelector } from "react-redux";
import { propertySelector } from "../app/hooks";
import { useEffect } from "react";
import { PROPERTY_STORAGE_KEY } from "../lib/localStorage.const";

const usePropertyEffects = () =>  {
  const property  = useSelector(propertySelector);

  useEffect(() => {
    const json = JSON.stringify(property);
    localStorage.setItem(PROPERTY_STORAGE_KEY, json);
  }, [property])
}

export default usePropertyEffects;
