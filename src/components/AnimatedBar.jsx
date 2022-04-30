import React from "react";
import styled from "styled-components";
import { BsCheck2Circle } from "react-icons/bs";

export function AnimatedBar() {
  return (
    <Bar>
      <SlideTrack>
        <Slide>
          <BsCheck2Circle size="22px" color="#ff5d02" />
          <p>Atraia mais clientes</p>
        </Slide>
        <Slide>
          <BsCheck2Circle size="22px" color="#ff5d02" />
          <p>Aumente sua visibilidade</p>
        </Slide>
      </SlideTrack>
      <SlideTrack>
        <Slide>
          <BsCheck2Circle size="22px" color="#ff5d02" />
          <p>Escale suas vendas</p>
        </Slide>
        <Slide>
          <BsCheck2Circle size="22px" color="#ff5d02" />
          <p>Destaque-se da concorrência</p>
        </Slide>
      </SlideTrack>
    </Bar>
  );
}

const Bar = styled.div`
  display: flex;
  color: white;
  width: 100%;
  margin: 20px 0;
`;

const SlideTrack = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(200px * 4);
`;

const Slide = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
`;
