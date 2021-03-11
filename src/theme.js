import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = '#0368AD';
const arcOrange = '#f21507'

const theme = createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
});

export default theme;
