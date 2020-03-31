import React, { useMemo } from "react";
import { Subtitles } from "./styles";
import Typewriter from "typewriter-effect";

const write = (typewriter, description, technology) => {
  typewriter.start();
  let characterCount = 0;
  description.split(" ").forEach((word, i) => {
    characterCount += word.length + 1;
    if (characterCount > 86) {
      characterCount = 0;
      typewriter
        .pauseFor(3000)
        .callFunction(nodes => (nodes.elements.wrapper.innerText = ""));
    }
    typewriter.pasteString(word + " ");
  });
  typewriter
    .pauseFor(3000)
    .callFunction(nodes => (nodes.elements.wrapper.innerText = ""));
  characterCount = 0;
  technology.split(" ").forEach((word, i) => {
    characterCount += word.length + 1;
    if (characterCount > 80) {
      characterCount = 0;
      typewriter
        .pauseFor(3000)
        .callFunction(nodes => (nodes.elements.wrapper.innerText = ""));
    }
    typewriter.pasteString(word + " ");
  });
  typewriter
    .pauseFor(3000)
    .callFunction(nodes => (nodes.elements.wrapper.innerText = ""));
};

export default ({ description, technology }) => {
  const renderTypewriter = useMemo(
    () => (
      <Typewriter
        key={Math.random()}
        options={{
          cursor: ""
        }}
        onInit={typewriter => {
          write(typewriter, description, technology);
          setInterval(() => {
            write(typewriter, description, technology);
          }, 3000);
        }}
      />
    ),
    [description, technology]
  );
  return <Subtitles>{renderTypewriter}</Subtitles>;
};
