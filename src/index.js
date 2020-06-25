import React from "react";
import ReactDOM from "react-dom";
import { SingleButtonExample, MultiButtonExample } from "./demo";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const muiTheme = {
  overrides: {
    MuiButton: {
      contained: {
        width: 200
      }
    }
  }
};

const theme = createMuiTheme(muiTheme);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <SingleButtonExample />

    <MultiButtonExample />
  </ThemeProvider>,
  document.querySelector("#root")
);
