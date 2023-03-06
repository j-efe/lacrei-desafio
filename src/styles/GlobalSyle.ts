import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0 ;
  margin: 0;
}

html {
  font-family: 'Nunito', sans-serif;
  font-size: 62.5%;
}

body {
  background: #FFF;
  font-size: 1.6rem;
}

a {
  color: inherit;
  text-decoration: none;
}
`