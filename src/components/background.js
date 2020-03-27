import React from "react";
import * as d3 from "d3";
import textures from "textures";

import ReactFauxDOM from "react-faux-dom";

import { TextureContainer } from "../styles/styled-components.js";

class Background extends React.Component {
  render() {
    var node = ReactFauxDOM.createElement("svg");
    var d3svg = d3.select(node);
    let t;

    switch (this.props.index) {
      case 0:
        t = textures
          .paths()
          .d("crosses")
          .lighter()
          .stroke("rgba(0,0,0,0.1)")
          .size(30);
        break;

      case 1:
        t = textures
          .paths()
          .d("woven")
          .lighter()
          .stroke("rgba(0,0,0,0.1)")
          .size(20);
        break;

      case 2:
        t = textures
          .paths()
          .d("nylon")
          .lighter()
          .stroke("rgba(0,0,0,0.1)")
          .size(30);
        break;

      case 3:
        t = textures
          .paths()
          .d("caps")
          .lighter()
          .stroke("rgba(0,0,0,0.1)")
          .size(20);
        break;

      case 4:
        t = textures.circles().lighter().fill("rgba(0,0,0,0.3)");
        break;

      default:
        break;
    }

    d3svg.call(t);

    d3svg
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("height", 3000)
      .attr("width", 3000)
      .style("fill", t.url());

    return <TextureContainer>{node.toReact()}</TextureContainer>;
  }
}

export default Background;
