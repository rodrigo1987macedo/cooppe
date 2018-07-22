// React
import React, { Component } from "react";

// Theme
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import muiTheme from "../muiTheme";

// Custom components
import Navigation from "./Navigation";
import Arrow from "./Arrow";
import Footer from "./Footer";
import Title from "./Title";
import Content from "./Content";
import Meta from "./Meta";

class Article extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Meta
            titleTag={this.props.titleTag}
            descriptionTag={this.props.descriptionTag}
          />
          <Navigation
            city={this.props.identifier}
            back={this.props.decrease}
            database={this.props.database}
          />
          <Title tag={this.props.title} />
          <Content
            city={this.props.identifier}
            database={this.props.database}
            content={this.props.component}
          />
          <Arrow />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Article;
