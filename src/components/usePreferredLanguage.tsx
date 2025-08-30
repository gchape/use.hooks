import { useSyncExternalStore } from "react";

const usePreferredLanguage = (): string => {
  return useSyncExternalStore(
    (subscribe) => {
      window.addEventListener("languagechange", subscribe);

      return () => {
        window.removeEventListener("languagechange", subscribe);
      };
    },
    () => navigator.language
  );
};

export { usePreferredLanguage };
