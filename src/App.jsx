import styled from "styled-components";

import { GlobalStyle } from "./styles/GlobalStyles";
import { Wrapper } from "./components/Wrapper";
import { Header } from "./components/Header/Header";
import { Info } from "./components/Info/Info";
import { Main } from "./components/Main/Main";
import { Nav } from "./components/Nav/Nav";
import { Prices } from "./components/Prices/Prices";

import { useWindowPosition } from "./hooks/useWindowPosition";

function App() {
  let value = useWindowPosition();
  const showUp = value > 800;
  const showLimitedSpace = value > 2700;
  return (
    <Wrapper>
      <GlobalStyle />
      {showUp && <Nav showLimitedSpace={showLimitedSpace} />}
      <Padding>
        <Header />
        <Info />
        <Main />
        <Prices />
      </Padding>
    </Wrapper>
  );
}

const Padding = styled.div`
  padding: 16px;
`;

export default App;
