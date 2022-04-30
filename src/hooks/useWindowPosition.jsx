import { useState } from "react";
import { useLayoutEffect } from "react";

export function useWindowPosition() {
  const [position, setPosition] = useState(0);

  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.scrollY);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  });
  return position;
}
