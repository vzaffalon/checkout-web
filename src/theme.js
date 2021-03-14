import { createMuiTheme } from "@material-ui/core/styles";

const overrides = {
  MuiTab: {
    // general overrides for your material tab component here
    root: {
      backgroundColor: "#212529",
      color: "#ffffff !important",
      "&$selected": {
        backgroundColor: "#26C6DA",
        color: "#ffffff !important",
      },
    },
  },
};

export default createMuiTheme({
  overrides,
});
