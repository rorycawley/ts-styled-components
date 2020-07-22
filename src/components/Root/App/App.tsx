import React, { FC } from 'react'
import { Button } from 'components/common'
import { createGlobalStyle } from 'styled-components'

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
        <h1>App</h1>
        <Button>Test</Button>
      </div>
    </>
  )
}
export default App
