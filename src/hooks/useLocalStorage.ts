import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState(getItem(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function getItem<T>(key: string, initialValue: T) {
  const value = localStorage.getItem(key);
  if (!value) return initialValue;
  return JSON.parse(value);
}
