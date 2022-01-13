import React, { useState } from "react";
import styled from "styled-components";
import useInterval from "../hooks/useInterval";
import { translations } from "../config";
import { getRandomInt } from "../utils";

const StyledWelcome = styled.p``;
const Welcome = () => {
  const [lang, setLang] = useState(0);
  const [reset, setReset] = useState(true);
  useInterval(
    () => setLang(translations[getRandomInt(0, translations.length - 1)]),
    reset ? 1500 : 100
  );
  useInterval(() => setReset(!reset), 1500);
  return <StyledWelcome>{lang || "Welcome"}</StyledWelcome>;
};

export default Welcome;
