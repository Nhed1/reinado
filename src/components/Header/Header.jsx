import { Span } from "../Span";
import { HeaderDiv } from "./HeaderDiv";
import { Name, Details, Presentation } from "./HeaderDiv";
import { FlexColumn } from "../FlexColumn";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";

export function Header() {
  return (
    <HeaderDiv>
      <FlexColumn>
        <Presentation>
          <Name>
            PEDRO<span>COUTINHO</span>
          </Name>
          <p>APRESENTA</p>
        </Presentation>
        <img src={logo2} alt="Logo" />

        <Details>
          O <Span> mapa completo</Span> para você se destacar no instagram e
          <Span> aumentar</Span> os resultados do seu negócio
        </Details>
      </FlexColumn>
    </HeaderDiv>
  );
}
