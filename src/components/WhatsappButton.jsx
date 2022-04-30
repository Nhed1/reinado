import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import styled from "styled-components";

export function WhatsappButton() {
  return (
    <FloatIcon>
      <a href=""></a>
      <AiOutlineWhatsApp className=".icon" />
    </FloatIcon>
  );
}

const FloatIcon = styled.div`
  cursor: pointer;
  position: fixed;
  width: 50px;
  height: 50px;

  bottom: 20px;
  right: 20px;

  display: grid;
  place-content: center;
  background-color: #25d366;
  border-radius: 50px;
  color: #fff;

  text-align: center;
  font-size: 30px;

  box-shadow: 1px 1px 3px #5f5c5c;
  z-index: 100;
`;
