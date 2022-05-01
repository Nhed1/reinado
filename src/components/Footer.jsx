import React from "react";
import styled from "styled-components";

export function Footer() {
  return (
    <FooterDiv>
      <p>Copyright © 2022 Pedro Coutinho | Todos os direitos reservados</p>
    </FooterDiv>
  );
}

const FooterDiv = styled.div`
  width: 100%;

  background-color: #212529;
  color: #e1e1e6;

  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  p {
    text-align: center;
    font-size: 12px;
  }
  height: 80px;
`;
