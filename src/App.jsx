import styled from "styled-components";

import { GlobalStyle } from "./styles/GlobalStyles";
import { Wrapper } from "./components/Wrapper";
import { Header } from "./components/Header/Header";
import { Info } from "./components/Info/Info";
import { Main } from "./components/Main/Main";
import { Nav } from "./components/Nav/Nav";
import { Prices } from "./components/Prices/Prices";
import { WhatsappButton } from "./components/WhatsappButton";
import { Adress } from "./components/Adress/Adress";
import { ProfileCard } from "./components/ProfileCard/ProfileCard";
import { FinalSentence } from "./components/FinalSentence/FinalSentence";
import { Footer } from "./components/Footer";
import Faq from "./components/Faq/Faq";

import { useWindowPosition } from "./hooks/useWindowPosition";
import { useRef } from "react";

function App() {
  const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const element1 = useRef();
  const element2 = useRef();

  let value = useWindowPosition();
  const showUp = value > 800;
  const showLimitedSpace = value > 3050;
  return (
    <Wrapper>
      <GlobalStyle />
      {showUp && (
        <Nav
          showLimitedSpace={showLimitedSpace}
          click={() => scrollToDiv(element2)}
        />
      )}
      <Padding>
        <Header />
        <Info reference={element1} click={() => scrollToDiv(element2)} />
        <Main />
        <Adress reference={element2} />
        <Prices />
        <ProfileCard />
        <Faq />
        <FinalSentence />
      </Padding>
      <Footer />
      <WhatsappButton />
    </Wrapper>
  );
}

const Padding = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default App;
