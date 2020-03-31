import React, { useMemo } from "react";
import { Video } from "./styles";

function importAll(r) {
  let images = {};
  r.keys().forEach(item => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const videos = importAll(require.context("../../videos", false, /\.(mp4)$/));

export default ({ src }) => {
  const render = useMemo(
    () => (
      <Video key={Math.random()} autoPlay muted loop style={{}}>
        <source src={videos[src]} type="video/mp4"></source>
      </Video>
    ),
    [src]
  );
  return render;
};
