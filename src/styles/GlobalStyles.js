import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    scroll-behavior: smooth;

}
    body {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0; 
    font-family: 'Ruda', sans-serif;
    box-sizing: border-box;
    }

    @media (min-width: 700px) {
        body {
            display: flex;
            justify-content: center;
            background-color: #000;
        }

  }
`;
