import React, { useState, useEffect, useCallback, useRef } from "react";
import rough from "roughjs/bundled/rough.esm.js";
import ReactFauxDOM from "react-faux-dom";
import { SketchyContainer } from "../styles/styled-components";

const Sketchy = () => {
  const divRef = useRef(null);
  const [node, setNode] = useState(null);

  const resize = useCallback(() => {
    const parentHeight = divRef?.current?.parentNode?.offsetHeight;
    const parentWidth = divRef?.current?.parentNode?.offsetWidth;
    if (parentHeight && parentWidth) {
      const node = ReactFauxDOM.createElement("svg");
      const roughSvg = rough.svg(node);
      const fill = roughSvg.rectangle(0, 0, parentWidth, parentHeight, {
        stroke: "black",
        roughness: "1",
        bowing: "0.5"
      });
      node.appendChild(fill);
      setNode(node);
    }
  }, [divRef]);

  useEffect(() => {
    window.addEventListener("resize", resize);
    setTimeout(resize, 0);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [resize]);

  return <SketchyContainer ref={divRef}>{node?.toReact()}</SketchyContainer>;
};

export default Sketchy;
