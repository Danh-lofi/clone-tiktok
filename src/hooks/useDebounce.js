import { useState, useEffect } from "react";
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const debounced = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(debounced);
  }, [value]);
  return debouncedValue;
}

export default useDebounce;
