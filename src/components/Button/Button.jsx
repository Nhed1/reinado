import styled from "styled-components";

export function Button() {
  return <ButtonStyle>Quero Participar</ButtonStyle>;
}

const ButtonStyle = styled.button`
  margin-top: 20px;
  border: none;
  border-radius: 10px;
  padding: 20px;
  width: 80%;
  font-size: 1.5rem;
  font-weight: bold;
  color: #e1e1e6;
  background-image: linear-gradient(to right, #fc5c7d, #daa520);
`;
