import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Web Developer",
          "Information Technology Engineer",
          "MERN Stack Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed:60,
      }}
    />
  );
}

export default Type;
