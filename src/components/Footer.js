// React
import React from "react";

// Theme
import muiTheme from "../muiTheme";

// Router
import { Link } from "react-router-dom";

// Images
import logo from "../assets/logo.png";

// Custom components
import Modal from "./Modal";

// Glamorous
import glamorous from "glamorous";

const FooterContainer = glamorous.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "50px 2%",
  background:
    "linear-gradient(" +
    muiTheme.palette.primary1Color +
    "," +
    muiTheme.palette.secondary1Color +
    ")"
});

const Disclamer = glamorous.div({
  color: "white",
  fontWeight: "300",
  fontSize: "15px",
  textAlign: "center"
});

const FooterCities = glamorous.div({
  padding: "15px 0 40px 0"
});

class Footer extends React.Component {
  render() {
    return (
      <FooterContainer>
        <img src={logo} alt="Cooppe logo" height="100" width="100" />
        <FooterCities>
          <Link
            to="/san-francisco"
            style={{
              color: "white",
              padding: "10px",
              fontSize: "15px",
              fontWeight: "300"
            }}
          >
            San Francisco
          </Link>
          <Link
            to="/los-angeles"
            style={{
              color: "white",
              padding: "10px",
              fontSize: "15px",
              fontWeight: "300"
            }}
          >
            Los Angeles
          </Link>
        </FooterCities>
        <Disclamer>
          Disclamer and copytight, link to{" "}
          <Modal title="terms and conditions">
            <div>some info</div>
          </Modal>{" "}
          and{" "}
          <Modal title="about us">
            <div>some info</div>
          </Modal>
        </Disclamer>
      </FooterContainer>
    );
  }
}

export default Footer;
