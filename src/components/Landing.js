// React
import React from "react";

// Theme
import muiTheme from "../muiTheme";

// Images
import logo from "../assets/logo.png";

// Custom components
import Modal from "./Modal";
import Meta from "./Meta";

// Router
import { Link } from "react-router-dom";

// Glamorous
import glamorous from "glamorous";

const LandingContainer = glamorous.div({
  display: "flex",
  justifyContent: "center",
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

const LandingCenter = glamorous.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center"
});

const LandingLogo = glamorous.img({
  width: "300px",
  textAlign: "center",
  margin: "0 0 10px 0"
});

const TitleText = glamorous.h1({
  margin: "0 0 0 10px",
  fontFamily: '"Oswald", sans-serif',
  fontWeight: "200",
  fontSize: "75px",
  margin: "0 0 5px 0",
  color: "white"
});

const TitleTextPe = glamorous.span({
  fontWeight: "500"
});

const Slogan = glamorous.div({
  color: "white",
  margin: "0 0 30px 0"
});

const LinkContainer = glamorous.div({
  margin: "0 0 30px 0"
});

const Disclamer = glamorous.div({
  color: "white",
  fontWeight: "300",
  fontSize: "18px",
  textAlign: "center"
});

class Landing extends React.Component {
  render() {
    console.log(this.props.cities);
    return (
      <LandingContainer>
        <Meta
          titleTag={this.props.titleTag}
          descriptionTag={this.props.descriptionTag}
        />
        <LandingCenter>
          <LandingLogo src={logo} alt="Cooppe logo" />
          <TitleText>
            Coop<TitleTextPe>pe</TitleTextPe>
          </TitleText>
          <Slogan>Cooperative People</Slogan>
          <LinkContainer>
            {this.props.cities.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={item[1]}
                  style={{
                    color: "white",
                    padding: "20px",
                    fontSize: "23px",
                    fontWeight: "300"
                  }}
                >
                  {item[0]}
                </Link>
              );
            })}
          </LinkContainer>
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
        </LandingCenter>
      </LandingContainer>
    );
  }
}

export default Landing;
