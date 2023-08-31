import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --text: #575757;
    --font-family: 'Inter', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    color: var(--text);
    line-height: 22px;
    font-size: 16px;
    font-family: var(--font-family);
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.colors.background};
    
  }

  ul, ol, li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
