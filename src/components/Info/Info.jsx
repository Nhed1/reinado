import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import { BiTime } from "react-icons/bi";
import { BsCalendar } from "react-icons/bs";
import { IconContext } from "react-icons";

import { Button } from "../Button/Button";
import { FlexColumn } from "../FlexColumn";

export function Info({ reference, click }) {
  return (
    <IconContext.Provider value={{ color: "#ff5d02" }}>
      <InfoDiv>
        <InfoIconAndText>
          <GoLocation size="30px" />
          <p>Chapadinha</p>
        </InfoIconAndText>
        <InfoIconAndText>
          <BsCalendar size="30px" />
          <p>28 de maio</p>
        </InfoIconAndText>
        <InfoIconAndText>
          <BiTime size="30px" />
          <p>A partir de 8h </p>
        </InfoIconAndText>
      </InfoDiv>
      <FlexColumn>
        <Button click={click} ref={reference} />
      </FlexColumn>
    </IconContext.Provider>
  );
}

const InfoDiv = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  color: #e1e1e6;
  font-weight: 600;
`;

const InfoIconAndText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;
