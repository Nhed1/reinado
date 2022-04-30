import styled from "styled-components";
import { Span } from "../Span";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import image5 from "../../assets/5.png";
import image6 from "../../assets/6.png";
import image7 from "../../assets/7.png";

export function Main() {
  return (
    <MainStyles>
      <h1>O que você irá aprender no treinamento?</h1>
      <p>
        As <Span> 7 etapas </Span>para dominar o digital e construir um
        <Span> Instagram</Span> poderoso
      </p>
      <CardStyles>
        <h2>
          <Span>1.</Span> Primeira Arte
        </h2>
        <img src={image1} alt="" />
      </CardStyles>
      <CardStyles>
        <h2>
          <Span>2.</Span> Segunda Arte
        </h2>
        <img src={image2} alt="" />
      </CardStyles>
      <CardStyles>
        <h2>
          <Span>3.</Span> Terceira Arte
        </h2>
        <img src={image3} alt="" />
      </CardStyles>
      <CardStyles>
        <h2>
          <Span>4.</Span> Quarta Arte
        </h2>
        <img src={image4} alt="" />
      </CardStyles>
      <CardStyles>
        <h2>
          <Span>5.</Span> Quinta Arte
        </h2>
        <img src={image5} alt="" />
      </CardStyles>
      <CardStyles>
        <h2>
          <Span>6.</Span> Sexta Arte
        </h2>
        <img src={image6} alt="" />
      </CardStyles>
      <CardStyles>
        <h2>
          <Span>7.</Span> Sétima Arte
        </h2>
        <img src={image7} alt="" />
      </CardStyles>
    </MainStyles>
  );
}

const MainStyles = styled.div`
  color: #e1e1e6;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  h1 {
    font-weight: 600;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.2rem;
  }
  h1,
  p {
    text-align: center;
  }
`;
const CardStyles = styled.div`
  color: #e1e1e6;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  img {
    box-shadow: rgb(19, 18, 18) 0px 20px 30px -10px;

    width: 100%;
    height: auto;
  }
  h2 {
    font-weight: 900;
    font-size: 1.6rem;
  }
`;
