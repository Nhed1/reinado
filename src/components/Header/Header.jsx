import { HeaderDiv } from "./HeaderDiv";
import { Name, Details, Presentation } from "./HeaderDiv";
import { FlexColumn } from "../FlexColumn";
import logo2 from "../../assets/logo2.png";
import styled from "styled-components";

export function Header() {
  return (
    <HeaderDiv>
      <FlexColumn>
        <Presentation>
          <Name>
            PEDRO<span>COUTINHO</span>
          </Name>
          <SpanLess>APRESENTA</SpanLess>
        </Presentation>
        <img src={logo2} alt="Logo" />

        <Details>
          O treinamento completo para você aumentar os resultados do seu negócio
          através do Marketing Digital
        </Details>
      </FlexColumn>
    </HeaderDiv>
  );
}

const SpanLess = styled.span`
  font-size: 0.7rem;
  color: #ff5d02;
`;
