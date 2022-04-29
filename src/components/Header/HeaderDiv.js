import styled from "styled-components";
export const HeaderDiv = styled.div`
  img {
    width: 95%;
    height: auto;
  }
`;

export const Name = styled.h1`
  color: #e1e1e6;
  span {
    color: #737373;
  }
`;

export const Presentation = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1,
  p {
    margin: 0;
  }

  p {
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: 200;
    color: #daa520;
  }
`;

export const Details = styled.p`
  color: #e1e1e6;
  text-align: center;
  font-size: 2rem;
  line-height: 2.5rem;
`;
