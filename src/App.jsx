import styled from "styled-components";

import { GlobalStyle } from "./styles/GlobalStyles";
import { Wrapper } from "./components/Wrapper";
import { Header } from "./components/Header/Header";
import { Info } from "./components/Info/Info";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Padding>
        <Header />
        <Info />
        <Main />
      </Padding>
    </Wrapper>
  );
}

const Padding = styled.div`
  padding: 16px;
`;

export default App;
