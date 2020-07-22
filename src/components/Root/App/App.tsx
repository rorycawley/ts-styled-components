import React, { FC } from 'react'
// import { Button } from 'components/common'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home, Login } from 'components/pages'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }


  body {
    background-color: white;
    min-height: 100vh;
    color: black;
    font-family: 'Roboto', sans-serif !important;
  }
`

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <div data-testid='app'>
        <BrowserRouter>
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/'>
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
    </>
  )
}
export default App
