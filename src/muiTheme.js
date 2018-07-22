// Colors
import { blueGrey500 } from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueGrey500,
    secondary1Color: "#455A63",
    tertiary1Color: "#4EA0FF",
    quaternary1Color: "#F2F2F2"
  }
});

export default muiTheme;
