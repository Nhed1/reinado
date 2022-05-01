import styled from "styled-components";
// import { Link } from "react-scroll";
// const ScrollLink = Scroll.ScrollLink;

export function Button({ click }) {
  return <ButtonStyle onClick={click}>Quero Participar</ButtonStyle>;
}

const ButtonStyle = styled.a`
  cursor: pointer;
  margin-top: 20px;

  font-style: none;
  border-radius: 10px;
  width: 180px;
  height: 50px;
  background-color: #ff5d08;
  background-image: linear-gradient(to right, #daa520, #ff5d08) !important;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;

  text-decoration: none;
  color: #e1e1e6;
  font-size: 15px;
  font-weight: 800;
`;
