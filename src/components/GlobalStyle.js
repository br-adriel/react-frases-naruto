import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }  

  body {
    color: #333c36;
    font-family: 'Patua One', serif;
  }
`;

export default GlobalStyle;
