import React, { FC } from 'react'
// import { Button } from 'components/common'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Home, Login, FourZeroFour } from 'components/pages'
import { GlobalStyle, lightTheme } from 'components/Root/App'

const App: FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <div data-testid="app">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route component={FourZeroFour} />
          </Switch>
        </Router>
        {/* <h1>App</h1>
         <Button>Test</Button>
        <Button secondary>Test Secondary</Button>
        <Button large>Test Large</Button>
        <Button disabled>Test disabled</Button> */}
      </div>
    </ThemeProvider>
  )
}
export default App
