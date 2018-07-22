// React
import React, { Component } from "react";

// Pigeon
import Map from "pigeon-maps";
import Overlay from "pigeon-overlay";

class Cartography extends Component {
  constructor(props) {
    super(props);
    var popUpArrayVar = [];
    this.props.geojson.markers.map(item =>
      popUpArrayVar.push(item.properties.popUp)
    );
    this.state = {
      marker: this.props.markerImg,
      markersArray: this.props.geojson.markers,
      popUpArray: popUpArrayVar,
      zoomHandler: this.props.zoom,
      viewportWidth: window.innerWidth - 95
    };
    this.handleResize = this.handleResize.bind(this);
  }
  handleResize() {
    this.setState({
      viewportWidth: window.innerWidth - 95
    });
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  render() {
    return (
      <Map
        defaultCenter={[
          this.props.geojson.center[0],
          this.props.geojson.center[1]
        ]}
        zoom={this.state.zoomHandler}
        width={this.state.viewportWidth}
        height={600}
        zoomOnMouseWheel={false}
        mouseWheelMetaText={null}
        onClick={() => {
          var popUpArrayVar = [];
          this.state.popUpArray.map(() => {
            popUpArrayVar.push(false);
          });
          this.setState({ popUpArray: popUpArrayVar });
        }}
      >
        {this.state.markersArray.map((item, index) => {
          var imgId = index;
          return (
            <Overlay
              key={index}
              anchor={[
                this.state.markersArray[index].geometry.coordinates[0],
                this.state.markersArray[index].geometry.coordinates[1]
              ]}
            >
              <div
                style={{
                  width: "1px",
                  height: "1px"
                }}
              >
                <img
                  id={imgId}
                  onClick={index => {
                    var popUpArrayVar = [];
                    this.state.popUpArray.map((currentItem, currentIndex) => {
                      if (currentIndex !== imgId) {
                        popUpArrayVar.push(false);
                      } else {
                        popUpArrayVar.push(true);
                      }
                    });
                    this.setState({ popUpArray: popUpArrayVar });
                  }}
                  style={{
                    width: "22px",
                    height: "40px",
                    transformOrigin: "center bottom",
                    transform:
                      this.state.popUpArray[index] === false
                        ? "translate(-45%, -85%)"
                        : "translate(-45%, -85%) scale(1.05)",
                    cursor: "pointer"
                  }}
                  src={this.state.marker}
                  alt="map marker"
                />
              </div>
              <div
                style={{
                  boxSizing: "border-box",
                  padding: "15px",
                  backgroundColor: "white",
                  transform: "translate(-50%, -150%)",
                  borderRadius: "10px",
                  cursor: "default",
                  textAlign: "center",
                  lineHeight: "28px",
                  display:
                    this.state.popUpArray[index] === false ? "none" : "block"
                }}
              >
                {this.state.markersArray[index].properties.tag} <br />{" "}
                <a href={this.state.markersArray[index].properties.link}>
                  {this.state.markersArray[index].properties.link}
                </a>
              </div>
            </Overlay>
          );
        })}
      </Map>
    );
  }
}

export default Cartography;
