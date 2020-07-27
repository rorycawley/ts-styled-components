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

  img {
    display: block;
    max-width: 100%;
  }  
`
export default GlobalStyle
