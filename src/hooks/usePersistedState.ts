'use client';
import { useEffect, useState } from 'react';

export function usePersistedState(key: string, defaultValue: string) {
  const [state, setState] = useState(() => {
    if (typeof window === 'undefined') return defaultValue;
    const stored = localStorage.getItem(key);
    return stored !== null ? stored : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}