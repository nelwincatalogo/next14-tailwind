import { useEffect, useState } from 'react';

/**
 * useDebounce hook
 * This hook allows you to debounce any fast changing value. The debounced value will only
 * reflect the latest value when the useDebounce hook has not been called for the specified delay period.
 *
 * @param value - The value to be debounced.
 * @param delay - The delay in milliseconds for the debounce.
 * @returns The debounced value.
 */
function useDebounce<T>(value: T, delay: number): { debouncedValue: T } {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    if (typeof value === 'string' && value.trim().length === 0) {
      setDebouncedValue(value);
      return;
    }

    // Update debounced value after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent debounced value from updating if value is changed within the delay period
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Only re-call effect if value or delay changes

  return { debouncedValue };
}

export default useDebounce;
