import React from "react";

type PointerPosition = {
  x: number;
  y: number;
};

const useGlowPointer = (): null => {
  const update = React.useCallback(({ x, y }: PointerPosition) => {
    document.documentElement.style.setProperty("--x", x.toFixed(2));
    document.documentElement.style.setProperty(
      "--xp",
      (x / window.innerWidth).toFixed(2)
    );
    document.documentElement.style.setProperty("--y", y.toFixed(2));
    document.documentElement.style.setProperty(
      "--yp",
      (y / window.innerHeight).toFixed(2)
    );
  }, []);

  React.useEffect(() => {
    const pointerMoveHandler = (e: PointerEvent) =>
      update({ x: e.clientX, y: e.clientY });

    document.body.addEventListener("pointermove", pointerMoveHandler);
    return () => {
      document.body.removeEventListener("pointermove", pointerMoveHandler);
    };
  }, [update]);

  return null;
};

export default useGlowPointer;
