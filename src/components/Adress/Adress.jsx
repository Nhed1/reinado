import React from "react";
import styled from "styled-components";
import { AiFillCalendar } from "react-icons/ai";
import { Span } from "../Span";

export function Adress() {
  return (
    <CardAdress>
      <Title>
        <AiFillCalendar size="24px" />
        <strong>
          <Span>Cronograma</Span>
        </strong>
      </Title>
      <div>
        <ul>
          <li>22 de maio (Domingo)</li>
          <li>8h às 12h e 14h às 20h</li>
          <li>Coffee Break no final</li>
          <li>Local: Auditório Parnauto</li>
        </ul>
      </div>
    </CardAdress>
  );
}

const Title = styled.div`
  font-weight: 800;
  margin-left: 20px;
  font-size: 24px;
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const CardAdress = styled.div`
  margin: 10px 0;

  color: #e1e1e6;
  border: 1px solid #ff5d02;
  padding: 20px 5px;
  width: 90%;
  font-size: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  line-height: 30px;

  strong {
    margin-left: 10px;
  }
`;
