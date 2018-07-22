// React
import React from "react";

// Theme
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import muiTheme from "../muiTheme";

// Material UI components
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

// Glamorous
import glamorous from "glamorous";

const ModalDiv = glamorous.div({
  display: "inline-block"
});

const ModalDivButton = glamorous.button({
  background: "none",
  padding: "0",
  border: "none",
  outline: "none",
  fontSize: "inherit",
  color: "lightblue",
  cursor: "pointer"
});

class Modal extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton label="Close" primary={true} onClick={this.handleClose} />
    ];

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <ModalDiv>
          <ModalDivButton onClick={this.handleOpen}>
            {this.props.title}
          </ModalDivButton>
          <Dialog
            style={{
              width: "100%"
            }}
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            title={this.props.title}
          >
            {this.props.children}
          </Dialog>
        </ModalDiv>
      </MuiThemeProvider>
    );
  }
}

export default Modal;
