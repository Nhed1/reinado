import React from "react";
import profile from "../../assets/pedro.jpg";
import styled from "styled-components";

export function ProfileCard() {
  return (
    <ProfileColumn>
      <img src={profile} alt="Pedro Coutinho foto" />
      <h2>Pedro Coutinho</h2>
      <span>Especialista em Marketing Digital</span>
      <p>
        Estrategista, mentor e consultor, Pedro foi responsável por impulsionar
        diversos negócios pelo Brasil através de estratégias únicas e validadas.
        Passou anos nos bastidores, e agora vai entregar todo o ouro no
        treinamento Reinado Digital.
      </p>
    </ProfileColumn>
  );
}

const ProfileColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 10px;
  width: 90%;
  margin-top: 60px;

  border-radius: 10px;
  border: 1px solid #ff5d02;
  color: #e1e1e6;
  background-color: rgb(0, 0, 0);

  img {
    width: 180px;
    height: auto;
    border-radius: 50%;
    margin-top: 20px;
  }
  h2 {
    font-weight: 800;
  }
  span {
    margin-top: -16px;
    color: #ff5d02;
  }
  p {
    text-align: center;
    padding: 0 12px;
  }
`;
