import React from "react";
import styled from "styled-components";
import theme from "../theme";
import { LightenDarkenColor } from "../util";

interface ProgressProps {
  value: number;
  color?: string;
  stripped?: boolean;
}

const ProgressContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const ProgressBackground = styled.div`
  height: 10px;
  width: -webkit-fill-available;
  display: block;
  border-radius: 5px;
  background-color: ${theme.color.disabledBg};
`;

const ProgressBar = styled.div<{
  value: number;
  color?: string;
  stripped?: boolean;
  strippedColor?: string;
}>`
  height: 10px;
  width: ${({ value }) => value}%;
  display: block;
  border-radius: 5px;
  background: ${({ color, stripped, strippedColor }) =>
    stripped
      ? `repeating-linear-gradient(45deg, ${strippedColor}, ${strippedColor} 10px, ${color} 10px, ${color} 20px)`
      : color};
`;

const Label = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${theme.color.textGray};
  margin-left: 5px;
`;

export const Progress = ({
  value,
  color = theme.color.alertInfoBg,
  stripped = false,
}: ProgressProps) => {
  let strippedColor = "";

  if (stripped) {
    strippedColor = LightenDarkenColor(color, 50);
  }

  return (
    <ProgressContainer>
      <ProgressBackground>
        <ProgressBar
          value={value}
          color={color}
          stripped={stripped}
          strippedColor={strippedColor}
        ></ProgressBar>
      </ProgressBackground>
      <Label>{value}%</Label>
    </ProgressContainer>
  );
};
