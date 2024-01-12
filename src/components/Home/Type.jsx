import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Always like a Fresh Developer",
          "Curious Person about life, world, universe and everything",
          "A passionate Writer and Learner about technology",
          "And I'm...",
        ],
        autoStart: true,
        loop: true,
        delay: 40,
        deleteSpeed: 35,
      }}
    />
  );
}

export default Type;
