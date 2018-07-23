// React
import React from "react";

// Theme
import muiTheme from "../muiTheme";

// Images
import logo from "../assets/logo.png";

// Database
import aboutUs from "../database/aboutUs/aboutUs";
import termsAndConditions from "../database/termsAndConditions/termsAndConditions";

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
  textAlign: "center",
  padding: "40px"
});

const LandingLogo = glamorous.img({
  width: "200px",
  textAlign: "center",
  margin: "0 0 10px 0",
  "@media only screen and (min-width: 500px)": {
    width: "300px",
  }
});

const TitleText = glamorous.h1({
  margin: "0 0 0 10px",
  fontFamily: '"Oswald", sans-serif',
  fontWeight: "200",
  fontSize: "70px",
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
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  margin: "0 0 30px 0"
});

const LinkDiv = glamorous.div({
  padding: '15px'
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
            coop<TitleTextPe>pe</TitleTextPe>
          </TitleText>
          <Slogan>Cooperative People</Slogan>
          <LinkContainer>
            {this.props.cities.map((item, index) => {
              return (
                <LinkDiv>
                  <Link
                    key={index}
                    to={item[1]}
                    style={{
                      color: "white",
                      fontSize: "23px",
                      fontWeight: "300"
                    }}
                  >
                    {item[0]}
                  </Link>
                </LinkDiv>
              );
            })}
          </LinkContainer>
          <Disclamer>
            Disclamer and copytight, link to{" "}
            <Modal title="Terms and Conditions">
              <div>{termsAndConditions}</div>
            </Modal>{" "}
            and{" "}
            <Modal title="About Us">
              <div>{aboutUs}</div>
            </Modal>
          </Disclamer>
        </LandingCenter>
      </LandingContainer>
    );
  }
}

export default Landing;
