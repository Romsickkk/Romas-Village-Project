import { useEffect } from "react";

export function useCloseModal(ref, outsideLcick, listenerCapturing = true) {
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        outsideLcick();
      }
    }

    document.addEventListener("click", handleClick, listenerCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenerCapturing);
  }, [outsideLcick]);
}
