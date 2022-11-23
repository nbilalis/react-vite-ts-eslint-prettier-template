import { useEffect, useState } from 'react';

// Detecting HTML5 Features - Dive Into HTML5 - https://bit.ly/3FGMbyH
function supportsLocalStorage() {
  try {
    return 'localStorage' in window && window.localStorage !== null;
  } catch (e) {
    return false;
  }
}

function useLocalStorageState<T>(key: string, initialValue: T) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [state, setState] = useState<T>(() => {
    if (supportsLocalStorage()) {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? (JSON.parse(item) as T) : initialValue;
    }

    return initialValue;
  });

  useEffect(() => {
    if (supportsLocalStorage()) {
      window.localStorage.setItem(key, JSON.stringify(state));
    }
  }, [key, state]);

  return [state, setState] as [T, typeof setState];
}

export default useLocalStorageState;
