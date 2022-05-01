import styled from "styled-components";

export function ButtonForm() {
  return (
    <ButtonStyle>
      <a href="https://my.forms.app/form/626d52cdb838185b9353b194">
        Tô Dentro!
      </a>
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
  background-color: #ff5d08;
  background-image: linear-gradient(to right, #daa520, #ff5d08) !important;

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
