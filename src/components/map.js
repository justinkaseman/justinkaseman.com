import React from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps";
import { Motion, spring } from "react-motion";
import geography from "../data/world-110m.json";

const wrapperStyles = {
  width: "100vw",
  height: "95vh",
};

class Map extends React.Component {
  state = {
    center: [0, 20],
    zoom: 1,
  };

  handleZoomIn = () => {
    this.setState({
      zoom: this.state.zoom * 2,
    });
  };
  handleZoomOut = () => {
    this.setState({
      zoom: this.state.zoom / 2,
    });
  };
  handleCityClick = city => {
    this.setState({
      zoom: 2,
      center: city.coordinates,
    });
  };
  handleReset = () => {
    this.setState({
      center: [0, 20],
      zoom: 1,
    });
  };

  render() {
    return (
      <div style={wrapperStyles}>
        <button onClick={this.handleZoomIn}>{"Zoom in"}</button>
        <button onClick={this.handleZoomOut}>{"Zoom out"}</button>
        <button onClick={this.handleReset}>{"Reset"}</button>
        <Motion
          defaultStyle={{
            zoom: 1,
            x: 0,
            y: 20,
          }}
          style={{
            zoom: spring(this.state.zoom, { stiffness: 210, damping: 20 }),
            x: spring(this.state.center[0], { stiffness: 210, damping: 20 }),
            y: spring(this.state.center[1], { stiffness: 210, damping: 20 }),
          }}
        >
          {({ zoom, x, y }) => (
            <ComposableMap
              projectionConfig={{ scale: 205 }}
              width={980}
              height={551}
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <ZoomableGroup center={[x, y]} zoom={zoom}>
                <Geographies geography={geography}>
                  {(geographies, projection) =>
                    geographies.map(
                      (geography, i) =>
                        geography.id !== "010" && (
                          <Geography
                            key={i}
                            geography={geography}
                            projection={projection}
                            style={{
                              default: {
                                fill: "#ECEFF1",
                                stroke: "#607D8B",
                                strokeWidth: 0.75,
                                outline: "none",
                              },
                              hover: {
                                fill: "#CFD8DC",
                                stroke: "#607D8B",
                                strokeWidth: 0.75,
                                outline: "none",
                              },
                              pressed: {
                                fill: "#FF5722",
                                stroke: "#607D8B",
                                strokeWidth: 0.75,
                                outline: "none",
                              },
                            }}
                          />
                        )
                    )
                  }
                </Geographies>
                <Markers>
                  {this.props.cities.map((city, i) => (
                    <Marker
                      key={i}
                      marker={city}
                      onClick={this.handleCityClick}
                    >
                      <circle
                        cx={0}
                        cy={0}
                        r={2}
                        fill="#FF5722"
                        stroke="#DF3702"
                      />
                    </Marker>
                  ))}
                </Markers>
              </ZoomableGroup>
            </ComposableMap>
          )}
        </Motion>
      </div>
    );
  }
}

export default Map;
