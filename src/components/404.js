// React
import React from "react";

// Theme
import muiTheme from "../muiTheme";

// Router
import { Link } from "react-router-dom";

// Custom components
import Meta from "./Meta";

// Glamorous
import glamorous from "glamorous";

const NotFoundContainer = glamorous.div({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100vh",
  minWidth: "100vw",
  background:
    "linear-gradient(" +
    muiTheme.palette.primary1Color +
    "," +
    muiTheme.palette.secondary1Color +
    ")"
});

const NotFoundMessage = glamorous.div({
  color: "white",
  fontSize: "40px",
  fontWeight: "200",
  textAlign: "center",
  ":first-child": {
    fontSize: "60px",
    fontWeight: "500"
  }
});

class NotFound extends React.Component {
  render() {
    return (
      <NotFoundContainer>
        <Meta
          titleTag={this.props.titleTag}
          descriptionTag={this.props.descriptionTag}
        />
        <NotFoundMessage>Status 404</NotFoundMessage>
        <NotFoundMessage>Page Not Found</NotFoundMessage>
        <Link
          to="/"
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "300",
            margin: "40px 0 0 0"
          }}
        >
          Back to Home page
        </Link>
      </NotFoundContainer>
    );
  }
}

export default NotFound;
