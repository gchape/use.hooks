import { useState } from "react";

const useToggle = <T extends boolean>(initialValue: T) => {
  return useState<T>(initialValue);
};

export { useToggle };
