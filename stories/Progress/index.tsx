import React from "react";
import styled from "styled-components";
import theme from "../theme";

interface ProgressProps {
  value: number;
  color?: string;
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

const ProgressBar = styled.div<ProgressProps>`
  height: 10px;
  width: ${({ value }) => value}%;
  display: block;
  border-radius: 5px;
  background-color: ${theme.color.alertInfoBg};
`;

const Label = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${theme.color.textGray};
  margin-left: 5px;
`;

export const Progress = ({ value, color }: ProgressProps) => {
  return (
    <ProgressContainer>
      <ProgressBackground>
        <ProgressBar value={value}></ProgressBar>
      </ProgressBackground>
      <Label>{value}%</Label>
    </ProgressContainer>
  );
};
