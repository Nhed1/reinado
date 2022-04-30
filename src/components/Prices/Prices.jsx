import styled from "styled-components";
import { Span } from "../Span";
import { ButtonForm } from "../ButtonForm/ButtonForm";

export function Prices() {
  return (
    <PricesDiv id="prices">
      <img src="" alt="" />
      <p>
        Todo esse conteúdo <Span> valiosíssimo</Span>, por apenas:
      </p>

      <PriceNumber>
        <Strong>
          <span>R$</span> 250,00
        </Strong>
        <SpanPlan>INDIVIDUAL</SpanPlan>
      </PriceNumber>
      <PriceNumber>
        <strong>
          <span>R$</span> 450,00
        </strong>
        <span>DUPLA</span>
      </PriceNumber>
      <Payment>PIX ou em até 12x no cartão</Payment>
      {/* <Button text={`Tô Dentro!  `} /> */}
      <ButtonForm />
    </PricesDiv>
  );
}

const Payment = styled.span`
  margin-top: 16px;
  font-size: 14px;
  font-weight: 800;
`;

const PricesDiv = styled.div`
  margin-top: 10px;
  font-size: 20px;
  text-align: center;
  color: #e1e1e6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    margin: 10px 0;
  }
  p {
    font-weight: 800;
  }
`;

const PriceNumber = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 16px;

  strong {
    font-size: 28px;
    color: #ff5d02;
  }

  span {
    font-size: 16px;
  }
`;

const Strong = styled.strong`
  font-size: 50px !important;
  span {
    font-size: 32px;
  }
`;

const SpanPlan = styled.span`
  font-size: 20px !important;
`;
