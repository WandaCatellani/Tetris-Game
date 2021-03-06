import React from "react";
import { StyledStartButton } from "./styles/StyledStartButton";

const StartButton = ({ callback }) => {
  return <StyledStartButton onClick={callback}>Star Game</StyledStartButton>;
};

export default StartButton;
