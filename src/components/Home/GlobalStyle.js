import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
  font-family: 'Bangers', cursive;
  font-size: 62.5%;
}

html, body {
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;

  &::-webkit-scrollbar{
    display: none;
  }
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.backgroundColor};
}

#root {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
`