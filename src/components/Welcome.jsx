import React, { useState } from "react";
import styled from "styled-components";
import useInterval from "../hooks/useInterval";
import { translations } from "../config";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const StyledWelcome = styled.p``;
const Welcome = () => {
  const [lang, setLang] = useState(0);
  const [reset, setReset] = useState(true);
  useInterval(
    () => setLang(translations[getRandomInt(0, translations.length)]),
    reset ? 1500 : 100
  );
  useInterval(() => setReset(!reset), 1500);
  return <StyledWelcome>{lang || "Welcome"}</StyledWelcome>;
};

export default Welcome;
