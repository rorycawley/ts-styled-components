import React, { FC, useState, useContext } from 'react'
// import { Button } from 'components/common'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { Home, Login, FourZeroFour } from 'components/pages'
import { GlobalStyles } from 'components/Root/App'
import { lightTheme, darkTheme } from 'src/themes'
import { ThemeProvider, DefaultTheme } from 'styled-components'

const App: FC = () => {
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme)

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme(s => (s.id === 'light' ? darkTheme : lightTheme))
        },
      }}>
      <GlobalStyles />
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
