import React, { FC } from "react";
// import { Button } from 'components/common'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Home, Login } from "components/pages";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div data-testid="app">
        <BrowserRouter>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
        {/* <h1>App</h1>
         <Button>Test</Button>
        <Button secondary>Test Secondary</Button>
        <Button large>Test Large</Button>
        <Button disabled>Test disabled</Button> */}
      </div>
    </ThemeProvider>
  );
};
export default App;
