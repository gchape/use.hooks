import { useState } from "react";

const useToggle = (initialValue: boolean) => {
  const [state, setState] = useState(initialValue);

  const handleToggle = (value?: boolean) => {
    if (value !== undefined) {
      setState(value);
    } else {
      setState((prev) => !prev);
    }
  };

  return { toggle: state, handleToggle };
};

export { useToggle };
