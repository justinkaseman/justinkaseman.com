import React from "react";
import * as d3 from "d3";
import ReactFauxDOM from "react-faux-dom";
import * as topojson from "topojson-client";

class Background extends React.Component {
  render() {
    var node = ReactFauxDOM.createElement("svg");
    var d3svg = d3.select(node);

    var width = window.innerWidth,
      height = window.innerHeight,
      centered,
      clicked_point;

    var projection = d3.geoMercator().translate([width / 2.2, height / 1.5]);

    var plane_path = d3.geoPath().projection(projection);

    var svg = d3
      .select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("class", "map");

    var g = svg.append("g");
    var path = d3.geoPath().projection(projection);

    // load and display the World
    const world = d3.json(
      "https://unpkg.com/world-atlas@1/world/110m.json",
      function(error, topology) {
        g.selectAll("path")
          .data(topojson.feature(topology, topology.objects.countries).features)
          .enter()
          .append("path")
          .attr("d", path);
      }
    );

    d3svg.call(world);

    d3svg
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("height", 3000)
      .attr("width", 3000);

    return <div>{node.toReact()}</div>;
  }
}

export default Background;
