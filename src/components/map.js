import React from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from "react-simple-maps";
import { Motion, spring } from "react-motion";
import geography from "../data/world-110m.json";
import { MapNavigationButton } from "../styles/styled-components";

class Map extends React.Component {
  state = {
    center: [0, 20],
    zoom: 1,
    annotation: null,
    moveTo: [0,20],
  };

  handleZoomIn = () => {
    this.setState({
      zoom: this.state.zoom * 2,
      center: this.state.moveTo,
    });
  };
  handleZoomOut = () => {
    this.setState({
      zoom: this.state.zoom / 2,
    });
  };
  handleCityClick = coordinates => {
    this.setState({
      zoom: 2,
      center: coordinates,
    });
  };

  handleReset = () => {
    this.setState({
      center: [0, 20],
      zoom: 1,
    });
  };

  onMouseEnter = marker => {
    this.setState({
      annotation: marker,
    });
  };
  onMouseLeave = () => {
    this.setState({
      annotation: null,
    });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "white",
          height: "100vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "calc(50% - 100px)",
            top: "10px",
          }}
        >
          <MapNavigationButton onClick={this.handleZoomIn}>
            {"Zoom in"}
          </MapNavigationButton>
          <MapNavigationButton onClick={this.handleZoomOut}>
            {"Zoom out"}
          </MapNavigationButton>
          <MapNavigationButton onClick={this.handleReset}>
            {"Reset"}
          </MapNavigationButton>
        </div>
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
              <ZoomableGroup center={[x, y]} zoom={zoom} onMoveEnd={({coordinates}) => 
                this.setState({
                  moveTo: coordinates,
                })}>
                <Geographies geography={geography}>
                  {({geographies}) =>
                    geographies.map(
                      (geography, i) =>
                        geography.id !== "010" && (
                          <Geography
                            key={i}
                            geography={geography}
                            style={{
                              default: {
                                fill: "#ECEFF1",
                                stroke: "#607D8B",
                                strokeWidth: 0.75,
                                outline: "none",
                              },
                              hover: {
                                fill: "#ECEFF1",
                                stroke: "#607D8B",
                                strokeWidth: 0.75,
                                outline: "none",
                              },
                              pressed: {
                                fill: "#ECEFF1",
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
                  {this.props.cities.map(({name, coordinates}, i) => (
                    <Marker
                      key={i}
                      coordinates={coordinates}
                      onClick={() => this.handleCityClick(coordinates)}
                      onMouseEnter={() => this.onMouseEnter({name, coordinates})}
                      onMouseLeave={this.onMouseLeave}
                    >
                      <circle
                        cx={0}
                        cy={0}
                        r={1.5}
                        fill="#FF5722"
                        stroke="#DF3702"
                      />
                    </Marker>
                  ))}
                {this.state.annotation ? (
                  <Annotation
                    dx={-35}
                    dy={-15}
                    subject={this.state.annotation.coordinates}
                    connectorProps={{
                      stroke: "#607D8B",
                      strokeWidth: 1,
                      strokeLinecap: "round"
                    }}
                  >
                    <text>{this.state.annotation.name}</text>
                  </Annotation>
                ) : null}
              </ZoomableGroup>
            </ComposableMap>
          )}
        </Motion>
      </div>
    );
  }
}

export default Map;
