import styled from "styled-components";
import { Button } from "../Button/Button";
import { Span } from "../Span";

export function Prices() {
  return (
    <PricesDiv>
      <img src="" alt="" />
      <p>
        Um dos treinamentos de marketing <Span>mais completos </Span>do brasil
        com um conteúdo definitavamente transformador para seu negócio.
      </p>

      <h3>POR APENAS:</h3>
      <PriceNumber>
        <strong>
          <span>R$</span> 200,00
        </strong>
        <span>INDIVIDUAL</span>
      </PriceNumber>
      <PriceNumber>
        <strong>
          <span>R$</span> 400,00
        </strong>
        <span>DUPLA</span>
      </PriceNumber>
      <Button text={`Tô Dentro!  🚀`} />
    </PricesDiv>
  );
}

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
