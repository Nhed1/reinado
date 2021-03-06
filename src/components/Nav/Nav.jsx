import styled from "styled-components";
import logo2 from "../../assets/logo2.png";
// import { Link } from "react-scroll";

export function Nav({ showLimitedSpace, click }) {
  return (
    <NavDiv>
      <div>
        <img src={logo2} alt="logo" />
        <ButtonLink onClick={click}>Quero Participar</ButtonLink>
      </div>
      {showLimitedSpace && (
        <LimitedSpace>
          <p>Vagas extremamente limitadas</p>
        </LimitedSpace>
      )}
    </NavDiv>
  );
}

const NavDiv = styled.div`
  position: sticky;
  top: 0;
  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  width: 100%;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;

  img {
    width: 100px;
    height: auto;
  }
`;

const ButtonLink = styled.a`
  cursor: pointer;

  font-style: none;
  border-radius: 10px;
  width: 120px;
  height: 35px;

  background-color: #ff5d08;
  background-image: linear-gradient(to right, #daa520, #ff5d08) !important;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  color: #e1e1e6;
  font-size: 14px;
  font-weight: 600;
`;

const LimitedSpace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ff5d08;
  height: 35px;
  p {
    font-weight: 800;
  }
`;
