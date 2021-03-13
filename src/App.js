import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme.js";
import {
  AppBackground,
  CheckoutContainer,
  CheckoutContainerContent,
} from "./AppStyled";
import MainRouter from "./routers/MainRouter"

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <AppBackground>
        <CheckoutContainer>
          <CheckoutContainerContent>
            <MainRouter />
          </CheckoutContainerContent>
        </CheckoutContainer>
      </AppBackground>
    </MuiThemeProvider>
  );
}

export default App;
