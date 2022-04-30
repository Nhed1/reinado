import styled from "styled-components";
import { Button } from "../Button/Button";
import logo2 from "../../assets/logo2.png";

export function Nav() {
  return (
    <NavDiv>
      <img src={logo2} alt="logo" />
      <ButtonLink>
        <a href="#">Quero Participar</a>
      </ButtonLink>
    </NavDiv>
  );
}

const NavDiv = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;

  img {
    width: 100px;
    height: auto;
  }
`;

const ButtonLink = styled.div`
  cursor: pointer;

  font-style: none;
  border-radius: 10px;
  width: 120px;
  height: 35px;

  background-image: linear-gradient(to right, #daa520, #ff5d08);

  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    color: #e1e1e6;
    font-size: 14px;
    font-weight: 600;
  }
`;