// React
import React from "react";

// Images
import logo from "../assets/logo.png";
import drawerHeader from "../assets/drawerHeader.png";

// Router
import { Link } from "react-router-dom";

// Theme
import muiTheme from "../muiTheme";

// Material UI components
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";

// Jump
import jump from "jump.js";

// Glamorous
import glamorous from "glamorous";

const AppBarContainer = glamorous.div({
  position: "fixed",
  width: "100%",
  top: "0",
  zIndex: "9999"
});

const Title = glamorous.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const TitleText = glamorous.h1({
  margin: "0 0 0 10px",
  fontFamily: '"Oswald", sans-serif',
  fontWeight: "200",
  fontSize: "45px",
  transform: 'translateY(-5px)'
});

const TitleTextPe = glamorous.span({
  fontWeight: "500"
});

const DrawerContainer = glamorous.div({
  position: "fixed",
  zIndex: "99999"
});

const DrawerHeader = glamorous.div({
  padding: "30px 20px",
  fontSize: "30px",
  fontWeight: "300",
  backgroundColor: muiTheme.palette.primary1Color,
  boxShadow: "0px 4px 13px -6px rgba(0, 0, 0, 0.75)",
  color: "white",
  margin: "0 0 10px 0"
});

class AppBarIcon extends React.Component {
  render() {
    return (
      <AppBarContainer>
        <AppBar
          iconElementLeft={
            this.props.depth === "inner" ? (
              <IconButton
                style={{
                  margin: "0 0 0 5px"
                }}
              >
                <Link to={this.props.return}>
                  <i className="material-icons">arrow_back_ios</i>
                </Link>
              </IconButton>
            ) : (
              <IconButton
                style={{
                  margin: "0 0 0 5px"
                }}
              >
                <i className="material-icons">bookmark</i>
              </IconButton>
            )
          }
          title={
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                transform: "translate(-75px)"
              }}
            >
              <Title
                style={{
                  transform: "translate(-30px)"
                }}
              >
                <img src={logo} alt="Cooppe logo" height="40" width="40" />

                <TitleText>
                  coop<TitleTextPe>pe</TitleTextPe>
                </TitleText>
              </Title>
            </Link>
          }
          onLeftIconButtonClick={this.props.onIconClick}
        />
      </AppBarContainer>
    );
  }
}

class DrawerMenu extends React.Component {
  render() {
    if (this.props.city !== "inner") {
      const sections = Object.entries(this.props.database[this.props.city]);
      const drawerSections = sections.map((item, index) => (
        <div key={item[0]}>
          {index === 0 && this.props.city !== "inner" ? (
            <DrawerHeader>{this.props.city}</DrawerHeader>
          ) : null}
          <MenuItem
            onClick={() => {
              let target = "." + item[0].toString().replace(/\s/g, "");
              jump(target, {
                offset: -90
              });
            }}
          >
            {item[0]}
          </MenuItem>
        </div>
      ));
      return (
        <DrawerContainer>
          <Drawer
            open={this.props.isDrawerOpened}
            onRequestChange={this.props.outsideClick}
            docked={false}
            width={300}
          >
            {drawerSections}
          </Drawer>
        </DrawerContainer>
      );
    } else {
      return null;
    }
  }
}

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpened: false
    };
  }
  handleToggle = () =>
    this.setState({ drawerOpened: !this.state.drawerOpened });
  render() {
    return (
      <div>
        <AppBarIcon
          depth={this.props.city}
          return={this.props.back}
          onIconClick={this.props.city === "inner" ? null : this.handleToggle}
        />
        <DrawerMenu
          isDrawerOpened={this.state.drawerOpened}
          outsideClick={this.handleToggle}
          city={this.props.city}
          database={this.props.database}
        />
      </div>
    );
  }
}
