import { useCallback, useState } from 'react';

// Detecting HTML5 Features - Dive Into HTML5 - https://bit.ly/3FGMbyH
function supportsLocalStorage() {
  try {
    return 'localStorage' in window && window.localStorage !== null;
  } catch (e) {
    return false;
  }
}

// Hook
function useLocalStorageState<T>(key: string, initialValue: T) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [state, setState] = useState<T>(() => {
    if (supportsLocalStorage()) {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);

      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    }

    return initialValue;
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = useCallback(
    (value: T | ((value: T) => T)) => {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(state) : value;

      if (supportsLocalStorage()) {
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }

      // Save state
      setState(valueToStore);
    },
    [key, state]
  );

  return [state, setValue] as [T, typeof setValue];
}

export default useLocalStorageState;
