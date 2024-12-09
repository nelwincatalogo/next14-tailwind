import { useState } from 'react';

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange: handleChange,
    setvalue: setValue,
  };
};

export const useCheckbox = (defaultValue = false) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event) => {
    setValue(!value);
  };

  return {
    checked: value,
    onChange: handleChange,
    setvalue: setValue,
  };
};
