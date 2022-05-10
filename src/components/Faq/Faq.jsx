import React from "react";
import FaqComponent from "./FaqComponent";
import styled from "styled-components";

export default function Faq() {
  return (
    <ContainerFaq>
      <h2>Dúvidas Frequentes</h2>
      <FaqComponent
        label="Posso levar acompanhante?"
        description="Não, apenas em caso de compra casadinha (em dupla)."
      />
      <FaqComponent
        label="Terá intervalo para o almoço?"
        description="Sim, sairemos para o almoço às 12h e retornaremos ao local do evento às 14h."
      />
      <FaqComponent
        label="Posso pedir reembolso após garantir minha vaga?"
        description="Não, após a realização do pagamento, não será possível pedir reembolso. Por isso, garanta a sua vaga somente quando tiver certeza da sua participação."
      />
      <FaqComponent
        label="Onde fica o local do treinamento?"
        description="Honda Parnauto Chapadinha - BR-222, 350 - A Novo, Chapadinha-MA"
      />
      <FaqComponent
        label="Quais as formas de pagamento disponíveis?"
        description="Você pode pagar por PIX ou no cartão de crédito em até 12x - via link de pagamento."
      />
    </ContainerFaq>
  );
}

const ContainerFaq = styled.div`
  margin-top: 40px;
  color: #e1e1e6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
`;
