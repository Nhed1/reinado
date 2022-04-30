import styled from "styled-components";

export function Button() {
  return <ButtonStyle>Quero Participar</ButtonStyle>;
}

const ButtonStyle = styled.button`
  cursor: pointer;
  border: none;
  margin-top: 20px;
  border-radius: 10px;
  padding: 20px;
  width: 60%;
  height: 70px;
  font-size: 1.4rem;
  font-weight: 400;
  color: #e1e1e6;
  background-image: linear-gradient(to right, #daa520, #ff5d08);
`;
