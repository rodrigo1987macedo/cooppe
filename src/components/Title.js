// React
import React from "react";

// Glamorous
import glamorous from "glamorous";

// Material UI components
import Divider from "material-ui/Divider";

const H1 = glamorous.h1({
  padding: "20px 2%",
  margin: "64px 0 0 0"
});

class Title extends React.Component {
  render() {
    return (
      <div>
        <H1 id="top">{this.props.tag}</H1>
        <Divider />
      </div>
    );
  }
}

export default Title;
