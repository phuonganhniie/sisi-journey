import Typewriter from "typewriter-effect";
import "./Title.css";

const TitleType = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString('<span class="title">WELCOME TO SISI MILKY WAY</span>')
          .pauseFor(1000)
          .start();
      }}
      options={{
        autoStart: true,
        loop: true,
        cursorClassName: "cursor",
      }}
    />
  );
};

export default TitleType;
