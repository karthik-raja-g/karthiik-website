import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useInterval from "../hooks/useInterval";
import { getRandomInt, getDayInfo, getDayText } from "../utils";

const GreetingText = styled.p`
  ${({ theme }) => theme.mixins.flexExpand};
  width: 270px;
  @media (max-width: 425px) {
    width: 240px;
  }
`;
const DayMessage = styled.span`
  font-style: italic;
  font-family: 'Russo One', sans-serif;
  /* font-family: 'Bangers', cursive; */
  /* letter-spacing: 2px; */
`;
const StaticText = styled.span`
  flex-shrink: 0;
`;
const DayGreeting = () => {
  const [message, setMessage] = useState("");
  const [reset, setReset] = useState(true);
  const [dayInfo, setDayInfo] = useState(null);

  useEffect(() => {
    const { dayName, dayNum } = getDayInfo();
    setDayInfo({ dayName, dayNum });
  }, []);

  useInterval(
    () => {
      if (!dayInfo?.dayNum) return;
      const texts = getDayText(dayInfo.dayNum);
      setMessage(texts[getRandomInt(0, texts.length - 1)]);
    },
    reset ? 1500 : 100
  );

  useInterval(() => setReset(!reset), 1500);

  return (
    <GreetingText>
      <StaticText>Have a</StaticText>{" "}
      <DayMessage>{message || "Great"}</DayMessage>{" "}
      <StaticText>{dayInfo?.dayName}</StaticText>
    </GreetingText>
  );
};

export default DayGreeting;
