import { useCallback, useMemo, useState } from 'react';

const getLocalStorage = (key, defaultValue) => {
  const value = localStorage.getItem(key);
  if (value) return JSON.parse(value);
  setLocalStorage(key, defaultValue);
  return defaultValue;
};

const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const useLocalStorage = (key, defaultValue) => {
  const storedKey = useMemo(() => key, [key]);
  const [value, setValue] = useState(getLocalStorage(key, defaultValue));

  const updateValue = useCallback(
    (newValue) => {
      setLocalStorage(storedKey, newValue);
      setValue(newValue);
    },
    [setValue, storedKey]
  );

  return { value, setValue: updateValue };
};
