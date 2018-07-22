// React
import React from "react";

// Jump
import jump from "jump.js";

// Theme
import muiTheme from "../muiTheme";

// Glamorous
import glamorous from "glamorous";

const ArrowContainer = glamorous.div({
  backgroundColor: muiTheme.palette.tertiary1Color,
  borderRadius: "100%",
  maxWidth: "50px",
  padding: "9px 9px 5px 9px",
  position: "fixed",
  bottom: "5vw",
  right: "5vw",
  color: "white",
  boxShadow: "0px 4px 13px -6px rgba(0, 0, 0, 0.75)",
  cursor: "pointer"
});

class Arrow extends React.Component {
  render() {
    return (
      <ArrowContainer
        onClick={() =>
          jump("#top", {
            offset: -64
          })
        }
      >
        <i className="material-icons">keyboard_arrow_up</i>
      </ArrowContainer>
    );
  }
}

export default Arrow;
