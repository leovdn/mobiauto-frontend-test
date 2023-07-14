import { createGlobalStyle } from 'styled-components'
import { theme } from './themes/default'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
  html {
    font-size: 87.5%;
  }
}


  body {
    background-color: ${theme.palette.background.default};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }
`
