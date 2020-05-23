import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue, callback) => {
  const initialValue = () => {
    const valueFromStorage = JSON.parse(
      window.localStorage.getItem(key) || JSON.stringify(defaultValue)
    );
    if (callback) callback(valueFromStorage);
    return valueFromStorage;
  };
  const [storage, setStorage] = useState(initialValue);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storage));
  }, [storage]);

  return [storage, setStorage];
};

export default useLocalStorage;
