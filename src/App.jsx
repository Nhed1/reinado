import styled from "styled-components";

import { GlobalStyle } from "./styles/GlobalStyles";
import { Wrapper } from "./components/Wrapper";
import { Header } from "./components/Header/Header";
import { Info } from "./components/Info/Info";

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Padding>
        <Header />
        <Info />
      </Padding>
    </Wrapper>
  );
}

const Padding = styled.div`
  padding: 16px;
`;

export default App;

function Main() {
  return (
    <div>
      <h1>O QUE VOCÊ IRÁ APRENDER NO TREINAMENTO?</h1>
    </div>
  );
}

function Card() {
  return (
    <div>
      <h2>PRIMEIRA PARTE</h2>
      <img src="" alt="" />
    </div>
  );
}
