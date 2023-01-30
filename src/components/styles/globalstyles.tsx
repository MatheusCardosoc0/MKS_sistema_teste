import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: ${props => props.theme.colors.secondary};
    width: 100%;
    height: 100%;

    font-family: 'Montserrat', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    margin: 0;
  }

  button{
    cursor: pointer;
  }
`

export default GlobalStyle
