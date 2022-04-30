import styled from "styled-components";

export function Button() {
  return (
    <ButtonStyle>
      <a href="#">Quero Participar</a>
    </ButtonStyle>
  );
}

const ButtonStyle = styled.div`
  cursor: pointer;
  margin-top: 20px;

  font-style: none;
  border-radius: 10px;
  width: 140px;
  height: 40px;

  background-image: linear-gradient(to right, #daa520, #ff5d08);

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  a {
    text-decoration: none;
    color: #e1e1e6;
    font-size: 14px;
    font-weight: 600;
  }
`;
