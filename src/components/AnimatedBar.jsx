import React from "react";
import styled from "styled-components";
import { BsCheck2Circle } from "react-icons/bs";

export function AnimatedBar() {
  return (
    <Bar>
      <div>
        <BsCheck2Circle color="#ff5d02" />
        <p>Atraia mais clientes</p>
        <BsCheck2Circle color="#ff5d02" />
        <p>Atraia mais clientes</p>
      </div>
      <div>
        <BsCheck2Circle color="#ff5d02" />
        <p>Atraia mais clientes</p>
        <BsCheck2Circle color="#ff5d02" />
        <p>Atraia mais clientes</p>
      </div>
    </Bar>
  );
}

const Bar = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: space-between;
  width: 100%;
  /* animation: mymove 5s infinite; */
  position: relative;
  div {
    display: flex;
    align-items: center;
    p {
      margin-left: 10px;
    }
  }
  /* @keyframes mymove {
    0% {
      transform: translateX(50%);
    }
    100% {
      transform: translateX(-50%);
    }
  } */
`;
