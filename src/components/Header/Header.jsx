import { Span } from "../Span";
import { HeaderDiv } from "./HeaderDiv";
import { Name, Details, Presentation } from "./HeaderDiv";
import { FlexColumn } from "../FlexColumn";
import logo from "../../assets/logo.png";

export function Header() {
  return (
    <HeaderDiv>
      <FlexColumn>
        <img src={logo} alt="Logo" />
        <Presentation>
          <Name>
            PEDRO<span>COUTINHO</span>
          </Name>
          <p>APRESENTA</p>
        </Presentation>
        <Details>
          O <Span> MAPA COMPLETO</Span> PARA VOCÊ SE DESTACAR NO INSTAGRAM E
          <Span> AUMENTAR</Span> OS RESULTADOS DO SEU NEGÓCIO
        </Details>
      </FlexColumn>
    </HeaderDiv>
  );
}
