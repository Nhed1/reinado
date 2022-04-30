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
          <p>Atraia mais clientes</p>
        </Slide>
        <Slide>
          <BsCheck2Circle size="22px" color="#ff5d02" />
          <p>Atraia mais clientes</p>
        </Slide>
        <Slide>
          <BsCheck2Circle size="22px" color="#ff5d02" />
          <p>Atraia mais clientes</p>
        </Slide>
      </SlideTrack>
    </Bar>
  );
}

const Bar = styled.div`
  display: flex;
  color: white;
  /* justify-content: space-between; */
  width: 100%;
  position: relative;
  margin: 20px 0;
  @keyframes scroll {
    0% {
      transform: translateX(200px);
    }
    100% {
      transform: translateX(calc(-100px * 4));
    }
  }
`;

const SlideTrack = styled.div`
  display: flex;
  width: calc(200px * 4);
  animation: scroll 10s linear infinite;
`;

const Slide = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
`;
