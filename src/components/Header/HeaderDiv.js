import styled from "styled-components";
export const HeaderDiv = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;

export const Name = styled.h1`
  color: #e1e1e6;
  font-size: 0.8rem;

  span {
    color: #737373;
  }
`;

export const Presentation = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1,
  p {
    margin: 0;
  }

  p {
    /* margin-top: 10px; */
    font-size: 0.7rem;
    font-weight: 200;
  }
`;

export const Details = styled.p`
  color: #e1e1e6;
  text-align: center;
  font-size: 1.5rem;
  line-height: 2.5rem;
  margin-top: 10px;
`;
