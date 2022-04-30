import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import styled from "styled-components";
import { Span } from "../Span";

export function FinalSentence() {
  return (
    <SentenceDiv>
      <ImQuotesLeft size="40px" />
      <p>
        Os resultados que você ainda não conquistou, é pelo conhecimento que
        ainda não adquiriu.
      </p>
      <span>
        Vamos juntos para o <Span> próximo nível?</Span>
      </span>
    </SentenceDiv>
  );
}

const SentenceDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  color: #e1e1e6;

  height: 300px;

  font-size: 22px;

  p {
    text-align: center;
  }

  span {
    text-align: center;
    font-weight: 800;
  }
`;
