import { useState } from "react";

const useDefault = <T,>(initialValue: T, defaultValue: T) => {
  const [state, setState] = useState(initialValue ?? defaultValue);

  if (state === undefined || state === null) {
    return { state: defaultValue, setState };
  }

  return { state, setState };
};

export { useDefault };
