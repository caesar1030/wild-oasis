import { useEffect, useRef } from "react";

function useOutsideClick(handler, catpuring = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, catpuring);

      return () => document.removeEventListener("click", handleClick);
    },
    [handler, catpuring],
  );

  return ref;
}

export default useOutsideClick;
