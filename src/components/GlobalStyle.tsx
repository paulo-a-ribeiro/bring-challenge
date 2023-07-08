import { createGlobalStyle } from 'styled-components'

const styled = { createGlobalStyle }

const GlobalStyle = styled.createGlobalStyle`
  :root {
    --c-primary: 221, 46%, 20%;
    --c-secondary: 222, 9%, 61%;
    --c-links: 199, 80%, 56%;
    --c-black: 60, 13%, 9%;
    --c-pure-black: 0, 0%, 0%;
    --c-grey: 200, 14%, 96%;
    --c-grey-dark: 200, 6%, 92%;
    --c-grey-darker: 200, 6%, 86%;
    --c-white: 36, 100%, 99%;

    --font-primary: 'Sora', sans-serif;
  }

  * {
    box-sizing: border-box;
    font-size: 1.6rem;
    font-family: var(--font-primary);
    color: hsl(var(--c-primary));
    line-height: 1.5;
  }

  html {
    font-size: 62.5%;
    user-select: none;
  }

  body {
    background-color: hsl(var(--c-grey));
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
  }
`
export default GlobalStyle
