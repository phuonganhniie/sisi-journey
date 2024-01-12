import React from "react";
import Typewriter from "typewriter-effect";
import './Type.css';

function Type() {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString('<span class="gradient-1">Always like a "Fresh" Developer</span>')
          .pauseFor(70)
          .deleteAll()
          .typeString('<span class="gradient-2">Curious person about life, world and universe</span>')
          .pauseFor(70)
          .deleteAll()
          .typeString('<span class="gradient-3">A passionate Learner about everything</span>')
          .pauseFor(70)
          .deleteAll()
          .typeString('<span class="gradient-4">And I\'m</span> 🙆‍♀️')
          .pauseFor(70)
          .start();
      }}
      options={{
        autoStart: true,
        loop: true,
        delay: 70,
        deleteSpeed: 35,
      }}
    />
  );
}

export default Type;
