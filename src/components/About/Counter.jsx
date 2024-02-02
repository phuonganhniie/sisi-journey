import { useInView, useMotionValue, useSpring } from "framer-motion";
import React from "react";

const Counter = ({ value, direction = "up", ...rest }) => {
  const ref = React.useRef(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 300,
  });
  const inView = useInView(ref, { once: true, margin: "-100px" });

  React.useEffect(() => {
    if (inView) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [motionValue, inView, direction, value]);

  React.useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(0);
      }
    });

    return unsubscribe;
  }, [springValue]);

  return <span ref={ref} {...rest} />;
};

export default Counter;
