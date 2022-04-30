import styled from "styled-components";

import { GlobalStyle } from "./styles/GlobalStyles";
import { Wrapper } from "./components/Wrapper";
import { Header } from "./components/Header/Header";
import { Info } from "./components/Info/Info";
import { Main } from "./components/Main/Main";
import { useWindowPosition } from "./hooks/useWindowPosition";
import { Nav } from "./components/Nav/Nav";

function App() {
  let value = useWindowPosition();
  const showUp = value > 800;
  return (
    <Wrapper>
      <GlobalStyle />
      {showUp && <Nav />}
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
