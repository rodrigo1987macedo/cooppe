// React
import React from "react";

// Glamorous
import glamorous from "glamorous";

const ContentContainer = glamorous.div({
  padding: "10px 2% 20px 2%"
});

class Content extends React.Component {
  render() {
    if (this.props.city !== "inner") {
      const sections = Object.entries(this.props.database[this.props.city]);
      const content = sections.map((item, index) => (
        <ContentContainer key={item[0]}>
          <h2 className={item[0].replace(/\s/g, "")}>{item[0]}</h2>
          {item[1]}
        </ContentContainer>
      ));
      return <div>{content}</div>;
    } else {
      return <ContentContainer>{this.props.content}</ContentContainer>;
    }
  }
}

export default Content;
