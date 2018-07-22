/// React component
import React, { Component } from "react";

/// Theme
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import muiTheme from "./muiTheme";

/// Router
import { BrowserRouter, Route, Switch } from "react-router-dom";

/// Database
import { level1, inner } from "./database/database";

/// Custom components
import Article from "./components/Article";
import Landing from "./components/Landing";
import NotFound from "./components/404";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            sensitive
            render={props => (
              <Landing
                // Page title, must be 50–60 characters and unique across the site (optimal SEO length)
                titleTag={"Cooppe"}
                // Page description, must be 50–300 characters and unique across the site (optimal SEO length)
                descriptionTag={"Cooppe description"}
                cities={[
                  ["San Francisco", "/san-francisco"],
                  ["Los Angeles", "/los-angeles"]
                ]}
              />
            )}
          />
          <Route
            path="/san-francisco"
            exact
            sensitive
            render={props => (
              <Article
                identifier={"San Francisco"}
                database={level1}
                title={"San Francisco"}
                // Page title, must be 50–60 characters and unique across the site (optimal SEO length)
                titleTag={"San Francisco title"}
                // Page description, must be 50–300 characters and unique across the site (optimal SEO length)
                descriptionTag={"San Francisco description"}
              />
            )}
          />
          <Route
            path="/los-angeles"
            exact
            sensitive
            render={props => (
              <Article
                identifier={"Los Angeles"}
                database={level1}
                title={"Los Angeles"}
                // Page title, must be 50–60 characters and unique across the site (optimal SEO length)
                titleTag={"Los Angeles title"}
                // Page description, must be 50–300 characters and unique across the site (optimal SEO length)
                descriptionTag={"Los Angeles description"}
              />
            )}
          />
          {inner.map((item, index) =>
            inner[index].map((item2, index2) => (
              <Route
                key={index2}
                path={inner[index][index2][1]}
                exact
                sensitive
                render={props => (
                  <Article
                    identifier={"inner"}
                    title={inner[index][index2][2]}
                    decrease={inner[index][index2][3]}
                    component={inner[index][index2][0]}
                    // Page title, must be 50–60 characters and unique across the site (optimal SEO length)
                    titleTag={inner[index][index2][4]}
                    // Page description, must be 50–300 characters and unique across the site (optimal SEO length)
                    descriptionTag={inner[index][index2][5]}
                  />
                )}
              />
            ))
          )}
          <Route
            render={props => (
              <NotFound
                // Page title, must be 50–60 characters and unique across the site (optimal SEO length)
                titleTag={"404 Page Not Found"}
                // Page description, must be 50–300 characters and unique across the site (optimal SEO length)
                descriptionTag={"Page Not Found | Cooppe description"}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
