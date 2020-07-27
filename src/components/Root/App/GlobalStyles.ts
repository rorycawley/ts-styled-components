import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }


  body {
    background-color: white;

    color: black;
    font-family: 'Roboto', sans-serif !important;
  }

  img {
    display: block;
    max-width: 100%;
  }  
`
export default GlobalStyles
