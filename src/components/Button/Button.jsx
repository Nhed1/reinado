import styled from "styled-components";
import { Link } from "react-scroll";

export function Button({ text }) {
  return (
    <ButtonStyle>
      <Link
        activeClass="active"
        to="prices"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        {(text && text) || "Quero Participar"}
      </Link>
    </ButtonStyle>
  );
}

const ButtonStyle = styled.div`
  cursor: pointer;
  margin-top: 20px;

  font-style: none;
  border-radius: 10px;
  width: 180px;
  height: 50px;

  background-image: linear-gradient(to right, #daa520, #ff5d08);

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  a {
    text-decoration: none;
    color: #e1e1e6;
    font-size: 15px;
    font-weight: 800;
  }
`;
