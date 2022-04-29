import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import { BiTime } from "react-icons/bi";
import { BsCalendar } from "react-icons/bs";
import { IconContext } from "react-icons";

import { Button } from "../Button/Button";
import { FlexColumn } from "../FlexColumn";

export function Info() {
  return (
    <IconContext.Provider value={{ color: "#daa520" }}>
      <InfoDiv>
        <InfoIconAndText>
          <GoLocation size="30px" />
          <p>Chapadinha</p>
        </InfoIconAndText>
        <InfoIconAndText>
          <BiTime size="30px" />
          <p>08HR as 12HR </p>
        </InfoIconAndText>
        <InfoIconAndText>
          <BsCalendar size="30px" />
          <p>15 de junho</p>
        </InfoIconAndText>
      </InfoDiv>
      <FlexColumn>
        <Button />
      </FlexColumn>
    </IconContext.Provider>
  );
}

const InfoDiv = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
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
