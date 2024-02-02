import { Slot, Slottable } from "@radix-ui/react-slot";
import React from "react";

const GlowCard = React.forwardRef((props, ref) => {
  const { asChild, children, ...rest } = props;
  const [base, setBase] = React.useState(0);
  const [spread, setSpread] = React.useState(0);

  const Component = asChild ? Slot : "div";

  React.useEffect(() => {
    setBase(Math.floor(Math.random() * 360));
    setSpread(Math.floor(Math.random() * 1001));
  }, []);

  return (
    <Component
      ref={ref}
      style={{
        "--base": base,
        "--spread": spread,
      }}
      {...rest}
      data-testid="glow-card"
      data-glow
    >
      <div data-glow />
      <Slottable>{children}</Slottable>
    </Component>
  );
});

GlowCard.displayName = "GlowCard";

export default GlowCard;
