import { useEffect } from "react";

export function useCloseModal(ref, outsideClick, listenerCapturing = true) {
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        outsideClick();
      }
    }

    document.addEventListener("click", handleClick, listenerCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenerCapturing);
  }, [outsideClick]);
}
