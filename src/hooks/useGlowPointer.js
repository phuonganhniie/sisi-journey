import React from "react";

const useGlowPointer = () => {
  const update = React.useCallback(({ x, y }) => {
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
    document.body.addEventListener("pointermove", update);
    return () => {
      document.body.removeEventListener("pointermove", update);
    };
  }, [update]);

  return null;
};

export default useGlowPointer;
