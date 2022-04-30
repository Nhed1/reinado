import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import styled from "styled-components";

export function WhatsappButton() {
  const url =
    "https://api.whatsapp.com/send?phone=5598984671479&text=Ol%C3%A1%2C%20tenho%20d%C3%BAvidas%20sobre%20o%20treinamento.";
  return (
    <FloatIcon href={url}>
      <AiOutlineWhatsApp className=".icon" />
    </FloatIcon>
  );
}

const FloatIcon = styled.a`
  cursor: pointer;
  position: fixed;

  bottom: 20px;
  right: 20px;

  display: grid;
  place-content: center;
  border-radius: 50px;

  font-size: 35px;

  z-index: 100;

  text-decoration: none;
  color: #25d366;
  text-align: center;
`;
