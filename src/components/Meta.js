// React
import React, { Component } from "react";

// Meta
import { Helmet } from "react-helmet";

class Meta extends Component {
  render() {
    return (
      <Helmet>
        <title>{this.props.titleTag}</title>
        <meta name="description" content={this.props.descriptionTag} />
      </Helmet>
    );
  }
}

export default Meta;
