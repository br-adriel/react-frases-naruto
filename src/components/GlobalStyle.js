import { createGlobalStyle } from 'styled-components';
import bgImg from '../images/bg.jpeg';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }  

  body {
    color: #333c36;
    font-family: 'Patua One', serif;
    background: url(${bgImg}) bottom center no-repeat;
    backgorund-size: cover;
  }
`;

export default GlobalStyle;
